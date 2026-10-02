
import { StatusBar, View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {Header} from "./src/components/Header";
import {WaterProgress} from "./src/components/WaterProgress";
import {ActionButton} from "./src/components/ActionButtons";
import {Buttonmeta} from "./src/components/ButtonMeta";
import { COLORS } from "./src/constants/colors";
import { Dica } from "./src/components/Dica";

export default function App() {



  const [acrescimo, setAcrescimo] = useState(0)
  const [goal, setGoal] = useState(500)

  const functionAcrescimo = (acrescimoAdd) => {
    setAcrescimo(acrescimoAdd + acrescimo)
  }


  const funcReset = () => {
    setAcrescimo(0)
  }
  const addMeta = (acrescimoMeta) => {
    setGoal(goal + acrescimoMeta)
  }
  const subMeta = (subtraiMeta) => {
    if (goal == 500){
      return
    } else{
      setGoal(goal - subtraiMeta)
    }
  }


  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView >
        <StatusBar barStyle={'auto'} />
        <View >
            <Header goal={goal} />

            <View>
              <Buttonmeta metaAdd={addMeta} meta={'+200'} />
              <Buttonmeta metaAdd={subMeta} meta={'-200'} />
              </View>
            <WaterProgress aguaConsumida={acrescimo} objetivo={goal} />
            <ActionButton aguaAcrescimo={functionAcrescimo} reset={funcReset} />
            <Dica/>
          
          </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
});