/**
 * Created by zhongpeng on 2018/10/8.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { RadioButtons } from 'react-native-radio-buttons'

export default  class Picker extends Component {

     static propTypes = {
        options: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    _renderOption = (option, selected, onSelect, index) => {
        const style = selected ? { fontWeight: 'bold', color: 'red'} : {};
        return (
            <TouchableOpacity
                style={{flex:1, height: 50, alignItems: 'center', justifyContent: 'center',}}
                onPress={onSelect}
                key={index}
            >
                <Text style={style}>{option}</Text>
            </TouchableOpacity>

        );
    };

    render() {
        let { value, onChange, options } = this.props;
        return (
            <View style={{margin: 20}}>
                <RadioButtons
                    options={ options }
                    onSelection={ onChange }
                    selectedOption={ value }
                    renderOption={ this._renderOption }
                    renderContainer={ RadioButtons.renderHorizontalContainer }

                />
            </View>);
    }
}