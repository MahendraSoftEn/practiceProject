import { createSlice } from '@reduxjs/toolkit'

export const UploadImage = createSlice({
  name: 'uploadImage',
  initialState: {
    imageData: [],
  },
  reducers: {
     setImageData(state,action){
        state.imageData=action.payload;
     }
  },
})

// Action creators are generated for each case reducer function
export const { setImageData } = UploadImage.actions

export default UploadImage.reducer