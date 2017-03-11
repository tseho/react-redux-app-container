import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore as createReduxStore
} from 'redux'
import isEmpty from 'lodash.isempty'

const makeRootReducer = (reducers, asyncReducers) => {
    // Redux + combineReducers always expect at least one reducer, if reducers
    // and asyncReducers are empty, we define an useless reducer function
    // returning the state
    if (isEmpty(reducers) && isEmpty(asyncReducers)) { return (state) => state }

    return combineReducers({
        ...reducers,
        ...asyncReducers
    })
}

export const injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.reducers, store.asyncReducers))
}

export const createStore = (initialState = {}, reducers = {}, middlewares = {}, enhancers = {}) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createReduxStore(
        makeRootReducer(reducers),
        initialState,
        composeEnhancers(
            applyMiddleware(...middlewares),
            ...enhancers
        )
    )

    store.reducers = reducers
    store.asyncReducers = {}

    return store
}
