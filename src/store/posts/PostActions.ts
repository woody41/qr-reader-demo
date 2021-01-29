import { Dispatch } from 'redux'
import { postSlice } from './PostSlice'
import { Post } from '../../types/Post'
import api from '../../api'

const { actions } = postSlice

const getPostsAction = (opts?: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(actions.loadingPostsStarted())

    setTimeout(async () => {
      const posts: Post[] = (await api.get('/posts')).data
      dispatch(actions.loadingPostsSuccess(posts))
    }, 3000)
  }
  catch (e) {
    dispatch(actions.loadingPostsFailure(e))
  }
}

export {
  getPostsAction,
}
