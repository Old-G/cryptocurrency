import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import { DAppProvider } from '@usedapp/core'

import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './app/store'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={{}}>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegistration.register()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
