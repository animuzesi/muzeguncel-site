/**
 * MÜZE ANILARI - TEK DÜZENLEME DOSYASI
 *
 * Bu dosyada her anı ayrı bir obje olarak durur.
 * Aşağıdaki alanları buradan düzenle:
 * - wallLabelTitle
 * - wallLabelSubtitle
 * - modalTitle
 * - modalDate
 * - modalDescription
 */

const REAL_MEMORIES = [
  {
    id: 1,
    image: "assets/photos/portrait/memory_01.jpg",
    orientation: "portrait",
    frameType: "portrait",
    wallLabelTitle: "İlk Fotoğrafımız",
    wallLabelSubtitle: "Kadıköy · 20 Temmuz 2022",
    modalTitle: "İlk Fotoğrafımız",
    modalDate: "20 Temmuz 2022 22:32 · İstanbul Kadıköy",
    modalDescription:
      "Ve ilk fotoğrafımızla başlıyoruz. Benim için çok heyecanlı bir gündü. Neler olup bittiğini anlayamamıştım. Tüm saflığım ve heyecanımla geldiğim bir gündü.",
  },
  {
    id: 2,
    image: "assets/photos/landscape/memory_02.jpg",
    orientation: "landscape",
    frameType: "landscape",
    wallLabelTitle: "Çengelköy",
    wallLabelSubtitle: "12 Ağustos 2022",
    modalTitle: "Çengelköy",
    modalDate: "12 Ağustos 2022 18:07 · İstanbul Üsküdar/Çengelköy",
    modalDescription:
      "Gerçekten seninle bir bütün olunca kendimi tamamlanmış hissettiğim anlardan biriydi. O zamandan belliymiş zaten seninle hep yürüyeceğim, gezeceğim ve yaşayacağım her deneyimin bizim için çok güzel olacağı.",
  },
  {
    id: 3,
    image: "assets/photos/portrait/memory_03.jpg",
    orientation: "portrait",
    frameType: "portrait",
    wallLabelTitle: "O Sokaklar",
    wallLabelSubtitle: "12 Ağustos 2022",
    modalTitle: "O Sokaklar",
    modalDate: "12 Ağustos 2022 18:09 · İstanbul Üsküdar/Çengelköy",
    modalDescription:
      "Baksana, tekrardan o ana ışınlandım. O sokaklarda yürüyüşümüz, senin utangaçlığın, ne yapacağını bilememen, o saf aşıklığın… Kendimize ürettiğimiz o ilk deneyim. Harika bir manzara, harika bir zaman.",
  },
  {
    id: 4,
    image: "assets/photos/landscape/memory_04.jpg",
    orientation: "landscape",
    frameType: "landscape",
    wallLabelTitle: "İstmarina",
    wallLabelSubtitle: "24 Ağustos 2022",
    modalTitle: "İstmarina AVM",
    modalDate: "24 Ağustos 2022 17:51 · İstanbul Kartal/İstmarina AVM",
    modalDescription:
      "Yüz ifaden ve sivilcen her şeyi özetliyor sevgilim. O zaman belliymiş içimdeki çocuğu seninle dışarı çıkaracağım ve her ne kadar hoşuna gitmese de onu seninle birlikte büyüteceğim.",
  },
  {
    id: 5,
    image: "assets/photos/landscape/memory_05.jpg",
    orientation: "landscape",
    frameType: "landscape",
    wallLabelTitle: "İdealtepe Sahil",
    wallLabelSubtitle: "29 Ağustos 2022",
    modalTitle: "İdealtepe Sahil",
    modalDate: "29 Ağustos 2022 19:37 · İstanbul İdealtepe Sahil",
    modalDescription:
      "Evet aslında bu araya kadar çok fotoğraf var ama bu en vurucu olanlardan biri. Senin aklındaki karışıklık, benim ise yanında ne kadar mutlu olduğum belli olmuyor mu? Koala pijamamı almıştım. Benim için çok duygu yüklü bir gündü. Bu arada kolyen de çok güzelmiş sevgilim. Hayırlısı buymuş, iyi ki öyle olmuş. Ben seni hep içimde sevdim, sen ise doğru zamanı bekledin. İyi ki geldin sevgilim.",
  },
  {
    id: 6,
    image: "assets/photos/portrait/memory_06.jpg",
    orientation: "portrait",
    frameType: "portrait",
    wallLabelTitle: "Hummel Çadır",
    wallLabelSubtitle: "6 Mart 2023",
    modalTitle: "Hummel Çadır",
    modalDate: "6 Mart 2023 10:04 · İstanbul Pendik/Kurtköy Viaport Hummel Çadır",
    modalDescription:
      "Eeee balım… Tıpış tıpış nasıl geldin ayağıma. O çadırdan girdiğin ilk anı asla unutamayacağım. Yanına gelip “Esra sarılabilir miyim?” deyişim...",
  },
  {
    id: 7,
    image: "assets/photos/portrait/memory_07.jpg",
    orientation: "portrait",
    frameType: "portrait",
    wallLabelTitle: "Sevgili Olduğumuz Gün",
    wallLabelSubtitle: "13 Mart 2023",
    modalTitle: "Sevgili Olduğumuz Gün",
    modalDate: "13 Mart 2023 14:31 · İstanbulun En Güzel Yeri Senin Yanın",
    modalDescription:
      "EVEET! İSTEDİĞİMİZ NOKTAYA GELDİK. DÜNYANIN EN GÜZEL GÜNÜ, EN GÜZEL KIZI. ŞİMDİ SÖYLE BANA ESRAAA… BENİ SEVİYOR MUSUN, SEVMİYOR MUSUN? O gün yaşadığım hisleri sana anlatamam. Sanki dünyaya yeniden gelmiş gibiydim. Benim için, pardon bizim için, her şey yeniden başlıyordu. İyi ki sen sevgilim. Yılımız kutlu olsun hayatımın anlamı, balım.",
  },
  {
    id: 8,
    image: "assets/photos/portrait/memory_08.jpg",
    orientation: "portrait",
    frameType: "portrait",
    wallLabelTitle: "Beyaz Melek",
    wallLabelSubtitle: "27 Mart 2023",
    modalTitle: "Lens AVM",
    modalDate: "27 Mart 2023 22:27 · İstanbul Pendik/Kurtköy Lens AVM",
    modalDescription:
      "Sevgilim ve beyaz melek. Bu arabayla çok şey yaptık, çok yere gittik. Birbirimize ilk hediyelerimizi bu arabada verdik. Aynı zamanda bu araba benim de sürdüğüm babamın ilk arabalarından biri: D7.",
  },
  {
    id: 9,
    image: "assets/photos/landscape/memory_09.jpg",
    orientation: "landscape",
    frameType: "landscape",
    wallLabelTitle: "İlk Hediyen",
    wallLabelSubtitle: "12 Nisan 2023",
    modalTitle: "İlk Doğum Günü Hediyesi",
    modalDate: "12 Nisan 2023 00:18 · İstanbul Pendik Sahil Civarları",
    modalDescription:
      "Bugünü hatırlıyor musun? İlk doğum günü hediyeni almıştım ve vermek için çok heyecanlıydım. Günler öncesinden vermiştim. Gülüşüne ölürüm senin.",
  },
  {
    id: 10,
    image: "assets/photos/portrait/memory_10.jpg",
    orientation: "portrait",
    frameType: "portrait",
    wallLabelTitle: "Merve Abla",
    wallLabelSubtitle: "18 Nisan 2023",
    modalTitle: "İlk Defa Birlikte",
    modalDate: "18 Nisan 2023 22:47 · İstanbul Kartal/İstmarina AVM",
    modalDescription:
      "Bugün ilk defa Merve ablayla oturmuştuk, hatırladın mı? Ve bu fotoğrafımızı çok seviyorum. Çok doğal… İlişkimiz gibi sevgilim.",
  },
  {
    id: 11,
    image: "assets/photos/portrait/memory_11.jpg",
    orientation: "portrait",
    frameType: "portrait",
    wallLabelTitle: "Darülaceze",
    wallLabelSubtitle: "21 Nisan 2023",
    modalTitle: "Darülaceze Huzurevi",
    modalDate: "21 Nisan 2023 15:42 · İstanbul Şişli/Darülaceze Huzurevi",
    modalDescription:
      "Yaşlılarla temas kurmak ve o içindeki iyimserliği, saflığı ve temizliği yakından görmek sana bir kez daha aşık olmamı sağladı. Çok güzel bir gündü. En kısa zamanda tekrarlayalım sevgilim.",
  },
  {
    id: 12,
    image: "assets/photos/landscape/memory_12.jpg",
    orientation: "landscape",
    frameType: "landscape",
    wallLabelTitle: "İğrenç Kahvaltı Yeri",
    wallLabelSubtitle: "25 Nisan 2023",
    modalTitle: "Darıca Kahvaltısı",
    modalDate: "25 Nisan 2023 17:41 · Darıca",
    modalDescription:
      "Burayı sevmiyorum!!! Hoşlanmadığım bir yerdi ama sevgilimle kahvaltı sonrası yağmurun altında ıslanmak yine de güzeldi.",
  },
  {
    id: 13,
    image: "assets/photos/portrait/memory_13.jpg",
    orientation: "portrait",
    frameType: "portrait",
    wallLabelTitle: "20. Yaş",
    wallLabelSubtitle: "30 Nisan 2023",
    modalTitle: "İlk Doğum Günün",
    modalDate: "30 Nisan 2023 14:32 · İstanbul Kartal/Aydos Ormanı",
    modalDescription:
      "VEEE SEVGİLİMİN İLK DOĞUM GÜNÜÜÜ! Bana bu olaydan uzun zaman sonra demiştin ki: “Ben sana doğum günümde bile emin değildim seviyor muyum, sevmiyor muyum diye.” Kırıcıydı ama sevgilimle yaptığım her şeyden çok mutlu oluyorum. Sevgilim 20 yaşına girmişti.",
  },
  {
    id: 14,
    image: "assets/photos/landscape/memory_14.jpg",
    orientation: "landscape",
    frameType: "landscape",
    wallLabelTitle: "Çamlıca",
    wallLabelSubtitle: "6 Mayıs 2023",
    modalTitle: "Kutlamalar Biter mi?",
    modalDate: "6 Mayıs 2023 17:17 · İstanbul/Çamlıca Kulesi",
    modalDescription:
      "Kutlamalar biter mi? Bitmez. Ne değişik bir gündü. Önce güzel bir yemek yiyip yeni yaşını kutlamıştık, sonra Bostancı’ya doğru yola çıktık. Ama senin sınavın vardı. O gayretin, azmin ve disiplinin hep olsun sevgilim. Sana söz vermiştim sevgili olmadan önce: Seninle Nil Karaibrahimgil konserine gideceğiz diye. BENDEN SANA!!!!!",
  },
  {
    id: 15,
    image: "assets/photos/landscape/memory_15.jpg",
    orientation: "landscape",
    frameType: "landscape",
    wallLabelTitle: "Burgazada",
    wallLabelSubtitle: "15 Mayıs 2023",
    modalTitle: "Burgaz",
    modalDate: "15 Mayıs 2023 16:00 · İstanbul/Burgazada",
    modalDescription:
      "“Oğlumuzun adı Burgaz olacak” demiştik. Bizim için adalar çok özel, çok önemli bir yer kaplıyor. Önümüzdeki eserlerde de göreceksin ki biz adalara çok yakışıyoruz.",
  },
  {
    id: 16,
    image: "assets/photos/landscape/memory_16.jpg",
    orientation: "landscape",
    frameType: "landscape",
    wallLabelTitle: "Mabedim",
    wallLabelSubtitle: "30 Mayıs 2023",
    modalTitle: "Mabedim",
    modalDate: "30 Mayıs 2023 19:29 · Mabedim",
    modalDescription:
      "Benim en büyük hayallerimden birini gerçekleştirdiğin için tekrardan çok teşekkür ederim sevgilim. Düşünsene sen yoksun, o maça Furkan’la gitmek zorundaydım. Şampiyonluğu kaybetmiştik ama ben şampiyon olmuştum. Seni çok seviyorum sevgilim. Dünyanın en güzel yerinde, en güzel kızıyla birlikte.",
  },
  {
    id: 17,
    image: "assets/photos/portrait/memory_17.jpg",
    orientation: "portrait",
    frameType: "portrait",
    wallLabelTitle: "Hazinem",
    wallLabelSubtitle: "12 Haziran 2023",
    modalTitle: "Hazinem",
    modalDate: "12 Haziran 2023 22:54 · İstanbul Tuzla/Mercan",
    modalDescription:
      "SEN BENİM EN DEĞERLİ HAZİNEMSİN. En yakın arkadaşlarımla müthiş bir doğum günü hazırlamıştı sevgilim bana. İyi ki sen sevgilim, iyi kiii!",
  },
  {
    id: 18,
    image: "assets/photos/portrait/memory_18.jpg",
    orientation: "portrait",
    frameType: "portrait",
    wallLabelTitle: "Sanat",
    wallLabelSubtitle: "26 Haziran 2023",
    modalTitle: "Sanatımız",
    modalDate: "26 Haziran 2023 19:12 · İstanbul Maltepe Sahili",
    modalDescription:
      "Peki bu içimizdeki sanat sevgisi ne olacak? İtiraf etmeliyim, böyle şeyler yapabileceğimi asla düşünmezdim. Dünyanın en güzel sanat eseri sensin sevgilim. İyi ki sen.",
  },
  {
    id: 19,
    image: "assets/photos/portrait/memory_19.jpg",
    orientation: "portrait",
    frameType: "portrait",
    wallLabelTitle: "Anadolukavağı",
    wallLabelSubtitle: "31 Ağustos 2023",
    modalTitle: "Gezgin Ruh",
    modalDate: "31 Ağustos 2023 15:17 · İstanbul Beykoz Anadolukavağı",
    modalDescription:
      "İçimizdeki gezgin yine dışarı çıkmış geziyor. Şu asilliğe bakar mısınız? Bugün yine başıboş gezerken birinin bahçesindeki salıncağa gitmiştin, hatırladın mı? Orada sallanmıştın. İşte seninle bu limitsizliği, içimizdeki çocukluğu ayrı seviyorum. Tabii merdiven çıkarken nefes nefese kalmanı unuttum sanma.",
  },
  {
    id: 20,
    image: "assets/photos/portrait/memory_20.jpg",
    orientation: "portrait",
    frameType: "portrait",
    wallLabelTitle: "İlk Tatil",
    wallLabelSubtitle: "21 Eylül 2023",
    modalTitle: "Küçükköy Plajı",
    modalDate: "21 Eylül 2023 12:57 · Balıkesir Küçükköy Plajı",
    modalDescription:
      "VEEE İLK SEYAHATİMİZ! Çocuklar gibi mutlu ve heyecanlıyız. Ailemizden ayrı, başka bir annenin karnından çıkan elalemin çocuğuyla ilk tatil… Çok özel duygular var bu tatilde. Baksana mutluluktan uçmuşuz.",
  },
  {
    id: 21,
    image: "assets/photos/portrait/memory_21.jpg",
    orientation: "portrait",
    frameType: "portrait",
    wallLabelTitle: "Ayvalık Sokakları",
    wallLabelSubtitle: "22 Eylül 2023",
    modalTitle: "Ayvalık Sokakları",
    modalDate: "22 Eylül 2023 12:58 · Balıkesir Küçükköy Sokakları",
    modalDescription:
      "Bu sokaklar bizimle çok daha güzel. Yediğimiz yemekler, tattığımız lezzetler, yürüdüğümüz her kaldırım taşı… O Ayvalık sokaklarında insanların mutluluğu ve bizim için çok anlamlı olan bir tatil.",
  },
  {
    id: 22,
    image: "assets/photos/landscape/memory_22.jpg",
    orientation: "landscape",
    frameType: "landscape",
    wallLabelTitle: "Bungalow",
    wallLabelSubtitle: "24 Eylül 2023",
    modalTitle: "Bıngıdı Bungalow",
    modalDate: "24 Eylül 2023 22:08 · Balıkesir Küçükköy/Bıngıdı Bungalow",
    modalDescription:
      "Tarçınlı makarnamız, pişiremediğimiz mangaldaki köftelerimiz, müthiş salatamız, evimizin samimiyeti… Ve eğitime girmek için getirdiğin laptopunda bir şey izlemeden yemek yiyemeyen ben… Veee kocaman bir kırkayak.",
  },
  {
    id: 23,
    image: "assets/photos/landscape/memory_23.jpg",
    orientation: "landscape",
    frameType: "landscape",
    wallLabelTitle: "O Bakış",
    wallLabelSubtitle: "25 Eylül 2023",
    modalTitle: "O Bakış",
    modalDate: "25 Eylül 2023 15:43 · Balıkesir Küçükköy/Bıngıdı Bungalow",
    modalDescription:
      "Bak şu bakışlara bak… Ölürüm o bakışına, ölürüm o gülüşüne. Bu ev bizim için çok anlamlı. Gerçekten birbirimize ait olduğumuzu, birbirimizi çok sevdiğimizi ve harika bir tatil geçirdiğimizi özetleyen bir an. Seni çok seviyorum.",
  },
  {
    id: 24,
    image: "assets/photos/portrait/memory_24.jpg",
    orientation: "portrait",
    frameType: "portrait",
    wallLabelTitle: "İlk Yeni Yılımız",
    wallLabelSubtitle: "31 Aralık 2023",
    modalTitle: "İlk Yeni Yılımız",
    modalDate: "31 Aralık 2023 22:04 · İstanbul Kartal Lalelik Cami Bacanağımın Ana Evi",
    modalDescription:
      "Birlikte yan yana girdiğimiz ilk yeni yılımız sevgilim. İkimizde de olan bu ısırma hastalığını ne yapacağız???",
  },
];

