import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { filter, find, map, some } from "lodash";
import dataProducts from "@/data/products";

const getProductsStorage = () => {
  const productsId = JSON.parse(localStorage.getItem("cart")) || [];
  let products = [];

  for (const product of productsId) {
    const existProduct = find(dataProducts, (p) => p.id === Number(product.id));
    if (existProduct)
      products.push({ ...existProduct, quantity: Number(product.quantity) });
  }

  return products;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    getCartProducts(state) {
      const products = getProductsStorage();
      state.products = products;
    },
    addOrRemoveCart(state, action) {
      let newCart = [];
      let type = "add";
      const stateProducts = getProductsStorage();

      const id = action.payload;
      const existProduct = some(stateProducts, (product) => product.id === id);

      if (existProduct) {
        newCart = filter(stateProducts, (product) => product.id !== id);
        type = "remove";
      } else {
        const newProduct = find(dataProducts, (product) => product.id === id);
        if (!newProduct) return;
        newCart = [{ ...newProduct, quantity: 1 }, ...stateProducts];
      }

      toast.info(
        `Producto ${type === "add" ? "añadido al" : "removido del"} carrito`
      );
      state.products = newCart;
      localStorage.setItem(
        "cart",
        JSON.stringify(
          map(newCart, (p) => ({ id: p.id, quantity: p.quantity }))
        )
      );
    },
    setQuantityProduct(state, action) {
      const { id, quantity } = action.payload;

      const products = getProductsStorage();
      let newProducts = [];

      for (const product of products) {
        if (
          product.id === Number(id) &&
          quantity <= product.stock &&
          quantity > 0
        ) {
          product.quantity = quantity;
        }

        newProducts.push(product);
      }

      state.products = newProducts;
      localStorage.setItem(
        "cart",
        JSON.stringify(
          map(newProducts, (p) => ({ id: p.id, quantity: p.quantity }))
        )
      );
    },
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = cartSlice;
// Extract and export each action creator by name
export const { addOrRemoveCart, getCartProducts, setQuantityProduct } = actions;
// Export the reducer, either as a default or named export
export default reducer;

