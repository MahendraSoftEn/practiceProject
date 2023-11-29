import { createSlice } from '@reduxjs/toolkit'

export const UploadImage = createSlice({
  name: 'uploadImage',
  initialState: {
    imageData: [],
    demoData:0,
  },
  reducers: {
     setImageData(state,action){
        state.imageData=action.payload;
     },
     setDemoData(state,action){
      state.demoData=action.payload;
     }
  },
})

// Action creators are generated for each case reducer function
export const { setImageData,setDemoData } = UploadImage.actions

export default UploadImage.reducer