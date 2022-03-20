import { StyleSheet, Text, View, Image} from 'react-native';

import React from 'react';

import {
    SafeAreaView
} from 'react-native-safe-area-context';

import tw from 'twrnc';

import NavOpcoes from '../components/NavOpcoes';

const TelaInicial = () => {


  return (
    <SafeAreaView
        style={tw`bg-white h-full`}
    >
        <View
            style={tw`p-5`}
        >
            <Image
                source={{
                    uri: 'https://links.papareact.com/gzs', 
                }}
                style={{
                    height: 100,
                    width: 100,
                    resizeMode: 'contain'
                }}
            />


            <NavOpcoes />
        </View>

    </SafeAreaView>
   
  )
}

export default TelaInicial



const styles = StyleSheet.create({
    text: {
        color: 'blue'
    }
})