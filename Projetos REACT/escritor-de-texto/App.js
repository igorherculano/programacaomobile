import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>DEATH NOTE</Text>
      
      <TextInput
        style={styles.texto}
        onChangeText={setNome}
        value={nome}
        placeholder="Quem será o próximo?"
        placeholderTextColor="#777" // Cor do placeholder mais sutil
      />

      <Text style={styles.texto}>{nome ||''}</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a', // Fundo preto, como a capa do caderno
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'serif', 
    fontSize: 52,
    fontWeight: 'bold',
    color: '#d1d1d1', 
    textShadowColor: 'rgba(255, 0, 0, 0.4)', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    marginBottom: 50, 
  },
  texto:{
     fontSize: 24,
    color: '#d1d1d1', 
  }
})