/**
 * 25-66 anıları buradan yönetilir.
 * Not: memory_25.jpg şu an assets/photos klasöründe bulunamadı.
 * Dosyayı eklediğinde sadece image yolunu doğru klasörde güncellemen yeterli.
 */
const EXTRA_MEMORIES = [
  {
    id: 25,
    image: "assets/photos/portrait/memory_25.jpg",
    wallLabelTitle: "Adalar",
    wallLabelSubtitle: "7 Şubat 2024",
    modalTitle: "Adalar",
    modalDate: "7 Şubat 2024 16:37 · İstanbul Adalar",
    modalDescription:
      "Vee yine en çok bize yakışan bir konum. Adalara olan hastalığımız… Yaz geliyor, tekrar gidelim.",
  },
  {
    id: 26,
    image: "assets/photos/portrait/memory_26.jpg",
    wallLabelTitle: "Buzpisti",
    wallLabelSubtitle: "20 Şubat 2024",
    modalTitle: "Kadıköy Buzpisti",
    modalDate: "20 Şubat 2024 16:36 · İstanbul Kadıköy Buzpisti",
    modalDescription:
      "Müthiş beceriksizliğimiz, bolca kalça kırmalı harika bir deneyim. Buradan anlamalıyız ki kış hiiç bize göre değil.",
  },
  {
    id: 27,
    image: "assets/photos/landscape/memory_27.jpg",
    wallLabelTitle: "En Güzel Çiçek",
    wallLabelSubtitle: "8 Mart 2024",
    modalTitle: "Viaport",
    modalDate: "8 Mart 2024 22:31 · İstanbul Kurtköy Viaport",
    modalDescription:
      "Dünyadaki en güzel çiçek sensin. Bunu bir kez daha hatırlatmak istedim. Seninle yaptığım her şeyden ultra keyif alıyorum bir tanem.",
  },
  {
    id: 28,
    image: "assets/photos/portrait/memory_28.jpg",
    wallLabelTitle: "Birinci Yılımız",
    wallLabelSubtitle: "12 Mart 2024",
    modalTitle: "Birinci Yılımız",
    modalDate: "12 Mart 2024 22:35 · Birinci Yılımız",
    modalDescription:
      "Sevgilimle bir yaşımıza girdiğimiz an. Çok güzelsin sevgilim. Bu bir yılda bile ne kadar çok şey yapmışız. Eklemediğim o kadar çok şey var ki...",
  },
  {
    id: 29,
    image: "assets/photos/portrait/memory_29.jpg",
    wallLabelTitle: "Aydos Gölü",
    wallLabelSubtitle: "11 Nisan 2024",
    modalTitle: "Aydos Gölü",
    modalDate: "11 Nisan 2024 17:21 · İstanbul Aydos Gölü",
    modalDescription:
      "Çilek kızım benim… Ne güzel gülüyorsun öyle bebeğim. Doğada gezmeyi çok seviyoruz ama ben seni daha çok seviyorum.",
  },
  {
    id: 30,
    image: "assets/photos/portrait/memory_30.jpg",
    wallLabelTitle: "İlk Yurtdışı",
    wallLabelSubtitle: "29 Nisan 2024",
    modalTitle: "Sabiha Gökçen",
    modalDate: "29 Nisan 2024 21:54 · İstanbul Sabiha Gökçen Havalimanı",
    modalDescription:
      "Hazırlan sevgilim! Bir takım kutlamalar için uçuyoruz. Çok heyecanlıyız. İlk yurtdışı deneyimimiz.",
  },
  {
    id: 31,
    image: "assets/photos/portrait/memory_31.jpg",
    wallLabelTitle: "Tikalii",
    wallLabelSubtitle: "30 Nisan 2024",
    modalTitle: "Tiflis",
    modalDate: "30 Nisan 2024 13:22 · Gürcistan Tiflis",
    modalDescription: "Veee yurtdışından aldığımız ilk şey… Tikalii.",
  },
  {
    id: 32,
    image: "assets/photos/portrait/memory_32.jpg",
    wallLabelTitle: "Mushtaid Park",
    wallLabelSubtitle: "1 Mayıs 2024",
    modalTitle: "Mushtaid Park",
    modalDate: "1 Mayıs 2024 18:39 · Gürcistan Tiflis Mushtaid Park",
    modalDescription:
      "Hatırladın mı? Tiflis’in o güzel parklarında gezerken dilini bilmediğimiz bir adama bir şey sormuştuk. “Gelin” demişti. Tedirgin bir şekilde takip etmiştik ve sonrasında o güzel anlar…",
  },
  {
    id: 33,
    image: "assets/photos/landscape/memory_33.jpg",
    wallLabelTitle: "Mint Kafe",
    wallLabelSubtitle: "3 Mayıs 2024",
    modalTitle: "Mint Kafe",
    modalDate: "3 Mayıs 2024 13:55 · Gürcistan Tiflis Mint Kafe",
    modalDescription:
      "Aşkım… Ne güzeldi. Enerjimizle herkesi kendimize hayran bırakmıştık. Elindeki çiçekten bile güzeldin, kıskanıp solmuştu. Hiç tanımadığımız insanların bize pasta ikram etmesi ve doğum gününü kutlarken bize eşlik etmeleri…",
  },
  {
    id: 34,
    image: "assets/photos/landscape/memory_34.jpg",
    wallLabelTitle: "Karaoke Bar",
    wallLabelSubtitle: "4 Mayıs 2024",
    modalTitle: "Tiflis Karaoke Bar",
    modalDate: "4 Mayıs 2024 01:31 · Tiflis Karaoke Bar",
    modalDescription:
      "Saatlerce yürüyüp güzel bir mekan arayıp en sonunda yine enerjimize uyan bir yer bulmamız ve eğlenmemiz!",
  },
  {
    id: 35,
    image: "assets/photos/portrait/memory_35.jpg",
    wallLabelTitle: "Keşke Bitmese",
    wallLabelSubtitle: "4 Mayıs 2024",
    modalTitle: "Tiflis Gölü Yakınları",
    modalDate: "4 Mayıs 2024 15:14 · Tiflis Gölü Yakınları",
    modalDescription:
      "Vee benim “keşke bitmese” dediğim tatil. Dileklerimin kabul olup bir gün rötar yiyip tatilimizin uzaması… Ve ayakkabılarımızın hiç olduğu o yer. Sinir bozucuydu ama hala yüzlerimizin gülmesi birbirimize ne kadar ait olduğumuzun göstergesi.",
  },
  {
    id: 36,
    image: "assets/photos/portrait/memory_36.jpg",
    wallLabelTitle: "Dönüş",
    wallLabelSubtitle: "5 Mayıs 2024",
    modalTitle: "Tiflis Havalimanı",
    modalDate: "5 Mayıs 2024 05:31 · Tiflis Havalimanı",
    modalDescription:
      "Vee ilk yurtdışı tatilimiz bittiği için üzgünüz ama biliyoruz ki bu sadece bir başlangıç.",
  },
  {
    id: 37,
    image: "assets/photos/landscape/memory_37.jpg",
    wallLabelTitle: "Heybeliada",
    wallLabelSubtitle: "29 Mayıs 2024",
    modalTitle: "Heybeliada",
    modalDate: "29 Mayıs 2024 20:54 · İstanbul Heybeliada",
    modalDescription:
      "Ne kadar güzel bir gündü. Hatırladın mı özgürce dolaştığımız, yürüdüğümüz o yolları?",
  },
  {
    id: 38,
    image: "assets/photos/landscape/memory_38.jpg",
    wallLabelTitle: "Doğum Günü Masası",
    wallLabelSubtitle: "10 Haziran 2024",
    modalTitle: "Sapanca",
    modalDate: "10 Haziran 2024 13:22 · Sakarya Sapanca Gölü Yakınları",
    modalDescription:
      "Veee dünyanın en güzel doğum günü masası, en güzel sevgilisi, en güzel pastası… İyi ki sen sevgilim, iyi ki varsın.",
  },
  {
    id: 39,
    image: "assets/photos/portrait/memory_39.jpg",
    wallLabelTitle: "Şeffaf Kano",
    wallLabelSubtitle: "10 Haziran 2024",
    modalTitle: "Harika Plan",
    modalDate: "10 Haziran 2024 22:51",
    modalDescription:
      "Sevgilim o kadar güzel bir plan yapmıştı ki kombin bile değiştirmiştik. Güzel bir kahvaltı, ardından şeffaf kano deneyimi ve harika bir yemek… İyi ki sen sevgilim.",
  },
  {
    id: 40,
    image: "assets/photos/portrait/memory_40.jpg",
    wallLabelTitle: "Mısır Başlıyor",
    wallLabelSubtitle: "18 Eylül 2024",
    modalTitle: "Sabiha Gökçen",
    modalDate: "18 Eylül 2024 00:42 · İstanbul Sabiha Gökçen Havalimanı",
    modalDescription:
      "Hazır mısın sevgilim? Kemerlerini bağla. Mısır seyahatimiz başlıyor.",
  },
  {
    id: 41,
    image: "assets/photos/landscape/memory_41.jpg",
    wallLabelTitle: "Savaş Körfezi",
    wallLabelSubtitle: "19 Eylül 2024",
    modalTitle: "Hurghada",
    modalDate: "19 Eylül 2024 16:42 · Mısır Hurghada Savaş Körfezi",
    modalDescription:
      "Yürüdükçe yükselmeyen deniz seviyesi… Ve her adımında sana karşı aşkı artan ben.",
  },
  {
    id: 42,
    image: "assets/photos/portrait/memory_42.jpg",
    wallLabelTitle: "Bedevi Köyü",
    wallLabelSubtitle: "20 Eylül 2024",
    modalTitle: "Bedevi Köyü",
    modalDate: "20 Eylül 2024 16:59 · Mısır Hurghada Bedevi Köyü",
    modalDescription:
      "Sevgilim, çocukların ismini unuttum ama ne kadar mutlu olmuşlardı. Yine enerjimizle çocukları mutlu ettik. Çok güzel bir anne olacaksın hayatım. İyi ki varsın.",
  },
  {
    id: 43,
    image: "assets/photos/portrait/memory_43.jpg",
    wallLabelTitle: "Denizin Altında",
    wallLabelSubtitle: "22 Eylül 2024",
    modalTitle: "Hurghada Açıkları",
    modalDate: "22 Eylül 2024 10:40 · Mısır Hurghada Açıkları",
    modalDescription:
      "Hayatımızdaki belki de en büyük deneyim, en büyük adrenalin olabilir. Bütün olumsuzluklara rağmen ilkleri yine seninle yaşamak tarifsizdi. Denizin altında seninle geçirdiğimiz o harika dakikalar…",
  },
  {
    id: 44,
    image: "assets/photos/landscape/memory_44.jpg",
    wallLabelTitle: "Teras",
    wallLabelSubtitle: "22 Eylül 2024",
    modalTitle: "Otelimizin Terası",
    modalDate: "22 Eylül 2024 23:32 · Mısır Hurghada Otelimizin Terası",
    modalDescription:
      "Bugün belki de ilişkimizdeki en önemli anlardan biriydi. Çok huzur dolu bir andı. Sessizlik, karanlık… Sadece sen ve ben. Yıldızlar ve ay.",
  },
  {
    id: 45,
    image: "assets/photos/portrait/memory_45.jpg",
    wallLabelTitle: "Mısır Sokakları",
    wallLabelSubtitle: "24 Eylül 2024",
    modalTitle: "Dönüş",
    modalDate: "24 Eylül 2024 03:12 · Mısır Hurghada Havalimanı",
    modalDescription:
      "Yine üzgünüz. Çok keyifli bir tatildi. Yürüdüğümüz Mısır sokakları, halkın bize bakışları… Yazmadığım o kadar çok anı var ki. Harika bir tatil daha sona ermişti.",
  },
  {
    id: 46,
    image: "assets/photos/landscape/memory_46.jpg",
    wallLabelTitle: "Gün Batımı",
    wallLabelSubtitle: "10 Ekim 2024",
    modalTitle: "Maltepe Sahili",
    modalDate: "10 Ekim 2024 18:40 · İstanbul Maltepe Sahili",
    modalDescription:
      "Baksana gün batımına… Ne kadar yakışıyoruz. Sahil, orman, doğa… En sevdiğimiz yerler.",
  },
  {
    id: 47,
    image: "assets/photos/portrait/memory_47.jpg",
    wallLabelTitle: "Müzelik Fotoğraf",
    wallLabelSubtitle: "24 Ekim 2024",
    modalTitle: "Haydarpaşa Limanı",
    modalDate: "24 Ekim 2024 17:40 · İstanbul Haydarpaşa Limanı",
    modalDescription:
      "Burada seni yaratana kurban olayım gibi durmuşsun. Tam bir müzelik fotoğraf.",
  },
  {
    id: 48,
    image: "assets/photos/landscape/memory_48.jpg",
    wallLabelTitle: "Polonezköy",
    wallLabelSubtitle: "14 Kasım 2024",
    modalTitle: "Polonezköy",
    modalDate: "14 Kasım 2024 17:57 · İstanbul Beykoz Polonezköy",
    modalDescription:
      "Bugün harika, chill bir gündü. Güya film izleyecektik ama yine attık kendimizi ormana. Hava kararana kadar yürüdük. Sonlara doğru biraz ürktük ama doğa bizi çok seviyor.",
  },
  {
    id: 49,
    image: "assets/photos/portrait/memory_49.jpg",
    wallLabelTitle: "Kız Kulesi",
    wallLabelSubtitle: "14 Kasım 2024",
    modalTitle: "Kız Kulesi",
    modalDate: "14 Kasım 2024 22:03 · İstanbul Üsküdar Kız Kulesi",
    modalDescription:
      "Vee filmimizi izledik, hem de harika bir manzara eşliğinde… Senin gözlerinle birlikte. Sonrasında yediğimiz tavuklu pilav ise müthişti.",
  },
  {
    id: 50,
    image: "assets/photos/portrait/memory_50.jpg",
    wallLabelTitle: "Öğretmenim",
    wallLabelSubtitle: "24 Kasım 2024",
    modalTitle: "Öğretmenler Günü",
    modalDate: "24 Kasım 2024 18:50 · İstanbul Pendik Sahil",
    modalDescription:
      "Benim hayatımdaki en güzel, en iyi, en yakın arkadaş olan öğretmenim… Sevmenin ve sevilmenin ne demek olduğunu öğrettiğin için teşekkür ederim. Öğretmenler günün kutlu olsun.",
  },
  {
    id: 51,
    image: "assets/photos/portrait/memory_51.jpg",
    wallLabelTitle: "Hoş Geldin 2025",
    wallLabelSubtitle: "31 Aralık 2024",
    modalTitle: "Caddebostan",
    modalDate: "31 Aralık 2024 18:09 · İstanbul Kadıköy Caddebostan",
    modalDescription:
      "Güle güle 2024, hoş geldin 2025. Maalesef bu yıla beraber girmemiştik. Belki ondan biraz kötü geçti ama birbirimize söz vermiştik: 2026’ya beraber gireceğiz diye.",
  },
  {
    id: 52,
    image: "assets/photos/landscape/memory_52.jpg",
    wallLabelTitle: "Anne ve Baba",
    wallLabelSubtitle: "12 Mart 2025",
    modalTitle: "İstmarina",
    modalDate: "12 Mart 2025 17:46 · İstanbul Kartal İstmarina",
    modalDescription:
      "Dünyanın en güzel ailesini kurmaya potansiyeli olan bir çift var karşınızda!!! Anne ve baba oruçlu.",
  },
  {
    id: 53,
    image: "assets/photos/portrait/memory_53.jpg",
    wallLabelTitle: "İkinci Yılımız",
    wallLabelSubtitle: "13 Mart 2025",
    modalTitle: "Sahilköy",
    modalDate: "13 Mart 2025 21:09 · İstanbul Şile Sahilköy",
    modalDescription:
      "Veee 2. yılımız bitti. Çok özel bir gün değil miydi? Sanki birbirimiz için kapattığımız bir restoran… Havuz başında harika bir bahçe. Ne kadar duygu yüklü bir şey bu. Artık kanıtlanmış bir şey: Biz iyiysek, kalbimizin ekmeğini yiyerek yaptığımız her şey harika oluyor.",
  },
  {
    id: 54,
    image: "assets/photos/portrait/memory_54.jpg",
    wallLabelTitle: "Doğum Günü Sürprizi",
    wallLabelSubtitle: "27 Nisan 2025",
    modalTitle: "İzmit",
    modalDate: "27 Nisan 2025 14:32 · Kocaeli İzmit Lüks Aile Villası",
    modalDescription:
      "Sevgilime erken doğum günü sürprizi! Bu yıl yurtdışına gidememiştik ama dostlarımızla yine de harika bir gündü. Doğum günün kutlu olsun balım.",
  },
  {
    id: 55,
    image: "assets/photos/portrait/memory_55.jpg",
    wallLabelTitle: "At Çiftliği",
    wallLabelSubtitle: "3 Mayıs 2025",
    modalTitle: "Çakırbey At Çiftliği",
    modalDate: "3 Mayıs 2025 15:01 · İstanbul Beykoz Çakırbey At Çiftliği",
    modalDescription:
      "Vee bir minik hayale daha tik atıldı. Ama neden hep böyle şeylerde benim başıma bir iş geliyor ya?",
  },
  {
    id: 56,
    image: "assets/photos/portrait/memory_56.jpg",
    wallLabelTitle: "İlk Kupamız",
    wallLabelSubtitle: "25 Mayıs 2025",
    modalTitle: "EuroLeague Şampiyonluğu",
    modalDate: "25 Mayıs 2025 22:14 · İstanbul Pendik",
    modalDescription: "FENERBAHÇEM 2024–2025 SEZONUNUN EUROLEAGUE ŞAMPİYONU! İlk kupamız.",
  },
  {
    id: 57,
    image: "assets/photos/landscape/memory_57.jpg",
    wallLabelTitle: "Okul Bitti",
    wallLabelSubtitle: "30 Mayıs 2025",
    modalTitle: "Çamlıca",
    modalDate: "30 Mayıs 2025 20:17 · İstanbul Çamlıca",
    modalDescription:
      "Sevgilimin okul hayatı bitti. Çok güzel, prensesler gibi. Benim hayatım… Şu güzelliğe bakar mısın.",
  },
  {
    id: 58,
    image: "assets/photos/portrait/memory_58.jpg",
    wallLabelTitle: "Şile Kamp",
    wallLabelSubtitle: "7 Haziran 2025",
    modalTitle: "Şile Kamp",
    modalDate: "7 Haziran 2025 20:44 · İstanbul Şile Kamp",
    modalDescription:
      "Ne güzel bir kamptı. Sabah olmadan yıldızları izlemek, gün ışığını görmek için deniz kenarına gitmemiz, benim ateş yakmaya çalışmam… Keşke karnın ağrımasaydı ama yine de çok güzeldi hayatım.",
  },
  {
    id: 59,
    image: "assets/photos/landscape/memory_59.jpg",
    wallLabelTitle: "Doğum Günüm",
    wallLabelSubtitle: "12 Haziran 2025",
    modalTitle: "Kartal Sahili",
    modalDate: "12 Haziran 2025 20:33 · İstanbul Kartal Sahili",
    modalDescription:
      "Sevgilim harika bir masa hazırlamıştı benim için. Doğum günümü kutlamak için… Ve hayali olarak tuttuğumuz balıkları pişirip yemiştik.",
  },
  {
    id: 60,
    image: "assets/photos/portrait/memory_60.jpg",
    wallLabelTitle: "Kaybolup Bulduğumuz Yer",
    wallLabelSubtitle: "20 Temmuz 2025",
    modalTitle: "Abdüş Parkı",
    modalDate: "20 Temmuz 2025 17:59 · İstanbul Tuzla Abdüş Parkı",
    modalDescription:
      "Sevgilim, aslında rutin bir gezintiydi. Abdüş Parkı’na gidecektik ama yolu kaybettim. Ve çok daha güzel, sadece bize ait bir yere geldik.",
  },
  {
    id: 61,
    image: "assets/photos/portrait/memory_61.jpg",
    wallLabelTitle: "Cam ve Billur",
    wallLabelSubtitle: "16 Kasım 2025",
    modalTitle: "Cam ve Billur Müzesi",
    modalDate: "16 Kasım 2025 16:04 · Beykoz Cam ve Billur Müzesi",
    modalDescription: "Yine dinlendirici, sessiz, sakin ve harika bir gün.",
  },
  {
    id: 62,
    image: "assets/photos/portrait/memory_62.jpg",
    wallLabelTitle: "Birlikte 2026",
    wallLabelSubtitle: "31 Aralık 2025",
    modalTitle: "Belgrad",
    modalDate: "31 Aralık 2025 19:17 · Sırbistan Belgrad Sımjka Baska Sava Parkı",
    modalDescription:
      "Vee geçen sene dileklerimiz kabul oldu. 2026’ya birlikte giriyoruz, hem de yurtdışında.",
  },
  {
    id: 63,
    image: "assets/photos/portrait/memory_63.jpg",
    wallLabelTitle: "Kahvaltı Arayışı",
    wallLabelSubtitle: "1 Ocak 2026",
    modalTitle: "Belgrad Evimiz",
    modalDate: "1 Ocak 2026 10:31 · Sırbistan Belgrad Evimiz",
    modalDescription:
      "En sevdiğim kadınla kahvaltı arayışına çıkıyoruz ama resmi tatil :(",
  },
  {
    id: 64,
    image: "assets/photos/portrait/memory_64.jpg",
    wallLabelTitle: "Taşmeydan Parkı",
    wallLabelSubtitle: "1 Ocak 2026",
    modalTitle: "Taşmeydan Parkı",
    modalDate: "1 Ocak 2026 15:42 · Sırbistan Belgrad Taşmeydan Parkı",
    modalDescription:
      "Güzelliğine ölürüm senin balım. Yine güzel sokaklarda, aşık olduğumuz sokaklarda sen ve ben sınırsız adımlar attık.",
  },
  {
    id: 65,
    image: "assets/photos/portrait/memory_65.jpg",
    wallLabelTitle: "Karadordev Parkı",
    wallLabelSubtitle: "3 Ocak 2026",
    modalTitle: "Karadordev Parkı",
    modalDate: "3 Ocak 2026 11:56 · Sırbistan Belgrad Karadordev Parkı",
    modalDescription:
      "Hava ne kadar soğuk olursa olsun hiç yorulmadan, sıkılmadan, soğuğa aldırış etmeden saatlerce yürüdüğümüz yerler.",
  },
  {
    id: 66,
    image: "assets/photos/portrait/memory_66.jpg",
    wallLabelTitle: "Vracar",
    wallLabelSubtitle: "5 Ocak 2026",
    modalTitle: "Belgrad Evimiz Vracar",
    modalDate: "5 Ocak 2026 10:14 · Sırbistan Belgrad Evimiz Vracar",
    modalDescription:
      "Gidiyoruz ama bu sefer üzülmüyoruz. Çünkü alıştık… Tekrar bir yere seyahat edeceğimizi biliyoruz canım sevgilim.",
  },
  {
    id: 67,
    image: "assets/photos/landscape/memory_67.jpg",
    wallLabelTitle: "Dünyanın En Güzel Yeri Senin Yanın",
    wallLabelSubtitle: "13 Mart 2026",
    modalTitle: "3. Yılımız",
    modalDate: "13 Mart 2026 · Dünyanın En Güzel Yeri Senin Yanın",
    modalDescription:
      "Balım, bugün tam 1096 gündür birlikteyiz. Bu sergide gördüğün fotoğraflar aslında bizim hikâyemizin sadece küçük bir kısmı. Her biri bir gün, bir an, bir gülüş, bir yolculuk. Ama bu duvarlara sığdıramadığım yüzlerce anımız var. Birlikte yürüdüğümüz sokaklar, sebepsizce güldüğümüz anlar, yolda kaybolduğumuz günler ve birbirimize bakıp hiçbir şey söylemeden anlaştığımız o küçük anlar… Belki de en güzel anılarımızın çoğu hiç fotoğraf olmadı ama hepsi kalbimde. Bugün bu son fotoğraf ise 3. yılımızdan bir an. Yine biz, yine yan yana. Bunca yer gördük, bunca an yaşadık ama benim için değişmeyen tek bir şey var: Dünyanın en güzel yeri hâlâ senin yanın. 3. yılımız kutlu olsun balım. Daha yaşayacağımız binlerce gün ve yazacağımız çok uzun bir hikâyemiz var. Seni çok seviyorum.",
  },
];

