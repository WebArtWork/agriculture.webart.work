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
		{ path: '/for-farmers', label: 'Фермер' },
		{ path: '/for-landowners', label: 'Власник землі' },
		{ path: '/for-workers', label: 'Працівник' },
		{ path: '/for-businesses', label: 'Бізнес' },
		{ path: '/for-operators', label: 'Оператор техніки' },
		{ path: '/for-suppliers', label: 'Постачальник' },
		{ path: '/for-equipment-owners', label: 'Власник техніки' },
		{ path: '/for-buyers', label: 'Покупець' },
		{ path: '/for-storage', label: 'Оператор зберігання' },
		{ path: '/for-logistics', label: 'Логістичний партнер' },
		{ path: '/for-agronomists', label: 'Агроном' },
	];
}
