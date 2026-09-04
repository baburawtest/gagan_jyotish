export interface PanchangDetail {
  dateFormatted: string;
  dayOfWeek: string;
  dayOfWeekHi: string;
  vikramSamvat: string;
  shakaSamvat: string;
  ayana: string;
  ritu: string;
  masa: string;
  paksha: string;
  tithi: {
    name: string;
    nameHi: string;
    till: string;
    nextTithi: string;
  };
  nakshatra: {
    name: string;
    nameHi: string;
    pada: number;
    till: string;
    rulingPlanet: string;
  };
  yoga: {
    name: string;
    nameHi: string;
    till: string;
  };
  karana: {
    name: string;
    nameHi: string;
    till: string;
  };
  sunSign: string;
  moonSign: string;
  sunRise: string;
  sunSet: string;
  moonRise: string;
  shubhMuhurat: {
    abhijit: { time: string; status: 'Very Auspicious' };
    brahma: { time: string; status: 'Best for Meditation' };
    amritKaal: { time: string; status: 'Auspicious' };
    vijaya: { time: string; status: 'Auspicious' };
  };
  ashubhMuhurat: {
    rahuKaal: { time: string; warning: 'Avoid starting auspicious work' };
    yamaganda: { time: string; warning: 'Avoid travel & investments' };
    gulika: { time: string; warning: 'Moderate inauspicious' };
    durmuhurta: { time: string; warning: 'Inauspicious window' };
  };
  choghadiya: Array<{
    period: string;
    name: string;
    type: 'Shubh' | 'Amrit' | 'Labh' | 'Char' | 'Rog' | 'Kaal' | 'Udveg';
    nature: 'Auspicious' | 'Neutral' | 'Inauspicious';
  }>;
}

export const cities = [
  { id: 'delhi', name: 'New Delhi (IST)', offsetMinutes: 0 },
  { id: 'mumbai', name: 'Mumbai', offsetMinutes: 30 },
  { id: 'bengaluru', name: 'Bengaluru', offsetMinutes: 15 },
  { id: 'kolkata', name: 'Kolkata', offsetMinutes: -25 },
  { id: 'jaipur', name: 'Jaipur', offsetMinutes: 10 },
  { id: 'varanasi', name: 'Varanasi', offsetMinutes: -12 },
  { id: 'london', name: 'London (GMT)', offsetMinutes: -330 },
  { id: 'newyork', name: 'New York (EST)', offsetMinutes: -630 }
];

