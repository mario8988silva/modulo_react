import { createSlice} from '@reduxjs/toolkit';

const messageSlice = createSlice({
    name: "[chat] messages", //identificador do slice;
    initialState: { //state inicial desta slice, desta feature da app;
        messages: [],
    },

    reducers:{ //action creators, definir actions, e de que forma o state deste slice é actualizado;
        addMessage: (state, action) => {
            state.messages.push(action.payload); // RTK, foi acrescentada uma biblioteca chamada IMMER;
        },

        deleteMessage: (state, action) => {
            state.messages = state.messages.filter( (msg, i) => i !== action.payload);
        },

        clearAllMessages: (state) => {
            state.messages = [];
        }    
    }
});

export const {addMessage, deleteMessage, clearAllMessages} = messageSlice.actions;
export default messageSlice.reducer;