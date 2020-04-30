import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const GoalInput = (props) =>{
    const[enteredGoal, setEnteredGoal] = useState('');
    const goalInputhandler = (enteredText) =>{
        setEnteredGoal(enteredText);
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
                       onChangeText={goalInputhandler}
                       value={enteredGoal}
            ></TextInput>
            {/*<Button onPress={() => props.onAddGoal} color="#E91E63" title="add"></Button>*/}
            <Button onPress={ props.onAddGoal.bind(this, enteredGoal) } color="#E91E63" title="add"></Button>
        </View>
    );
}
const styles = StyleSheet.create({
    screen:{
        padding:50,
    },
    input:{
        width:"80%",
        borderColor:'black',
        borderWidth:1,
        padding:10,
    },
    inputContainer:{
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems:'flex-start'
    }
})
export default GoalInput;