export function getPanchangForDate(targetDate: Date = new Date(), cityId: string = 'delhi'): PanchangDetail {
  const dayNamesEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayNamesHi = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'];
  
  const tithis = [
    { en: 'Pratipada', hi: 'प्रतिपदा' },
    { en: 'Dwitiya', hi: 'द्वितीया' },
    { en: 'Tritiya', hi: 'तृतीया' },
    { en: 'Chaturthi', hi: 'चतुर्थी' },
    { en: 'Panchami', hi: 'पंचमी' },
    { en: 'Shashthi', hi: 'षष्ठी' },
    { en: 'Saptami', hi: 'सप्तमी' },
    { en: 'Ashtami', hi: 'अष्टमी' },
    { en: 'Navami', hi: 'नवमी' },
    { en: 'Dashami', hi: 'दशमी' },
    { en: 'Ekadashi', hi: 'एकादशी' },
    { en: 'Dwadashi', hi: 'द्वादशी' },
    { en: 'Trayodashi', hi: 'त्रयोदशी' },
    { en: 'Chaturdashi', hi: 'चतुर्दशी' },
    { en: 'Purnima / Amavasya', hi: 'पूर्णिमा / अमावस्या' }
  ];

  const nakshatras = [
    { en: 'Ashwini', hi: 'अश्विनी', lord: 'Ketu' },
    { en: 'Bharani', hi: 'भरणी', lord: 'Venus' },
    { en: 'Krittika', hi: 'कृत्तिका', lord: 'Sun' },
    { en: 'Rohini', hi: 'रोहिणी', lord: 'Moon' },
    { en: 'Mrigashira', hi: 'मृगशिरा', lord: 'Mars' },
    { en: 'Ardra', hi: 'आर्द्रा', lord: 'Rahu' },
    { en: 'Punarvasu', hi: 'पुनर्वसु', lord: 'Jupiter' },
    { en: 'Pushya', hi: 'पुष्य', lord: 'Saturn' },
    { en: 'Ashlesha', hi: 'आश्लेषा', lord: 'Mercury' },
    { en: 'Magha', hi: 'मघा', lord: 'Ketu' },
    { en: 'Purva Phalguni', hi: 'पूर्वाफाल्गुनी', lord: 'Venus' },
    { en: 'Uttara Phalguni', hi: 'उत्तराफाल्गुनी', lord: 'Sun' },
    { en: 'Hasta', hi: 'हस्त', lord: 'Moon' },
    { en: 'Chitra', hi: 'चित्रा', lord: 'Mars' },
    { en: 'Swati', hi: 'स्वाती', lord: 'Rahu' },
    { en: 'Vishakha', hi: 'विशाखा', lord: 'Jupiter' },
    { en: 'Anuradha', hi: 'अनुराधा', lord: 'Saturn' },
    { en: 'Jyeshtha', hi: 'ज्येष्ठा', lord: 'Mercury' },
    { en: 'Moola', hi: 'मूल', lord: 'Ketu' },
    { en: 'Purva Ashadha', hi: 'पूर्वाषाढ़ा', lord: 'Venus' },
    { en: 'Uttara Ashadha', hi: 'उत्तराषाढ़ा', lord: 'Sun' },
    { en: 'Shravana', hi: 'श्रवण', lord: 'Moon' },
    { en: 'Dhanishta', hi: 'धनिष्ठा', lord: 'Mars' },
    { en: 'Shatabhisha', hi: 'शतभिषा', lord: 'Rahu' },
    { en: 'Purva Bhadrapada', hi: 'पूर्वभाद्रपद', lord: 'Jupiter' },
    { en: 'Uttara Bhadrapada', hi: 'उत्तरभाद्रपद', lord: 'Saturn' },
    { en: 'Revati', hi: 'रेवती', lord: 'Mercury' }
  ];

  const yogas = [
    { en: 'Vishkumbha', hi: 'विष्कम्भ' }, { en: 'Priti', hi: 'प्रीति' }, { en: 'Ayushman', hi: 'आयुष्मान' },
    { en: 'Saubhagya', hi: 'सौभाग्य' }, { en: 'Shobhana', hi: 'शोभन' }, { en: 'Atiganda', hi: 'अतिगण्ड' },
    { en: 'Sukarma', hi: 'सुकर्मा' }, { en: 'Dhriti', hi: 'धृति' }, { en: 'Shula', hi: 'शूल' },
    { en: 'Ganda', hi: 'गण्ड' }, { en: 'Vriddhi', hi: 'वृद्धि' }, { en: 'Dhruva', hi: 'ध्रुव' },
    { en: 'Vyaghata', hi: 'व्याघात' }, { en: 'Harshana', hi: 'हर्षण' }, { en: 'Vajra', hi: 'वज्र' },
    { en: 'Siddhi', hi: 'सिद्धि' }, { en: 'Vyatipata', hi: 'व्यतीपात' }, { en: 'Variyan', hi: 'वरीयान्' },
    { en: 'Parigha', hi: 'परिघ' }, { en: 'Shiva', hi: 'शिव' }, { en: 'Siddha', hi: 'सिद्ध' },
    { en: 'Sadhya', hi: 'साध्य' }, { en: 'Shubha', hi: 'शुभ' }, { en: 'Shukla', hi: 'शुक्ल' },
    { en: 'Brahma', hi: 'ब्रह्म' }, { en: 'Indra', hi: 'इन्द्र' }, { en: 'Vaidhriti', hi: 'वैधृति' }
  ];

  const dayIndex = targetDate.getDay();
  const dayOfYear = Math.floor((targetDate.getTime() - new Date(targetDate.getFullYear(), 0, 0).getTime()) / 86400000);
  
  const tithiIdx = (dayOfYear + 3) % tithis.length;
  const nakshatraIdx = (dayOfYear + 7) % nakshatras.length;
  const yogaIdx = (dayOfYear + 11) % yogas.length;

  // Rahu Kaal by Day of Week
  const rahuKaalSchedule = [
    '04:30 PM - 06:00 PM', // Sun
    '07:30 AM - 09:00 AM', // Mon
    '03:00 PM - 04:30 PM', // Tue
    '12:00 PM - 01:30 PM', // Wed
    '01:30 PM - 03:00 PM', // Thu
    '10:30 AM - 12:00 PM', // Fri
    '09:00 AM - 10:30 AM'  // Sat
  ];

  const yamagandaSchedule = [
    '12:00 PM - 01:30 PM', // Sun
    '10:30 AM - 12:00 PM', // Mon
    '09:00 AM - 10:30 AM', // Tue
    '07:30 AM - 09:00 AM', // Wed
    '06:00 AM - 07:30 AM', // Thu
    '03:00 PM - 04:30 PM', // Fri
    '01:30 PM - 03:00 PM'  // Sat
  ];

  const formattedDate = targetDate.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return {
    dateFormatted: formattedDate,
    dayOfWeek: dayNamesEn[dayIndex],
    dayOfWeekHi: dayNamesHi[dayIndex],
    vikramSamvat: '2083 (कालयुक्त)',
    shakaSamvat: '1948',
    ayana: 'Dakshinayana (दक्षिणायन)',
    ritu: 'Varsha / Sharad Ritu (शरद ऋतु)',
    masa: 'Bhadrapada / Ashwina',
    paksha: tithiIdx < 8 ? 'Shukla Paksha (शुक्ल पक्ष)' : 'Krishna Paksha (कृष्ण पक्ष)',
    tithi: {
      name: tithis[tithiIdx].en,
      nameHi: tithis[tithiIdx].hi,
      till: '06:42 PM',
      nextTithi: tithis[(tithiIdx + 1) % tithis.length].en
    },
    nakshatra: {
      name: nakshatras[nakshatraIdx].en,
      nameHi: nakshatras[nakshatraIdx].hi,
      pada: ((nakshatraIdx % 4) + 1),
      till: '08:15 PM',
      rulingPlanet: nakshatras[nakshatraIdx].lord
    },
    yoga: {
      name: yogas[yogaIdx].en,
      nameHi: yogas[yogaIdx].hi,
      till: '04:18 PM'
    },
    karana: {
      name: 'Bava (बव)',
      nameHi: 'बव व बालव',
      till: '06:42 PM'
    },
    sunSign: 'Simha / Leo (सिंह)',
    moonSign: 'Vrishabha / Taurus (वृषभ)',
    sunRise: '06:02 AM',
    sunSet: '06:38 PM',
    moonRise: '07:22 PM',
    shubhMuhurat: {
      abhijit: { time: '11:54 AM - 12:44 PM', status: 'Very Auspicious' },
      brahma: { time: '04:30 AM - 05:16 AM', status: 'Best for Meditation' },
      amritKaal: { time: '02:15 PM - 03:52 PM', status: 'Auspicious' },
      vijaya: { time: '02:24 PM - 03:14 PM', status: 'Auspicious' }
    },
    ashubhMuhurat: {
      rahuKaal: { time: rahuKaalSchedule[dayIndex], warning: 'Avoid starting auspicious work' },
      yamaganda: { time: yamagandaSchedule[dayIndex], warning: 'Avoid travel & investments' },
      gulika: { time: '06:02 AM - 07:36 AM', warning: 'Moderate inauspicious' },
      durmuhurta: { time: '08:32 AM - 09:22 AM', warning: 'Inauspicious window' }
    },
    choghadiya: [
      { period: '06:02 AM - 07:36 AM', name: 'Shubh (शुभ)', type: 'Shubh', nature: 'Auspicious' },
      { period: '07:36 AM - 09:10 AM', name: 'Rog (रोग)', type: 'Rog', nature: 'Inauspicious' },
      { period: '09:10 AM - 10:44 AM', name: 'Udveg (उद्वेग)', type: 'Udveg', nature: 'Inauspicious' },
      { period: '10:44 AM - 12:18 PM', name: 'Char (चर)', type: 'Char', nature: 'Neutral' },
      { period: '12:18 PM - 01:52 PM', name: 'Labh (लाभ)', type: 'Labh', nature: 'Auspicious' },
      { period: '01:52 PM - 03:26 PM', name: 'Amrit (अमृत)', type: 'Amrit', nature: 'Auspicious' },
      { period: '03:26 PM - 05:00 PM', name: 'Kaal (काल)', type: 'Kaal', nature: 'Inauspicious' },
      { period: '05:00 PM - 06:38 PM', name: 'Shubh (शुभ)', type: 'Shubh', nature: 'Auspicious' }
    ]
  };
}
