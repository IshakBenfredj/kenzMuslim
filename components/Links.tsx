import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown } from "react-native-reanimated";

interface LinkItem {
  name: string;
  page: ()=>void;
  bgImage: any;
  bgColor: string;
  image: any;
}

interface LinksProps {
  links: LinkItem[];
}

export default function Links({ links }: LinksProps) {
  const navigation = useNavigation();
  return (
    <Animated.View className="flex-row flex-wrap" entering={FadeInDown.duration(500).springify()}>
      {links.map((item) => (
        <TouchableOpacity
          key={item.name}
          onPress={item.page}
          className="w-1/3 p-1"
        >
          <ImageBackground source={item.bgImage} className="rounded-xl overflow-hidden">
            <View className="absolute inset-0 opacity-60 rounded-xl" style={{ backgroundColor: item.bgColor }} />
            <Image source={item.image} className="w-10 h-10 self-center mt-2" />
            <Text className="text-white text-center text-base p-3 font-abold">{item.name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </Animated.View>
  );
}
