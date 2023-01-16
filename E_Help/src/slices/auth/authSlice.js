import {createSlice,createAsyncThunk} from "@reduxjs/toolkit" 
import authservice from "./authServer"


const user=JSON.parse(localStorage.getItem('user'))
const initialState={
    user:user ? user:null,
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:""
}
export const register=createAsyncThunk('auth/register',async(user)=>{
try{
    return await authservice.Register(user)
}
catch(error){
    console.log(error);
}
})
export const login=createAsyncThunk('auth/login',async(user)=>{
try{
    return await authservice.login(user)
}
catch(error){
    console.log(error);
}
})
export const contact=createAsyncThunk("auth/contact",async(contact)=>{
try{
    return await authservice.contact(contact)
}
catch(error){
 console.log(error);
}
})
export const question=createAsyncThunk("auth/question",async(question)=>{
    try{
        return await authservice.question(question)
    }
    catch(error){
        console.log(error);
    }
})
export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
    reset:(state)=>{
    state.isLoading=false
    state.isError=false
    state.isSuccess=false
    state.message=""
    }
    },
    extraReducers:(builders)=>{
        builders.addCase(register.pending,(state)=>{
            state.isLoading=true
        })
    .addCase(register.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isError=false
        state.user=action.payload
    })
    .addCase(register.rejected,(state,action)=>{
        state.isLoading=false
        state.isError=true
        state.user=null
        state.user=action.payload
    })
    .addCase(login.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isError=false
        state.user=action.payload
    })
    .addCase(login.pending,(state,action)=>{
        state.isLoading=true
    })
    .addCase(login.rejected,(state,action)=>{
        state.isLoading=false
        state.isError=true
        state.user=null
        state.user=action.payload
    })
    .addCase(contact.rejected,(state,action)=>{
        state.isLoading=false
        state.isError=true
        state.user=null
        state.user=action.payload
    })
    .addCase(contact.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isError=false
        state.user=action.payload
    })
    .addCase(question.rejected,(state,action)=>{
        state.isLoading=false
        state.isError=true
        state.user=null
        state.user=action.payload
    })
    .addCase(question.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isError=false
        state.user=action.payload
    })
    
    
    }
})
export const {reset}=authSlice.actions
export default authSlice.reducer;