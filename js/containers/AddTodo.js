/**
 * Created by zhongpeng on 2018/9/25.
 */
import React, { Component } from 'react'
import {
    View,
    TextInput,
    Button,
} from 'react-native'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.inputValue = '';
    }

    render(){
        let { dispatch } = this.props;
        return (
            <View style={{flexDirection: 'row'}}>
                <TextInput
                    style={{flex:1, borderWidth: 1, borderColor: '#cccccc', textAlign: 'center'}}
                    onChangeText={text => this.inputValue = text}
                />
                <Button title="Add Todo" onPress={() => dispatch(addTodo(this.inputValue))}/>
            </View>
        )
    }
}

export default connect()(AddTodo)