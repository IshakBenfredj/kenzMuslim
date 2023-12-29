import { View, Text, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbare from '../components/navbare'
import axios from 'axios'
import { StatusBar } from 'expo-status-bar'
import tailwind from 'twrnc'
import Animated, { FadeInDown } from 'react-native-reanimated';
import azkarData from '../constants/azkar.json'

export default function QuranSurasScreen({navigation}) {
  const [azkarCategories, setAzkarCategories] = useState([])

  const getAzkarCategories = () => {
    const categories = azkarData.map( e => e.category )
    const filter = [...new Set(categories)]
    setAzkarCategories(filter)
  }

  useEffect(()=>{
    getAzkarCategories()
  },[])

  return (
    <SafeAreaView style={tailwind`bg-white flex-1`} >
      <StatusBar style="dark" backgroundColor='#fafafa' translucent={false} />
      <Navbare back title={'الأذكار'} />
        {
          azkarCategories ? 
          <FlatList
            data={azkarCategories}
            key={(item) => item}
            renderItem={({ item, index }) => {
              return (
                <Animated.View entering={FadeInDown.delay(index*100).duration(600).springify().damping(12)}>
                  <TouchableOpacity
                    style={tailwind`bg-gray-100 p-2 mb-2 rounded-lg overflow-hidden`}
                    onPress={()=> navigation.navigate('Azkars', { item })}
                  >
                    <View style={tailwind`bg-teal-500 absolute right-0 top-0 bottom-0 w-[5px]`}></View>
                    <Text style={[tailwind`text-3xl pt-3 pr-3`,{fontFamily: 'amiri-regular'}]}>{item}</Text>
                  </TouchableOpacity>
                </Animated.View>
              )
            }}
            style={tailwind`p-2 mb-2`}
          /> :
          <View style={tailwind`h-[50] flex items-center justify-center`}>
            <ActivityIndicator size="1" color="brown" />
          </View>
        }
    </SafeAreaView>
  )
}