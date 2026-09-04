import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	templateUrl: './landing.component.html',
	imports: [RouterLink, ButtonModule, TranslateDirective],
})
export class LandingComponent {
	readonly roleLinks: { path: string; label: string }[] = [
		{ path: '/for-farmers', label: 'Для фермерів' },
		{ path: '/for-landowners', label: 'Для власників землі' },
		{ path: '/for-agronomists', label: 'Для агрономів' },
		{ path: '/for-workers', label: 'Для працівників' },
		{ path: '/for-businesses', label: 'Для агробізнесу' },
		{ path: '/for-operators', label: 'Для операторів техніки' },
		{ path: '/for-suppliers', label: 'Для постачальників' },
		{ path: '/for-equipment-owners', label: 'Для власників техніки' },
		{ path: '/for-buyers', label: 'Для покупців врожаю' },
		{ path: '/for-storage', label: 'Для операторів зберігання' },
		{ path: '/for-logistics', label: 'Для логістичних партнерів' },
	];
}
