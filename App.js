/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Group from './js/components/Group'
import LoadPosts from './js/containers/LoadPosts'
import rootReducer from './js/reducers'

export default class App extends Component {
    render() {
        const logger = createLogger();
        const store = createStore(
            rootReducer,
            applyMiddleware(thunk, logger)
        );

        return (
            <Provider store={store}>
                {/*<Group />*/}
                <LoadPosts/>
            </Provider>
        );
    }
}
