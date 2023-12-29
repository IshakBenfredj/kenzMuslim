import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import tasabi7 from '../constants/tasabi7.json'
import Navbare from '../components/navbare'
import tailwind from 'twrnc'
import Tasbih from '../components/tasbih'

export default function Misbaha() {
  return (
    <View style={tailwind`bg-white flex-1`} >
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
            style={tailwind`p-2`}
        /> : 
          <View style={tailwind`h-[160] flex items-center justify-center`}>
              <ActivityIndicator size="1" color="brown" />
          </View>
        }
    </View>
  )
}