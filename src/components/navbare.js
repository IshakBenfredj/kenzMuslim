import React from 'react'
import { Text, Image, ToastAndroid, ImageBackground, TouchableOpacity } from 'react-native'
import images from '../constants/images'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import tailwind from 'twrnc';

export default function Navbare({back,title}) {
  const navigation = useNavigation()
  return (
    <ImageBackground
      source={images.navbareBg}
      style={tailwind`flex justify-between items-center flex-row px-3 py-1`}
      imageStyle={tailwind`opacity-30`}
    >
      { !back && <Image source={images.intro} style={[tailwind`w-[50px] h-[50px]`]} /> }
      { back && 
        <TouchableOpacity 
          style={tailwind`bg-gray-200 p-2 rounded-lg font-bold`}
          onPress={() => navigation.goBack() }
        >
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      }
      <Text style={[{fontFamily: 'amiri-bold'},tailwind`pt-5 text-3xl text-teal-600`]} >{title ? title : 'كنز المسلم'}</Text>
    </ImageBackground>
  )
}