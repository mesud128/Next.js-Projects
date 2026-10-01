import { create } from "zustand";
import { persist } from "zustand/middleware";

type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strInstructions?: string;
};

type CartState = {
  items: Meal[];
  addItem: (meal: Meal) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore =
  create<CartState>()(
    persist(
      (set) => ({
        items: [],

        addItem: (meal) =>
          set((state) => ({
            items: [
              ...state.items,
              meal,
            ],
          })),

        removeItem: (id) =>
          set((state) => ({
            items: state.items.filter(
              (item) =>
                item.idMeal !== id
            ),
          })),

        clearCart: () =>
          set({
            items: [],
          }),
      }),

      {
        name: "addis-eats-cart",
      }
    )
  );