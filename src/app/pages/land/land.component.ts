import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { LandViewComponent } from '../../features/land/land-view/land-view.component';
import { Land } from '../../features/land/land.interface';
import { lands } from '../../features/land/land.data';
import { LandRelations, relationsForLand } from '../../features/land/land-relations';

@Component({
	imports: [LandViewComponent, CardModule, TranslateDirective],
	templateUrl: './land.component.html',
	styleUrl: './land.component.scss',
})
export class LandComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Land | undefined>(() =>
		lands.find((item) => item._id === this._id()),
	);

	readonly relations = computed<LandRelations | null>(() => {
		const land = this.entity();
		return land ? relationsForLand(land) : null;
	});
}
