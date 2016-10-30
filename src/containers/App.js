/**
 * Created by joseangelmr on 30/10/16.
 */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { View, Text, TouchableHighlight } from 'react-native'

import * as CounterActions from '../actions/counter';
import baseStyle from '../styles/base'



class Counter extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={baseStyle.container}>

                <View style={[baseStyle.controlPanel, baseStyle.inline]}>
                    <Text>{'Counter: '}</Text>
                    <Text>{this.props.counter}</Text>
                </View>

                <View style={[baseStyle.controlPanel, baseStyle.inline]}>
                    <TouchableHighlight onPress={this.props.onIncrement} style={baseStyle.btnAdd} underlayColor={'green'}>
                        <Text>{'+'}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.props.onDecrement} style={baseStyle.btnMinus} underlayColor={'red'}>
                        <Text>{'-'}</Text>
                    </TouchableHighlight>
                </View>

            </View>)

    }
}


function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        onIncrement: () => {
            dispatch(CounterActions.increment())
        },

        onDecrement: () => {
            dispatch(CounterActions.decrement())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);