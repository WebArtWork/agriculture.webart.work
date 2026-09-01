export type LandOwnershipStatus = 'owned' | 'leased' | 'for-sale' | 'for-lease';

export type LandStatus = 'active' | 'fallow' | 'archived' | 'unverified';

export type LandVisibility = 'public' | 'listing-only' | 'private' | 'shared-with-farm';

export interface Land {
	_id: string;
	name: string;
	country: string;
	region: string;
	areaHectares: number;
	coordinates: { lat: number; lng: number };
	cadastralId: string;
	soilType: string;
	ownershipStatus: LandOwnershipStatus;
	farmId: string | null;
	status: LandStatus;
	visibility: LandVisibility;
	currentCrop: string | null;
	pricePerHectare: number | null;
	currency: string | null;
	recordIds: string[];
	photos: string[];
}
