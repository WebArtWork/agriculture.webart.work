import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Land } from '../land.interface';
import {
	LAND_OWNERSHIP_STATUS_OPTIONS,
	LAND_STATUS_OPTIONS,
	LAND_VISIBILITY_OPTIONS,
} from '../land-labels';

@Component({
	selector: 'app-land-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		TranslateDirective,
	],
	templateUrl: './land-form.component.html',
	styleUrl: './land-form.component.scss',
})
export class LandFormComponent implements OnInit {
	@Input() entity?: Land;

	readonly form: FormGroup;
	readonly ownershipStatusOptions = LAND_OWNERSHIP_STATUS_OPTIONS;
	readonly statusOptions = LAND_STATUS_OPTIONS;
	readonly visibilityOptions = LAND_VISIBILITY_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			name: ['', Validators.required],
			country: ['', Validators.required],
			region: ['', Validators.required],
			areaHectares: [null, Validators.required],
			cadastralId: [''],
			soilType: [''],
			ownershipStatus: ['owned', Validators.required],
			status: ['active', Validators.required],
			visibility: ['private', Validators.required],
			currentCrop: [''],
			pricePerHectare: [null],
			currency: [null],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
