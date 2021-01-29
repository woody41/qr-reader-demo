import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post } from '../../types/Post'

export type PostState = {
  loadingPosts: boolean
  posts: Post[]
}

const initialPostState: PostState = {
  loadingPosts: false,
  posts: [],
}

export const postSlice = createSlice({
  name: 'posts',
  initialState: initialPostState,
  reducers: {
    loadingPostsStarted: (state) => {
      state.loadingPosts = true
      state.posts = []
    },
    loadingPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.loadingPosts = false
      state.posts = [...action.payload]
    },
    loadingPostsFailure: (state, action: PayloadAction<string>) => {
      state.loadingPosts = false
    },
  }
})
