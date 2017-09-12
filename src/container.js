import React, { Component } from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

// Private component, see https://github.com/ctrlplusb/react-async-component/issues/20
import AsyncComponentProvider from 'react-async-component/commonjs/AsyncComponentProvider'
import createExecContext from './Async/createExecContext'

class ReactReduxAppContainer extends Component {
    render() {
        let { store, children } = this.props
        return (
            <AsyncComponentProvider execContext={createExecContext()}>
                <Provider store={store}>
                    {children}
                </Provider>
            </AsyncComponentProvider>
        )
    }
}

ReactReduxAppContainer.propTypes = {
    children: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired
}

export default ReactReduxAppContainer
