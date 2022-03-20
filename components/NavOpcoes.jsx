import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const dados = [
    {
        id: '123',
        titulo: 'Fazer uma corrida',
        imagem: 'https://links.papareact.com/3pn',
        tela: 'TelaMapa'
    },
    {
        id: '456',
        titulo: 'Pedir comida',
        imagem: 'https://links.papareact.com/28w',
        tela: 'TelaComida'
    },
]



const NavOpcoes = () => {

    const navigation = useNavigation()

    return (
        <View>
            <FlatList
                data={dados}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (

                    <TouchableOpacity
                        onPress={() => navigation.navigate(item.tela)}
                        style={[tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`, {justifyContent: 'space-between'}]}
                    >
                        <Image
                            style={{width: 120, height: 120, resizeMode: 'contain'}}
                            source={{uri: item.imagem}}
                        />

                        <Text
                            style={tw`mt-2 text-lg font-semibold`}
                        >{item.titulo}</Text>

                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name='arrowright'
                            type='antdesign'
                            color='white'
                        /> 
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default NavOpcoes

const styles = StyleSheet.create({})