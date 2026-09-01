import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-agronomists',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-agronomists.component.html',
	styleUrl: './for-agronomists.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForAgronomistsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Чим агроном на платформі відрізняється від фермера?',
			answer: 'Фермер керує господарством загалом, а агроном планує сівозміну, обробку ґрунту, живлення й захист рослин та відповідає за здоров’я конкретних полів — часто для кількох господарств одразу.',
		},
		{
			question: 'Чи бачу я історію ділянки перед тим, як давати рекомендації?',
			answer: 'Так. Перед плануванням ви відкриваєте цифровий паспорт ділянки — сівозміну, добрива, обробки та урожайність за попередні роки — і будуєте рекомендації на цих даних.',
		},
		{
			question: 'Чи можу я працювати одночасно з кількома господарствами?',
			answer: 'Так. Ви підключаєтесь до полів різних господарств і ведете планування й моніторинг для кожного окремо в одному акаунті.',
		},
	];
}
