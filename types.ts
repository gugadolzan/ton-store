export interface IProduct {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

export interface IProductsListProps {
  products: IProduct[];
  shoppingCart: IProduct[];
  setShoppingCart: (shoppingCart: IProduct[]) => void;
}
