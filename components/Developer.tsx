import { View, Text, Linking, ScrollView, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import images from '../constants/images';

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
      className={`p-2`}
      imageClassName={`rounded-xl mb-3`}
    >
        <Text className={`text-3xl text-white pt-3 font-abold`}>مطور التطبيق</Text>
        <Text className={`text-lg py-2 text-gray-100 font-aregular`}>
        السلام عليكم ورحمة الله, معكم أخوكم في الله <Text className={`text-gray-200`}>جيلالي بن فرج إسحاق مطور للمواقع الإلكترونية وتطبيقات الهاتف (Software Engineer MERN Stack Developer )</Text> للتواصل والإستفسار أترك لكم روابط مواقع التواصل الإجتماعي خاصتي :
        </Text>
        <FlatList
          data={socialMedia}
          renderItem={({item}) => {
            return (
              <MaterialCommunityIcons  
                  name={item.name as keyof typeof MaterialCommunityIcons.glyphMap}
                  size={24} 
                  color="black"
                  onPress={()=> Linking.openURL(item.link)}
                  className={`px-2 py-1 text-3xl bg-gray-200 mx-2 rounded-lg`}
                  style={{color: item.color}}
              />
            )
          }}
          horizontal
          className={`m-auto my-3`}
        />
    </ImageBackground>
  )
}