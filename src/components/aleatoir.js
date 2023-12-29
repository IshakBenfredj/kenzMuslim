import { View, Text, ImageBackground, FlatList, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

export default function Aleatoir({image, data,title,bg,res,godName,all,navigation}) {
  if(data.length){
    return (
      <View style={tailwind`py-2 mt-3`}>
        <View style={tailwind`flex flex-row-reverse justify-between`}>
          <Text style={[tailwind`text-3xl pt-3 mb-2`,{fontFamily: 'amiri-bold'}]}>{title}</Text>
          {all && 
          <TouchableOpacity onPress={()=> navigation.navigate(all)}>
            <Text style={[tailwind`text-xl pt-3 mb-2 text-gray-400`,{fontFamily: 'amiri-bold'}]}>الكل</Text>
          </TouchableOpacity>}
        </View>
        <ImageBackground
        source={image}
        imageStyle={tailwind`rounded-xl`}>
            <View style={tailwind`absolute top-0 right-0 left-0 bottom-0 ${bg} opacity-60  rounded-xl`}>
            </View>
            <View style={tailwind`p-3 ${godName && 'p-0 pt-3'}`}>
                <Text style={[tailwind`text-xl text-white leading-loose ${godName && 'text-[50px] text-center'}`, { fontFamily: 'amiri-regular' }]}>
                    {data}
                </Text>
                { res && <Text style={[ tailwind`text-white text-left pl-2`, { fontFamily: 'amiri-regular' }]}>{res}</Text> }
            </View>
        </ImageBackground>
      </View>
      )
  } else {
    return (
    <View style={tailwind`h-[50] flex items-center justify-center`}>
      <ActivityIndicator size="1" color="brown" />
    </View>
)
  }
}