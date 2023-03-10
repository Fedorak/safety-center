import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'lib-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
	public class: string = "";
	public size: string = "flex";
	public closable: boolean = true;
	public close: any;
	public onOpen: any;
	public onClickOutside: any;
	public timestart: any;
	public timeout: any;

	public showModal = false;
	constructor() {

	}
	ngOnInit() {
		if (typeof this.onClickOutside != 'function') {
			this.onClickOutside = this.close;
		}
		if (typeof this.onOpen == 'function') this.onOpen();
	}
	ngAfterViewInit() {
		setTimeout(() => {
			this.showModal = true;
		}, this.timestart || 0);
	}
}
