import { createSlice } from "@reduxjs/toolkit";
import type { SliderState } from "./types";
import { fetchSliderData } from "./asyncActions";

const initialState: SliderState = {
  items: [],
  currentSlide: 0,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    changeSlide: (state, action) => {
      const direction = action.payload;
      // const length = state.items.length / 3;
      state.currentSlide = (state.currentSlide + direction + 3) % 3;
    },
    goToSlide: (state, action) => {
      state.currentSlide = action.payload & state.items.length;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSliderData.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});
export const { changeSlide, goToSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