function inferOrientationFromImagePath(imagePath) {
  if (imagePath.includes("/landscape/")) return "landscape";
  return "portrait";
}

function normalizeMemory(memory) {
  const inferredOrientation = inferOrientationFromImagePath(memory.image);
  return {
    ...memory,
    orientation: inferredOrientation,
    frameType: inferredOrientation,
  };
}

const PHOTO_MEMORIES = [...REAL_MEMORIES, ...EXTRA_MEMORIES].map(normalizeMemory);

const OBJECT_PATTERN = [
  {
    id: "shelf_01",
    objectStyle: "shelf",
    objects: [
      "assets/objects/shelf/chick_plush.png",
      "assets/objects/shelf/market_tent.png",
      "assets/objects/shelf/necklace_memory.png",
      "assets/objects/shelf/red_car.png",
    ],
    image: "assets/objects/shelf_set_a.png",
    title: "Raf Koleksiyonu",
    modalTitle: "Raf Koleksiyonu",
    date: "Kürasyon Noktası",
    modalDate: "Kürasyon Noktası",
    description: "Bu raftaki küçük objeler, fotoğraf grubuna eşlik eden detay anıları temsil eder.",
    modalDescription:
      "Bu raftaki küçük objeler, fotoğraf grubuna eşlik eden detay anıları temsil eder.",
  },
  {
    id: "vitrine_01",
    objectStyle: "artifact",
    // Sadece ilk cam vitrin için özel PNG obje.
    // Dosyayı buraya koy: assets/objects/display-case/first_case_object.png
    objectImage: "assets/objects/display-case/first_case_object.png",
    objectImageWidth: 132,
    image: "assets/objects/display_piece_a.glb",
    title: "Cam Vitrin Koleksiyonu",
    modalTitle: "Cam Vitrin Koleksiyonu",
    date: "Kürasyon Noktası",
    modalDate: "Kürasyon Noktası",
    description: "Bu vitrindeki obje, bulunduğu fotoğraf grubunun ortak temasını simgeler.",
    modalDescription:
      "Bu vitrindeki obje, bulunduğu fotoğraf grubunun ortak temasını simgeler.",
  },
];

