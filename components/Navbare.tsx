import React from 'react'
import { Text, Image, ToastAndroid, ImageBackground, TouchableOpacity } from 'react-native'
import images from '../constants/images'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

export default function Navbare({back,title} : {back?: boolean, title?:string}) {
  const navigation = useNavigation()
  return (
    <ImageBackground
      source={images.navbareBg}
      className={`flex justify-between items-center flex-row-reverse px-6 py-1`}
      imageClassName={`opacity-30`}
      style={{direction:"rtl"}}
    >
      { !back && <Image source={images.intro} className={`w-[50px] h-[50px]`} /> }
      { back && 
        <TouchableOpacity 
        className={`bg-gray-200 p-2 rounded-lg font-bold`}
          onPress={() => router.back() }
        >
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      }
      <Text className={`pt-5 text-3xl text-teal-600 font-abold`} >{title ? title : 'كنز المسلم'}</Text>
    </ImageBackground>
  )
}