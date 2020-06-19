import React , { useState } from 'react';
import {  View , StyleSheet ,TextInput,Button} from 'react-native';

export default function AddTodo({submitHandler}){

  const[text,setText] = useState('');

  const changeHandler = (val) =>{
    setText(val);
  };


  return(
    <View >
    <TextInput style={styles.input}
    placeholder = 'new To do'
    onChangeText={changeHandler}
    />

    <Button onPress={()=>submitHandler(text)}
    title ='Add to do'
    color = '#f5cd79'
    />
    </View>
  )
}

const styles = StyleSheet.create({
  input : {
    marginBottom : 10,
    paddingHorizontal : 8,
    paddingVertical :6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  
})
