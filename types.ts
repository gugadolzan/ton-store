export interface IProduct {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

export interface IProductsListProps {
  products: IProduct[];
}

export interface IShoppingCartContext {
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  shoppingCart: IShoppingCartItem[];
}

export interface IShoppingCartItem {
  product: IProduct;
  quantity: number;
}
