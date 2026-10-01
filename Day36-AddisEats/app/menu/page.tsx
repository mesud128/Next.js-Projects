"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import {
  mealPrice,
  mealsUrl,
} from "../../lib/api";

import { useCartStore } from "../../lib/store";

type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
};

type ApiResponse = {
  meals: Meal[] | null;
};

export default function MenuPage() {
  const [meals, setMeals] =
    useState<Meal[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(false);

  const searchParams =
    useSearchParams();

  const addItem =
    useCartStore(
      (state) => state.addItem
    );

  const selected =
    searchParams.get("category") ||
    "all";

  useEffect(() => {
    const controller =
      new AbortController();

    fetch(mealsUrl, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Failed to load menu"
          );
        }

        return response.json();
      })

      .then((data: ApiResponse) => {
        setMeals(data.meals || []);
        setLoading(false);
      })

      .catch((err: Error) => {
        if (
          err.name !== "AbortError"
        ) {
          setError(true);
          setLoading(false);
        }
      });

    return () =>
      controller.abort();
  }, []);

  const categories =
    useMemo(() => {
      return [
        ...new Set(
          meals
            .map(
              (meal) =>
                meal.strCategory
            )
            .filter(Boolean)
        ),
      ];
    }, [meals]);

  const filteredMeals =
    selected === "all"
      ? meals
      : meals.filter(
          (meal) =>
            meal.strCategory ===
            selected
        );

  function chooseCategory(
    category: string
  ) {
    const params =
      new URLSearchParams();

    if (category !== "all") {
      params.set(
        "category",
        category
      );
    }

    const query =
      params.toString();

    window.history.pushState(
      null,
      "",
      query
        ? `/menu?${query}`
        : "/menu"
    );

    window.dispatchEvent(
      new PopStateEvent("popstate")
    );
  }

  if (loading) {
    return (
      <p className="message">
        Loading menu...
      </p>
    );
  }

  if (error) {
    return (
      <section className="message">
        <h2>
          Could not load the menu
        </h2>

        <p>
          Please try again later.
        </p>
      </section>
    );
  }

  if (meals.length === 0) {
    return (
      <p className="message">
        No dishes found.
      </p>
    );
  }

  return (
    <section className="page">
      <p className="eyebrow">
        OUR MENU
      </p>

      <h2>
        Choose a dish
      </h2>

      <div className="categories">
        <button
          className={
            selected === "all"
              ? "active"
              : ""
          }
          onClick={() =>
            chooseCategory("all")
          }
        >
          All
        </button>

        {categories.map(
          (category) => (
            <button
              key={category}
              className={
                selected === category
                  ? "active"
                  : ""
              }
              onClick={() =>
                chooseCategory(
                  category
                )
              }
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="grid">
        {filteredMeals.map(
          (meal) => (
            <article
              className="card"
              key={meal.idMeal}
            >
              <img
                src={
                  meal.strMealThumb
                }
                alt={meal.strMeal}
              />

              <div className="card-body">
                <p className="category">
                  {meal.strCategory}
                </p>

                <h3>
                  {meal.strMeal}
                </h3>

                <p className="price">
                  {mealPrice(meal)} ETB
                </p>

                <div className="actions">
                  <Link
                    className="button secondary"
                    href={`/menu/${meal.idMeal}`}
                  >
                    View Dish
                  </Link>

                  <button
                    className="button"
                    onClick={() =>
                      addItem(meal)
                    }
                  >
                    Add
                  </button>
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}