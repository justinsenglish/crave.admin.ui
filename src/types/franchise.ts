export enum FranchiseStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export interface FranchiseList {
  id: string;
  name: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  status: FranchiseStatus;
  phoneNumber: string;
  email: string;
}
