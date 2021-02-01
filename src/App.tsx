import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { App, IDiContainer, IRouteConfig, ISwidget, Route, serviceIds } from '@daimler/ftk-core'
import routes from './routes'
import store from './store'
import './App.css'

const devMode = process.env.NODE_ENV === 'development'
const config = require(`./config/${devMode ? 'dev' : 'default'}`).default

function init(container: IDiContainer): void {
  container.bind<IRouteConfig[]>(serviceIds.routes).toConstantValue(routes)
}

const swidget: ISwidget = (): JSX.Element => {
  return (
    <App name="My-App" init={init} config={config}>
      <Provider store={store}>
        <Suspense fallback="loading">
          <Route />
        </Suspense>
      </Provider>
    </App>
  );
}

swidget.metadata = {
  authors: [],
  description: 'My-App Swidget',
}

export default swidget
