import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: { showModal: false },
    reducers : {
        toggleModal ( state, action ) {
            const { payload } = action;
            payload === "on" ? ( state.showModal = true ) : ( state.showModal = false );
            // if( payload === "on" ) {
            //     state.showModal = true;
            // } else {
            //     state.showModal = false;
            // }
        }
    }
})

export const modalActions = modalSlice.actions;
export default modalSlice;