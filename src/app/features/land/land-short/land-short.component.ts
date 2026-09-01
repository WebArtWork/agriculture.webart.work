import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Land } from '../land.interface';
import { LAND_OWNERSHIP_STATUS_LABELS } from '../land-labels';

const DEFAULT_PHOTO = '/land-default.png';

@Component({
	selector: 'app-land-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './land-short.component.html',
	styleUrl: './land-short.component.scss',
})
export class LandShortComponent {
	@Input() entity!: Land;

	readonly defaultPhoto = DEFAULT_PHOTO;
	readonly ownershipStatusLabels = LAND_OWNERSHIP_STATUS_LABELS;

	get photo(): string {
		return this.entity.photos[0] || DEFAULT_PHOTO;
	}

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}
}
