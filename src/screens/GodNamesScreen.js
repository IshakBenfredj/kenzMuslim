import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import Navbare from '../components/navbare'
import tailwind from 'twrnc'
import godNames from '../constants/godNames.json'

export default function GodNamesScreen() {
  return (
    <View style={tailwind`bg-white flex-1`}>
        <Navbare back title={'أسماء الله الحسنى'} />
        {
            godNames ?
            <FlatList
            key={item => item.name}
            showsVerticalScrollIndicator={false}
            data={godNames}
            renderItem={({item,index}) => {
                return (
                    // bg-gray-200 rounded-md w-[10] text-center
                    <View style={tailwind`flex-row p-1 bg-teal-600 justify-around mb-2 rounded-lg`}>
                        <Text style={[tailwind`text-3xl pt-4 text-white`,{fontFamily: 'amiri-bold'}]}>{index+1}</Text>
                        <Text style={[tailwind`text-3xl pt-4 text-white`,{fontFamily: 'amiri-bold'}]}>{item.name}</Text>
                    </View>
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