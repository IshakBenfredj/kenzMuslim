import { View, Text, ScrollView, ImageBackground, FlatList, ActivityIndicator, ActivityIndicatorBase, ActivityIndicatorComponent, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import tailwind from 'twrnc'
import { StatusBar } from 'expo-status-bar'
import axios from 'axios'
import images from '../constants/images'

export default function SuraScreen({route, navigation}) {
    const {index, name } = route.params
    const [sura, setSura] = useState()
    const [nextSura, setNextSura] = useState('')
    const [lastSura, setLastSura] = useState('')

    const getSura = async () => {
        setSura()
        const sura = await axios.get(`https://raw.githubusercontent.com/Mohamed-Nagdy/Quran-App-Data/main/Quran%20Suras/surah_${index + 1}.json`)
        setSura(sura.data)
    }
    const getNextAndLastSuras = async () => {
        setLastSura()
        setNextSura()
        const lastSura = await axios.get(`https://ayah.nawafdev.com/api/quran/previous_sura?sura=${name}`)
        setLastSura(lastSura.data.sura)
        const nextSura = await axios.get(`https://ayah.nawafdev.com/api/quran/next_sura?sura=${name}`)
        setNextSura(nextSura.data.sura)
    }

    useEffect(()=>{
        getNextAndLastSuras()
        getSura()
    },[index])

  return (
    <View style={tailwind`flex-1`}>
        <StatusBar style="dark" backgroundColor='#fafafa' translucent={false} />
        <ImageBackground 
            source={images.islamBg1}
            style={tailwind`p-3 flex justify-around items-center flex-row`}
        >
            <View style={tailwind`absolute bg-amber-700 top-0 bottom-0 left-0 right-0 opacity-50` }></View>
            <Text style={[tailwind`text-white text-lg`,{fontFamily: 'amiri-bold'}]}>
                <Text style={tailwind``}>آياتها &nbsp;</Text>
                <Text style={tailwind`p-2`}>{sura && sura.count}</Text>
            </Text>
            <Text style={[tailwind`text-center pt-3 text-3xl text-white`,{fontFamily: 'amiri-bold'}]}>{name}</Text>
            <Text style={[tailwind`text-white text-lg`,{fontFamily: 'amiri-bold'}]}>
                <Text style={tailwind``}>رقمها &nbsp;</Text>
                <Text style={tailwind`p-2`}>{index+1}</Text>
            </Text>
        </ImageBackground>
        <ScrollView
            style={tailwind`p-2`}
        >
        {index !== 0 && <Text
         style={[tailwind`text-center text-3xl p-5 text-gray-600`,{fontFamily: 'amiri-bold'}]}>
            بِسْمِ <Text style={tailwind`text-red-700`}>ٱللَّهِ</Text> ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </Text> }
        {
        sura ?
            <Text style={[tailwind`text-3xl text-right py-3 leading-2`,{fontFamily: 'amiri-regular'}]}>
                {Object.keys(sura.verse).map((verseKey,i) => (
                    <Text key={verseKey} style={tailwind`flex flex-row items-center justify-center`}>
                        {index === 0  ? <Text>  {sura.verse[verseKey]}  </Text> 
                        : verseKey !== 'verse_0' &&  <Text>  {sura.verse[verseKey]}  </Text> }
                        <ImageBackground
                            style={tailwind`px-2`}
                            imageStyle={tailwind``}
                            source={images.aya}
                        >
                            {index === 0  ? <Text>  {i + 1}  </Text> 
                        : verseKey !== 'verse_0' &&  <Text>  {i}  </Text> }
                        </ImageBackground>
                    </Text>
                ))}
            </Text> :
            <View style={tailwind`h-[160] flex items-center justify-center`}>
                <ActivityIndicator size="1" color="brown" />
            </View>
        }
         { index !== 0 && lastSura && 
            <TouchableOpacity
             style={[tailwind`p-3 bg-amber-700 mb-3 rounded-md`]}
             onPress={()=> navigation.navigate('Sura', { index: index-1, name: lastSura })}>
                <Text style={[tailwind`text-center text-white text-2xl pt-2`,{fontFamily: 'amiri-bold'}]}>السورة السابقة ({lastSura})</Text>
            </TouchableOpacity>}
            { index !== 113 && nextSura && 
            <TouchableOpacity 
             style={[tailwind`p-3 bg-amber-700 mb-3 rounded-md`]}
             onPress={()=> navigation.navigate('Sura', { index: index+1, name: nextSura })}>
                <Text style={[tailwind`text-center text-white text-2xl pt-2`,{fontFamily: 'amiri-bold'}]}>السورة التالية ({nextSura})</Text>
            </TouchableOpacity>
         }
        </ScrollView>
    </View>
  )
}









// i want create app like tik tok by named "fidni" , using react native , nodejs, express js, mongo db , this app make authentication and publish texts and photos and reels videos ,  user have profile , settings , and videos that he likes , and watch video will be enable just for one hour in day , how can i do all this , give me all packages that i need , and map to develop this app 