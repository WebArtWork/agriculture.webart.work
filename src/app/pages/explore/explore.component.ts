import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { MultiSelectModule } from '@wawjs/ngx-prime/multiselect';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { LandShortComponent } from '../../features/land/land-short/land-short.component';
import { LAND_OWNERSHIP_STATUS_OPTIONS } from '../../features/land/land-labels';
import { Land, LandOwnershipStatus } from '../../features/land/land.interface';
import { lands } from '../../features/land/land.data';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		LandShortComponent,
		FormsModule,
		RouterLink,
		ButtonModule,
		InputTextModule,
		SelectModule,
		MultiSelectModule,
		TranslateDirective,
	],
	templateUrl: './explore.component.html',
	styleUrl: './explore.component.scss',
})
export class ExploreComponent {
	private readonly _router = inject(Router);

	readonly ownershipStatusOptions = LAND_OWNERSHIP_STATUS_OPTIONS;

	readonly cropOptions: { label: string; value: string }[] = [
		...new Set(lands.map((item) => item.currentCrop).filter((c): c is string => !!c)),
	].map((crop) => ({ label: crop, value: crop }));

	readonly searchTerm = signal('');
	readonly selectedOwnershipStatuses = signal<LandOwnershipStatus[]>([]);
	readonly selectedCrop = signal<string | null>(null);

	readonly results = computed<Land[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();
		const statuses = this.selectedOwnershipStatuses();
		const crop = this.selectedCrop();

		return lands.filter((item) => {
			if (term) {
				const haystack = [item.name, item.region, item.country].filter(Boolean).join(' ').toLowerCase();
				if (!haystack.includes(term)) {
					return false;
				}
			}

			if (statuses.length && !statuses.includes(item.ownershipStatus)) {
				return false;
			}

			if (crop && item.currentCrop !== crop) {
				return false;
			}

			return true;
		});
	});

	view(item: Land): void {
		this._router.navigate(['/land', item._id]);
	}
}
