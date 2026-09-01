import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LandRecord } from '../land-record.interface';
import {
	LAND_RECORD_STATUS_LABELS,
	LAND_RECORD_TYPE_LABELS,
	LAND_RECORD_VISIBILITY_LABELS,
} from '../land-record-labels';
import { Land } from '../../land/land.interface';
import { LandShortComponent } from '../../land/land-short/land-short.component';

@Component({
	selector: 'app-land-record-view',
	standalone: true,
	imports: [CommonModule, LandShortComponent],
	templateUrl: './land-record-view.component.html',
	styleUrl: './land-record-view.component.scss',
})
export class LandRecordViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: LandRecord;
	@Input() land?: Land | null;

	readonly typeLabels = LAND_RECORD_TYPE_LABELS;
	readonly statusLabels = LAND_RECORD_STATUS_LABELS;
	readonly visibilityLabels = LAND_RECORD_VISIBILITY_LABELS;

	viewLand(): void {
		if (this.land) this._router.navigate(['/land', this.land._id]);
	}
}
