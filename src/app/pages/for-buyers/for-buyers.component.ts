import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-buyers',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-buyers.component.html',
	styleUrl: './for-buyers.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForBuyersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Як розмістити попит на конкретну культуру?',
			answer: 'Опублікуйте вимогу — обсяг, мінімальну якість і термін постачання — і фермери зможуть відповісти прямими пропозиціями.',
		},
		{
			question: 'Чи можу я перевірити походження врожаю перед покупкою?',
			answer: 'Так, кожна угода пов’язана з конкретним полем і сезоном, тож ви бачите історію ділянки, з якої походить урожай.',
		},
		{
			question: 'Хто відповідає за доставку?',
			answer: 'Логістика узгоджується в межах угоди між фермою, складом і покупцем, з можливістю підключення окремого логістичного партнера.',
		},
	];
}
