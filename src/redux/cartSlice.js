import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);

            if (!existingItem) {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            state.totalQuantity++;
            state.totalAmount += newItem.price;
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalAmount -= existingItem.totalPrice;
                state.items = state.items.filter((item) => item.id !== id);
            }
        },
        increaseQuantity(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price;
                state.totalQuantity++;
                state.totalAmount += existingItem.price;
            }
        },
        decreaseQuantity(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
                state.totalQuantity--;
                state.totalAmount -= existingItem.price;
            } else if (existingItem && existingItem.quantity === 1) {
                // Optional: Remove if quantity goes to 0
                state.items = state.items.filter((item) => item.id !== id);
                state.totalQuantity--;
                state.totalAmount -= existingItem.price;
            }
        },
        calculateTotals(state) {
            // Redux state is usually updated in each action, 
            // but this could be used for re-calculating if needed.
            let quantity = 0;
            let total = 0;
            state.items.forEach(item => {
                quantity += item.quantity;
                total += item.totalPrice;
            });
            state.totalQuantity = quantity;
            state.totalAmount = total;
        }
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
