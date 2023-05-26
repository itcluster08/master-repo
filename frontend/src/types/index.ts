export interface IUser {
  id: number;
  password: string;
  role: string;
  username: string;
}

export interface IProduct {
  id: number;
  name: string;
  description?: string;
  price: number;
  image: string;
}
