// ----------------------------------------------------------------------
import { Member } from './user';

export type GroupStatus = 'popular' | 'new' | '';

export type Group = {
  id: string;
  cover: string;
  nfts: string[];
  members: Member[];
  name: string;
  status: GroupStatus;
  description: string;
  createdAt: Date | string | number;
};
export type GroupState = {
  isLoading: boolean;
  error: Error | string | null;
  groups: Group[];
  group: Group | null;
  sortBy: string | null;
};

export type GroupManager = {
  id: string;
  cover: string;
  name: string;
  description: string;
};
// export type CartItem = {
//   id: string;
//   name: string;
//   cover: string;
//   available: number;
//   price: number;
//   color: string;
//   size: string;
//   quantity: number;
//   subtotal: number;
// };

// export type BillingAddress = {
//   receiver: string;
//   phone: string;
//   fullAddress: string;
//   addressType: string;
//   isDefault: boolean;
// };

// export type ProductState = {
//   isLoading: boolean;
//   error: Error | string | null;
//   products: Product[];
//   product: Product | null;
//   sortBy: string | null;
//   filters: {
//     gender: string[];
//     category: string;
//     colors: string[];
//     priceRange: [number, number];
//     rating: string;
//   };
//   checkout: {
//     activeStep: number;
//     cart: CartItem[];
//     subtotal: number;
//     total: number;
//     discount: number;
//     shipping: number;
//     billing: BillingAddress | null;
//   };
// };

// export type ProductFilter = {
//   gender: string[];
//   category: string;
//   colors: string[];
//   priceRange: [number, number];
//   rating: string;
// };

// export type DeliveryOption = {
//   value: number;
//   title: string;
//   description: string;
// };

// export type PaymentOption = {
//   value: PaymentType;
//   title: string;
//   description: string;
//   icons: string[];
// };

// export type CardOption = {
//   value: string;
//   label: string;
// };
