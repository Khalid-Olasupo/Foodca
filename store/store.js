import create from "zustand"

export const useStore = create(
    (set) => ({
        cart: {
            foods: []
        },

        addFood: (data) =>
        set((state) => ({
            cart:  {
                foods: [...state.cart.foods, data]
            }
        })),

        removeItem: (index) =>
        set((state) => ({
            cart: {
                foods: state.cart.foods.filter((_,id) => id != index )
            }
        })),

        resetCart: () => 
        set(()=>({
            cart: {
                foods: []
            }
        }))
    })
)