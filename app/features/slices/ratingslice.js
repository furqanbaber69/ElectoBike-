import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rating = {}, // {Productid , rating}
};

const ratingSlice = ({
    name:'ratings'
    initialState,
    reducers:{
        setRating(state , action){
            const {productId , rating} = action.payload;
            state.rating[productId] = rating
        },
    },
})

export const {setRating} = ratingSlice.actions;
export default ratingSlice.reducer