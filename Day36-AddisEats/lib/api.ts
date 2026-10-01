const API =
  "https://www.themealdb.com/api/json/v1/1";

export const mealsUrl =
  `${API}/search.php?s=a`;

export function mealUrl(id: string) {
  return `${API}/lookup.php?i=${id}`;
}

type Meal = {
  strCategory: string;
};

export function mealPrice(meal: Meal) {
  const prices: Record<string, number> = {
    Beef: 650,
    Chicken: 550,
    Seafood: 700,
    Lamb: 750,
    Vegetarian: 350,
    Dessert: 250,
  };

  return prices[meal.strCategory] || 450;
}