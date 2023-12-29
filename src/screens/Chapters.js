import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { StatusBar } from 'expo-status-bar'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import Navbare from '../components/navbare'
import tailwind from 'twrnc'
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function Chapters({navigation,route}) {
  const { item } = route.params
  const name = item.imameLink
  const [chapters, setChapters] = useState()
  const getChapters = async () => {
    const chapters = await axios.get(`https://raw.githubusercontent.com/A7med3bdulBaset/hadith-json/main/db/by_book/the_9_books/${item.imameLink}.json`)
    setChapters(chapters.data.chapters)
  }

  useEffect(()=>{
    getChapters()
  },[])
  return (
    <SafeAreaView style={tailwind`bg-white flex-1`} >
      <StatusBar style="dark" backgroundColor='#fafafa' translucent={false} />
      <Navbare back title={'الفصول'} />
        {
          chapters ? 
          <FlatList
            data={chapters}
            key={(item) => item}
            renderItem={({ item }) => {
              return (
                <Animated.View entering={FadeInDown.delay(item.id*100).duration(600).springify().damping(12)}>
                  <TouchableOpacity
                    style={tailwind`bg-gray-100 p-2 mb-2 rounded-lg overflow-hidden`}
                    onPress={()=> navigation.navigate('Hadiths', { item, name })}
                  >
                    <View style={tailwind`bg-teal-500 absolute right-0 top-0 bottom-0 w-[5px]`}></View>
                    <Text style={[tailwind`text-3xl pt-3 pr-3`,{fontFamily: 'amiri-regular'}]}>{item.arabic ? item.arabic : 'أخرى'}</Text>
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