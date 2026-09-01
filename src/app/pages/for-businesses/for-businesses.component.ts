import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-businesses',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-businesses.component.html',
	styleUrl: './for-businesses.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForBusinessesPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Які бізнеси можуть підключитися?',
			answer: 'Постачальники, підрядники, орендодавці техніки, складські оператори, логістичні компанії та покупці врожаю — кожен з окремим профілем послуг.',
		},
		{
			question: 'Як фермери знаходять мій бізнес?',
			answer: 'Через маркетплейс і пошук за категорією послуг, а також напряму з профілю ферми чи ділянки, з якою ви вже працювали.',
		},
		{
			question: 'Чи можу я мати кілька ролей одразу?',
			answer: 'Так, один бізнес-профіль може одночасно бути постачальником, підрядником і власником техніки.',
		},
	];
}
