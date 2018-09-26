/**
 * Created by zhongpeng on 2018/9/25.
 */
import React, { Component } from 'react'
import {
    Text,
    TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'

export default class Todo extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    };

    render(){
        let { onClick, completed, text } = this.props;
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    flex: 1,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#cccccc',
                    marginTop: 10
                }}
                onPress={onClick}>
                <Text style={{ textDecorationLine: completed ? 'line-through' : 'none'}}>{text}</Text>
            </TouchableOpacity>
        );
    }
}