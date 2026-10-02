import { StyleSheet, View, Text, Pressable } from "react-native"
import { COLORS } from "../constants/colors"
    

export function ActionButton({ aguaAcrescimo, reset }) {
    return (
        <View style={styles.container}>
            <Text>Adicionar ao consumo:</Text>
            <View style={styles.buttonRow}>
                <Pressable onPress={() => aguaAcrescimo(100)} style={styles.button}>
                    <Text style={styles.buttonText}>+100</Text>
                </Pressable>

                <Pressable onPress={() => aguaAcrescimo(200)} style={styles.button}>
                    <Text style={styles.buttonText}>+200</Text>
                </Pressable>


                <Pressable onPress={() => aguaAcrescimo(350)} style={styles.button}>
                    <Text style={styles.buttonText}>+350</Text>
                </Pressable>


                <Pressable onPress={() => aguaAcrescimo(500)} style={styles.button}>
                    <Text style={styles.buttonText}>+500</Text>
                </Pressable>

            </View>


            <Pressable onPress={reset} style={styles.resetButton}>
                <Text style={styles.label}>RESET</Text>
            </Pressable>

        </View>


    )
};
const styles = StyleSheet.create({
    container: {
        width: '85%',
        alignSelf:'center'
        
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.textMain,
        marginBottom: 12,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
        marginBottom: 16,
    },
    button: {
        flex: 1,
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 14,
    },
    resetButton: {
        backgroundColor: COLORS.danger,
        borderWidth: 1,
        borderColor: COLORS.danger,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    resetButtonText: {
        color: COLORS.cardBg,
        fontWeight: '600',
        fontSize: 13,
    },
});
