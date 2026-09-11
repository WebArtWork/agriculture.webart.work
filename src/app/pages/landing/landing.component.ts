import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollModule } from '@wawjs/ngx-prime/animateonscroll';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

interface LandingFeature {
	number: string;
	icon: string;
	title: string;
	description: string;
	linkLabel: string;
	route: string;
}

interface LandingHistoryEvent {
	date: string;
	icon: string;
	title: string;
	description: string;
	tag: string;
}

interface LandingAudience {
	number: string;
	route: string;
	title: string;
	description: string;
}

@Component({
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	imports: [
		RouterLink,
		ButtonModule,
		CardModule,
		TranslateDirective,
		AnimateOnScrollModule,
	],
})
export class LandingComponent {
	readonly translateService = inject(TranslateService);

	readonly historyEvents: LandingHistoryEvent[] = [
		{
			date: 'Травень 2026',
			icon: 'pi pi-sun',
			title: 'Посів ярої пшениці',
			description: 'Ділянка «Південне поле», 42 га',
			tag: 'Посів',
		},
		{
			date: 'Липень 2026',
			icon: 'pi pi-shield',
			title: 'Обробка від шкідників',
			description: 'Внесення ЗЗР дроном-обприскувачем',
			tag: 'Обробка',
		},
		{
			date: 'Вересень 2026',
			icon: 'pi pi-box',
			title: 'Збір урожаю',
			description: 'Урожайність 5.8 т/га, продано напряму покупцю',
			tag: 'Урожай',
		},
	];

	readonly features: LandingFeature[] = [
		{
			number: '01',
			icon: 'pi pi-map',
			title: 'Земельні ділянки',
			description:
				'Цифровий паспорт кожної ділянки: сівозміна, обробки та врожайність.',
			linkLabel: 'Переглянути ділянки',
			route: '/lands',
		},
		{
			number: '02',
			icon: 'pi pi-wrench',
			title: 'Техніка',
			description: 'Оренда техніки з оператором або без нього під конкретну роботу.',
			linkLabel: 'Переглянути техніку',
			route: '/equipment',
		},
		{
			number: '03',
			icon: 'pi pi-briefcase',
			title: 'Робота',
			description: 'Сезонні та постійні вакансії на фермах поруч із вами.',
			linkLabel: 'Переглянути вакансії',
			route: '/jobs',
		},
		{
			number: '04',
			icon: 'pi pi-images',
			title: 'Стрічка',
			description: 'Останні події з ділянок, техніки та роботи в одній стрічці.',
			linkLabel: 'Переглянути стрічку',
			route: '/feed',
		},
	];

	readonly audiences: LandingAudience[] = [
		{
			number: '01',
			route: '/for-farmers',
			title: 'Фермерам',
			description: 'Керуйте землею, роботою, технікою та продажами врожаю.',
		},
		{
			number: '02',
			route: '/for-landowners',
			title: 'Власникам землі',
			description: 'Продавайте або здавайте землю з доказом її повної історії.',
		},
		{
			number: '03',
			route: '/for-buyers',
			title: 'Покупцям врожаю',
			description: 'Купуйте врожай напряму у ферм через маркетплейс.',
		},
		{
			number: '04',
			route: '/for-equipment-owners',
			title: 'Власникам техніки',
			description: 'Здавайте техніку в оренду окремо або разом з оператором.',
		},
		{
			number: '05',
			route: '/for-suppliers',
			title: 'Постачальникам',
			description: 'Продавайте насіння, добрива, ЗЗР і паливо напряму фермам.',
		},
	];
}
