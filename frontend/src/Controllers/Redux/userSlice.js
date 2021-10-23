import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: "user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"John Smith"})
            state.push({name:"Ben Johnson"})
        }
    }

})

export default slice.reducer;

export const{getUser} = slice.actions;