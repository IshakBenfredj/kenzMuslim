import { View, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbare from '../components/Navbare'
import qudosi from '../constants/qudsi40.json'
import ZikrCard from '../components/ZikrCard'

export default function KodosiScreen() {
  return (
    <View className={`bg-white flex-1`} style={{ direction: "rtl" }}>
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
            className={`py-2 px-4 mb-8`}
        /> : 
          <View className={`h-[160] flex items-center justify-center`}>
              <ActivityIndicator size={1} color="brown" />
          </View>
        }
    </View>
  )
}