import {createSlice} from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  user_id: localStorage.getItem("user_id")
    ? (localStorage.getItem("user_id"))
    : null,
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};


export const ProductAddSlice = createSlice({
   name:"cart",
   initialState,
   reducers:{
    setUserId: (state, action) => {
      state.user_id = action.payload;
      localStorage.setItem("user_id", JSON.stringify(action.payload));
    },
    addToCart:(state,action)=>{
      const itemIndex = state.cartItems.findIndex(
        (item)=>{
          // console.log(item.ide)
          // console.log(action.payload.ide)
          return item.ide ===action.payload.ide

        }
      )
      // console.log(itemIndex);

      if (itemIndex>=0){
        state.cartItems[itemIndex].cartQuantity +=1
        toast.info(`Increased ${ state.cartItems[itemIndex].p_name} cart quantity!`, {
          position: toast.POSITION.TOP_RIGHT
      });
      }else{
        const tempProduct = {...action.payload, cartQuantity:1}
        state.cartItems.push(tempProduct)
        toast.success(`${action.payload.p_name} added to cart`, {
          position: toast.POSITION.TOP_RIGHT
      });
      }
      localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    },
    // 'Item Added to Cart !'
    // priceAdd:(state,action)=>{
    //   const price = action.payload
    //   console.log(price);
    //   state.amount*=price
    // },
    // priceAdd: (state, action) => {
    //   const price = action.payload;
    //   state.amount += price;
    // },
    decreaseCart:(state, action)=> {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.ide === action.payload.ide
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position:  toast.POSITION.TOP_RIGHT,
        });

        
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.ide !== action.payload.ide
        );

        state.cartItems = nextCartItems;
        toast.error("Product removed from cart", { position: toast.POSITION.TOP_RIGHT});

      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart:(state, action)=> {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: toast.POSITION.TOP_RIGHT});
    },
    getTotal:(state,action)=>{
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total);
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    removeFromCart:(state,action)=>{
      // console.log(state.cartItems);
      state.cartItems.map((cartItem)=>{
        // console.log(cartItem.ide, action.payload.ide);
        if(cartItem.ide === action.payload.ide){
          const filteredItems = state.cartItems.filter(
            (item)=>item.ide !==cartItem.ide
          )
          state.cartItems = filteredItems

          toast.error("Product removed from cart",
          { position: toast.POSITION.TOP_RIGHT})
        }
        localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        return state
      })
    }
,
userLoggedOut:(state,action)=>{
  state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Logged out Succefuuly",
      { position: toast.POSITION.TOP_RIGHT})
}
,
orderPlaced:(state,action)=>{
  state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.success("Order placed Succefuuly",
      { position: toast.POSITION.TOP_RIGHT})
}
   }
})

export default ProductAddSlice.reducer
export const {addToCart, clearCart, decreaseCart, getTotal, removeFromCart,setUserId,userLoggedOut, orderPlaced} = ProductAddSlice.actions