const DATA_START_X = 2600;
const DATA_STEP_X = 320;
const DATA_OBJECT_EXTRA_GAP = 80;
const CUSTOM_SHELF_OBJECTS_BY_ORDER = {
  // 2. raf
  3: [
    "assets/objects/shelf/bisiklet.png",
    "assets/objects/shelf/sandalye.png",
    "assets/objects/shelf/canta.png",
    "assets/objects/shelf/cay.png",
  ],
  // 3. raf
  5: [
    "assets/objects/shelf/pasta.png",
    "assets/objects/shelf/palet.png",
    "assets/objects/shelf/kale.png",
    "assets/objects/shelf/valiz.png",
  ],
  // 4. raf
  7: [
    "assets/objects/shelf/adalar.png",
    "assets/objects/shelf/buz.png",
    "assets/objects/shelf/gul.png",
    "assets/objects/shelf/kamera.png",
  ],
  // 5. raf
  9: [
    "assets/objects/shelf/kek.png",
    "assets/objects/shelf/sameba.png",
    "assets/objects/shelf/mikrafon.png",
    "assets/objects/shelf/cicek.png",
  ],
  // 6. raf
  11: [
    "assets/objects/shelf/deve.png",
    "assets/objects/shelf/tup.png",
    "assets/objects/shelf/yıldız.png",
    "assets/objects/shelf/gunes.png",
  ],
  // 7. raf
  13: [
    "assets/objects/shelf/ki zkulesi.png",
    "assets/objects/shelf/laptop.png",
    "assets/objects/shelf/2025.png",
    "assets/objects/shelf/aile.png",
  ],
  // 8. raf
  15: [
    "assets/objects/shelf/at.png",
    "assets/objects/shelf/kamp.png",
    "assets/objects/shelf/olta.png",
    "assets/objects/shelf/mezun.png",
  ],
};

