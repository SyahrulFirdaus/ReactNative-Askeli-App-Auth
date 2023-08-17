import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/Router'

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} backgroundColor="#1e2f97" translucent={true} />
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SafeAreaView>
    </>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
