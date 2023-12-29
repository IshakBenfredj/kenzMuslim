import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tailwind from 'twrnc'
import images from '../constants/images'

export default function ZikrCard({item,hadith,index}) {
  const itemCount = !hadith && item.count !== '' ? item.count : '1'
  const [count, setCount] = useState(itemCount)

  const handleCount = () => {
    if (count !== 0) {
      setCount(count - 1)
    }
  }
  return (
    <TouchableOpacity 
      style={[tailwind`p-2 bg-gray-100 rounded-lg mb-2`]}
      onPress={handleCount}
    >
      <Text style={[tailwind`text-lg pt-3 leading-2 z-20`,{fontFamily: 'amiri-bold'}]}>{ !hadith ? item.zekr : item.arabic}</Text>
      {!hadith && 
       <View style={tailwind`z-20 relative`}>
          <Text style={[tailwind`text-[17px] mb-1 text-gray-700`,{fontFamily: 'amiri-regular'}]}>{item.description}</Text>
          <ImageBackground
          source={images.islamBg1} 
          imageStyle={tailwind`rounded-lg`}
          >
            <Text style={[tailwind`text-center text-3xl ${count === 0 ? 'bg-red-500' : count === itemCount ? 'bg-teal-500' : 'bg-orange-500'} pt-3 text-white rounded-lg opacity-80`,{fontFamily: 'amiri-bold'}]}>
              {count < 100 && '0'}{count}
            </Text>
          </ImageBackground>
       </View>
      }
      <Text style={[tailwind`absolute text-9xl pt-6 text-gray-200 z-0 opacity-90`,{fontFamily: 'amiri-bold'}]}>{index}</Text>
    </TouchableOpacity>
  )
}