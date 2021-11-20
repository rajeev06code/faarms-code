import {createSlice} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
const initialState={
    cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
    cartTotalQuantity:0,
    cartTotalAmt:0,
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){

    const itemIndex= state.cartItems.findIndex(item=>item.id==action.payload.id);
 if(itemIndex>=0){
     state.cartItems[itemIndex].cartQty+=1;
     toast.info("Item already in the cart",{
         position:"bottom-left",
     })
 }
 else{
    const tempProduct={...action.payload,cartQty:1};
    state.cartItems.push(tempProduct)
    toast.success("Item added to cart",{
        position:"bottom-left",
    })
  
 }
 
localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        removeFromCart(state,action){
       const nextCartItems= state.cartItems.filter(
               (cartPro)=>cartPro.id!==action.payload.id,
            )
            state.cartItems=nextCartItems;
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

            toast.error("Item removed from the cart",{
                position:"bottom-left",
            })
        }
    }
});

export const {addToCart,removeFromCart} = cartSlice.actions 
export default cartSlice.reducer;
