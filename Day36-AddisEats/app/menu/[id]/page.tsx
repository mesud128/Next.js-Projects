import Link from "next/link";

import {
  mealPrice,
  mealUrl,
} from "../../../lib/api";

type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strInstructions: string;
};

type ApiResponse = {
  meals: Meal[] | null;
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DishPage({
  params,
}: Props) {
  const { id } = await params;

  const response =
    await fetch(mealUrl(id));

  if (!response.ok) {
    throw new Error(
      "Failed to load dish"
    );
  }

  const data: ApiResponse =
    await response.json();

  const meal =
    data.meals?.[0] || null;

  if (!meal) {
    return (
      <section className="message">
        <h2>
          Dish not found
        </h2>

        <Link
          className="button"
          href="/menu"
        >
          Back to Menu
        </Link>
      </section>
    );
  }

  return (
    <section className="detail page">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />

      <div>
        <p className="category">
          {meal.strCategory}
        </p>

        <h2>
          {meal.strMeal}
        </h2>

        <p className="price">
          {mealPrice(meal)} ETB
        </p>

        <p className="detail-text">
          {meal.strInstructions}
        </p>

        <Link
          className="button"
          href="/cart"
        >
          Go to Cart
        </Link>

        <Link
          className="button secondary"
          href="/menu"
        >
          Back to Menu
        </Link>
      </div>
    </section>
  );
}