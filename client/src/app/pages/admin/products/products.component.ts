import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import {
	FormConfig,
	FormModules,
	FormService
} from 'src/app/modules/form/form.service';

import { ProductService, Product } from "src/app/core/services/product.service";
import { ButtonTypes } from 'src/app/modules/button/button.interface';
import { FormGroup } from '@angular/forms';
import { CategoryService, Category } from "src/app/core/services/category.service";

@Component({
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
	columns = ['Назва', 'Категорія', 'Характеристика', 'Описання', 'Ціна'];


	@ViewChild('categoryRef', { static: true }) categoryRef: ElementRef;

	form: FormConfig;

	ngOnInit(): void {

		this.form = {
			components: [
				{
					module: FormModules.INPUT,
					placeholder: 'Назва',
					label: 'Назва',
					input: 'name',
					focused: true
				},

				{   module: FormModules.SELECT,
					customRef: this.categoryRef,
					placeholder: 'Категорія',
					label: 'Category',
					input: 'category'
				},

				{
					module: FormModules.INPUT,
					placeholder: 'Описання',
					label: 'Описання',
					input: 'description'
				},

				{
					module: FormModules.INPUT,
					placeholder: 'Ціна',
					label: 'Ціна',
					input: 'price'
				},

				{
					module: FormModules.INPUT,
					placeholder: 'Характеристика',
					label: 'Характеристика',
					input: 'characteristics'
				},

				{
					module: FormModules.BUTTON,
					type: ButtonTypes.PRIMARY
				}

			]

		};
	}

	setValue(form: FormGroup, input: string, value: any) {
		form.get(input as string)?.setValue(value);
	}


	config = {
		create: () => {
			this.form.components[0].set = '';
			this.form.components[1].set = '';
			this.form.components[2].set = '';
			this.form.components[3].set = '';
			this.form.components[4].set = '';
			this.form.components[5].label = 'Create';
			this._form.modal(this.form, (created: Product) => {
				console.log(created);
				
				console.log(this.form.components[4].set);

				this._ps.create(created);
			});
		},
		update: (doc: Product) => {
			this.form.components[0].set = doc.name;
			this.form.components[1].set = doc.description;
			this.form.components[2].label = doc.price;
			this.form.components[3].label = doc.characteristics;
			this.form.components[4].set = '';
			this.form.components[5].label = 'Update';
			this._form.modal(this.form, (updated: Product) => {
				console.log(this.form.components[4].set);

				doc.name = updated.name;
				doc.description = updated.description;
				doc.price = updated.price;
				doc.characteristics = updated.characteristics;
				this._ps.save(doc);
			});
		},
		delete: (doc: Product) => {
			this._ps.delete(doc);
		}
	};


	get rows(): Product[] {
		return this._ps.products;
	}

	constructor(
		private _form: FormService,
		private _ps: ProductService,
		public _cs: CategoryService
	) {


	}
}
