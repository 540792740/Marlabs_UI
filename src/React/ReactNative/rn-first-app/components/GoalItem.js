import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const GoalItem = (props) =>{
    return (
        <View style={styles.listItem}>
            <Text style={{fontSize:17}}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        marginVertical:10,
        backgroundColor: "#F44336",
        borderColor:"#af8baf",
        borderWidth:1,
    }
});

export default GoalItem;
