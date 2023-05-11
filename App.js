/**
 * Scoring system of non-achieving CCyR on second-generation TKIs in third line therapy CP CML
 *
 * This React Native app calculates the probability of not achieving a complete cytogenetic response
 * (CCyR) on third-line TKI therapy for patients with chronic myeloid leukemia (CML). It is based on
 * a scoring system that takes into account three factors: the patient's age at the start of third-line
 * TKI therapy, the absence of CCyR on first or second-line TKI therapy, and the absence of CCyR prior
 * to third-line TKI therapy.
 *
 * After the user enters the required information, the app calculates the total score and displays a
 * result message that indicates the probability of not achieving CCyR on third-line TKI therapy.
 *
 * The app also includes a signature that credits the application developer.
 *
 * @version 1.0.0
 * @author Dmitry A. Yarochkin
 */

import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Alert, BackHandler, Button, Switch, Text, TextInput, View} from 'react-native';
import {styles} from "./modules/css";
import {showResult} from "./showResult"
/**
 * Main component that renders the app UI and implements the scoring system logic.
 *
 * @returns {ReactNode} The app UI.
 */
export default function App() {
   // Initialize state variables using the 'useState' hook from the React library
// 'count' state variable holds the count value, initialized to 0
// 'setCount' function updates the 'count' state variable
const [count, setCount] = React.useState(0);

// 'number' state variable holds the value of the input, initialized to null
// 'onChangeNumber' function updates the 'number' state variable
const [number, onChangeNumber] = React.useState(undefined);


// 'isEnabled' state variable holds the value of the first Switch component, initialized to false
// 'setIsEnabled' function updates the 'isEnabled' state variable
const [isEnabled, setIsEnabled] = useState(false);
const [language, setLanguage] = useState('en');

// 'isEnabled3' state variable holds the value of the second Switch component, initialized to false
// 'setIsEnabled3' function updates the 'isEnabled3' state variable
const [isEnabled3, setIsEnabled3] = useState(false);
/**

    Displays a result alert with the provided 'modal' text and options to exit the app or try again.
    @function
    @name showResult
    @returns {void}
    @example
    showResult();
    */
    const showResult = () => {
        let resultMes;
        let exitmes;
        let tryAgainMes;
        
        if(language==='en'){
            resultMes = "Result";
            exitmes = "Exit"
            tryAgainMes="try again"
    
        } if( language==='ru'){
            resultMes='Результат';
            exitmes='Выход';
            tryAgainMes = 'попробовать снова'
        }
        
       
    
    
        Alert.alert(`${resultMes}: ${result}`, modal, [
            {
                text: exitmes,
                onPress: () => BackHandler.exitApp(),
                style: "cancel",
            }, {
                text: tryAgainMes,
                onPress: () => {
                    result = undefined;
                    onChangeNumber(undefined);
                    setIsEnabled3(false);
                    setIsEnabled(false);
                    setCount(0);
                    
                    
                    
    
                },
                style: "cancel",
            },
    
        ], {
            cancelable: true,
            onDismiss: () => {
                result = undefined;
                onChangeNumber(undefined);
            },
        });
    };
    
    const noCo12 = () => {
        setIsEnabled(previousState => !previousState);
        setCount(count + 8);
    };
    const antinoCo12 = () => {
        setIsEnabled(previousState => !previousState);
        setCount(count - 8);
    }

    const noCo3 = () => {
        setIsEnabled3(previousState => !previousState);
        setCount(count + 7)
    }
    const antiNoCo3 = () => {
        setIsEnabled3(previousState => !previousState);
        setCount(count - 7)

    }
    const handleChangeLanguage = (selectedLanguage) => {
        setLanguage(selectedLanguage);
      };
      
   
    let modal;

    function calculateAgeFactor(number) {
       
          const ageFactor = Math.floor(Number(number) / 10);
          console.log(ageFactor)
          return ageFactor;
      
      }
       
      
      
    let ageFactor = calculateAgeFactor(number);

    function calculateTotalResult(ageFacror, count){
        
        return ageFacror + count
       
    };

    let result = calculateTotalResult(count, ageFactor);

    function calculateModal(result) {
        console.log(result, number)

     
        if (language == 'en') {
          if (result === NaN|| result === undefined|| number===undefined ){
            return 'Enter Data. If full years are less than 1, enter the number "0" in the column " Age at start of 3rd line TKI (per 10 years)';
          } else if (result <= 10) {
            return 'low risk of non-achieving CCyR on second-generation TKIs in third line therapy CP';
          } else if (result >= 11) {
            return 'high risk of non-achieving CCyR on second-generation TKIs in third line therapy CP';
          }
        }  if (language == 'ru') {
          if (result === NaN|| result === undefined|| number===undefined) {
            return 'Введите данные. Если полных лет менее 1, введите число "0" в колонке "Возраст на момент начала третьей линии TKI (за 10 лет)"';
          } else if (result <= 10) {
            return 'низкий риск (сумма баллов ≤10),';
          } else if (result >= 11) {
            return 'высокий риск (сумма баллов ≥11).';
          }
        }
      }
           

     modal =  calculateModal(result);
   
    return (
        <View style={styles.container}>
            <StatusBar></StatusBar>
            {language === 'en' ? (
            <Text
                style={styles.header}>
               Scoring system of non-achieving CCyR on second-generation TKIs in third line therapy of CP
CML            </Text>):  (<Text style={styles.header} >
    Шкала риска недостижения ПЦО у пациентов в хронической фазе хронического
миелоидного лейкоза на терапии ингибиторами тирозинкиназ второго поколения в
третьей линии
        
    </Text>
    )}
<Text>

    <Button  title="English" onPress={() => handleChangeLanguage('en')} />
    <Button   title="Русский" onPress={() => handleChangeLanguage('ru')} />
    
            </Text>
            {language==='en'?(
            <Text style={styles.factor}>
                Age at start of 3rd line TKI (per 10 years)
                </Text>):(
 <Text style={styles.factor}>
Возраст на момент инициации третьей линии терапии
(каждые 10 лет)
 </Text>)}

            
            <TextInput
            
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder={
                    language==='en'?(                
                "Full years"):
                ('полных лет')}
                keyboardType="numeric"
            />

            <Text style={styles.factor}> 
                 {  language==='en' ? ('Absence of CyR on 1st line or 2nd line TKI'):(`Отсутствие какого-либо цитогенетического ответа на ИТК 1го
и/или второго поколений`) }
            </Text>
            <Text><Switch style={styles.switch}
                          trackColor={{false: "#767577", true: "#81b0ff"}}
                          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                          ios_backgroundColor="#3e3e3e"
                          value={isEnabled}
                          onValueChange={isEnabled ? antinoCo12 : noCo12}

            /></Text>


            <Text style={styles.factor}>
                { language=== 'en'?
                          (`Absence of CyR prior to 3rd line TKI`):
                          (`Отсутствие какого-либо цитогенетического ответа \n перед началом ИТК в третьей линии`)

                }

            </Text>
            <Text><Switch style={styles.switch}
                          trackColor={{false: "#767577", true: "#81b0ff"}}
                          thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
                          ios_backgroundColor="#3e3e3e"
                          value={isEnabled3}
                          onValueChange={isEnabled3 ? antiNoCo3 : noCo3}
            /></Text>


            <Button
                onPress={showResult}
                title= {language=== 'en'?("submit"):("результат")}/>

            <Text style={styles.signature}>
                {
language==='en'?(`  The assessment of probability of not achieving CCyR according to total score.
After calculation the total score for each patient we divided the patients into two groups: the low
risk (total score ≤10, the high risk (total score ≥11) The patients of the high-risk group had
significantly lower rate of achieving CCyR on third line TKI compared to low-risk group (6/45
[13%] vs 29/54 [53%], p=0.000).\n
Application Developer : Dmitry A. Yarochkin`):(`Оценка вероятности недостижения ПЦО по сумме баллов.
После подсчета суммарного балла для каждого пациента, мы разделили пациентов на две
группы: низкий риск (сумма баллов ≤10), высокий риск (сумма баллов ≥11). Пациенты
высокой группы риска имели значительно более низкую частоту достижения ПЦО на ИТК
третьей линии по сравнению с группой низкого риска (6/45 [13%] против 29/54 [53%],
р=0,000).\n Разработчик приложения: Дмитрий АНдреевич Ярочкин`)
                }
                           
            </Text>

        </View>

    );

            }

        