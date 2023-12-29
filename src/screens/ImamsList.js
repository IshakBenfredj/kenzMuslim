import { View, Text, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbare from '../components/navbare'
import axios from 'axios'
import { StatusBar } from 'expo-status-bar'
import tailwind from 'twrnc'
import Animated, { FadeInDown } from 'react-native-reanimated';
import imamsData from '../constants/imams.json'

export default function ImamsList({navigation}) {
  return (
    <SafeAreaView style={tailwind`bg-white flex-1`} >
      <StatusBar style="dark" backgroundColor='#fafafa' translucent={false} />
      <Navbare back title={'الأحاديث النبوية'} />
        {
          imamsData ?
          <FlatList
            data={imamsData}
            renderItem={({ item, index }) => {
              return (
                <Animated.View entering={FadeInDown.delay(index*100).duration(600).springify().damping(12)}>
                  <TouchableOpacity
                    style={tailwind`bg-gray-100 p-2 mb-2 rounded-lg overflow-hidden`}
                    onPress={()=> navigation.navigate('Chapters', { item })}
                  >
                    <View style={tailwind`bg-teal-500 absolute right-0 top-0 bottom-0 w-[5px]`}></View>
                    <Text style={[tailwind`text-3xl pt-3 pr-3`,{fontFamily: 'amiri-regular'}]}>{item.imamName}</Text>
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