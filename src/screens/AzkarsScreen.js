import { View, FlatList, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbare from '../components/navbare'
import ZikrCard from '../components/zikrCard'
import axios from 'axios'
import tailwind from 'twrnc'
import azkarData from '../constants/azkar.json'

export default function AzkarsScreen({route}) {
    const {item} = route.params
    const [azkar, setAzkar] = useState()

  const getAzkar = () => {
    const  filterAzkar = azkarData.filter( e => e.category === item )
    setAzkar(filterAzkar)
  }

  useEffect(()=>{
    getAzkar()
  },[])

  return (
    <View style={tailwind`bg-white flex-1`}>
        <Navbare back title={item} />
        {
            azkar ? 
            <FlatList
            showsVerticalScrollIndicator={false}
            data={azkar}
            renderItem={({item, index}) => {
                return (
                    <ZikrCard item={item} index={index + 1} />
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