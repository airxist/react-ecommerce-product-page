import { createSlice } from "@reduxjs/toolkit";

const picSlice = createSlice({
    name: "pictogram",
    initialState: { index: 0 },
    reducers: {
        setIndex( state, action ) {
            state.index = action.payload;
        },
        nextPic( state, action ) {
            state.index < action.payload ? ( ++state.index ) : (state.index = 0);
        },
        prevPic( state, action ) {
            state.index > 0 ? ( --state.index ) : ( state.index = action.payload );
        }
    }
})

export const picActions = picSlice.actions;
export default picSlice;