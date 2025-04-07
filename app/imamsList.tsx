import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Navbare from "../components/Navbare";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown } from "react-native-reanimated";
import imamsData from "../constants/imams.json";
import { router } from "expo-router";

export default function ImamsList() {
  return (
    <SafeAreaView className="bg-white flex-1" style={{ direction: "rtl" }}>
      <StatusBar style="dark" backgroundColor="#fafafa" translucent={false} />
      <Navbare back title={"الأحاديث النبوية"} />

      {imamsData ? (
        <FlatList
          data={imamsData}
          renderItem={({ item, index }) => (
            <Animated.View
              entering={FadeInDown.delay(index * 100)
                .duration(600)
                .springify()
                .damping(12)}
            >
              <TouchableOpacity
                className="bg-gray-100 p-2 mb-2 rounded-lg overflow-hidden"
                onPress={() =>
                  router.push({
                    pathname: "/chapters",
                    params: { item: JSON.stringify(item) },
                  })
                }
              >
                <View className="bg-teal-500 absolute right-0 top-0 bottom-0 w-[5px]"></View>
                <Text className="text-3xl pt-3 pr-3 font-aregular">
                  {item.imamName}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          )}
          className="px-4 py-2 mb-2"
        />
      ) : (
        <View className="h-[50] flex items-center justify-center">
          <ActivityIndicator size="large" color="brown" />
        </View>
      )}
    </SafeAreaView>
  );
}
