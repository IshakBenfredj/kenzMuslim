import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Navbare from "../components/Navbare";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown } from "react-native-reanimated";
import azkarData from "../constants/azkar.json";
import { router } from "expo-router";

export default function QuranSurasScreen() {
  const [azkarCategories, setAzkarCategories] = useState<string[]>([]);

  const getAzkarCategories = () => {
    const categories = azkarData.map((e) => e.category);
    const filterCateg = [...new Set(categories)];
    setAzkarCategories(filterCateg);
  };

  useEffect(() => {
    getAzkarCategories();
  }, []);

  return (
    <SafeAreaView className={`bg-white flex-1`} style={{ direction: "rtl" }}>
      <StatusBar style="dark" backgroundColor="#fafafa" translucent={false} />
      <Navbare back title={"الأذكار"} />
      {azkarCategories ? (
        <FlatList
          data={azkarCategories}
          keyExtractor={(item: string) => item}
          renderItem={({ item, index }) => {
            return (
              <Animated.View
                entering={FadeInDown.delay(index * 100)
                  .duration(600)
                  .springify()
                  .damping(12)}
              >
                <TouchableOpacity
                  className={`bg-gray-100 p-2 mb-2 rounded-lg overflow-hidden`}
                  onPress={() =>
                    router.push({ pathname: "/azkars", params: { item } })
                  }
                >
                  <View
                    className={`bg-teal-500 absolute right-0 top-0 bottom-0 w-[5px]`}
                  ></View>
                  <Text className={`text-3xl pt-3 pr-3 font-aregular`}>
                    {item}
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            );
          }}
          className={`px-4 py-2 mb-2`}
        />
      ) : (
        <View className={`h-[50] flex items-center justify-center`}>
          <ActivityIndicator size={1} color="brown" />
        </View>
      )}
    </SafeAreaView>
  );
}
