// Copied from https://github.com/ctrlplusb/react-async-component/blob/master/src/withAsyncComponents.js
export default () => {
    let idPointer = 0
    const registry = {}
    return {
        getNextId: ( ) => {
            idPointer += 1
            return idPointer
        },
        registerComponent( id, Component ) {
            registry[id] = Component
        },
        getComponent( id ) {
            return registry[id]
        },
        getResolved( ) {
            return Object.keys( registry ).reduce( ( acc, cur ) => Object.assign(acc, { [ cur ]: true }), {}, )
        }
    }
}
