import { View, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Navbare from "../components/Navbare";
import axios from "axios";
import ZikrCard from "../components/ZikrCard";
import { useLocalSearchParams } from "expo-router";

export default function HadithsScreen() {
  const { item, name }: { item: string; name: string } = useLocalSearchParams();
  const itemJson = JSON.parse(item);
  const [ahadiths, setAhadiths] = useState();

  const getAhadiths = async () => {
    try {
      const response = await axios.get(
        `https://raw.githubusercontent.com/A7med3bdulBaset/hadith-json/main/db/by_chapter/the_9_books/${name}/${itemJson.id}.json`
      );
      setAhadiths(response.data.hadiths);
    } catch (error) {
      console.error("Error fetching hadiths:", error);
    }
  };

  useEffect(() => {
    getAhadiths();
  }, []);

  return (
    <View className={`bg-white flex-1`} style={{direction : "rtl"}}>
      <Navbare back title={itemJson.arabic} />
      {ahadiths ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ahadiths}
          keyExtractor={(hadith, index) => index.toString()}
          renderItem={({ item }) => (
            <ZikrCard item={item} hadith={true} index={item.id} />
          )}
          className={`px-4 py-2 mb-9`}
        />
      ) : (
        <View className={`h-[160] flex items-center justify-center`}>
          <ActivityIndicator size="large" color="brown" />
        </View>
      )}
    </View>
  );
}
