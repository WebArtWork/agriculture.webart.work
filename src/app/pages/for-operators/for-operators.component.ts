import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-operators',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-operators.component.html',
	styleUrl: './for-operators.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForOperatorsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Чим оператор техніки відрізняється від звичайного працівника?',
			answer: 'Профіль оператора прив’язаний до конкретної техніки (трактор, комбайн, дрон тощо) і до виконаних на ній операцій.',
		},
		{
			question: 'Чи можу я працювати з технікою, яка мені не належить?',
			answer: 'Так, власники техніки можуть пропонувати оренду разом з оператором — саме такою людиною можете бути ви.',
		},
		{
			question: 'Як підтверджується мій досвід?',
			answer: 'Кожна завершена операція — оброблена площа, витрачений час, результат — залишається у вашій робочій історії.',
		},
	];
}
