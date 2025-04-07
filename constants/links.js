import { router } from "expo-router";
import images from "./images";

export default links = [
    {
        name: 'القرآن الكريم',
        image: images.coranIcon,
        bgImage: images.quranBg,
        bgColor: '#059669',
        page: () => router.push('/surat')
    },
    {
        name: 'الأذكار',
        image: images.priere,
        bgImage: images.islamBg1,
        bgColor: '#5b21b6',
        page: () => router.push('/azkarCateg')
    },
    {
        name: 'الأحاديث النبوية',
        image: images.mohamed,
        bgImage: images.islamBg2,
        bgColor: '#155e75',
        page: () => router.push('/imamsList')
    },
    {
        name: 'المسبحة',
        image: images.tasbih,
        bgImage: images.islamBg,
        bgColor: '#a16207',
        page: () => router.push('/misbaha')
    },
    {
        name: 'الأربعون القدسية',
        image: images.mohamed,
        bgImage: images.islamBg2,
        bgColor: '#991b1b',
        page: () => router.push('/kodosi')
    },
]