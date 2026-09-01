import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-suppliers',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-suppliers.component.html',
	styleUrl: './for-suppliers.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForSuppliersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Що я можу продавати через Agriculture?',
			answer: 'Насіння, добрива, засоби захисту рослин, паливо, запчастини та техніку — все, що потрібно фермі для роботи.',
		},
		{
			question: 'Як фермери дізнаються про мої товари?',
			answer: 'Ферми бачать постачальників при плануванні польових операцій — саме тоді, коли їм потрібні конкретні добрива чи засоби захисту.',
		},
		{
			question: 'Чи можу я відстежувати, що саме куплено і на яке поле?',
			answer: 'Так, кожна поставка може бути пов’язана із записом внесення на конкретному полі в історії ділянки.',
		},
	];
}
