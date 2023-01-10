import { Injectable } from '@angular/core';
import { MongoService, AlertService } from 'wacom';

export interface Category {
	_id: string;
	name: string;
	description: string;
}

@Injectable({
	providedIn: 'root'
})
export class CategoryService {
	categorys: Category[] = [];

	_categorys: any = {};

	new(): Category {
		return {
			_id: '',
			name: '',
			description: ''
		}
	}

	constructor(
		private mongo: MongoService,
		private alert: AlertService
	) {
		this.categorys = mongo.get('category', {}, (arr: any, obj: any) => {
			this._categorys = obj;
		});
	}

	create(
		category: Category = this.new(),
		callback = (created: Category) => {},
		text = 'category has been created.'
	) {
		if (category._id) {
			this.save(category);
		} else {
			this.mongo.create('category', category, (created: Category) => {
				callback(created);
				this.alert.show({ text });
			});
		}
	}

	doc(categoryId: string): Category {
		if(!this._categorys[categoryId]){
			this._categorys[categoryId] = this.mongo.fetch('category', {
				query: {
					_id: categoryId
				}
			});
		}
		return this._categorys[categoryId];
	}

	update(
		category: Category,
		callback = (created: Category) => {},
		text = 'category has been updated.'
	): void {
		this.mongo.afterWhile(category, ()=> {
			this.save(category, callback, text);
		});
	}

	save(
		category: Category,
		callback = (created: Category) => {},
		text = 'category has been updated.'
	): void {
		this.mongo.update('category', category, () => {
			if(text) this.alert.show({ text, unique: category });
		});
	}

	delete(
		category: Category,
		callback = (created: Category) => {},
		text = 'category has been deleted.'
	): void {
		this.mongo.delete('category', category, () => {
			if(text) this.alert.show({ text });
		});
	}
}
