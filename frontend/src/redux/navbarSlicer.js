import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    category: 'Category'
}

const navbarSlicer = createSlice({
    name: "nav",
    initialState,
    reducers: {
        changeNavbar(state, action){
            state.category = action.payload
        }
    }
})

export const {createSlice} = userSlicer.actions;
export default navbarSlicer.reducer;