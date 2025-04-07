import { View, FlatList, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Navbare from "../components/Navbare";
import ZikrCard from "../components/ZikrCard";
import azkarData from "../constants/azkar.json";
import { useLocalSearchParams } from "expo-router";

export interface ZikrProps {
  category?: string;
  count?: string;
  description?: string;
  reference?: string;
  zekr?: string;
  arabic?: string;
  english?: {
    narrator: string;
    text: string;
  };
  id?: number;
}

export default function AzkarsScreen() {
  const { item }: { item: string } = useLocalSearchParams();
  const [azkar, setAzkar] = useState<ZikrProps[]>();

  const getAzkar = () => {
    const filterAzkar = azkarData.filter((e) => e.category === item);
    setAzkar(filterAzkar);
  };

  useEffect(() => {
    getAzkar();
  }, []);

  return (
    <View className={`bg-white flex-1`} style={{ direction: "rtl" }}>
      <Navbare back title={item} />
      {azkar ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={azkar}
          renderItem={({ item, index }) => {
            return <ZikrCard item={item} index={index + 1} />;
          }}
          className={`px-4 py-2`}
        />
      ) : (
        <View className={`h-[160] flex items-center justify-center`}>
          <ActivityIndicator size={1} color="brown" />
        </View>
      )}
    </View>
  );
}
