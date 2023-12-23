import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchAllData } from "../../api/dataFetch";

const initialState: any = {
  data: [],
  searchText: "",
  loading: true,
  error: "",
};

const dataSlice = createSlice({
  name: "singleData",
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchAllData.pending, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchAllData.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

const dataReducer = dataSlice.reducer;
export const { setSearchText } = dataSlice.actions;

export default dataReducer;
