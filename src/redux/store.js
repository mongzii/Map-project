import { createSlice, configureStore } from "@reduxjs/toolkit";

const markerState = createSlice({
  name: "markerState",
  initialState: {
    title: "",
    lat: 1,
    lng: 1,
    phone: "",
  },
  reducers: {
    setMarker: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setMarker } = markerState.actions;

export default configureStore({
  reducer: {
    markerState: markerState.reducer,
  },
});
