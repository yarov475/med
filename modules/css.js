import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#EBEDEF',
        padding: 5,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderBottomWidth: 1,
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#A9CCE3',
        borderRadius: 20,
        padding: 20,
        color: 'white',
        marginBottom: 20,

    },
    factor: {
        display: "flex",
        paddingTop: 10,
        borderTopWidth: 1,
    },
    switch: {
        justifyContent: "flex-start",
    },
    start: {
        backgroundColor: '#F7DC6F',
        fontSize: 20,
        margin: 0,
        padding: 20,
        textAlign: 'center'
    },
    low: {
        backgroundColor: '#F4ECF7',
        fontSize: 20,
        margin: 0,
        padding: 20,
        textAlign: 'center'
    },
    middle: {
        backgroundColor: '#E8DAEF',
        fontSize: 20,
        margin: 0,
        padding: 20,
        textAlign: 'center'

    },
    high: {
        backgroundColor: '#A569BD',
        fontSize: 20,
        margin: 0,
        padding: 20,
        textAlign: 'center'
    },
    signature:{
        color:'#5E5E5D',
        fontSize:10,
    }

});
