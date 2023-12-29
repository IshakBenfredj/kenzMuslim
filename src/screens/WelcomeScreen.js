import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import images from '../constants/images';
import tailwind from 'twrnc';

export default function WelcomeScreen() {
    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);

    const navigation = useNavigation();
  
    useEffect(()=>{
        ring1padding.value = 0;
        ring2padding.value = 0;
        setTimeout(()=> ring1padding.value = withSpring(ring1padding.value+hp(4)), 100);
        setTimeout(()=> ring2padding.value = withSpring(ring2padding.value+hp(4.5)), 300);

        setTimeout(()=> navigation.navigate('Home'), 2500)
    },[])

    return (
        <SafeAreaView style={tailwind`flex-1 justify-center items-center bg-teal-600`}>
            <StatusBar style="dark" backgroundColor='#fafafa' translucent={false} />

            <Animated.View style={[tailwind`bg-white/20 rounded-full`, { padding: ring1padding }]}>
                <Animated.View style={[tailwind`bg-white/20 rounded-full`, { padding: ring2padding }]}>
                    <Image source={images.intro} style={{ width: hp(25), height: hp(25) }} />
                </Animated.View>
            </Animated.View>
 
            <View style={tailwind`flex items-center`}>
                <Text style={[tailwind`text-white`, { fontFamily: 'amiri-bold', fontSize: hp(9) }]}>ذكرني</Text>
                <Text style={[tailwind`font-medium text-white`, { fontSize: hp(3), fontFamily: 'amiri-boldItalic' }]}>
                    ألا بذكر الله تطمئن القلوب
                </Text>
            </View>
        </SafeAreaView>
    );
}