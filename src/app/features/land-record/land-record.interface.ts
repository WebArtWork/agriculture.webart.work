export type LandRecordType =
	| 'planting'
	| 'fertilization'
	| 'chemical-treatment'
	| 'field-operation'
	| 'weather-event'
	| 'soil-test'
	| 'problem'
	| 'harvest'
	| 'ownership-change'
	| 'document'
	| 'note';

export type LandRecordStatus = 'planned' | 'in-progress' | 'completed' | 'cancelled';

export type LandRecordVisibility =
	| 'public'
	| 'public-summary-private-details'
	| 'private'
	| 'shared-with-buyer-lessee';

export interface LandRecordAttachment {
	type: 'photo' | 'drone-imagery' | 'document' | 'lab-report';
	url: string;
}

/**
 * A single entry in a land plot's agricultural history — its "digital
 * passport". Attached to the land itself (`landId`), not the farm
 * currently operating it, so the history survives a change of owner or
 * tenant.
 */
export interface LandRecord {
	_id: string;
	landId: string;
	season: number;
	recordType: LandRecordType;
	title: string;
	description: string;
	eventDate: string;
	creationDate: string;
	crop: string | null;
	variety: string | null;
	product: string | null;
	quantity: number | null;
	units: string | null;
	cost: number | null;
	currency: string | null;
	yieldTonnesPerHa: number | null;
	totalYieldTonnes: number | null;
	soilPh: number | null;
	status: LandRecordStatus;
	attachments: LandRecordAttachment[];
	visibility: LandRecordVisibility;
	verified: boolean;
}
