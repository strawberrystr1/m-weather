import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

import App from '@App/App'
import './index.css'
import store, { persistor } from '@redux/index'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <PersistGate loading={<div>...Loading</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
)
