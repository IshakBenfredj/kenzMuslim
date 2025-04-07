import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React, { useState } from "react";
import images from "../constants/images";

interface TasbihProps {
  tasbih: string;
  description: string;
}

export default function Tasbih({
  item,
  index,
}: {
  item: TasbihProps;
  index: number;
}) {
  const [count, setCount] = useState(100);
  const handleCount = () => {
    if (count !== 1) {
      setCount(count - 1);
    } else {
      setCount(100);
    }
  };
  return (
    <TouchableOpacity
      className={`p-2 bg-gray-100 rounded-lg mb-2`}
      onPress={handleCount}
      style={{ direction: "rtl" }}
    >
      <Text className={`text-xl pt-3 leading-10 z-20 font-abold`}>{item.tasbih}</Text>
      <View className={`z-20 relative`}>
        {item.description && <Text className={`text-[17px] text-gray-700 font-aregular`}>
          {item.description}
        </Text>}
        <ImageBackground source={images.islamBg1} imageClassName={`rounded-lg`} className="mt-2">
          <Text
            className={`text-center text-3xl ${
              count !== 100 ? "bg-orange-500" : "bg-teal-500"
            } pt-3 text-white rounded-lg opacity-80`}
          >
            {count}
          </Text>
        </ImageBackground>
      </View>
      <Text className={`absolute text-9xl pt-6 text-gray-200 z-0 opacity-90 font-abold`}>
        {index}
      </Text>
    </TouchableOpacity>
  );
}
