import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-landowners',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-landowners.component.html',
	styleUrl: './for-landowners.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForLandownersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Чи можу я виставити землю на продаж або в оренду без орендаря?',
			answer: 'Так, ви можете додати ділянку і позначити її статус як "Продається" або "Здається в оренду" ще до пошуку орендаря чи покупця.',
		},
		{
			question: 'Що бачить потенційний покупець чи орендар?',
			answer: 'Повну історію ділянки: сівозміну за роки, урожайність, аналізи ґрунту та обробки — замість голого оголошення "42 га в оренду".',
		},
		{
			question: 'Чи зникає історія ділянки після продажу?',
			answer: 'Ні. Історія прив’язана до самої землі, а не до власника чи орендаря, і залишається з ділянкою назавжди.',
		},
	];
}
