import { configureStore } from '@reduxjs/toolkit'
import uploadimage from './ReduxStore/uploadimage'

export default configureStore({
  reducer: {
    uploadImage:uploadimage

  },
})