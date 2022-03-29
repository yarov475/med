import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Alert, BackHandler, Button, Switch, Text, TextInput, View} from 'react-native';
import {styles} from "./modules/css";

// ****************************************FACTORS**********************
// Прогностический фактор
// Балл
// Возраст на момент начала ИТК 3-й линии (для каждых 10 лет)
// 1
// Отсутствие ЦГО на ИТК 1-й или 2-й линии
// 8
// Отсутствие ЦГО на момент начала ИТК 3-й линии
// 7
// **************************************************************************
export default function App() {
    const [count, setCount] = useState(0);
    const [number, onChangeNumber] = React.useState(null);

    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const showResult = () => {
        Alert.alert('Результат: ', modal, [
            {
                text: "Закрыть",
                onPress: () => BackHandler.exitApp(),
                style: "cancel",
            }, {
                text: "Заново",
                onPress: () => {
                    result = 0
                },
                style: "cancel",
            },

        ], {
            cancelable: true,
            onDismiss: () => {
                result = 0
            },
        });
    };
    const noCgo12 = () => {
        setIsEnabled(previousState => !previousState);
        setCount(count + 8);
    };
    const antinoCgo12 = () => {
        setIsEnabled(previousState => !previousState);
        setCount(count - 8);
    }

    const noCgo3 = () => {
        setIsEnabled3(previousState => !previousState);
        setCount(count + 7)
        console.warn('Cgo12')
    }
    const antiNoCgo3 = () => {
        setIsEnabled3(previousState => !previousState);
        setCount(count - 7)
        console.warn('antiNoCgo3')
    }


    let ageFactor = parseInt(number / 10)
    let result = count + ageFactor;

    {/*            ******************************************RESULT******************************************/
    }
    {/*После расчета суммы баллов для каждого пациента мы разделили пациентов на три группы: низкого риска*/
    }
    {/*(сумма баллов ≤9, n=22), промежуточного риска (сумма баллов от 10 до 15, n=27) и высокого риска (сумма*/
    }
    {/*баллов ≥16, n=24). У пациентов в группе высокого риска отмечалась значимо более низкая частота достижения*/
    }
    {/*ПЦГО на ИТК 3-й линии по сравнению с группой промежуточного риска (1/24 (4%) по сравнению с 7/27*/
    }
    {/*(26%), p=0,033), в свою очередь группа промежуточного риска имела значимо худшие результаты по*/
    }
    {/*сравнению с группой низкого риска (7/27 (26%) по сравнению с 14/22 (64%), p=0,008).*/
    }
    {/***********************************************************************************************************/
    }

    let modal;
    if (result === 0) {
        modal = 'Введите данные '
    } else if (result <= 9) {
        modal = 'Низкий риск'
    } else if (result > 10 && result <= 15) {
        modal = 'промежуточный риск'
    } else if (result >= 16) {
        modal = 'высокий риск'
    }
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

            <Text style={styles.factor}> Отсутствие ЦГО на ИТК 1-й или 2-й линии </Text>
            <Text><Switch style={styles.switch}
                          trackColor={{false: "#767577", true: "#81b0ff"}}
                          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                          ios_backgroundColor="#3e3e3e"
                          value={isEnabled}
                          onValueChange={isEnabled ? antinoCgo12 : noCgo12}

            /></Text>


            <Text style={styles.factor}>Отсутствие ЦГО на момент начала ИТК 3-й линии
            </Text>
            <Text><Switch style={styles.switch}
                          trackColor={{false: "#767577", true: "#81b0ff"}}
                          thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
                          ios_backgroundColor="#3e3e3e"
                          value={isEnabled3}
                          onValueChange={isEnabled3 ? antiNoCgo3 : noCgo3}
            /></Text>


            <Button
                onPress={showResult}
                title="Узнать результат"/>

            <Text style={styles.signature}>
                Разработчик Ярочкин Д.А.
            </Text>

        </View>

    );

}


