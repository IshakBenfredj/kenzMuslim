import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import tasabi7 from '../constants/tasabi7.json'
import Navbare from '../components/Navbare'
import Tasbih from '../components/Tasbih'

export default function Misbaha() {
  return (
    <View className={`bg-white flex-1`} >
      <Navbare back title={'المسبحة'} />
      {
            tasabi7 ?
            <FlatList
            showsVerticalScrollIndicator={false}
            data={tasabi7}
            renderItem={({item, index}) => {
                return (
                    <Tasbih item={item} index={index + 1} />
                )
            }}
            className={`py-2 px-4`}
        /> : 
          <View className={`h-[160] flex items-center justify-center`}>
              <ActivityIndicator size={1} color="brown" />
          </View>
        }
    </View>
  )
}