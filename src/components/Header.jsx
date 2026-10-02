import { StyleSheet ,View, Text } from "react-native"
import { COLORS } from "../constants/colors"

export function Header({goal}) {

    return(
        <View style={styles.container} >
            <Text style={styles.title} >💧 Diário de Hidratação</Text>
            <Text style={styles.subtitle}>Meta diária: {goal}ml</Text>
        </View>

        
    )
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 24,

    },
    title:{
        color: COLORS.primary,
        fontSize: 22,
        fontWeight: 'bold'
    },
    subtitle:{
        fontSize: 14,
        color: COLORS.textMain,
        marginTop: 4
    },

})