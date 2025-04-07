import React, { useEffect, useState } from "react";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Navbare from "../components/Navbare";
import Animated, { FadeInDown } from "react-native-reanimated";
import { router, useLocalSearchParams } from "expo-router";
import { getBookData } from "@/constants/getImamBooks";

export default function Chapters() {
  const { item }: { item: string } = useLocalSearchParams();
  const name = JSON.parse(item).imameLink;
  const [chapters, setChapters] = useState();

  const getChapters = async () => {
    const parsedItem = JSON.parse(item);
    const chapters = await axios.get(`https://raw.githubusercontent.com/A7med3bdulBaset/hadith-json/main/db/by_book/the_9_books/${parsedItem.imameLink}.json`)
    setChapters(chapters.data.chapters)
  }
  useEffect(() => {
    getChapters();
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1" style={{ direction: "rtl" }}>
      <StatusBar style="dark" backgroundColor="#fafafa" translucent={false} />
      <Navbare back title="الفصول" />

      {chapters ? (
        <FlatList
          data={chapters}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Animated.View
              entering={FadeInDown.delay(item.id * 100)
                .duration(600)
                .springify()
                .damping(12)}
            >
              <TouchableOpacity
                className="bg-gray-100 p-2 mb-2 rounded-lg overflow-hidden"
                onPress={() =>
                  router.push({
                    pathname: "/hadiths",
                    params: { item: JSON.stringify(item), name: name },
                  })
                }
              >
                <View className="bg-teal-500 absolute right-0 top-0 bottom-0 w-[5px]" />
                <Text className="text-3xl pt-3 pr-3 font-aregular">
                  {item.arabic ? item.arabic : "أخرى"}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          )}
          className="py-2 px-4 mb-2"
        />
      ) : (
        <View className="h-[50] flex items-center justify-center">
          <ActivityIndicator size="large" color="brown" />
        </View>
      )}
    </SafeAreaView>
  );
}
