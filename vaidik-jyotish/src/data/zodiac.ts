export interface ZodiacSign {
  id: string;
  nameEn: string;
  nameHi: string;
  sanskrit: string;
  symbol: string;
  icon: string;
  dates: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  elementHi: string;
  rulingPlanet: string;
  rulingPlanetHi: string;
  luckyNumber: string;
  luckyColor: string;
  luckyColorHi: string;
  luckyDirection: string;
  overview: {
    en: string;
    hi: string;
  };
  career: {
    en: string;
    hi: string;
  };
  health: {
    en: string;
    hi: string;
  };
  relationships: {
    en: string;
    hi: string;
  };
  remedy: {
    en: string;
    hi: string;
  };
  mantra: string;
}

export const zodiacSigns: ZodiacSign[] = [
  {
    id: 'aries',
    nameEn: 'Aries',
    nameHi: 'मेष',
    sanskrit: 'Mesha',
    symbol: '♈',
    icon: '🐏',
    dates: 'Mar 21 - Apr 19',
    element: 'Fire',
    elementHi: 'अग्नि',
    rulingPlanet: 'Mars (Mangal)',
    rulingPlanetHi: 'मंगल',
    luckyNumber: '9, 18',
    luckyColor: 'Coral Red / Vermillion',
    luckyColorHi: 'लाल व सिंदूरी',
    luckyDirection: 'East',
    overview: {
      en: 'Favorable planetary alignment infuses you with high energy and decisiveness today. Trust your intuition when initiating new endeavors.',
      hi: 'आज ग्रहों की स्थिति आपको नई ऊर्जा और दृढ़ संकल्प प्रदान कर रही है। नए कार्यों की शुरुआत के लिए समय अनुकूल है।'
    },
    career: {
      en: 'Pending work gains momentum. Leadership qualities will be recognized by senior colleagues. Avoid impulsive arguments in meetings.',
      hi: 'रुके हुए कार्यों में गति आएगी। कार्यक्षेत्र में आपके नेतृत्व की सराहना होगी। सहकर्मियों के साथ शांत रहकर बातचीत करें।'
    },
    health: {
      en: 'High vitality, but watch out for slight physical restlessness or eye strain. Stay hydrated throughout the day.',
      hi: 'ऊर्जा का स्तर अच्छा रहेगा, लेकिन आंखों या सिरदर्द पर ध्यान दें। दिनभर पर्याप्त पानी पिएं।'
    },
    relationships: {
      en: 'Family members appreciate your warmth and support. An open, honest conversation will resolve lingering misunderstandings.',
      hi: 'परिवार में सौहार्दपूर्ण वातावरण रहेगा। जीवनसाथी के साथ खुलकर संवाद करने से संबंध और प्रगाढ़ होंगे।'
    },
    remedy: {
      en: 'Offer water to the rising Sun and chant the Gayatri Mantra 11 times.',
      hi: 'सुबह सूर्य देव को तांबे के लोटे से जल अर्पित करें और 11 बार गायत्री मंत्र का जाप करें।'
    },
    mantra: 'ॐ क्रां क्रीं क्रौं सः भौमाय नमः'
  },
  {
    id: 'taurus',
    nameEn: 'Taurus',
    nameHi: 'वृषभ',
    sanskrit: 'Vrishabha',
    symbol: '♉',
    icon: '🐂',
    dates: 'Apr 20 - May 20',
    element: 'Earth',
    elementHi: 'पृथ्वी',
    rulingPlanet: 'Venus (Shukra)',
    rulingPlanetHi: 'शुक्र',
    luckyNumber: '6, 15',
    luckyColor: 'Cream / Lotus Pink',
    luckyColorHi: 'हल्का गुलाबी व श्वेत',
    luckyDirection: 'South-East',
    overview: {
      en: 'A stable and productive day for financial planning and aesthetic pursuits. Patience brings rewarding results.',
      hi: 'वित्तीय योजना और रचनात्मक कार्यों के लिए आज का दिन अत्यंत शुभ व स्थिर रहेगा। धैर्य से काम लें।'
    },
    career: {
      en: 'Great day for long-term investments, trade negotiations, and finishing artistic or analytical projects.',
      hi: 'व्यापार में नए समझौते और दीर्घकालिक निवेश के लिए शुभ संकेत हैं। आर्थिक मामलों में समझदारी लाभ देगी।'
    },
    health: {
      en: 'Throat or neck stiffness may arise due to posture. Take gentle breaks and avoid icy beverages.',
      hi: 'गले और गर्दन की मांसपेशियों में खिंचाव से बचें। गुनगुने पानी का सेवन लाभकारी रहेगा।'
    },
    relationships: {
      en: 'Harmony prevails at home. Spending quality evening time with loved ones restores emotional balance.',
      hi: 'घर-परिवार में सुख-शांति रहेगी। अपनों के साथ समय बिताने से मन प्रसन्न और तनावमुक्त रहेगा।'
    },
    remedy: {
      en: 'Feed green grass or fresh roti to a cow in the morning.',
      hi: 'प्रातःकाल गाय को हरा चारा या गुड़-रोटी खिलाएं।'
    },
    mantra: 'ॐ द्रां द्रीं द्रौं सः शुक्राय नमः'
  },
  {
    id: 'gemini',
    nameEn: 'Gemini',
    nameHi: 'मिथुन',
    sanskrit: 'Mithuna',
    symbol: '♊',
    icon: '👥',
    dates: 'May 21 - Jun 20',
    element: 'Air',
    elementHi: 'वायु',
    rulingPlanet: 'Mercury (Budha)',
    rulingPlanetHi: 'बुध',
    luckyNumber: '5, 14',
    luckyColor: 'Emerald Green',
    luckyColorHi: 'हरा व पन्ना रंग',
    luckyDirection: 'North',
    overview: {
      en: 'Your intellectual curiosity and communication abilities shine today. Ideal for writing, networking, and studies.',
      hi: 'आपकी बुद्धि, संवाद कौशल और नेटवर्किंग आज सबसे आगे रहेगी। अध्ययन और लेखन के लिए उत्तम समय है।'
    },
    career: {
      en: 'Excellent clarity for negotiations, interviews, and digital marketing. Verify document details before signing.',
      hi: 'इंटरव्यू, व्यापारिक बातचीत और ऑनलाइन कार्यों में सफलता मिलेगी। दस्तावेज़ों को ध्यान से पढ़ें।'
    },
    health: {
      en: 'Mental hyperactivity may cause late sleep. Practice 10 minutes of deep breathing before bed.',
      hi: 'अत्यधिक सोचने से बचें और मानसिक शांति के लिए शाम को ध्यान या प्राणायाम करें।'
    },
    relationships: {
      en: 'Catch up with an old friend or sibling. A lighthearted conversation brings cheerful perspectives.',
      hi: 'मित्रों और भाई-बहनों से सहयोग मिलेगा। किसी पुराने मित्र से बातचीत मन को सुकून देगी।'
    },
    remedy: {
      en: 'Water a Tulsi plant in the morning and offer respects.',
      hi: 'तुलसी के पौधे में जल चढ़ाएं और परिक्रमा करें।'
    },
    mantra: 'ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः'
  },
  {
    id: 'cancer',
    nameEn: 'Cancer',
    nameHi: 'कर्क',
    sanskrit: 'Karka',
    symbol: '♋',
    icon: '🦀',
    dates: 'Jun 21 - Jul 22',
    element: 'Water',
    elementHi: 'जल',
    rulingPlanet: 'Moon (Chandra)',
    rulingPlanetHi: 'चंद्रमा',
    luckyNumber: '2, 11',
    luckyColor: 'Pearl White / Silver',
    luckyColorHi: 'मोती सफेद व सिल्वर',
    luckyDirection: 'North-West',
    overview: {
      en: 'Emotional sensitivity and deep intuition are heightened. Listen to your gut feelings regarding personal matters.',
      hi: 'आत्मिक शांति और अंतर्ज्ञान मजबूत रहेगा। घर-परिवार से जुड़े मामलों में आपका निर्णय सही साबित होगा।'
    },
    career: {
      en: 'Focus on teamwork and collaborative projects. Your empathetic approach helps dissolve office tensions.',
      hi: 'सहयोगियों के साथ तालमेल बनाकर काम करने से कार्य सुगमता से संपन्न होंगे।'
    },
    health: {
      en: 'Support your digestive system with light, freshly prepared meals and soothing herbal tea.',
      hi: 'खान-पान पर ध्यान दें और हल्का, सात्विक भोजन ग्रहण करें।'
    },
    relationships: {
      en: 'A nurturing atmosphere at home. Expressing gratitude to your mother or maternal elders brings blessings.',
      hi: 'माता जी का आशीर्वाद लें। पारिवारिक संबंधों में प्रेम और अपनापन बढ़ेगा।'
    },
    remedy: {
      en: 'Offer raw milk or clean water on a Shiva Lingam on Monday or mornings.',
      hi: 'शिवलिंग पर जल या कच्चा दूध अर्पित करें और ॐ नमः शिवाय का जाप करें।'
    },
    mantra: 'ॐ श्रां श्रीं श्रौं सः चंद्रमसे नमः'
  },
  {
    id: 'leo',
    nameEn: 'Leo',
    nameHi: 'सिंह',
    sanskrit: 'Simha',
    symbol: '♌',
    icon: '🦁',
    dates: 'Jul 23 - Aug 22',
    element: 'Fire',
    elementHi: 'अग्नि',
    rulingPlanet: 'Sun (Surya)',
    rulingPlanetHi: 'सूर्य',
    luckyNumber: '1, 10',
    luckyColor: 'Royal Gold / Saffron',
    luckyColorHi: 'सुनहरा व केसरिया',
    luckyDirection: 'East',
    overview: {
      en: 'Your natural charisma and leadership draw positive attention. Stand tall and pursue goals with integrity.',
      hi: 'आत्मविश्वास और मान-सम्मान में वृद्धि होगी। प्रशासनिक या सरकारी कार्यों में सफलता के योग हैं।'
    },
    career: {
      en: 'Senior officials and clients are receptive to your vision. Take the lead on critical presentations.',
      hi: 'कार्यक्षेत्र में आपकी स्थिति मजबूत होगी। उच्चाधिकारियों से सहयोग मिलेगा।'
    },
    health: {
      en: 'Good vitality throughout the day. Maintain good spinal posture and include morning sunlight exposure.',
      hi: 'स्वास्थ्य उत्तम रहेगा। सुबह धूप में थोड़ा समय बिताएं और योग का अभ्यास करें।'
    },
    relationships: {
      en: 'Generosity and warmth win hearts. Balance authority with listening when discussing family decisions.',
      hi: 'रिश्तों में मधुरता बनाए रखने के लिए दूसरों के विचारों का भी सम्मान करें।'
    },
    remedy: {
      en: 'Chant the Aditya Hridaya Stotram or offer Arghya to Surya Dev with kumkum and red flowers.',
      hi: 'तांबे के पात्र में रोली व लाल पुष्प डालकर भगवान सूर्य को अर्घ्य दें।'
    },
    mantra: 'ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः'
  },
  {
    id: 'virgo',
    nameEn: 'Virgo',
    nameHi: 'कन्या',
    sanskrit: 'Kanya',
    symbol: '♍',
    icon: '🌾',
    dates: 'Aug 23 - Sep 22',
    element: 'Earth',
    elementHi: 'पृथ्वी',
    rulingPlanet: 'Mercury (Budha)',
    rulingPlanetHi: 'बुध',
    luckyNumber: '5, 23',
    luckyColor: 'Pistachio Green / Beige',
    luckyColorHi: 'पिस्ता हरा व बादामी',
    luckyDirection: 'North',
    overview: {
      en: 'Precision, problem-solving, and practical logic are at their peak. A wonderful day to organize your schedule.',
      hi: 'विश्लेषणात्मक क्षमता और योजना निर्माण में सफलता मिलेगी। पुराने अटके मामलों का समाधान निकलेगा।'
    },
    career: {
      en: 'Detailed accounting, audits, research, and technical tasks will proceed smoothly without errors.',
      hi: 'व्यापार और नौकरी में बारीकियों पर ध्यान देने से बड़े लाभ के अवसर बनेंगे।'
    },
    health: {
      en: 'Keep your gut health balanced. Include probiotics like yogurt and avoid skipping breakfast.',
      hi: 'पेट के स्वास्थ्य का ध्यान रखें। समय पर भोजन और पर्याप्त नींद लें।'
    },
    relationships: {
      en: 'Show love through practical acts of care. Avoid over-analyzing casual remarks from partners.',
      hi: 'छोटी-छोटी बातों को नजरअंदाज करें और जीवनसाथी के साथ सामंजस्य बनाए रखें।'
    },
    remedy: {
      en: 'Feed soaked green moong dal or fresh spinach to birds or animals.',
      hi: 'पक्षियों को भिगोई हुई हरी मूंग की दाल या हरा चारा डालें।'
    },
    mantra: 'ॐ बुं बुधाय नमः'
  },
  {
    id: 'libra',
    nameEn: 'Libra',
    nameHi: 'तुला',
    sanskrit: 'Tula',
    symbol: '♎',
    icon: '⚖️',
    dates: 'Sep 23 - Oct 22',
    element: 'Air',
    elementHi: 'वायु',
    rulingPlanet: 'Venus (Shukra)',
    rulingPlanetHi: 'शुक्र',
    luckyNumber: '6, 24',
    luckyColor: 'Pastel Blue / Silk White',
    luckyColorHi: 'आसमानी नीला व रेशमी श्वेत',
    luckyDirection: 'West',
    overview: {
      en: 'A graceful energy surrounds partnerships, design, and social diplomacy. Balance is easily restored.',
      hi: 'संतुलन, साझेदारी और सौन्दर्यबोध से जुड़ा दिन रहेगा। नए संबंध और सहयोग फलदायी सिद्ध होंगे।'
    },
    career: {
      en: 'Favorable conditions for contracts, partnerships, design reviews, and client relations.',
      hi: 'साझेदारी के काम में लाभ होगा। नए ग्राहकों से संपर्क बनाने के लिए श्रेष्ठ समय है।'
    },
    health: {
      en: 'Stay mindful of kidney and lower back health. Drink plenty of filtered water throughout the day.',
      hi: 'दिनभर खूब पानी पिएं और कमर के व्यायाम को दिनचर्या में शामिल करें।'
    },
    relationships: {
      en: 'Romantic sparks and mutual understanding reignite. An evening outing or dinner brings joy.',
      hi: 'वैवाहिक जीवन में प्रेम और समझ बढ़ेगी। जीवनसाथी के साथ सुखद समय व्यतीत होगा।'
    },
    remedy: {
      en: 'Apply a subtle sandalwood or white attar perfume and donate white sweets to someone in need.',
      hi: 'सफेद चंदन का तिलक लगाएं या किसी जरूरतमंद को सफेद मिठाई भेंट करें।'
    },
    mantra: 'ॐ शुं शुक्राय नमः'
  },
  {
    id: 'scorpio',
    nameEn: 'Scorpio',
    nameHi: 'वृश्चिक',
    sanskrit: 'Vrischika',
    symbol: '♏',
    icon: '🦂',
    dates: 'Oct 23 - Nov 21',
    element: 'Water',
    elementHi: 'जल',
    rulingPlanet: 'Mars & Ketu',
    rulingPlanetHi: 'मंगल व केतु',
    luckyNumber: '9, 27',
    luckyColor: 'Deep Crimson / Maroon',
    luckyColorHi: 'गहरा लाल व महरून',
    luckyDirection: 'South',
    overview: {
      en: 'Intense focus and transformative power enable you to uncover truths and accomplish deep work.',
      hi: 'गहन चिंतन और एकाग्रता का लाभ मिलेगा। गूढ़ विषयों और शोध कार्यों में प्रगति होगी।'
    },
    career: {
      en: 'Research, risk analysis, and strategic problem-solving produce breakthrough outcomes today.',
      hi: 'गुप्त शत्रुओं पर विजय मिलेगी और जटिल समस्याओं का तुरंत हल खोज पाएंगे।'
    },
    health: {
      en: 'Channel surplus energy into physical fitness, gym workouts, or martial arts to relieve internal heat.',
      hi: 'शारीरिक व्यायाम और प्राणायाम से ऊर्जा को सही दिशा दें। तली-भुनी चीजों से परहेज करें।'
    },
    relationships: {
      en: 'Loyalty and profound connection deepen. Share your deeper feelings without hesitation.',
      hi: 'रिश्तों में प्रगाढ़ता और विश्वास बढ़ेगा। अपने मन की बात प्रियजन से साझा करें।'
    },
    remedy: {
      en: 'Recite Hanuman Chalisa in the evening and light a mustard or sesame oil diya.',
      hi: 'संध्याकाल में हनुमान चालीसा का पाठ करें और सिंदूर का तिलक लगाएं।'
    },
    mantra: 'ॐ अं अंगारकाय नमः'
  },
  {
    id: 'sagittarius',
    nameEn: 'Sagittarius',
    nameHi: 'धनु',
    sanskrit: 'Dhanu',
    symbol: '♐',
    icon: '🏹',
    dates: 'Nov 22 - Dec 21',
    element: 'Fire',
    elementHi: 'अग्नि',
    rulingPlanet: 'Jupiter (Guru / Brihaspati)',
    rulingPlanetHi: 'बृहस्पति (गुरु)',
    luckyNumber: '3, 12',
    luckyColor: 'Bright Yellow / Turmeric Gold',
    luckyColorHi: 'पीला व हल्दी जैसा सुनहरा',
    luckyDirection: 'North-East',
    overview: {
      en: 'Optimism, philosophical clarity, and expansive luck uplift your spirits. Broaden your horizons.',
      hi: 'भाग्य का साथ मिलेगा और ज्ञान-विवेक में वृद्धि होगी। धार्मिक व मांगलिक कार्यों में रुचि बढ़ेगी।'
    },
    career: {
      en: 'Mentorship, teaching, legal matters, and higher education initiatives receive positive momentum.',
      hi: 'उच्च शिक्षा, परामर्श और अध्यापन से जुड़े लोगों को मान-सम्मान और पदोन्नति के अवसर मिलेंगे।'
    },
    health: {
      en: 'Liver and metabolic vitality are good. Keep portion sizes balanced during celebratory meals.',
      hi: 'स्वास्थ्य उत्तम रहेगा। खान-पान में अधिक मीठे और तैलीय पदार्थों से बचें।'
    },
    relationships: {
      en: 'Joyful family discussions regarding travel, ceremonies, or shared future plans.',
      hi: 'परिवार के साथ किसी धार्मिक या मनोरंजक यात्रा की योजना बन सकती है।'
    },
    remedy: {
      en: 'Apply a pure saffron/turmeric tilak on your forehead and respect teachers & elders.',
      hi: 'माथे पर केसर या हल्दी का तिलक लगाएं और गुरुजनों का आशीर्वाद लें।'
    },
    mantra: 'ॐ ग्रां ग्रीं ग्रौं सः गुरुवे नमः'
  },
  {
    id: 'capricorn',
    nameEn: 'Capricorn',
    nameHi: 'मकर',
    sanskrit: 'Makara',
    symbol: '♑',
    icon: '🐐',
    dates: 'Dec 22 - Jan 19',
    element: 'Earth',
    elementHi: 'पृथ्वी',
    rulingPlanet: 'Saturn (Shani)',
    rulingPlanetHi: 'शनि',
    luckyNumber: '8, 17',
    luckyColor: 'Midnight Blue / Charcoal',
    luckyColorHi: 'गहरा नीला व श्याम रंग',
    luckyDirection: 'West',
    overview: {
      en: 'Discipline, relentless dedication, and structured planning lay bedrock foundations for enduring success.',
      hi: 'कठिन परिश्रम और अनुशासन से स्थायी सफलता की नींव तैयार होगी। वरिष्ठों का सहयोग मिलेगा।'
    },
    career: {
      en: 'Long-awaited responsibilities or projects bear fruit. Consistency is your greatest competitive edge.',
      hi: 'कार्यक्षेत्र में धैर्य और निरंतरता से बड़े लक्ष्य हासिल होंगे। व्यावसायिक साख मजबूत होगी।'
    },
    health: {
      en: 'Pay attention to knees, joints, and bone health. Ensure regular stretching and calcium intake.',
      hi: 'जोड़ों के दर्द और हड्डियों के स्वास्थ्य का ध्यान रखें। सुबह हल्की सैर करें।'
    },
    relationships: {
      en: 'Earnest commitments and dependability bring peace of mind to family and partners.',
      hi: 'पारिवारिक जिम्मेदारियों को निभाने से घर के बुजुर्गों का स्नेह प्राप्त होगा।'
    },
    remedy: {
      en: 'Light a mustard oil lamp under a Peepal tree in the evening or help a laborer.',
      hi: 'शनिवार शाम को पीपल के वृक्ष के नीचे सरसों के तेल का दीपक जलाएं।'
    },
    mantra: 'ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः'
  },
  {
    id: 'aquarius',
    nameEn: 'Aquarius',
    nameHi: 'कुंभ',
    sanskrit: 'Kumbha',
    symbol: '♒',
    icon: '🏺',
    dates: 'Jan 20 - Feb 18',
    element: 'Air',
    elementHi: 'वायु',
    rulingPlanet: 'Saturn & Rahu',
    rulingPlanetHi: 'शनि व राहु',
    luckyNumber: '4, 22',
    luckyColor: 'Electric Cyan / Navy',
    luckyColorHi: 'आसमानी व नेवी ब्लू',
    luckyDirection: 'West',
    overview: {
      en: 'Innovative thinking, community focus, and unconventional solutions spark inspiration today.',
      hi: 'नए और अनोखे विचार मन में आएंगे। सामाजिक और जनकल्याणकारी कार्यों में सक्रियता रहेगी।'
    },
    career: {
      en: 'Great breakthrough for tech innovators, social entrepreneurs, and collaborative team endeavors.',
      hi: 'तकनीकी क्षेत्र और नए प्रोजेक्ट्स में अप्रत्याशित सफलता के योग बन रहे हैं।'
    },
    health: {
      en: 'Maintain good circulation in ankles and calves. Stay active with regular walking sessions.',
      hi: 'पैरों और पिंडलियों में रक्त संचार के लिए चलना-फिरना जारी रखें।'
    },
    relationships: {
      en: 'Intellectual connections and friendships flourish. Open conversations bring mutual respect.',
      hi: 'मित्रों और सहकर्मियों के साथ विचार-विमर्श से नई ऊर्जा मिलेगी।'
    },
    remedy: {
      en: 'Donate black sesame seeds, black umbrella, or footwear to the underprivileged.',
      hi: 'काले तिल या काले वस्त्र जरूरतमंद व्यक्ति को दान करें।'
    },
    mantra: 'ॐ शं शनैश्चराय नमः'
  },
  {
    id: 'pisces',
    nameEn: 'Pisces',
    nameHi: 'मीन',
    sanskrit: 'Meena',
    symbol: '♓',
    icon: '🐟',
    dates: 'Feb 19 - Mar 20',
    element: 'Water',
    elementHi: 'जल',
    rulingPlanet: 'Jupiter (Guru)',
    rulingPlanetHi: 'बृहस्पति (गुरु)',
    luckyNumber: '3, 7',
    luckyColor: 'Golden Yellow / Sea Green',
    luckyColorHi: 'सुनहरा पीला व समुद्री हरा',
    luckyDirection: 'North-East',
    overview: {
      en: 'Spiritual awareness, artistic creativity, and compassionate healing energy surround you today.',
      hi: 'आध्यात्मिक चिंतन, रचनात्मकता और मानसिक शांति से परिपूर्ण दिन रहेगा। अंतर्मन प्रसन्न रहेगा।'
    },
    career: {
      en: 'Intuitive choices in creative arts, counseling, healing, and philanthropic projects bring praise.',
      hi: 'परामर्श, कला, अध्यात्म और हीलिंग से जुड़े लोगों के लिए समय अत्यंत अनुकूल है।'
    },
    health: {
      en: 'Protect your feet and ensure deep, restorative sleep. A warm foot bath with Epsom salt is restorative.',
      hi: 'पैरों की देखभाल करें और समय पर सोएं ताकि मानसिक शांति बनी रहे।'
    },
    relationships: {
      en: 'Deep emotional empathy and mutual support enrich your closest bonds.',
      hi: 'अपनों के प्रति करुणा और समझ से पारिवारिक वातावरण आनंदमय रहेगा।'
    },
    remedy: {
      en: 'Chant Vishnu Sahasranama or offer yellow flowers to Lord Vishnu / Krishna.',
      hi: 'भगवान विष्णु या श्री कृष्ण को पीले पुष्प और तुलसी पत्र अर्पित करें।'
    },
    mantra: 'ॐ बृं बृहस्पतये नमः'
  }
];
