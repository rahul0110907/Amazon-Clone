import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 products:[],
 userInfo:[]
}

export const cartSlice = createSlice({
  name: 'amazon',
  initialState,
  reducers: {
   addToCart: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const item = state.products.find((item)=>item.id===action.payload.id);
      if(item){
        item.quantity+=action.payload.quantity
      }else{
        state.products.push(action.payload)
      }
   
    },
    deleteCartItem:(state,action)=>{
       state.products=  state.products.filter((item)=>item.id!==action.payload)
    },
     resetCart:(state)=>{
        state.products=[]
     },
     incrementQuantity:(state,action)=>{
        const item=state.products.find((item)=>item.id===action.payload)
        item.quantity++
     },
       decrementQuantity:(state,action)=>{
        const item=state.products.find((item)=>item.id===action.payload)
        if(item.quantity>1){
            item.quantity--
        }
  
     },
     setUserInfo:(state,action)=>{
      state.userInfo=action.payload
     },
     userSignOut:(state)=>{
      state.userInfo=null;
     }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,deleteCartItem,resetCart,incrementQuantity,decrementQuantity,setUserInfo,userSignOut } = cartSlice.actions

export default cartSlice.reducer