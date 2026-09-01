import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LandRecord } from '../land-record.interface';
import { LAND_RECORD_TYPE_LABELS } from '../land-record-labels';

@Component({
	selector: 'app-land-record-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './land-record-short.component.html',
	styleUrl: './land-record-short.component.scss',
})
export class LandRecordShortComponent {
	@Input() entity!: LandRecord;

	readonly typeLabels = LAND_RECORD_TYPE_LABELS;
}
