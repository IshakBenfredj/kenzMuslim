import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import Navbare from '../components/Navbare'
import godNames from '../constants/godNames.json'

export default function GodNamesScreen() {
  return (
    <View className={`bg-white flex-1`}>
        <Navbare back title={'أسماء الله الحسنى'} />
        {
            godNames ?
            <FlatList
            keyExtractor={(item: { name: string }) => item.name}
            showsVerticalScrollIndicator={false}
            data={godNames}
            renderItem={({item,index}) => {
                return (
                    // bg-gray-200 rounded-md w-[10] text-center
                    <View className={`flex-row p-1 bg-teal-600 justify-around mb-2 rounded-lg`}>
                        <Text className={`text-3xl pt-5 text-white font-abold`}>{index+1}</Text>
                        <Text className={`text-3xl pt-5 text-white font-abold`}>{item.name}</Text>
                    </View>
                )
            }}
            className={`py-2 px-4 mb-4`}
        /> : 
          <View className={`h-[160] flex items-center justify-center`}>
              <ActivityIndicator size={1} color="brown" />
          </View>
        }
    </View>
  )
}