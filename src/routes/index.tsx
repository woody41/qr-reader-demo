import { IRouteConfig } from '@daimler/ftk-core'
import withLayout from '../decorators/withLayout'
import PostPage from './PostPage/PostPage'
import Home from './Home/Home'
import QRreaderPage from './QRreaderPage'
import GridPage from './GridPage'

const LayoutPostPage = withLayout(PostPage)


const routes: IRouteConfig[] = [
  {
    component: Home,
    name: 'home',
    pattern: '/',
  },
  {
    component: GridPage,
    name: 'qr-reader',
    pattern: '/qr-reader',
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
