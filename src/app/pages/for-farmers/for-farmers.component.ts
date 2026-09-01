import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-farmers',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-farmers.component.html',
	styleUrl: './for-farmers.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForFarmersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує користування Agriculture?',
			answer: 'Ведення полів, задач і базової історії ділянок безкоштовне для невеликих господарств.',
		},
		{
			question: 'Чи можу я почати лише з полів і задач, без усього іншого?',
			answer: 'Так. Невелике господарство може використовувати лише Землю, Поля та Задачі — решта модулів підключаються за потребою.',
		},
		{
			question: 'Що станеться з історією ділянки, якщо я орендую нову землю?',
			answer: 'Історія прив’язана до самої ділянки, а не до попереднього орендаря — ви одразу бачите сівозміну, урожайність і обробки за попередні роки.',
		},
	];
}
