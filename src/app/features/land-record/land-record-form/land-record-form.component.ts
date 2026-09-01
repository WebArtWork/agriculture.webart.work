import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { LandRecord } from '../land-record.interface';
import {
	LAND_RECORD_STATUS_OPTIONS,
	LAND_RECORD_TYPE_OPTIONS,
	LAND_RECORD_VISIBILITY_OPTIONS,
} from '../land-record-labels';

@Component({
	selector: 'app-land-record-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './land-record-form.component.html',
	styleUrl: './land-record-form.component.scss',
})
export class LandRecordFormComponent implements OnInit {
	@Input() entity?: LandRecord;

	readonly form: FormGroup;
	readonly recordTypeOptions = LAND_RECORD_TYPE_OPTIONS;
	readonly statusOptions = LAND_RECORD_STATUS_OPTIONS;
	readonly visibilityOptions = LAND_RECORD_VISIBILITY_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			season: [new Date().getFullYear(), Validators.required],
			recordType: ['field-operation', Validators.required],
			title: ['', Validators.required],
			description: ['', Validators.required],
			eventDate: ['', Validators.required],
			crop: [''],
			variety: [''],
			product: [''],
			quantity: [null],
			units: [''],
			cost: [null],
			currency: [null],
			yieldTonnesPerHa: [null],
			totalYieldTonnes: [null],
			soilPh: [null],
			status: ['planned', Validators.required],
			visibility: ['private', Validators.required],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
