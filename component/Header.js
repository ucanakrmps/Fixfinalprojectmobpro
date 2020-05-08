import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style = {textStyle}>Data Covid-19 Global & Indonesia</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: 'aquamarine',
        justifyContent: 'center',
        alignItems: 'center',marginHorizontal: 10, height: 50, width: 300, 
        borderRadius: 10, 
        alignSelf: "center"
    },
    textStyle: {
        fontSize: 19,
        fontWeight: 'bold'
    }
}
export default Header;