import { Component, inject } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

interface JobPlaceholder {
	icon: string;
	title: string;
	description: string;
}

@Component({
	templateUrl: './jobs.component.html',
	styleUrl: './jobs.component.scss',
	imports: [ButtonModule, CardModule, TranslateDirective],
})
export class JobsComponent {
	readonly translateService = inject(TranslateService);

	readonly items: JobPlaceholder[] = [
		{
			icon: 'pi pi-user',
			title: 'Сезонні роботи',
			description: 'Посів, обробка та збір урожаю поруч із вашим містом.',
		},
		{
			icon: 'pi pi-sliders-h',
			title: 'Оператори техніки',
			description: 'Роботи для трактористів, комбайнерів та операторів дронів.',
		},
		{
			icon: 'pi pi-briefcase',
			title: 'Постійні позиції',
			description: 'Агрономи, механіки та керівники ділянок на фермах.',
		},
	];
}
