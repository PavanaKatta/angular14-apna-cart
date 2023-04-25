export interface ICategoryType {
  id: number;
  name: string;
  subCategories: ISubCategories[];
}


export interface ISubCategories{
  id: number;
  name: string;
}


