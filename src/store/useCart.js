import { create } from "zustand";

const saveStorage = (store) => {
  console.log(store);

  localStorage.setItem("cart", JSON.stringify(store));
};

export const useCart = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],

  add: (payload) => {
    set((state) => {
      const exist = state.cart.some((item) => item.id === payload.id);
      if (exist) {
        return { cart: state.cart };
      } else {
        const store = [
          ...state.cart,
          { ...payload, quantity: payload.quantity ? payload.quantity : 1 },
        ];
        saveStorage(store);
        return { cart: store };
      }
    });
  },

  remove: (payload) => {
    set((state) => {
      const store = state.cart.filter((item) => item.id !== payload.id);
      saveStorage(store);
      return { cart: store };
    });
  },

  increment: (payload) => {
    set((state) => {
      let store = state.cart.map((item) =>
        item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveStorage(store);
      return { cart: store };
    });
  },

  decrement: (payload) => {
    set((state) => {
      let store = state.cart.map((item) =>
        item.id === payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      saveStorage(store);
      return { cart: store };
    });
  },
    reset: () => {
    set((state) => {
      state.cart = []
    });
  },
}));
