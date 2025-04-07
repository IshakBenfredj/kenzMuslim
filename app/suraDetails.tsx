import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import images from "../constants/images";
import quranData from "../constants/quran.json";
import { useLocalSearchParams, useRouter } from "expo-router";

interface Verse {
  id: number;
  sura_name_ar: string;
  aya_text_emlaey: string;
}

export default function SuraScreen() {
  const router = useRouter();
  const { index, name } = useLocalSearchParams();

  const suraIndex = Number(index);

  const [suraVerses, setSuraVerses] = useState<Verse[]>([]);
  const [nextSura, setNextSura] = useState<string>("");
  const [lastSura, setLastSura] = useState<string>("");

  // Ensure name is a string, not an array
  const suraName = Array.isArray(name) ? name[0] : name;

  // Optimize: Create a fast lookup map for surah verses
  const suraDataMap = useMemo(() => {
    return quranData.reduce((acc, item) => {
      if (!acc[item.sura_name_ar]) acc[item.sura_name_ar] = [];
      acc[item.sura_name_ar].push(item);
      return acc;
    }, {} as Record<string, Verse[]>);
  }, []);

  useEffect(() => {
    setSuraVerses(suraDataMap[suraName] || []);

    // Get previous & next surah names
    const suraNames: string[] = [
      ...new Set(quranData.map((item) => item.sura_name_ar)),
    ];
    setLastSura(suraNames[suraIndex - 1] || "");
    setNextSura(suraNames[suraIndex + 1] || "");
  }, [suraName, suraDataMap, suraIndex]);

  return (
    <View className="flex-1">
      <StatusBar style="dark" backgroundColor="#fafafa" translucent={false} />

      {/* Header */}
      <ImageBackground
        source={images.islamBg1}
        className="p-3 flex justify-around items-center flex-row"
      >
        <View className="absolute bg-amber-700 top-0 bottom-0 left-0 right-0 opacity-50"></View>
        <Text className="text-white text-lg font-abold">
          <Text>آياتها &nbsp;</Text>
          <Text>{suraVerses.length}</Text>
        </Text>
        <Text className="text-center pt-3 text-3xl text-white font-abold">{suraName}</Text>
        <Text className="text-white text-lg font-abold">
          <Text>رقمها &nbsp;</Text>
          <Text>{suraIndex + 1}</Text>
        </Text>
      </ImageBackground>

      {/* Back Button */}
      <TouchableOpacity
        className="p-3 bg-gray-700 rounded-md mt-3 mx-4"
        onPress={() => router.push("/surat")}
      >
        <Text className="text-center text-white text-2xl font-abold">
          العودة
        </Text>
      </TouchableOpacity>

      {/* Verses List */}
      <ScrollView className="p-4">
        {suraIndex !== 0 && (
          <Text className="text-center text-3xl p-5 text-gray-600 font-abold">
            بِسْمِ <Text className="text-red-700">ٱللَّهِ</Text> ٱلرَّحْمَٰنِ
            ٱلرَّحِيمِ
          </Text>
        )}

        {suraVerses.length > 0 ? (
          <Text className="text-3xl text-right py-3 leading-2 font-aregular leading-[55px]">
            {suraVerses.map((item, i) => (
              <Text
                key={item.id}
                className="flex flex-row items-center justify-center"
              >
                <Text> {item.aya_text_emlaey} </Text>
                <ImageBackground className="px-2" source={images.aya}>
                  <Text>{i + 1}</Text>
                </ImageBackground>
              </Text>
            ))}
          </Text>
        ) : (
          <View className="h-160 flex items-center justify-center">
            <ActivityIndicator size="large" color="brown" />
          </View>
        )}

        {/* Previous Surah Button */}
        {suraIndex !== 0 && lastSura && (
          <TouchableOpacity
            className="p-3 bg-amber-700 mb-3 rounded-md"
            onPress={() =>
              router.push({
                pathname: "/suraDetails",
                params: { index: String(suraIndex - 1), name: lastSura },
              })
            }
          >
            <Text className="text-center text-white text-2xl pt-2 font-abold">
              السورة السابقة ({lastSura})
            </Text>
          </TouchableOpacity>
        )}

        {/* Next Surah Button */}
        {suraIndex !== 113 && nextSura && (
          <TouchableOpacity
            className="p-3 bg-amber-700 mb-3 rounded-md"
            onPress={() =>
              router.push({
                pathname: "/suraDetails",
                params: { index: String(suraIndex + 1), name: nextSura },
              })
            }
          >
            <Text className="text-center text-white text-2xl pt-2 font-abold">
              السورة التالية ({nextSura})
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}
