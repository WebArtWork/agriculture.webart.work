import { ChangeDetectionStrategy, Component, computed, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { SelectButtonModule } from '@wawjs/ngx-prime/selectbutton';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { LandFormComponent } from '../../features/land/land-form/land-form.component';
import { LandRecordFormComponent } from '../../features/land-record/land-record-form/land-record-form.component';

type EntityType = 'land' | 'land-record';

interface EntityOption {
	label: string;
	value: EntityType;
}

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		FormsModule,
		ButtonModule,
		CardModule,
		SelectButtonModule,
		LandFormComponent,
		LandRecordFormComponent,
		TranslateDirective,
	],
	templateUrl: './editor.component.html',
	styleUrl: './editor.component.scss',
})
export class EditorComponent {
	private readonly _messageService = inject(MessageService);

	readonly options: EntityOption[] = [
		{ label: 'Земельна ділянка', value: 'land' },
		{ label: 'Запис історії ділянки', value: 'land-record' },
	];

	readonly selectedType = signal<EntityType>('land');

	private readonly _landForm = viewChild(LandFormComponent);
	private readonly _landRecordForm = viewChild(LandRecordFormComponent);

	private readonly _activeForm = computed(() => {
		switch (this.selectedType()) {
			case 'land':
				return this._landForm()?.form;
			case 'land-record':
				return this._landRecordForm()?.form;
			default:
				return undefined;
		}
	});

	wValidate(): void {
		const form = this._activeForm();
		if (!form) {
			return;
		}

		form.markAllAsTouched();
		form.updateValueAndValidity();

		if (form.valid) {
			this._messageService.add({
				severity: 'success',
				summary: 'Форма валідна',
				detail: 'Дані пройшли валідацію. Це демо-режим — нічого не збережено.',
			});
		} else {
			this._messageService.add({
				severity: 'error',
				summary: 'Форма містить помилки',
				detail: 'Перевірте позначені поля та спробуйте ще раз.',
			});
		}
	}
}
