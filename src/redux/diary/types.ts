interface InitialState {
  products: Products[];
  exercises: Exercise[];
  caloriesBurned: number;
  caloriesConsumed: number;
  caloriesRemaining: number;
  sportsTime: number;
  isLoading: boolean;
  error: string;
}

interface Products {
  amount: number;
  calories: number;
  category: string;
  date: string;
  groupBloodNotAllowed: { [key: string]: boolean };
  product_ID: string;
  recommend: boolean;
  title: string;
  _id: string;
}

interface Exercises {
  ownerId: string;
  calories: number;
  date: string;
  time: number;
  exercise_ID: string;
  _id: string;
}
interface Exercise {
  bodyPart: string;
  burnedCalories: number;
  equipment: string;
  name: string;
  target: string;
  time: number;
  _id: string;
}
export type { InitialState, Products, Exercises, Exercise };