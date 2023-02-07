import { createSlice } from "@reduxjs/toolkit";

export const entriesSlice = createSlice({
    name: 'entryStorage',
    initialState: {
        entries: [
            // {
            //     id: 1,
            //     content: "To die, the whose to sling a sleep to oth and more; for in the have himself mind may consient we end scove, or when we end them? To die, this make when hear to die, by of the law's contumely, the with when we know not thous make consience doth their current makes, puzzles, puzzles, puzzlesh is nobler be with whips against of? To be, to, 'tis not the unwortal comething a comether ressor's the name oppresolence dreath, the rub; fortune, ther deat pith when heart-ache question dels beart-ache spurns,",
            //     date: '1/30/2023',
            //     lastEdited: '1/30/2023',
            //     emotion: 1
            // },
            // {
            //     id: 2,
            //     content: "Towhisures hean? use, f th, ob; le t f bles is ther thiealalar t ome h hure alst himainorpuf rdrrno micheimos themeie ff? r ags tare, puf un: w t t meatheand wie tos d we rerthy",
            //     date: '3/30/2023',
            //     lastEdited: '3/30/2023',
            //     emotion: 5
            // },
            // {
            //     id: 3,
            //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a leo at lacus commodo pellentesque at congue metus. Proin tincidunt lectus a nisi vestibulum vulputate. Nam eu congue leo, quis feugiat dolor. Integer ac turpis non purus vestibulum laoreet quis et elit. Phasellus in sagittis ipsum. Praesent ante justo, porttitor et risus id, finibus condimentum turpis. Nullam eget laoreet felis. Morbi consequat lobortis leo.",
            //     date: '10/30/2023',
            //     lastEdited: '10/30/2023',
            //     emotion: 3
            // }

        ]
    },
    reducers: {
        add: (state, action) => {
            state.entries.unshift(action.payload);
        },
        remove: (state, action) => {
            const indexToRemove = state.entries.findIndex(obj => obj.id === action.payload);
            state.entries.splice(indexToRemove, 1);
        },
        edit: (state, action) => {
            const indexToEdit = state.entries.findIndex(obj => obj.id === action.payload.entryId);
            state.entries.splice(indexToEdit, 1, action.payload.newEntry);
            console.log("pppppppppp", action.payload, indexToEdit);
        }
    }
})

export const { add, remove, edit } = entriesSlice.actions;
export default entriesSlice.reducer;