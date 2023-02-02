import { createSlice } from "@reduxjs/toolkit";

export const currentIdSlice = createSlice({
    name: 'idStorage',
    initialState: {
        currentId: null
    },
    reducers: {
        setId: (state, action) => {
            state.currentID = action.payload;
        }
    }
})

export const { setId } = currentIdSlice.actions;
export default currentIdSlice.reducer;