import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';

const TelaMapa = () => {
  return (
    <SafeAreaView
        style={tw`bg-white h-full`}
    >
        <Text>Map</Text> 
    </SafeAreaView>
  )
}

export default TelaMapa

const styles = StyleSheet.create({})