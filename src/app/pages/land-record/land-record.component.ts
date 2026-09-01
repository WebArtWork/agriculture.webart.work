import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { LandRecordViewComponent } from '../../features/land-record/land-record-view/land-record-view.component';
import { LandRecord } from '../../features/land-record/land-record.interface';
import { landRecords } from '../../features/land-record/land-record.data';
import { Land } from '../../features/land/land.interface';
import { lands } from '../../features/land/land.data';

const _landById = new Map<string, Land>(lands.map((l) => [l._id, l]));

@Component({
	imports: [LandRecordViewComponent, CardModule, TranslateDirective],
	templateUrl: './land-record.component.html',
	styleUrl: './land-record.component.scss',
})
export class LandRecordComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<LandRecord | undefined>(() =>
		landRecords.find((item) => item._id === this._id()),
	);

	readonly land = computed<Land | null>(() => {
		const record = this.entity();
		return record ? (_landById.get(record.landId) ?? null) : null;
	});
}
