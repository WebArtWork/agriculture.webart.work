import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-equipment-owners',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-equipment-owners.component.html',
	styleUrl: './for-equipment-owners.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForEquipmentOwnersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Що я можу здавати в оренду?',
			answer: 'Трактори, комбайни, дрони, зрошувальні системи та іншу техніку — окремо або разом з оператором.',
		},
		{
			question: 'Чи можу я запропонувати техніку разом з оператором?',
			answer: 'Так, це один з ключових сценаріїв — фермі не потрібно шукати техніку й оператора окремо.',
		},
		{
			question: 'Як я відстежую, де зараз моя техніка?',
			answer: 'Кожна одиниця техніки має профіль з місцем розташування, напрацюванням годин, обслуговуванням і поточною доступністю.',
		},
	];
}
