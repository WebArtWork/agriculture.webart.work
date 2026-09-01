import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { LandShortComponent } from '../../features/land/land-short/land-short.component';
import { LeafletMapComponent, LeafletMapMarker } from '../../shared/leaflet-map/leaflet-map.component';
import { Land } from '../../features/land/land.interface';
import { lands } from '../../features/land/land.data';

/**
 * Deviation note: `@wawjs/ngx-map`'s `MapComponent` wraps `@angular/google-maps`
 * and requires a Google Maps JS API key/loader. This repo has none configured,
 * so this page renders a real interactive map using `leaflet` + OpenStreetMap
 * tiles via the shared `LeafletMapComponent` wrapper, which needs no API key.
 */
@Component({
	imports: [ButtonModule, CardModule, LandShortComponent, LeafletMapComponent, TranslateDirective],
	templateUrl: './map.component.html',
	styleUrl: './map.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
	private readonly _router = inject(Router);

	readonly selected = signal<Land | null>(null);
	private readonly _focusCenter = signal<{ lat: number; lng: number } | null>(null);

	readonly landsWithCoords = computed(() => lands.filter((item) => item.coordinates));

	private readonly _defaultCenter = computed<{ lat: number; lng: number }>(() => {
		const withCoords = this.landsWithCoords();
		if (!withCoords.length) {
			return { lat: 49.0, lng: 32.0 }; // central Ukraine, as a sensible default
		}

		const lats = withCoords.map((item) => item.coordinates.lat);
		const lngs = withCoords.map((item) => item.coordinates.lng);
		return {
			lat: (Math.min(...lats) + Math.max(...lats)) / 2,
			lng: (Math.min(...lngs) + Math.max(...lngs)) / 2,
		};
	});

	readonly center = computed<{ lat: number; lng: number }>(() => this._focusCenter() ?? this._defaultCenter());

	readonly zoom = 6;

	readonly markers = computed<LeafletMapMarker[]>(() =>
		this.landsWithCoords().map((land) => ({
			id: land._id,
			position: land.coordinates,
			title: land.name,
		})),
	);

	onMarkerSelected(marker: LeafletMapMarker): void {
		const land = lands.find((item) => item._id === marker.id) ?? null;
		this.selected.set(land);
	}

	closePanel(): void {
		this.selected.set(null);
	}

	view(land: Land): void {
		this._router.navigate(['/land', land._id]);
	}
}
