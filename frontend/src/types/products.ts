


interface productInterface {
  category: string;
  description?: string;
  img: string;
  name: string;
  price: number;
  id: string;
}
export type product ={
  id:string
  product:productInterface
}
export type products = {
  title: string;
  type: string;
  products:productInterface[];
};
