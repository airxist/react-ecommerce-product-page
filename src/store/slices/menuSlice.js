import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: { showMenu: false },
    reducers: {
        toggleOn : ( state, action ) => { state.showMenu = true},
        toggleOff: ( state, action ) => { state.showMenu = false; console.log(state) }
    }
})

export const menuActions = menuSlice.actions;
export default menuSlice;