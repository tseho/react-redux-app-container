import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

class ReactReduxAppContainer extends React.Component {
    render() {
        let { store, history, routes, children } = this.props
        return (
            <Provider store={store}>
                <div>
                    <Router history={history} children={routes} />
                    {children}
                </div>
            </Provider>
        )
    }
}

ReactReduxAppContainer.propTypes = {
    store: React.PropTypes.object.isRequired,
    history: React.PropTypes.object,
    routes: React.PropTypes.object.isRequired,
    children: React.PropTypes.element
}

ReactReduxAppContainer.defaultProps = {
    history: browserHistory
}

export default ReactReduxAppContainer
