import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    notes: [],
    currentAvis:{},
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

        },
        setCurrentAvis: (state, action) => {
            console.log(action)
            return {
                ...state,
                currentAvis: action.payload
            
            }
            
        }
    }
});

export const {setAvis, setCurrentAvis} = avisSlice.actions;
export default avisSlice.reducer;