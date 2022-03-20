import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';



const TelaComida = () => {
    return (
        <SafeAreaView
            style={tw`bg-white h-full`}
        >
            <Text>Comida</Text> 
        </SafeAreaView>
    )
}

export default TelaComida

const styles = StyleSheet.create({})