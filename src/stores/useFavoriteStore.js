import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavoriteStore = create(
  persist(
    (set) => ({
      favoriteEvents: [],
      addFavorite: (event) =>
        set((state) => ({
          favoriteEvents: [...state.favoriteEvents, event],
        })),

      removeFavorite: (id) =>
        set((state) => ({
          favoriteEvents: state.favoriteEvents.filter((item) => item.id !== id),
        })),

      // 🔄 Vérifier si un événement est en favori
      isFavorite: (id) => (state) =>
        state.favoriteEvents.some((event) => event.id === id),
    }),
    {
      name: "favorite-storage", 
      getStorage: () => localStorage, 
    }
  )
);

export default useFavoriteStore;
