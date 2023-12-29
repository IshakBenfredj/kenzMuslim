import { View, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbare from '../components/navbare'
import qudosi from '../constants/qudsi40.json'
import ZikrCard from '../components/zikrCard'
import tailwind from 'twrnc'

export default function KodosiScreen() {
  return (
    <View style={tailwind`bg-white flex-1`}>
        <Navbare back title={'الأربعون القدسية'} />
        {
            qudosi ? 
            <FlatList
            showsVerticalScrollIndicator={false}
            data={qudosi}
            renderItem={({item}) => {
                return (
                    <ZikrCard item={item} hadith index={item.id} />
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