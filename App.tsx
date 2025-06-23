import React from 'react';
import { View, Text, StyleSheet, Button, Alert, useColorScheme, StatusBar } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>
        Hello world!
      </Text>
      <Button title="Press me" onPress={() => Alert.alert('Button pressed!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 20,
    marginBottom: 16,
  },
});

export default App;
