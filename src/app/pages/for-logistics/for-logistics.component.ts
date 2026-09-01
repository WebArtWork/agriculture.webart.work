import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-logistics',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-logistics.component.html',
	styleUrl: './for-logistics.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForLogisticsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Що саме я перевожу через Agriculture?',
			answer: 'Врожай між полем, складом і покупцем, а також техніку й постачання між фермами, складами та постачальниками.',
		},
		{
			question: 'Як я отримую запити на перевезення?',
			answer: 'Запити з’являються, коли угода на маркетплейсі чи переміщення партії на зберіганні потребують транспортування.',
		},
		{
			question: 'Чи можу я інтегруватися з окремою логістичною платформою WAW?',
			answer: 'Так, логістика Agriculture спроєктована так, щоб з часом підключатися до окремої логістичної платформи WAW.',
		},
	];
}
