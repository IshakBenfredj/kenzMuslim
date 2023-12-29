import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbare from '../components/navbare'
import ZikrCard from '../components/zikrCard'
import tailwind from 'twrnc'
import axios from 'axios'

export default function Ahadith40() {
    const [ahadiths, setAhadiths] = useState()
    const getAhadiths = async () => { 
        const ahadiths = await axios.get('https://raw.githubusercontent.com/A7med3bdulBaset/hadith-json/main/db/by_book/forties/nawawi40.json')
        setAhadiths(ahadiths.data.hadiths)
    }
    
    useEffect(()=>{
        getAhadiths()
    },[])
  return (
    <View style={tailwind`bg-white flex-1`}>
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
            style={tailwind`p-2`}
        /> : 
          <View style={tailwind`h-[160] flex items-center justify-center`}>
              <ActivityIndicator size="1" color="brown" />
          </View>
        }
    </View>
  )
}