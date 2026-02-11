import { create } from "zustand";

export type CartItem = {
  periodId: string;
  title: string;
  subtotal: number;
  vat: number;
  total: number;
};

type EnrollmentState = {
  enrolledPeriodIds: string[];
  cart: CartItem | null;
  setCart: (item: CartItem) => void;
  clearCart: () => void;
  confirmEnrollment: () => void;
};

export const useEnrollmentStore = create<EnrollmentState>((set, get) => ({
  enrolledPeriodIds: [],
  cart: null,
  setCart: (item) => set({ cart: item }),
  clearCart: () => set({ cart: null }),
  confirmEnrollment: () => {
    const current = get().cart;
    if (!current) {
      return;
    }
    set((state) => ({
      cart: null,
      enrolledPeriodIds: [...state.enrolledPeriodIds, current.periodId]
    }));
  }
}));
