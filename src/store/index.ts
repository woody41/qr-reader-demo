import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { postSlice } from './posts/PostSlice'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  posts: postSlice.reducer,
})

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
  thunk,
]

export default configureStore({
  reducer,
  middleware,
})
