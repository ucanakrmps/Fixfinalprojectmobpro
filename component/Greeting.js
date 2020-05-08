import React from 'react';
import { View, Text, Image} from 'react-native';

const Greeting = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style = {textStyle}>              Global              </Text>
        </View>
    );
};


const styles = {
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
}
export default Greeting;