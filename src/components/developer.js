import { View, Text, Linking, ScrollView, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import images from '../constants/images';
import tailwind from 'twrnc';

export default function Developer() {
  const socialMedia = [
    {
      name: 'facebook',
      link: 'https://web.facebook.com/profile.php?id=100012679398775',
      color: '#0793f3',
      key: 1
    },
    {
      name: 'facebook',
      link: 'https://web.facebook.com/IshakBenfredjdevloper',
      color: '#0793f3',
      key: 2
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/ishak_benfredj/',
      color: '#c32aa3',
      key: 3
    },
    {
      name: 'youtube',
      link: 'https://www.youtube.com/c/IshakBenfredj',
      color: '#f00',
      key: 4
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/ishak-benfredj-20a4b4226/',
      color: '#0a66c2',
      key: 5
    }
  ]
  return (
    <ImageBackground 
      source={images.footerBg}
      style={tailwind`p-2`}
      imageStyle={tailwind`rounded-xl`}
    >
        <Text style={[tailwind`text-3xl text-white pt-3`,{fontFamily: 'amiri-bold'}]}>مطور التطبيق</Text>
        <Text style={[tailwind`text-lg py-2 text-gray-100`,{fontFamily: 'amiri-regular'}]}>
        السلام عليكم ورحمة الله, معكم أخوكم في الله <Text style={[tailwind`text-gray-200`,{fontFamily: 'amiri-bold'}]}>جيلالي بن فرج إسحاق مطور للمواقع الإلكترونية وتطبيقات الهاتف (Software Engineer MERN Stack Developer )</Text> للتواصل والإستفسار أترك لكم روابط مواقع التواصل الإجتماعي خاصتي :
        </Text>
        <FlatList
          data={socialMedia}
          renderItem={({item}) => {
            return (
              <MaterialCommunityIcons  
                  name={item.name}
                  size={24} 
                  color="black"
                  onPress={()=> Linking.openURL(item.link)}
                  style={tailwind`px-2 py-1 text-3xl bg-gray-200 mx-2 rounded-lg text-[${item.color}]`}
              />
            )
          }}
          horizontal
          style={tailwind`m-auto my-3`}
        />
    </ImageBackground>
  )
}