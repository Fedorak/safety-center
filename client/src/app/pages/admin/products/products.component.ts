import { Component } from '@angular/core';
import {
	FormConfig,
	FormModules,
	FormService
} from 'src/app/modules/form/form.service';

import { ProductService, Product } from "src/app/core/services/product.service";
import { ButtonTypes } from 'src/app/modules/button/button.interface';

@Component({
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
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
			this._form.modal(this.form, (created: Product) => {
				this._ps.create(created);
			});
		},
		update: (doc: Product) => {
			this.form.components[0].set = doc.name;
			this.form.components[1].set = doc.description;
			this.form.components[2].label = 'Update';
			this._form.modal(this.form, (updated: Product) => {
				doc.name = updated.name;
				doc.description = updated.description;
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
		private _ps: ProductService
	) {}
}
