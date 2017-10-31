import React, { Component } from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

class ReactReduxAppContainer extends Component {
    render() {
        const { store, children } = this.props
        return (
            <Provider store={store}>
                {children}
            </Provider>
        )
    }
}

ReactReduxAppContainer.propTypes = {
    children: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired
}

export default ReactReduxAppContainer
