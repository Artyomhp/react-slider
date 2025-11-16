import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { SlideProps } from "./types";

export const fetchSliderData = createAsyncThunk(
  "slider/fetchSliderData",
  async () => {
    const { data } = await axios.get(
      "https://dd1577ebccb7678e.mokky.dev/categoriesItem"
    );
    return data as SlideProps[];
  }
);
