import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            //RTK uses immer to create immutable states
            state.items.push(action.payload);
        },
        removeItem: (state,action) => {
            console.log('payload', action.payload)
                state.items.filter((item:any)=> item.card.info.name === action.payload.card.info.name
                    // if (item.card.info.name === action.payload.card.info.name ) {
                    //     console.log('removing')
                    // }
                 )
                 //state.items.pop();
        },
        clearCart: () => {
            return {items: []};
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;