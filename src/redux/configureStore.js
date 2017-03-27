import { createStore, bindActionCreators } from 'redux'
import * as currentTime from './modules/currentTime'

export const configureStore = () => {
    const store = createStore(currentTime.reducer)
    
    const actions = {
        currentTime: bindActionCreators(
            currentTime.actions,
            store.dispatch)
    }
    console.log('return ', store)
    return {store, actions, currentTime}
}

export default configureStore