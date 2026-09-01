import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { LandShortComponent } from '../../features/land/land-short/land-short.component';
import { Land } from '../../features/land/land.interface';
import { lands } from '../../features/land/land.data';

@Component({
	imports: [LandShortComponent, FormsModule, InputTextModule, TranslateDirective],
	templateUrl: './lands.component.html',
	styleUrl: './lands.component.scss',
})
export class LandsComponent {
	private readonly _router = inject(Router);
	readonly translateService = inject(TranslateService);

	readonly searchTerm = signal('');

	readonly results = computed<Land[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();

		if (!term) return lands;

		return lands.filter((item) => {
			const haystack = [item.name, item.region, item.country, item.currentCrop]
				.filter(Boolean)
				.join(' ')
				.toLowerCase();
			return haystack.includes(term);
		});
	});

	view(item: Land): void {
		this._router.navigate(['/land', item._id]);
	}
}
