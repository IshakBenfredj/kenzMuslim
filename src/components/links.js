import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, FlatList, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import tailwind from 'twrnc';

export default function Links({ links }) {
  const navigation = useNavigation();
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}
      style={tailwind`flex flex-row-reverse flex-wrap gap-1`}
    >
      {/* <FlatList
        data={links}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={tailwind`m-auto mt-2`}
        renderItem={({ item,index }) => {
          return (
            <TouchableOpacity 
              key={item.name} 
              style={tailwind`${index !== 0 && 'ml-1'}`}
              onPress={()=> navigation.navigate(item.link)}
            >
              <ImageBackground source={item.bgImage} imageStyle={tailwind`rounded-xl`}>
                <View style={tailwind`absolute top-0 right-0 left-0 bottom-0 ${item.bgColor} opacity-60 rounded-xl`}>
                </View>
                <Image style={[{
                    width: 40,
                    height: 40,
                  },tailwind`m-auto mt-2`]}
                  source={item.image} />
                <Text style={[tailwind`text-white text-center text-xl p-3`, {fontFamily: 'amiri-bold' }]}>
                  {item.name}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      /> */}
      {
        links.reverse().map( (item,index) => {
          return <TouchableOpacity 
            key={item.name} 
            onPress={()=> navigation.navigate(item.link)}
          >
            <ImageBackground source={item.bgImage} imageStyle={tailwind`rounded-xl`}>
              <View style={tailwind`absolute top-0 right-0 left-0 bottom-0 ${item.bgColor} opacity-60 rounded-xl`}>
              </View>
              <Image style={[{
                  width: 40,
                  height: 40,
                },tailwind`m-auto mt-2`]}
                source={item.image} />
              <Text style={[tailwind`text-white text-center text-xl p-3`, {fontFamily: 'amiri-bold' }]}>
                {item.name}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        })
      }
    </Animated.View>
  );
}