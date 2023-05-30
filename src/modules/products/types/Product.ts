export  interface Product {
  title: string | undefined;
  price: number | undefined;
  description: string | undefined;
  category: string | undefined;
  image: string | undefined;
  rating: {
    rate: number | undefined;
    count: number | undefined;
  };
}
