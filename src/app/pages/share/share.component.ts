import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { MessageService } from '@wawjs/ngx-prime/api';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { QrCodeComponent } from '../../shared/qr-code/qr-code.component';

@Component({
	selector: 'app-share',
	imports: [ButtonModule, QrCodeComponent, TranslateDirective],
	templateUrl: './share.component.html',
	styleUrl: './share.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharePageComponent {
	private readonly _messageService = inject(MessageService);

	readonly shareUrl = computed(() => 'https://agriculture.webart.work/sign');

	copyLink(): void {
		navigator.clipboard?.writeText(this.shareUrl()).then(() => {
			this._messageService.add({
				severity: 'success',
				detail: 'Посилання скопійовано',
			});
		});
	}
}
