import { create } from "zustand";
import { File } from "../data";
import { Item } from "../classes/Item";
import { normalizeData } from "../utils/normalizeData";
import { getData } from "../api/getData";

type FileId = File["id"];

interface AppStore {
  data: File[];
  files: { [key: number]: Item };
  favorites: FileId[];
  isLoading: boolean;
  getFiles: () => void;
  toggleFavorite: (id: FileId) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  data: [],
  files: [],
  favorites: [],
  isLoading: true,

  getFiles: async () => {
    set({ isLoading: true });

    const data = await getData();

    set({
      data,
      files: normalizeData(data),
      favorites: data.filter((file) => file.isFavorite).map((file) => file.id),
      isLoading: false,
    });
  },

  toggleFavorite: (id) => {
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter((favorite) => favorite !== id)
        : [...state.favorites, id],
    }));
    set((state) => ({
      data: state.data.map((file) =>
        file.id === id ? { ...file, isFavorite: !file.isFavorite } : file
      ),
    }));
    set((state) => ({
      files: normalizeData(state.data),
    }));
  },
}));
