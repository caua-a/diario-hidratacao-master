import { StyleSheet, View, Text, Pressable } from "react-native"
import { COLORS } from "../constants/colors"


export function Dica() {
    return (
        <View style ={styles.container} >
            <Text style={styles.emoji}>💡</Text>
            <Text>Beba água antes de sentir sede — seu corpo agradece cada gole!</Text>

        </View>


    )
};
const styles = StyleSheet.create({
    emoji:{
        fontSize:40
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'black',
        padding:20,
        flexDirection:'row'
    },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
});