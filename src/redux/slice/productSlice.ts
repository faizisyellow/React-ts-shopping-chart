import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../config/api";
import { Product } from "../../components/Product/Product";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
interface InitialState {
  products: Product[];
  status: "idle" | "loading" | "error";
}

const initialState: InitialState = {
  products: [],
  status: "idle",
};

export const fetchProducts = createAsyncThunk("product/fetchProduct", async () => {
  try {
    const response = await instance.get<Product[]>("products/?limit=15");
    return response.data;
  } catch (error) {
    console.error(error); // Log the error for debugging
    throw error; // Rethrow the error to be handled by the caller
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload; // Update products with fetched data
      state.status = "idle";
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default productSlice.reducer;
