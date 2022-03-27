import {StatusBar} from 'expo-status-bar';

import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {SafeAreaView, TextInput, Switch} from "react-native";

export default function App() {
    const [count, setCount] = useState(0);
    const [number, onChangeNumber] = React.useState(null);

    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);

    const noCgo12 = () => {
        setIsEnabled(previousState => !previousState);
        setCount(count + 8)
    };

    const noCgo3 = () => {
        setIsEnabled3(previousState => !previousState);
        setCount(count + 7)
    }
 let result = count + number/10;
// TODO onchange=>onsubmit
// TODO input should change count
// TODO conditional rendering
// TODO button submit=>make count=>render result
// TODO css
    return (

        <View style={styles.container}>
            <StatusBar></StatusBar>
            <Text
                style={styles.header}>
                Факторы прогноза отдаленных тирозинкиназ второго поколения при неэффективности или непереносимости
                двух предшествующих линий терапии
            </Text>

            <Text style={styles.factor}>Возраст на момент начала ИТК 3-й линии</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Полных лет"
                keyboardType="numeric"
            />

            <Text style={styles.factor}>  Отсутствие ЦГО на ИТК 1-й или 2-й линии</Text>
            <Switch style={styles.switch}
                trackColor={{false: "#767577", true: "#81b0ff"}}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={noCgo12}
                value={isEnabled}
            />
            <Text style={styles.factor}>Отсутствие ЦГО на момент начала ИТК 3-й линии</Text>
            <Switch style={styles.switch}
                trackColor={{false: "#767577", true: "#81b0ff"}}
                thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={noCgo3}
                value={isEnabled3}
            />
            <Text> result  {result}  </Text>
            <Button
                onPress={() => setCount(count + 1)}
                title="Click me!"
            />

            <Text> Разработчик приложения Ярочкин Д.А.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
        paddingTop:10,
        borderTopWidth:1,
    },
    switch:{
       justifyContent:"flex-start",
    }

});
