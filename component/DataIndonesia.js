import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

class DataIndonesia extends React.Component{
    constructor(){
        super();
        this.state = {
            summary: [],
            positive: '',
            meninggal: '',
            sembuh: '',
            perawatan : '',
        }
    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        const response = await fetch('https://kawalcovid19.harippe.id/api/summary');
        const json = await response.json();
        this.setState({positive: json.confirmed.value})
        this.setState({sembuh: json.recovered.value})
        this.setState({meninggal: json.deaths.value})
        this.setState({perawatan: json.activeCare.value})
    }
   
    render(){
        return (
               <View>
                   <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf:'center'}}>Indonesia</Text>
                   <View style={styles.container}>
                   <View style={styles.box1}>
                       <Text style={{ fontSize: 17, alignSelf:"center" }}>Positif</Text>
                       <Text style={styles.text}>{this.state.positive}</Text>
                   </View>
                   <View style={styles.box2}>
                        <Text style={{ fontSize: 17, alignSelf:"center" }}>Sembuh</Text>
                       <Text style={styles.text}>{this.state.sembuh}</Text>
                   </View>
                   <View style={styles.box3}>
                        <Text style={{ fontSize: 17, alignSelf:"center" }}>Meninggal</Text>
                        <Text style={styles.text}>{this.state.meninggal}</Text>
                   </View>
                   <View style={styles.box4}>
                        <Text style={{ fontSize: 17, alignSelf:"center" }}>Perawatan</Text>
                        <Text style={styles.text}>{this.state.perawatan}</Text>
                   </View>
               </View>
               </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative'
    },
    box1: {
        width: 120,
        height: 100,
        backgroundColor: 'cornsilk',
        fontSize: 18, 
        marginHorizontal: 3, height: 70, width: 85,  
        borderRadius: 15, justifyContent: "center" 
    },
    box2: {
        width: 120,
        height: 100,
        backgroundColor: 'darkgrey',
        fontSize: 18, 
        marginHorizontal: 3, height: 70, width: 85, 
        borderRadius: 15, justifyContent: "center" 
    },
    box3: {
        width: 120,
        height: 100,
        backgroundColor: 'deeppink',
        fontSize: 18, 
        marginHorizontal: 3, height: 70, width: 85, 
        borderRadius: 15, justifyContent: "center" 
    },
    box4: {
        width: 120,
        height: 100,
        backgroundColor: 'forestgreen',
        fontSize: 18, 
        marginHorizontal: 3, height: 70, width: 85,  
        borderRadius: 15, justifyContent: "center" 
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
})


export default DataIndonesia;