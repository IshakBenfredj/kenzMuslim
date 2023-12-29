import { View, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbare from '../components/navbare'
import axios from 'axios'
import ZikrCard from '../components/zikrCard'
import tailwind from 'twrnc'

export default function HadithsScreen({route}) {
    const { item, name } = route.params
    const [ahadiths, setAhadiths] = useState()
    const getAhadiths = async () => { 
        const ahadiths = await axios.get(`https://raw.githubusercontent.com/A7med3bdulBaset/hadith-json/main/db/by_chapter/the_9_books/${name}/${item.id}.json`)
        setAhadiths(ahadiths.data.hadiths)
    }
    
    useEffect(()=>{
        getAhadiths()
    },[])

  return (
    <View style={tailwind`bg-white flex-1`}>
        <Navbare back title={item.arabic} />
        {
            ahadiths ? 
            <FlatList
            showsVerticalScrollIndicator={false}
            data={ahadiths}
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