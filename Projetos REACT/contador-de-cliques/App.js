import React, { useState } from 'react';
// Importamos o TouchableOpacity para tornar a imagem clicável
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  // 1. Criamos um estado para controlar o tamanho da imagem, começando em 100
  const [tamanho, setTamanho] = useState(100);

  // Função que será chamada a cada clique
  const handleImagePress = () => {
    // Aumenta o contador
    setContador(contador + 1);
    // Aumenta o tamanho da imagem em 10 pixels
    setTamanho(tamanho + 10);
  };

  return (
    <View style={styles.container}>
      {/* 2. Envolvemos a imagem com o TouchableOpacity */}
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={require('./assets/mario.png')}
          // 3. O estilo agora usa o estado 'tamanho' para definir a largura e altura
          style={{ 
            width: tamanho, 
            height: tamanho,
            marginBottom: 20, // Adicionado um espaço
          }} 
        />
      </TouchableOpacity>

      <Text style={styles.texto}>Clicou {contador} vezes</Text>
      
      {/* O botão antigo foi removido */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 24,
    color: '#fc0707fd',
  },
});