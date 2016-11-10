import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore as createReduxStore
} from 'redux'

const makeRootReducer = (reducers, asyncReducers) => {
    // Redux + combineReducers always expect at least one reducer, if reducers
    // and asyncReducers are empty, we define an useless reducer function
    // returning the state
    if (!reducers && !asyncReducers) { return (state) => state }

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
    const store = createReduxStore(
        makeRootReducer(reducers),
        initialState,
        compose(
            applyMiddleware(...middlewares),
            ...enhancers
        )
    )

    store.reducers = reducers
    store.asyncReducers = {}

    return store
}
