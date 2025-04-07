import { View, Text, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbare from '../components/Navbare'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeInDown } from 'react-native-reanimated'

// Import local JSON
import quranData from '../constants/quran.json';
import { router } from 'expo-router'

export default function QuranSurasScreen() {
  const [surasNames, setSurasNames] = useState<string[]>([])

  useEffect(() => {
    const uniqueSuras = [...new Set(quranData.map(item => item.sura_name_ar))];
    setSurasNames(uniqueSuras);
  }, []);

  return (
    <SafeAreaView className={`bg-white flex-1`}>
      <StatusBar style="dark" backgroundColor='#fafafa' translucent={false} />
      <Navbare back title={'القرآن الكريم'} />

      {surasNames.length > 0 ? (
        <FlatList
          data={surasNames}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Animated.View entering={FadeInDown.delay(index * 100).duration(600).springify().damping(12)}>
              <TouchableOpacity
                className={`bg-gray-100 p-2 mb-2 rounded-lg overflow-hidden flex flex-row justify-between items-center`}
                onPress={() => router.push({ pathname: '/suraDetails', params: { index, name: item } })}
              >
                <View className={`bg-teal-500 absolute right-0 top-0 bottom-0 w-[5px]`}></View>
                <Text className={`text-2xl bg-teal-300 text-center pt-2 px-2 h-[30px] rounded-lg font-aregular`}>
                  {index + 1}
                </Text>
                <Text className={`text-3xl pt-3 pr-3 font-aregular`}>{item}</Text>
              </TouchableOpacity>
            </Animated.View>
          )}
          className={`p-2 mb-2`}
        />
      ) : (
        <View className={`h-[50] flex items-center justify-center`}>
          <ActivityIndicator size="large" color="brown" />
        </View>
      )}
    </SafeAreaView>
  );
}
