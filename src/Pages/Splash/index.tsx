import React, { useEffect } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { WARNA_PRIMARY } from '../../utils';
import { IconAskeli2 } from 'assets';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Beranda');
    }, 4000)
  }, [navigation]);

  return (
    <View style={{
      flex: 1,
      backgroundColor: WARNA_PRIMARY,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <IconAskeli2 />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#ffffff',
    textAlign: 'center'
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: -10,
    color: '#ffffff',
    textAlign: 'center'
  }

})