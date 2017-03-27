import App from '../App'
import React from 'react'
import { Provider } from 'react-redux'

const AppContainer = ({store, actions}) => (
    <Provider store={store}>
        <App actions={actions}/>
    </Provider>
)

export default AppContainer