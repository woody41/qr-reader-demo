import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useI18n, useRouter } from '@daimler/ftk-core'
import { State } from '../../store/type'
import { getPostsAction } from '../../store/posts/PostActions'
import { Button, Container } from '@material-ui/core'
import Loader from '../../components/Loader/Loader'
import Post from '../../components/Post/Post'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const i18n = useI18n()

  const { loadingPosts, posts } = useSelector((state: State) => state.posts)

  useEffect(() => {
    dispatch(getPostsAction(getPostsAction()))
  }, [dispatch])

  return (
    <Container>
      <h2>PageOne Component</h2>
      <div>
        {loadingPosts && <Loader text="Posts are being loaded..."/>}
        {posts.map(post => <Post post={post} />)}
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.navigate(router.linkTo('home'))}
      >
        {i18n.translateToString('BackToHome')}
      </Button>
    </Container>
  )
}

export default Home
