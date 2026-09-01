import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LandRecord } from '../../land-record/land-record.interface';
import { LandRecordShortComponent } from '../../land-record/land-record-short/land-record-short.component';
import { Land } from '../land.interface';
import {
	LAND_OWNERSHIP_STATUS_LABELS,
	LAND_STATUS_LABELS,
	LAND_VISIBILITY_LABELS,
	cropEmoji,
} from '../land-labels';
import { CropRotationEntry, cropRotationForLand } from '../land-relations';

const DEFAULT_PHOTO = '/land-default.png';

@Component({
	selector: 'app-land-view',
	standalone: true,
	imports: [CommonModule, LandRecordShortComponent],
	templateUrl: './land-view.component.html',
	styleUrl: './land-view.component.scss',
})
export class LandViewComponent implements OnChanges {
	private readonly _router = inject(Router);
	private readonly _failedPhotos = new Set<string>();
	private readonly _records = signal<LandRecord[]>([]);

	@Input() entity!: Land;
	@Input() set records(value: LandRecord[]) {
		this._records.set(value ?? []);
	}

	readonly defaultPhoto = DEFAULT_PHOTO;
	readonly ownershipStatusLabels = LAND_OWNERSHIP_STATUS_LABELS;
	readonly statusLabels = LAND_STATUS_LABELS;
	readonly visibilityLabels = LAND_VISIBILITY_LABELS;
	readonly cropEmoji = cropEmoji;

	readonly cropRotation = computed<CropRotationEntry[]>(() => cropRotationForLand(this._records()));

	readonly historyRecords = computed<LandRecord[]>(() =>
		[...this._records()].sort((a, b) => b.eventDate.localeCompare(a.eventDate)),
	);

	get photos(): string[] {
		const uniquePhotos = [...new Set(this.entity.photos)];
		if (!uniquePhotos.length) return [DEFAULT_PHOTO];
		return uniquePhotos.every((photo) => this._failedPhotos.has(photo)) ? [DEFAULT_PHOTO] : uniquePhotos;
	}

	onPhotoError(event: Event, photo: string): void {
		this._failedPhotos.add(photo);
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['entity']) this._failedPhotos.clear();
	}

	viewRecord(record: LandRecord): void {
		this._router.navigate(['/land-record', record._id]);
	}
}
