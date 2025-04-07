import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbare from '../components/Navbare'
import ZikrCard from '../components/ZikrCard'
import nawawi40 from "../constants/40-hadith-nawawi.json"

export default function Ahadith40() {
    const [ahadiths, setAhadiths] = useState(nawawi40)
    
    useEffect(()=>{
        setAhadiths(nawawi40)
    },[])
  return (
    <View className={`bg-white flex-1`} style={{direction : "rtl"}}>
        <Navbare back title={'الأربعون النووية'} />
        {
            ahadiths ?
            <FlatList
            showsVerticalScrollIndicator={false}
            data={ahadiths}
            renderItem={({item,index}) => {
                return (
                    <ZikrCard item={item} hadith index={index+1} />
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