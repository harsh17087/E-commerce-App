import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items : [],
        totalQuantity:0,
        totalAmount:0,
    },
    reducers: {
        addItem:(state,action)=>{
            //new
            const cartItem= state.items.find((item) => item._id === action.payload._id);
            console.log(current(state.items))
            if(cartItem) {
                cartItem.cartQuantity ++;
                // console.log(cartItem.cartQuantity)
                
            }else{
                const tempProduct = {...action.payload, cartQuantity:1};
                console.log(tempProduct)
                state.items.push(tempProduct)
                // console.log(action.payload.id)
                // console.log(current(state.items))
                // console.log(cartItem.cartQuantity)
            }
            //new
            
            // state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            //new
            // const inCartItems =  state.items.filter(
            //     item => item.id!==action.payload
            // )
            // state.items=inCartItems
            const itemId = action.payload._id
            state.items = state.items.filter(item=>item._id!==itemId)
            //new

            // state.items.pop()
        },

        decreaseCartQuantity:(state,action)=>{
            const cartItem= state.items.find((item) => item._id === action.payload._id);
            
            console.log(cartItem)
            if(cartItem?.cartQuantity>1){
                cartItem.cartQuantity=cartItem.cartQuantity-1
                // console.log(cartItem?.cartQuantity)
            }else{
                const itemId = action.payload._id
                state.items = state.items.filter(item=>item._id!==itemId)

            }
        },

        increaseCartQuantity(state,action) {
            const item= state.items.find(
                cartItem => cartItem._id === action.payload._id
            )
                item.cartQuantity++       
        },

        clearCart:(state,action)=>{
            state.items.length=0
        },

        getTotal:(state)=>{
            state.totalQuantity=state.items.reduce((acc,val)=>{
                 acc= acc +val.cartQuantity
                 return acc
            },0)
            state.totalAmount = state.items.reduce((acc,val)=>{
                acc = acc + val.price*val.cartQuantity
                return acc
            },0)
        }
    }
})

export const {addItem,removeItem,clearCart,decreaseCartQuantity,increaseCartQuantity,getTotal} = cartSlice.actions

export default cartSlice.reducer
