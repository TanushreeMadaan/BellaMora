export interface ProductVariant {
  color: string;
  colorSwatch: string;
  images: string[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  amazonLink: string;
  fabric: string;
  variants: ProductVariant[];
}