const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const initialState = [];

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },

  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    deleteProd(state, action) {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    editProduct(state, action) {
      // state.data = state.data.filter((item) => item.id !== action.payload);
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      const aray = state.data;
      aray[index].title = action.payload.name;
      aray[index].price = action.payload.price;
      state.data = aray;
    },
  },
  // extraReducers: (builder) => {
  //   builder

  //     .addCase(fetchProducts.pending, (state, action) => {
  //       state.status = STATUSES.LOADING;
  //     })
  //     .addCase(fetchProducts.fulfilled, (state, action) => {
  //       state.data = action.payload;
  //       state.status = STATUSES.IDLE;
  //     })
  //     .addCase(fetchProducts.rejected, (state, action) => {
  //       // state.data = action.payload;
  //       state.status = STATUSES.ERROR;
  //     });
  // },
});

export const { setProducts, setStatus, deleteProd, editProduct } =
  productSlice.actions;
export default productSlice.reducer;

// Thunks

// export const fetchProducts = createAsyncThunk('products/fetch', async () => {
//   const res = await fetch('https://fakestoreapi.com/products');
//   const data = await res.json();
//   return data;
// });

export function fetchProducts() {
  return async function fetchProductThank(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
