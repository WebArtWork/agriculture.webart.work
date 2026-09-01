import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-storage',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-storage.component.html',
	styleUrl: './for-storage.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForStoragePageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Що я можу пропонувати як оператор зберігання?',
			answer: 'Місткості силосів і складів, приймання врожаю на зберігання, та рух партій між об’єктами.',
		},
		{
			question: 'Як фермери дізнаються про вільні місткості?',
			answer: 'Ваш об’єкт з’являється як варіант зберігання одразу після завершення збору врожаю на фермі.',
		},
		{
			question: 'Чи відстежується якість і власність партій на зберіганні?',
			answer: 'Так, кожна партія прив’язана до кількості, якості та власника, з історією руху між об’єктами.',
		},
	];
}
