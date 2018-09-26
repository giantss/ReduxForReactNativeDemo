/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Group from './js/components/Group'
import rootReducer from './js/reducers'

export default class App extends Component {
    render() {
        const store = createStore(rootReducer);
        return (
            <Provider store={store}>
                <Group />
            </Provider>
        );
    }
}