const CUSTOM_ARTIFACT_IMAGE_BY_ORDER = {
  // 1. camekan
  2: { image: "assets/objects/display-case/first_case_object.png", width: 132 },
  // 2. camekan
  4: { image: "assets/objects/display-case/fenerbahce.png", width: 132 },
  // 3. camekan
  6: { image: "assets/objects/display-case/bikini.png", width: 132 },
  // 4. camekan
  8: { image: "assets/objects/display-case/ucak.png", width: 132 },
  // 5. camekan
  10: { image: "assets/objects/display-case/kano.png", width: 132 },
  // 6. camekan
  12: { image: "assets/objects/display-case/agac.png", width: 132 },
  // 7. camekan
  14: { image: "assets/objects/display-case/euroleague.png", width: 132 },
  // 8. camekan
  16: { image: "assets/objects/display-case/yilbasi.png", width: 132 },
};

function buildExhibitionData(photoMemories) {
  const result = [];
  let idCounter = 1;
  let orderCounter = 1;
  let xCursor = DATA_START_X;
  let objectPatternIndex = 0;

  for (let index = 0; index < photoMemories.length; index += 1) {
    const photo = photoMemories[index];
    const frameType = photo.frameType === "portrait" ? "portrait" : "landscape";

    result.push({
      id: idCounter,
      order: orderCounter,
      type: "photo",
      format: frameType,
      ...photo,
      x: xCursor,
    });

    idCounter += 1;
    orderCounter += 1;
    xCursor += DATA_STEP_X;

    if ((index + 1) % 4 !== 0) continue;

    const objectTemplateBase = OBJECT_PATTERN[objectPatternIndex % OBJECT_PATTERN.length];
    objectPatternIndex += 1;
    const objectTemplate = { ...objectTemplateBase };

    // Shelf kurali:
    // - Belirli raflarda ozel PNG listesi kullan.
    // - Diger raflarda placeholder devam etsin.
    if (objectTemplate.objectStyle === "shelf") {
      const customShelfObjects = CUSTOM_SHELF_OBJECTS_BY_ORDER[objectPatternIndex];
      if (Array.isArray(customShelfObjects) && customShelfObjects.length > 0) {
        objectTemplate.objects = [...customShelfObjects];
        delete objectTemplate.shelfObjects;
      } else if (objectPatternIndex > 1) {
        delete objectTemplate.objects;
        objectTemplate.shelfObjects = ["vase", "sphere", "cube", "vase"];
      }
    }

    // Camekan kurali:
    // - Belirli camekanlarda ozel PNG objeler kullan.
    // - Diger camekanlarda placeholder devam etsin.
    if (objectTemplate.objectStyle === "artifact") {
      const customArtifact = CUSTOM_ARTIFACT_IMAGE_BY_ORDER[objectPatternIndex];
      if (customArtifact) {
        objectTemplate.objectImage = customArtifact.image;
        objectTemplate.objectImageWidth = customArtifact.width;
      } else {
        delete objectTemplate.objectImage;
        delete objectTemplate.objectImageWidth;
      }
    }

    result.push({
      id: idCounter,
      order: orderCounter,
      type: "object",
      ...objectTemplate,
      x: xCursor + DATA_OBJECT_EXTRA_GAP,
    });

    idCounter += 1;
    orderCounter += 1;
    xCursor += DATA_STEP_X + DATA_OBJECT_EXTRA_GAP;
  }

  return result;
}

window.MEMORIES_DATA = buildExhibitionData(PHOTO_MEMORIES);
