import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Data } from "../types/Data";

const urls: { [key: string]: string } = {
  data:
    process.env.FLICKR_API ||
    "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true",
};

//redux thunk:middleware for using async call in redux
export const fetchAllData = createAsyncThunk<
  Data[],
  void,
  { rejectValue: string }
>("fetchAllData", async (_, { rejectWithValue }) => {
  try {
    const jsonData = await axios.get(urls.data);
    const data = await jsonData.data;
    toast("Data fetch successfully");
    return data.items;
  } catch (e) {
    const error = e as AxiosError;
    toast(error?.response?.data as string);
    return rejectWithValue(error.message);
  }
});
