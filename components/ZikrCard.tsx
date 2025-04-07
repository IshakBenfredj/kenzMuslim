import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import images from "../constants/images";
import { ZikrProps } from "@/app/azkars";

interface ZikrCardProps {
  item: ZikrProps;
  hadith?: boolean;
  index: number;
}

export default function ZikrCard({ item, hadith, index }: ZikrCardProps) {
  const itemCount = !hadith && item.count ? parseInt(item.count) : 1;
  const [count, setCount] = useState(itemCount);
  const [isModalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    if (hadith && item.description) {
      setModalVisible(true);
    } else if (count !== 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <TouchableOpacity
        className="p-2 bg-gray-100 rounded-lg mb-2"
        onPress={handlePress}
      >
        <Text className="text-xl pt-3 leading-10 z-20 font-abold">
          {!hadith ? item.zekr : item.arabic}
        </Text>
        {!hadith && (
          <View className="z-20 relative">
            {item.description && (
              <Text className="text-[17px] text-gray-700 font-aregular">
                {item.description}
              </Text>
            )}
            <ImageBackground
              source={images.islamBg1}
              imageStyle={{ borderRadius: 8 }}
              className="mt-2"
            >
              <Text
                className={`text-center text-3xl pt-3 text-white rounded-lg opacity-80 font-abold
                ${
                  count === 0
                    ? "bg-red-500"
                    : count === itemCount
                    ? "bg-teal-500"
                    : "bg-orange-500"
                }`}
              >
                {count < 100 && "0"}
                {count}
              </Text>
            </ImageBackground>
          </View>
        )}
        {hadith && item.description && (
          <Text className="mt-2 font-abold text-red-500">
            إضغط لتصفح شرح الحديث ومعناه
          </Text>
        )}
        <Text className="absolute text-9xl pt-6 text-gray-200 z-0 opacity-90 font-bold">
          {index}
        </Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} transparent animationType="fade">
        <View className="flex-1 justify-center items-center bg-black/70">
          <View className="bg-white p-4 rounded-lg w-11/12 max-h-[80%]">
            <ScrollView className="mt-2 max-h-[500px]">
              <Text className="text-gray-700 font-aregular leading-8 text-lg">
                {item.description}
              </Text>
            </ScrollView>

            <Pressable
              onPress={() => setModalVisible(false)}
              className="mt-4 bg-teal-500 p-2 rounded-lg"
            >
              <Text className="text-white text-center font-abold">إغلاق</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}
