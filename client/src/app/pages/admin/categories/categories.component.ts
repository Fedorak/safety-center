import { Component } from '@angular/core';
import {
	FormConfig,
	FormModules,
	FormService
} from 'src/app/modules/form/form.service';

import { CategoryService, Category } from "src/app/core/services/category.service";
import { ButtonTypes } from 'src/app/modules/button/button.interface';

@Component({
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

	
	columns = ['name', 'description'];

	form: FormConfig = {
		components: [
			{
				module: FormModules.INPUT,
				placeholder: 'fill name',
				label: 'Name',
				input: 'name',
				focused: true
			},
			{
				module: FormModules.INPUT,
				placeholder: 'fill description',
				label: 'Description',
				input: 'description'
			},
			{
				module: FormModules.BUTTON,
				type: ButtonTypes.PRIMARY
			}
		]
	};

	config = {
		create: () => {
			this.form.components[0].set = '';
			this.form.components[1].set = '';
			this.form.components[2].label = 'Create';
			this._form.modal(this.form, (created: Category) => {
				this._cs.create(created);
			});
		},
		update: (doc: Category) => {
			this.form.components[0].set = doc.name;
			this.form.components[1].set = doc.description;
			this.form.components[2].label = 'Update';
			this._form.modal(this.form, (updated: Category) => {
				doc.name = updated.name;
				doc.description = updated.description;
				this._cs.save(doc);
			});
		},
		delete: (doc: Category) => {
			this._cs.delete(doc);
		}
	};

	get rows(): Category[] {
		return this._cs.categorys;
	}

	constructor(
		private _form: FormService,
		private _cs: CategoryService
	) {}
}
