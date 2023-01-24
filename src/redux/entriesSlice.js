import { createSlice } from "@reduxjs/toolkit";

export const entriesSlice = createSlice({
    name: 'entryStorage',
    initialState: {
        entries: []
    },
    reducers: {
        add: (state, action) => {
            state.entries.push(action.payload);
        },
        remove: (state, action) => {
            state.entries.splice(action.payload);
        },
        edit: (state, action) => {
            state.entries.push(action.payload);
        }
    }
})

export const { add, remove, edit } = entriesSlice.actions;
export default entriesSlice.reducer;