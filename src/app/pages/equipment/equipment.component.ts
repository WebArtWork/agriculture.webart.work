import { Component, inject } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

interface EquipmentPlaceholder {
	icon: string;
	title: string;
	description: string;
}

@Component({
	templateUrl: './equipment.component.html',
	styleUrl: './equipment.component.scss',
	imports: [ButtonModule, CardModule, TranslateDirective],
})
export class EquipmentComponent {
	readonly translateService = inject(TranslateService);

	readonly items: EquipmentPlaceholder[] = [
		{
			icon: 'pi pi-truck',
			title: 'Трактори та комбайни',
			description: 'Оренда техніки з оператором або без нього.',
		},
		{
			icon: 'pi pi-cog',
			title: 'Ґрунтообробна техніка',
			description: 'Плуги, культиватори та сівалки поруч із вашою ділянкою.',
		},
		{
			icon: 'pi pi-send',
			title: 'Дрони та обприскувачі',
			description: 'Техніка для точного землеробства та захисту рослин.',
		},
	];
}
