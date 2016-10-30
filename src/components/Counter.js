import React, {
    Component,
    PropTypes,
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

class Counter extends Component {

    render() {
        var {increment, counter} = this.props;
        return (
            <View style={styles.container}>
                <Text>{'State'} {counter}</Text>
                <TouchableHighlight onPress={increment}>
                    <Text>{'Hola soy el texto'}</Text>
                </TouchableHighlight>
            </View>)
    }

}

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    }
});

export default Counter;