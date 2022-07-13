import create from "zustand";
import {persist} from "zustand/middleware"

type Product = {
    id: number;
    quantity: number;
};

type Store = {
    objectsBg: string;
    setObjectsBg: (newSet: string) => void;
    cart: Product[] ;
    addProductToCart: (product: Product) => void;
};
const useStore = create<Store>()((set) => ({
    objectsBg:
        "drop-shadow-lg rounded-md bg-[color:var(--window-background)] p-1 xs:p-4 sm:p-2",
    setObjectsBg: (newSet) => set({ objectsBg: newSet }),
    cart: [],
    addProductToCart: (product) => {
        set((state) => ({
            cart: state.cart.concat(product)

        }));
    },
}));

export default useStore;
