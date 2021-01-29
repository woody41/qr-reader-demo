import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { Post } from '../../types/Post'
import styled from 'styled-components'

interface PostProps {
  post: Post
}

const PostComponent: React.FC<PostProps> = ({ post }) => {
  return (
    <PostBase>
      <Typography variant="h5" component="h5">
        {post.title}
      </Typography>
      <Typography variant="body1" component="p">
        {post.body}
      </Typography>
    </PostBase>
  )
}

const PostBase = styled(Paper)`
  margin-bottom: 1em;
`

export default PostComponent
