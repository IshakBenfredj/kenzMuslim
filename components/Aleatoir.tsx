import React from "react";
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

interface AleatoirProps {
  image: any;
  data: string;
  title: string;
  bg: string;
  res?: string;
  godName?: boolean;
  navigation?: () => void;
}

export default function Aleatoir({
  image,
  data,
  title,
  bg,
  res,
  godName,
  navigation,
}: AleatoirProps) {
  if (data.length) {
    return (
      <View className={`py-2 mt-3`} style={{ direction: "rtl" }}>
        <View className={`flex flex-row justify-between`}>
          <Text className={`text-3xl pt-3 mb-2 font-aregular`}>{title}</Text>
          {navigation && (
            <TouchableOpacity
              onPress={navigation}
              className="flex-row items-center gap-2"
            >
              <Text className={`text-xl pt-3 mb-2 text-gray-500 font-aregular`}>
                الكل
              </Text>
              <AntDesign name="left" size={18} color="#6b7280" />
            </TouchableOpacity>
          )}
        </View>
        <ImageBackground source={image} className={`rounded-xl`}>
          <View
            className={`absolute top-0 right-0 left-0 bottom-0 ${bg} opacity-60 rounded-xl`}
          ></View>
          <View className={`p-3 ${godName && "p-0 pt-3"}`}>
            <Text
              className={`text-xl text-white leading-loose font-abold ${
                godName && "text-[50px] text-center"
              }`}
            >
              {data}
            </Text>
            {res && <Text className={`text-white text-left pl-2 font-aregular`}>{res}</Text>}
          </View>
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <View className={`h-[50] flex items-center justify-center`}>
        <ActivityIndicator size={1} color="brown" />
      </View>
    );
  }
}
