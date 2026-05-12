export interface Recipe {
  id: number;
  title: string;
  category: string;
  time: number;
  servings: number;
  ingredients: string[];
  description: string;
  image: string;
}
