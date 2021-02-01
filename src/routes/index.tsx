import { IRouteConfig } from '@daimler/ftk-core'
import withLayout from '../decorators/withLayout'
import PostPage from './PostPage/PostPage'
import Home from '../pages/Home/Home'
import GridPage from '../pages/GridPage'
import QRreaderPage from '../pages/QRreaderPage'

const LayoutPostPage = withLayout(PostPage)


const routes: IRouteConfig[] = [
  {
    component: Home,
    name: 'home',
    pattern: '/',
  },
  {
    component: GridPage,
    name: 'grid',
    pattern: '/grid',
  },
  {
    component: QRreaderPage,
    name: 'qr-reader',
    pattern: '/qr-reader',
  },
  {
    component: LayoutPostPage,
    name: 'posts',
    pattern: '/posts',
  },
]

export default routes
