export type product = {
  title: string;
  type: string;
  products: {
    category: string;
    description?: string;
    img: string;
    name: string;
    price: number;
    id: string;
  }[];
};
