import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-workers',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-workers.component.html',
	styleUrl: './for-workers.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForWorkersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Хто може зареєструватися як працівник?',
			answer: 'Агрономи, польові робітники, оператори техніки та інші профільні спеціалісти — конкретна професія вказується окремо в профілі.',
		},
		{
			question: 'Як я отримую завдання?',
			answer: 'Ферма призначає вам задачі, прив’язані до конкретного поля, культури й терміну — ви бачите все в одному списку.',
		},
		{
			question: 'Чи зберігається моя історія роботи?',
			answer: 'Так, виконані задачі й операції формують вашу робочу історію та підтверджений досвід на платформі.',
		},
	];
}
