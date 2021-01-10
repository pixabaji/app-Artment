export interface ApartmentDetail {
  id: number;
  deposit?: boolean;
  depositAmnt: number;
  monthlyRate: number;
  perNightRate: number;
  utilities: Array<string>;
  host: host;
  imageUrls: Array<string>;
  availability: boolean;
  type: string;
  street: string;
  district: string;
  address: string;
  description: string;
  rating: number;
}

export interface host {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  rating: number;
}
