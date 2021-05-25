import { StatusBar } from 'expo-status-bar';
import React, {useState, useCallback, memo} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = memo(({ title }) => {
  console.log('Renderizado!');
  return <Text>{title}</Text>
})

export default function App() {
  const [cont, setCont] = useState(0)
  const incrementar = useCallback(()=>{
    setCont(cont + 1)
  }, [cont])
  const decrementar = useCallback(()=>{
    setCont(cont - 1)
  })

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={()=>incrementar()}>+</Text>
      <Text style={styles.text}>{cont}</Text>
      <Text style={styles.text} onPress={()=>decrementar()}>-</Text>
      <Title title="hola soy titulo" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    fontSize: 55,
  }
});
