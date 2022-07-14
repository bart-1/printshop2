import create from "zustand";
import { persist } from "zustand/middleware";

type Product = {
    id: number;
    quantity: number;
};

type Store = {
    objectsBg: string;
    setObjectsBg: (newSet: string) => void;
    cart: Product[];
    addProductToCart: (product: Product) => void;
};
const useStore = create<Store>()((set) => ({
    objectsBg:
        "drop-shadow-lg rounded-md bg-[color:var(--window-background)] p-1 xs:p-4 sm:p-2 flex flex-wrap justify-center gap-x-3 w-full gap-y-2 text-sm text-[color:var(--text-body)]",
    setObjectsBg: (newSet) => set({ objectsBg: newSet }),
    cart: [],
    addProductToCart: (product) => {
        set((state) => ({
            cart: state.cart.concat(product),
        }));
    },
}));

export default useStore;
