import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [product, setProduct] = useState('');
  const [shoppingList, setShoppingList] = useState([]); // Tallennetaan tuotteet taulukkoon ostoslistaksi.

  const addButtonPressed = () => {
    // console.log([...shoppingList, {key: product} ]);
    setShoppingList([...shoppingList, {key: product}]);
  };

  const clearButtonPressed = () => {
    setShoppingList([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setProduct(text)}
        value={product}
      />
      <View style={styles.button}>
        <Button onPress={addButtonPressed} title="Add" />
        <Button onPress={clearButtonPressed} title="Clear" />
      </View>
      <Text style={styles.h1}>Shopping List: </Text>
        <FlatList style={styles.list}
          data = {shoppingList}
          renderItem = { ({item}) => <Text>{item.key}</Text> }
          keyExtractor = { (item, index) => index.toString()}
        />
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
  input: {
    width: 200,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 50,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 105,
    marginTop: 45,
    marginBottom: 25,
  },
  h1: {
    color: '#0000FF',
    fontWeight: 'bold',
  },
  list: {
    textAlign: 'left',
    marginLeft: -30,
  },
})