import { View, Text, Image, ScrollView, useColorScheme } from "react-native";
import React, { useEffect, useState } from "react";
import Navbare from "../components/Navbare";
import images from "../constants/images";
import Aleatoir from "../components/Aleatoir";
import Links from "../components/Links";
import links from "../constants/links";
import axios from "axios";
import Developer from "../components/Developer";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import hadith40Data from "../constants/40-hadith-nawawi.json";
import godNames from "../constants/godNames.json";
import quran from "../constants/quran.json";
import azkar from "../constants/adkar.json";

export default function HomeScreen() {
  const [dikr, setDikr] = useState("");
  const [aya, setAya] = useState("");
  const [res, setRes] = useState("");
  const [nawawi, setNawawi] = useState("");
  const [godName, setGodName] = useState("");

  const aleatoirDikr = () => {
    const randomIndex = Math.floor(Math.random() * azkar.length);
    setDikr(azkar[randomIndex].content);
  };

  const aleatoirAya = () => {
    const randomIndex = Math.floor(Math.random() * quran.length);
    const ayaData = quran[randomIndex];

    setAya(ayaData.aya_text_emlaey);
    setRes(`${ayaData.sura_name_ar} - الآية ${ayaData.aya_no}`);
  };

  const aleatoirNawawi = async () => {
    const x = Math.floor(Math.random() * 40);
    setNawawi(hadith40Data[x].arabic);
  };
  const aleatoirGodName = async () => {
    const x = Math.floor(Math.random() * 100);
    setGodName(godNames[x].name);
  };

  useEffect(() => {
    aleatoirDikr();
    aleatoirAya();
    aleatoirNawawi();
    aleatoirGodName();
  }, []);

  return (
    <SafeAreaView className={`bg-white flex-1`} style={{ direction: "rtl" }}>
      <StatusBar style="dark" backgroundColor="#fafafa" translucent={false} />
      <Navbare />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingBottom: 10 }}
        className={`px-3`}
      >
        <View>
          <Image
            source={images.coran}
            className={`m-auto mt-2 w-[120px] h-[120px]`}
          />
        </View>
        <Text className={`text-3xl pt-3 font-aregular`}>الإختصارات</Text>
        <Links links={links} />
        <Aleatoir
          data={dikr}
          image={images.islamBg}
          title={"ذكر - تسبيحة - دعاء"}
          bg={"bg-teal-700"}
        />

        <Aleatoir
          data={aya}
          image={images.islamBg2}
          title={"آية من القرآن الكريم"}
          res={res}
          bg={"bg-emerald-700"}
        />

        <Aleatoir
          data={nawawi}
          image={images.islamBg1}
          title={"حديث نووي"}
          bg={"bg-pink-800"}
          navigation={() => router.push("/nawawi")}
        />

        <Aleatoir
          data={godName}
          image={images.islamBg}
          title={"من أسماء الله الحسنى"}
          bg={"bg-yellow-800"}
          godName
          navigation={() => router.push("/godNames")}
        />

        {/* Develover Section */}
        <Developer />
      </ScrollView>
    </SafeAreaView>
  );
}
