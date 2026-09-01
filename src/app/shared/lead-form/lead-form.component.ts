import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, inject, input, signal, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TranslateService } from '@wawjs/ngx-translate';
import { ContactService } from '../../contact.service';

export type LeadFormKind =
	| 'farmer'
	| 'landowner'
	| 'worker'
	| 'business'
	| 'operator'
	| 'supplier'
	| 'equipment-owner'
	| 'buyer'
	| 'storage-operator'
	| 'logistics-provider'
	| 'agronomist';

const KIND_LABELS: Record<LeadFormKind, string> = {
	farmer: 'Заявка фермера',
	landowner: 'Заявка власника землі',
	worker: 'Заявка працівника',
	business: 'Заявка бізнесу',
	operator: 'Заявка оператора техніки',
	supplier: 'Заявка постачальника',
	'equipment-owner': 'Заявка власника техніки',
	buyer: 'Заявка покупця',
	'storage-operator': 'Заявка оператора зберігання',
	'logistics-provider': 'Заявка логістичного партнера',
	agronomist: 'Заявка агронома',
};

/** Inline lead-capture form used on the /for-* landing pages. Sends to the Agriculture Telegram contact channel. */
@Component({
	selector: 'app-lead-form',
	imports: [FormsModule, InputTextModule, TextareaModule, ButtonModule],
	templateUrl: './lead-form.component.html',
	styleUrl: './lead-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeadFormComponent {
	private readonly _contactService = inject(ContactService);
	readonly translateService = inject(TranslateService);

	readonly kind = input.required<LeadFormKind>();
	readonly submitLabel = input('');

	private readonly _nameInput = viewChild<ElementRef<HTMLInputElement>>('nameInput');

	protected readonly name = signal('');
	protected readonly contact = signal('');
	protected readonly message = signal('');
	protected readonly status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

	constructor() {
		afterNextRender(() => this._nameInput()?.nativeElement.focus());
	}

	protected async submit(form: NgForm): Promise<void> {
		if (form.invalid || this.status() === 'sending') return;

		this.status.set('sending');

		const lines = [
			`Agriculture lead: ${KIND_LABELS[this.kind()]}`,
			`Ім'я: ${this.name()}`,
			`Контакт: ${this.contact()}`,
		];
		if (this.message().trim()) lines.push('', this.message().trim());

		const success = await this._contactService.send(lines.join('\n'));

		if (!success) {
			this.status.set('error');
			return;
		}

		this.status.set('success');
		form.resetForm();
	}

	protected retry(): void {
		this.status.set('idle');
	}
}
