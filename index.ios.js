import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import App from './src/containers/App';

import configureStore from './src/store/configureStore';

const store = configureStore();


export default class nativeRedux extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('nativeRedux', () => nativeRedux);
