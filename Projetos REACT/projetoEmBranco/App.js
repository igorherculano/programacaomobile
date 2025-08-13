
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>IGOR HERCULANO FormaPARÁ</Text>
    <Button
    title="Clique aqui"
    onPress={() => alert('Botao apertadu!')}
    color="#841584"
    />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfcff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});

