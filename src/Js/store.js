import { configureStore } from '@reduxjs/toolkit'
import  PlaceSlice  from './PlaceSlice/PlaceSlice'







export const store = configureStore({
  reducer: {
    place:PlaceSlice,
  },
})