import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    notes: [],
    nbAvis: 0,
    noteGlobal: 0,
}

const avisSlice = createSlice({
    name : 'avis',
    initialState,
    reducers: {
        setAvis: (state, action) => {
            let noteGlobal = 0;

            state.notes.forEach(item => {
                noteGlobal += item.note
            });

            noteGlobal += action.payload.note;
            noteGlobal /= state.notes.length + 1;

            return {
               ...state,
               notes: [...state.notes, action.payload],
               nbAvis: state.nbAvis + 1,
               noteGlobal,
            }

        }
    }
});

export const {setAvis} = avisSlice.actions;
export default avisSlice.reducer;