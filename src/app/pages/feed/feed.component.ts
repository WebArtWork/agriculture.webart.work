import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { LAND_OWNERSHIP_STATUS_LABELS } from '../../features/land/land-labels';
import { Land } from '../../features/land/land.interface';
import { lands } from '../../features/land/land.data';

type FeedAction = 'favourite' | 'ignore';

const DEFAULT_PHOTO = '/land-default.png';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ButtonModule, TranslateDirective],
	templateUrl: './feed.component.html',
	styleUrl: './feed.component.scss',
})
export class FeedComponent {
	private readonly _router = inject(Router);

	readonly ownershipStatusLabels = LAND_OWNERSHIP_STATUS_LABELS;

	readonly favouritedIds = signal<Set<string>>(this._restore('favourited'));
	readonly ignoredIds = signal<Set<string>>(this._restore('ignored'));

	readonly feed = computed<Land[]>(() => {
		const favourited = this.favouritedIds();
		const ignored = this.ignoredIds();
		return lands.filter((item) => !favourited.has(item._id) && !ignored.has(item._id));
	});

	view(item: Land): void {
		this._router.navigate(['/land', item._id]);
	}

	act(item: Land, action: FeedAction): void {
		if (action === 'favourite') {
			this._update('favourited', this.favouritedIds, item._id);
		} else {
			this._update('ignored', this.ignoredIds, item._id);
		}
	}

	photo(item: Land): string {
		return item.photos[0] || DEFAULT_PHOTO;
	}

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}

	private _update(
		key: 'favourited' | 'ignored',
		state: ReturnType<typeof signal<Set<string>>>,
		id: string,
	): void {
		const next = new Set(state());
		next.add(id);
		state.set(next);
		this._persist(key, next);
	}

	private _restore(key: 'favourited' | 'ignored'): Set<string> {
		try {
			const raw = localStorage.getItem(`feed:${key}`);
			return raw ? new Set<string>(JSON.parse(raw)) : new Set<string>();
		} catch {
			return new Set<string>();
		}
	}

	private _persist(key: 'favourited' | 'ignored', value: Set<string>): void {
		try {
			localStorage.setItem(`feed:${key}`, JSON.stringify([...value]));
		} catch {
			// ignore storage failures (e.g. private browsing)
		}
	}
}
