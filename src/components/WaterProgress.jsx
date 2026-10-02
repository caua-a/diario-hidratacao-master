import { StyleSheet, View, Text } from "react-native"
import { COLORS } from "../constants/colors"

export function WaterProgress({ aguaConsumida, objetivo }) {

  const percentual = Math.min(Math.round((aguaConsumida / objetivo) * 100), 100)
  let mensagem = ''
  if (percentual >= 100){
   mensagem = "Parabéns, você atingiu sua meta diária!  ❤"
  } else{
   mensagem ='Beba água para completar sua meta!'
  }
  return (
    <View style={styles.card}>
      <Text style={styles.consumedText}>{aguaConsumida} ml</Text>
      <Text style={styles.percentageText}>{percentual}% da meta atingida.</Text>

      <View style={styles.progressBarBackground}>
        {/* + '%', uma concatenação pois sem ela, o width fica apenas como 50 e não 50%. */}
        <View style={styles.progressBarFill} width={percentual + '%'} />
      </View>
    <Text>{mensagem}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 20,
    width: '85%',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  consumedText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  percentageText: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginBottom: 16,
  },
  progressBarBackground: {
    width: '100%',
    height: 12,
    backgroundColor: '#E0F2FE',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.secondary,
    borderRadius: 6,
  },
});