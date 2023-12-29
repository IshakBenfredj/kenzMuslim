import { View, Text, Image, ScrollView, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbare from '../components/navbare'
import images from '../constants/images'
import Aleatoir from '../components/aleatoir'
import Links from '../components/links'
import links from '../constants/links'
import axios from 'axios'
import Developer from '../components/developer'
import { StatusBar } from 'expo-status-bar'
import tailwind from 'twrnc'

export default function HomeScreen({navigation}) {
  const [dikr, setDikr] = useState('')
  const [aya, setAya] = useState('')
  const [res, setRes] = useState('')
  const [nawawi, setNawawi] = useState('')
  const [godName, setGodName] = useState('')
    const aleatoirDikr = async () => {
        const dikr = await axios.get(`https://ayah.nawafdev.com/api/dekr?types=t`)
        setDikr(dikr.data.content)
    }
    const aleatoirAya = async () => {
      const x = Math.floor(Math.random() * 6236) + 1;
      const aya = await axios.get(`https://api.alquran.cloud/v1/ayah/${x}/ar.alafasy`)
      setAya(aya.data.data.text)
      setRes(`${aya.data.data.surah.name} ${aya.data.data.surah.numberOfAyahs}`)
    }
    const aleatoirNawawi = async () => {
      const x = Math.floor(Math.random() * 40);
      const nawawi = await axios.get('https://raw.githubusercontent.com/osamayy/40-hadith-nawawi-db/main/40-hadith-nawawi.json');
      setNawawi(nawawi.data[x].hadith)
    };
    const aleatoirGodName = async () => {
      const x = Math.floor(Math.random() * 100);
      const godNames = await axios.get('https://raw.githubusercontent.com/Mohamed-Nagdy/Quran-App-Data/main/names_of_allah.json');
      setGodName(godNames.data.data[x].name)
    };

    useEffect(() => {
        aleatoirDikr()
        aleatoirAya()
        aleatoirNawawi()
        aleatoirGodName()
    },[])

  return (
      <View style={tailwind`bg-white flex-1`}>
        <StatusBar style="dark" backgroundColor='#fafafa' translucent={false} />
        <Navbare />
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 10}}
          style={tailwind`px-2`} 
        >
          <View>
            <Image source={images.coran} style={tailwind`m-auto mt-2 w-[120px] h-[120px]`} />
          </View>
          <Aleatoir 
            data={dikr} 
            image={images.islamBg}
            title={'ذكر أو تسبيحة'} 
            bg={'bg-teal-700'}
          />
          <Text style={[tailwind`text-3xl pt-3`,{fontFamily: 'amiri-bold'}]}>الإختصارات</Text>
          <Links links={links} />

          <Aleatoir 
            data={aya} 
            image={images.islamBg2}
            title={'آية من القرآن الكريم'}
            res={res}
            bg={'bg-emerald-700'}
          />
          
          <Aleatoir 
            data={nawawi} 
            image={images.islamBg1}
            title={'حديث نووي'} 
            bg={'bg-pink-800'}
            navigation={navigation}
            all={'Ahadith40'}
          />
          
          <Aleatoir
            data={godName} 
            image={images.islamBg}
            title={'من أسماء الله الحسنى'} 
            bg={'bg-yellow-800'}
            godName
            all={'GodNames'}
            navigation={navigation}
          />

          {/* Develover Section */}
          <Developer />

        </ScrollView>
      </View>
  )
}


