import React from "react";
import {TextInput, StyleSheet, View} from "react-native";

export default class Search extends React.Component{

    constructor (props){
        super(props)
        this.state = {
            city: 'Dijon'
        }
        this.setCity=this.setCity.bind(this)
    }
    setCity (city){
        this.setState({city})
    }
    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text)=> this.setCity(text)}
                    value={this.state.city}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize:22,
        color: "red"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});