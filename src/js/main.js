const products = [
  {
    id: 'iphone-15-pro',
    title: 'Apple iPhone 15 Pro',
    description: 'Flagship viedtālrunis ar titāna korpusu, A17 Pro čipu un uzlabotām kamerām. Ideāls produktivitātei un kreatīvam darbam.',
    price: '€1199',
    image: 'src/image/iphone15pro.png',
    badge: 'Jauns',
    category: 'telefoni',
    manufacturer: 'Apple',
    storage: '128GB/256GB/512GB/1TB',
    ram: '8GB',
    battery: '4441 mAh',
    cores: '6-core CPU, 6-core GPU',
    display: '6.1" Super Retina XDR',
    camera: '48MP + 12MP + 12MP',
    connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3'
  },
  {
    id: 'samsung-s24',
    title: 'Samsung Galaxy S24 Ultra',
    description: 'Vadošais Android viedtālrunis ar S-Pen, AI funkcijām un spožu displeju. Perfekts daudzuzdevumiem.',
    price: '€1099',
    image: 'src/image/samsungs24.png',
    badge: 'AI Powered',
    category: 'telefoni',
    manufacturer: 'Samsung',
    storage: '256GB/512GB/1TB',
    ram: '12GB',
    battery: '5000 mAh',
    cores: '8-core (1x3.39GHz + 5x3.1GHz + 2x2.2GHz)',
    display: '6.8" Dynamic AMOLED 2X',
    camera: '200MP + 50MP + 12MP + 10MP',
    connectivity: '5G, Wi-Fi 7, Bluetooth 5.3'
  },
  {
    id: 'google-pixel-8',
    title: 'Google Pixel 8 Pro',
    description: 'Tīrais Android pieredze ar uzlabotām Google AI kamerām. Labākais foto un video kvalitāte.',
    price: '€899',
    image: 'src/image/pixel8.png',
    badge: 'Google AI',
    category: 'telefoni',
    manufacturer: 'Google',
    storage: '128GB/256GB/512GB',
    ram: '12GB',
    battery: '5050 mAh',
    cores: 'Google Tensor G3 (9-core)',
    display: '6.7" OLED 120Hz',
    camera: '50MP + 48MP + 48MP',
    connectivity: '5G, Wi-Fi 7, Bluetooth 5.3'
  },
  {
    id: 'oneplus-12',
    title: 'OnePlus 12',
    description: 'Ātrākā uzlāde industrijā, gluds 120Hz displejs un jaudīgs Snapdragon processors.',
    price: '€799',
    image: 'src/image/oneplus12.png',
    badge: 'Fast Charge',
    category: 'telefoni',
    manufacturer: 'OnePlus',
    storage: '256GB/512GB',
    ram: '12GB/16GB',
    battery: '5400 mAh',
    cores: 'Snapdragon 8 Gen 3 (8-core)',
    display: '6.82" LTPO AMOLED',
    camera: '50MP + 48MP + 64MP',
    connectivity: '5G, Wi-Fi 7, Bluetooth 5.4'
  },
  {
    id: 'xiaomi-14',
    title: 'Xiaomi 14 Pro',
    description: 'Innovatīvs Leica kameras sistēma, ātrs uzlādes un ilga baterijas dzīve.',
    price: '€849',
    image: 'src/image/xiaomi14.png',
    badge: 'Leica',
    category: 'telefoni',
    manufacturer: 'Xiaomi',
    storage: '256GB/512GB/1TB',
    ram: '12GB/16GB',
    battery: '4880 mAh',
    cores: 'Snapdragon 8 Gen 3 (8-core)',
    display: '6.73" LTPO AMOLED',
    camera: '50MP Leica + 50MP + 50MP',
    connectivity: '5G, Wi-Fi 7, Bluetooth 5.4'
  },
  {
    id: 'iphone-14',
    title: 'Apple iPhone 14',
    description: 'Uzticams viedtālrunis ar izcilu veiktspēju, labu bateriju un iOS ekosistēmu.',
    price: '€799',
    image: 'src/image/iphone14.png',
    badge: 'Izmēģināts',
    category: 'telefoni',
    manufacturer: 'Apple',
    storage: '128GB/256GB/512GB',
    ram: '6GB',
    battery: '3279 mAh',
    cores: 'Apple A15 Bionic (6-core)',
    display: '6.1" Super Retina XDR',
    camera: '12MP + 12MP',
    connectivity: '5G, Wi-Fi 6, Bluetooth 5.3'
  },
  {
    id: 'samsung-z-fold5',
    title: 'Samsung Z Fold 5',
    description: 'Saliekamais viedtālrunis ar lielu displeju, perfekts darbam un izklaidei.',
    price: '€1599',
    image: 'src/image/zfold5.png',
    badge: 'Foldable',
    category: 'telefoni',
    manufacturer: 'Samsung',
    storage: '256GB/512GB/1TB',
    ram: '12GB',
    battery: '4400 mAh',
    cores: 'Snapdragon 8 Gen 2 (8-core)',
    display: '7.6" iekšējais, 6.2" ārējais',
    camera: '50MP + 12MP + 10MP',
    connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3'
  },
  {
    id: 'nothing-phone2',
    title: 'Nothing Phone (2)',
    description: 'Unikāls dizains ar gaismas interfeisu, tīrs operētājsistēma un laba veiktspēja.',
    price: '€649',
    image: 'src/image/nothing2.png',
    badge: 'Unique',
    category: 'telefoni',
    manufacturer: 'Nothing',
    storage: '128GB/256GB/512GB',
    ram: '8GB/12GB',
    battery: '4700 mAh',
    cores: 'Snapdragon 8+ Gen 1 (8-core)',
    display: '6.7" OLED 120Hz',
    camera: '50MP + 50MP',
    connectivity: '5G, Wi-Fi 6, Bluetooth 5.3'
  },
  {
    id: 'samsung-a55',
    title: 'Samsung Galaxy A55',
    description: 'Vidējas klases viedtālrunis ar izcilu kameru un ilgu baterijas dzīvi.',
    price: '€449',
    image: 'src/image/samsung-a55.png',
    badge: 'Balanced',
    category: 'telefoni',
    manufacturer: 'Samsung',
    storage: '128GB/256GB',
    ram: '8GB',
    battery: '5000 mAh',
    cores: 'Exynos 1480 (8-core)',
    display: '6.6" Super AMOLED',
    camera: '50MP + 12MP + 5MP',
    connectivity: '5G, Wi-Fi 6, Bluetooth 5.3'
  },
  {
    id: 'google-pixel-7a',
    title: 'Google Pixel 7a',
    description: 'Budžeta Pixel ar lielisku kameru un tīro Android pieredzi.',
    price: '€499',
    image: 'src/image/pixel7a.png',
    badge: 'Value',
    category: 'telefoni',
    manufacturer: 'Google',
    storage: '128GB',
    ram: '8GB',
    battery: '4385 mAh',
    cores: 'Google Tensor G2 (8-core)',
    display: '6.1" OLED 90Hz',
    camera: '64MP + 13MP',
    connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3'
  },
  {
    id: 'oneplus-nord-3',
    title: 'OnePlus Nord 3',
    description: 'Jaudīgs vidējas klases viedtālrunis ar ātru uzlādi.',
    price: '€399',
    image: 'src/image/oneplus-nord3.png',
    badge: 'Performance',
    category: 'telefoni',
    manufacturer: 'OnePlus',
    storage: '128GB/256GB',
    ram: '8GB/16GB',
    battery: '5000 mAh',
    cores: 'MediaTek Dimensity 9000 (8-core)',
    display: '6.74" Fluid AMOLED',
    camera: '50MP + 8MP + 2MP',
    connectivity: '5G, Wi-Fi 6, Bluetooth 5.2'
  },

  {
    id: 'macbook-pro-16',
    title: 'MacBook Pro 16" M3 Max',
    description: 'Profesionāls portatīvais dators ar M3 Max čipu, lielisku ekrānu un ilgu baterijas dzīvi.',
    price: '€3499',
    image: 'src/image/macbook16.png',
    badge: 'Pro',
    category: 'portatīvie-datori',
    manufacturer: 'Apple',
    storage: '1TB/2TB/4TB/8TB',
    ram: '48GB/64GB/128GB',
    battery: '100 Wh',
    cores: 'M3 Max (16-core CPU, 40-core GPU)',
    display: '16.2" Liquid Retina XDR',
    weight: '2.15 kg',
    ports: '3x Thunderbolt 4, HDMI, SDXC, MagSafe 3'
  },
  {
    id: 'dell-xps-15',
    title: 'Dell XPS 15',
    description: 'Jaudīgs kreatīvais darbstacijas laptops ar 4K displeju un NVIDIA grafikas karti.',
    price: '€2199',
    image: 'src/image/dellxps15.png',
    badge: '4K Display',
    category: 'portatīvie-datori',
    manufacturer: 'Dell',
    storage: '1TB NVMe SSD',
    ram: '32GB DDR5',
    battery: '86 Wh',
    cores: 'Intel Core i7-13700H (14-core)',
    display: '15.6" 4K OLED',
    weight: '1.83 kg',
    ports: '2x Thunderbolt 4, USB-C, SD card'
  },
  {
    id: 'lenovo-thinkpad',
    title: 'Lenovo ThinkPad X1',
    description: 'Uzņēmumu klases laptops ar izcilu taustiņu, MIL-STD testētu un garu baterijas dzīvi.',
    price: '€1899',
    image: 'src/image/thinkpad.png',
    badge: 'Business',
    category: 'portatīvie-datori',
    manufacturer: 'Lenovo',
    storage: '512GB/1TB SSD',
    ram: '16GB LPDDR5',
    battery: '57 Wh',
    cores: 'Intel Core i7-1365U (10-core)',
    display: '14" WUXGA IPS',
    weight: '1.12 kg',
    ports: '2x Thunderbolt 4, USB-A, HDMI'
  },
  {
    id: 'asus-rog-zephyrus',
    title: 'ASUS ROG Zephyrus',
    description: 'Geiminga laptops ar augstākās klases GPU, augstu atsvaidzināšanas frekvenci un RGB apgaismojumu.',
    price: '€2799',
    image: 'src/image/asusrog.png',
    badge: 'Gaming',
    category: 'portatīvie-datori',
    manufacturer: 'ASUS',
    storage: '2TB NVMe SSD',
    ram: '32GB DDR5',
    battery: '90 Wh',
    cores: 'AMD Ryzen 9 7945HX (16-core)',
    display: '16" QHD+ 240Hz',
    weight: '2.3 kg',
    ports: '2x USB-C, 2x USB-A, HDMI, Ethernet'
  },
  {
    id: 'hp-spectre',
    title: 'HP Spectre x360',
    description: 'Premium 2-in-1 konvertējamais laptops ar OLED displeju un ilgu baterijas dzīvi.',
    price: '€1599',
    image: 'src/image/hpspectre.png',
    badge: 'Convertible',
    category: 'portatīvie-datori',
    manufacturer: 'HP',
    storage: '1TB NVMe SSD',
    ram: '16GB LPDDR4x',
    battery: '66 Wh',
    cores: 'Intel Core i7-1355U (10-core)',
    display: '13.5" OLED 3K2K',
    weight: '1.36 kg',
    ports: '2x Thunderbolt 4, USB-A, microSD'
  },
  {
    id: 'macbook-air-15',
    title: 'MacBook Air 15" M2',
    description: 'Plānais un vieglais laptops ar lielu 15 collu ekrānu, M2 čipu un bezventilatora dizainu.',
    price: '€1499',
    image: 'src/image/macbookair15.png',
    badge: 'Ultra Thin',
    category: 'portatīvie-datori',
    manufacturer: 'Apple',
    storage: '256GB/512GB/1TB/2TB',
    ram: '8GB/16GB/24GB',
    battery: '66.5 Wh',
    cores: 'M2 (8-core CPU, 10-core GPU)',
    display: '15.3" Liquid Retina',
    weight: '1.51 kg',
    ports: '2x Thunderbolt 4, MagSafe 3'
  },
  {
    id: 'lenovo-yoga-9i',
    title: 'Lenovo Yoga 9i',
    description: 'Premium konvertējamais laptops ar rotējošu skaļruni un OLED displeju.',
    price: '€1699',
    image: 'src/image/yoga9i.png',
    badge: 'Convertible',
    category: 'portatīvie-datori',
    manufacturer: 'Lenovo',
    storage: '1TB SSD',
    ram: '16GB LPDDR5',
    battery: '75 Wh',
    cores: 'Intel Core i7-1360P (12-core)',
    display: '14" OLED 4K',
    weight: '1.37 kg',
    ports: '2x Thunderbolt 4, USB-A'
  },
  {
    id: 'asus-vivobook-pro',
    title: 'ASUS VivoBook Pro 16',
    description: 'Kreatīvais laptops NVIDIA Studio sertifikātu un precīzu krāsu reproducēšanu.',
    price: '€1299',
    image: 'src/image/vivobook-pro.png',
    badge: 'Creative',
    category: 'portatīvie-datori',
    manufacturer: 'ASUS',
    storage: '1TB SSD',
    ram: '16GB DDR4',
    battery: '96 Wh',
    cores: 'AMD Ryzen 7 7735HS (8-core)',
    display: '16" 3.2K 120Hz OLED',
    weight: '1.95 kg',
    ports: 'USB-C, USB-A, HDMI, SD reader'
  },
  {
    id: 'acer-swift-x',
    title: 'Acer Swift X',
    description: 'Viegls un jaudīgs laptops ar diskrētu grafiku mobilajai produktivitātei.',
    price: '€999',
    image: 'src/image/swift-x.png',
    badge: 'Mobile',
    category: 'portatīvie-datori',
    manufacturer: 'Acer',
    storage: '512GB SSD',
    ram: '16GB LPDDR5',
    battery: '59 Wh',
    cores: 'AMD Ryzen 7 7840U (8-core)',
    display: '14" 2.8K OLED',
    weight: '1.39 kg',
    ports: '2x USB-C, USB-A, HDMI'
  },

  {
    id: 'intel-i9-14900k',
    title: 'Intel Core i9-14900K',
    description: 'Desktop processors ar 24 kodoliem, līdz 6.0 GHz takts frekvenci un uzlabotu veiktspēju spēlēs.',
    price: '€649',
    image: 'src/image/i914900k.png',
    badge: 'Flagship',
    category: 'procesori',
    manufacturer: 'Intel',
    cores: '24 (8P + 16E)',
    threads: '32',
    baseClock: '3.2 GHz',
    boostClock: '6.0 GHz',
    cache: '36MB L3',
    socket: 'LGA 1700',
    tdp: '125W (253W Turbo)'
  },
  {
    id: 'amd-ryzen-9-7950x',
    title: 'AMD Ryzen 9 7950X',
    description: '16-kodolu processors ar Zen 4 arhitektūru, augstu takts frekvenci un zemu enerģijas patēriņu.',
    price: '€699',
    image: 'src/image/ryzen7950x.png',
    badge: '16-Core',
    category: 'procesori',
    manufacturer: 'AMD',
    cores: '16',
    threads: '32',
    baseClock: '4.5 GHz',
    boostClock: '5.7 GHz',
    cache: '80MB (64MB L3 + 16MB L2)',
    socket: 'AM5',
    tdp: '170W'
  },
  {
    id: 'intel-i7-14700k',
    title: 'Intel Core i7-14700K',
    description: 'Jaudīgs processors 20 kodoliem, lielisks izvēle gan spēlēm, gan produktivitātes darbiem.',
    price: '€449',
    image: 'src/image/i714700k.png',
    badge: 'Performance',
    category: 'procesori',
    manufacturer: 'Intel',
    cores: '20 (8P + 12E)',
    threads: '28',
    baseClock: '3.4 GHz',
    boostClock: '5.6 GHz',
    cache: '33MB L3',
    socket: 'LGA 1700',
    tdp: '125W (253W Turbo)'
  },
  {
    id: 'amd-ryzen-7-7800x3d',
    title: 'AMD Ryzen 7 7800X3D',
    description: 'Gaming processors ar 3D V-Cache tehnoloģiju, nodrošina izcilu veiktspēju spēlēs.',
    price: '€449',
    image: 'src/image/ryzen7800x3d.png',
    badge: '3D V-Cache',
    category: 'procesori',
    manufacturer: 'AMD',
    cores: '8',
    threads: '16',
    baseClock: '4.2 GHz',
    boostClock: '5.0 GHz',
    cache: '104MB (96MB L3 + 8MB L2)',
    socket: 'AM5',
    tdp: '120W'
  },
  {
    id: 'intel-i5-14600k',
    title: 'Intel Core i5-14600K',
    description: 'Lieliska cenas un veiktspējas attiecība, 14 kodoli, perfekts vidējas klases sistēmām.',
    price: '€329',
    image: 'src/image/i514600k.png',
    badge: 'Value',
    category: 'procesori',
    manufacturer: 'Intel',
    cores: '14 (6P + 8E)',
    threads: '20',
    baseClock: '3.5 GHz',
    boostClock: '5.3 GHz',
    cache: '24MB L3',
    socket: 'LGA 1700',
    tdp: '125W (181W Turbo)'
  },
  {
    id: 'amd-ryzen-5-7600x',
    title: 'AMD Ryzen 5 7600X',
    description: '6-kodolu processors ar augstu takts frekvenci, ideāls budžeta gaming sistēmām.',
    price: '€299',
    image: 'src/image/ryzen7600x.png',
    badge: 'Budget King',
    category: 'procesori',
    manufacturer: 'AMD',
    cores: '6',
    threads: '12',
    baseClock: '4.7 GHz',
    boostClock: '5.3 GHz',
    cache: '38MB (32MB L3 + 6MB L2)',
    socket: 'AM5',
    tdp: '105W'
  },
  {
    id: 'amd-ryzen-3-8300g',
    title: 'AMD Ryzen 3 8300G',
    description: 'Budžeta processors ar integrētu grafiku, ideāls ofisa darbam.',
    price: '€199',
    image: 'src/image/ryzen3-8300g.png',
    badge: 'Budget',
    category: 'procesori',
    manufacturer: 'AMD',
    cores: '4',
    threads: '8',
    baseClock: '4.0 GHz',
    boostClock: '4.9 GHz',
    cache: '12MB',
    socket: 'AM5',
    tdp: '65W'
  },
  {
    id: 'intel-core-i3-14100',
    title: 'Intel Core i3-14100',
    description: 'Iznācīgs entry-level processors ar labu veiktspēju ikdienas uzdevumiem.',
    price: '€159',
    image: 'src/image/i3-14100.png',
    badge: 'Entry',
    category: 'procesori',
    manufacturer: 'Intel',
    cores: '4',
    threads: '8',
    baseClock: '3.5 GHz',
    boostClock: '4.7 GHz',
    cache: '12MB L3',
    socket: 'LGA 1700',
    tdp: '60W'
  },
  {
    id: 'amd-ryzen-threadripper-7960x',
    title: 'AMD Ryzen Threadripper 7960X',
    description: 'Profesionāls workstations processors ar 24 kodoliem maksimālai produktivitātei.',
    price: '€1499',
    image: 'src/image/threadripper-7960x.png',
    badge: 'Workstation',
    category: 'procesori',
    manufacturer: 'AMD',
    cores: '24',
    threads: '48',
    baseClock: '4.2 GHz',
    boostClock: '5.3 GHz',
    cache: '152MB',
    socket: 'sTR5',
    tdp: '350W'
  },

  {
    id: 'nvidia-rtx-4090',
    title: 'NVIDIA RTX 4090',
    description: 'Jaudīgākā gaming videokarte pasaulē ar 24 GB GDDR6X atmiņu un DLSS 3 tehnoloģiju.',
    price: '€1799',
    image: 'src/image/rtx4090.png',
    badge: 'Ultimate',
    category: 'videokartes',
    manufacturer: 'NVIDIA',
    vram: '24 GB GDDR6X',
    memoryType: 'GDDR6X',
    memorySpeed: '21 Gbps',
    outputs: '3x DisplayPort 1.4a, 1x HDMI 2.1',
    recommendedPSU: '850W',
    powerConnectors: '1x 16-pin',
    length: '304 mm'
  },
  {
    id: 'amd-rx-7900xtx',
    title: 'AMD Radeon RX 7900 XTX',
    description: 'Augstākās klases AMD videokarte ar 24 GB GDDR6 atmiņu un uzlabotu ray tracing veiktspēju.',
    price: '€999',
    image: 'src/image/rx7900xtx.png',
    badge: 'AMD Flagship',
    category: 'videokartes',
    manufacturer: 'AMD',
    vram: '24 GB GDDR6',
    memoryType: 'GDDR6',
    memorySpeed: '20 Gbps',
    outputs: '2x DisplayPort 2.1, 1x HDMI 2.1, 1x USB-C',
    recommendedPSU: '800W',
    powerConnectors: '2x 8-pin',
    length: '287 mm'
  },
  {
    id: 'nvidia-rtx-4080',
    title: 'NVIDIA RTX 4080',
    description: 'Augstas veiktspējas videokarte ar 16 GB GDDR6X atmiņu, lielisks izvēle 4K gaming.',
    price: '€1199',
    image: 'src/image/rtx4080.png',
    badge: '4K Ready',
    category: 'videokartes',
    manufacturer: 'NVIDIA',
    vram: '16 GB GDDR6X',
    memoryType: 'GDDR6X',
    memorySpeed: '22.4 Gbps',
    outputs: '3x DisplayPort 1.4a, 1x HDMI 2.1',
    recommendedPSU: '750W',
    powerConnectors: '1x 16-pin',
    length: '304 mm'
  },
  {
    id: 'amd-rx-7800xt',
    title: 'AMD Radeon RX 7800 XT',
    description: 'Vidējas klases videokarte ar izcilu veiktspēju 1440p izšķirtspējā un labu vērtību.',
    price: '€549',
    image: 'src/image/rx7800xt.png',
    badge: '1440p King',
    category: 'videokartes',
    manufacturer: 'AMD',
    vram: '16 GB GDDR6',
    memoryType: 'GDDR6',
    memorySpeed: '19.5 Gbps',
    outputs: '2x DisplayPort 2.1, 1x HDMI 2.1, 1x USB-C',
    recommendedPSU: '650W',
    powerConnectors: '2x 8-pin',
    length: '267 mm'
  },
  {
    id: 'nvidia-rtx-4070',
    title: 'NVIDIA RTX 4070',
    description: 'Enerģijas efektīva videokarte ar DLSS 3 atbalstu, perfekta 1440p gaming un streaming.',
    price: '€649',
    image: 'src/image/rtx4070.png',
    badge: 'Efficient',
    category: 'videokartes',
    manufacturer: 'NVIDIA',
    vram: '12 GB GDDR6X',
    memoryType: 'GDDR6X',
    memorySpeed: '21 Gbps',
    outputs: '3x DisplayPort 1.4a, 1x HDMI 2.1',
    recommendedPSU: '650W',
    powerConnectors: '1x 16-pin',
    length: '240 mm'
  },
  {
    id: 'nvidia-rtx-4060-ti',
    title: 'NVIDIA RTX 4060 Ti',
    description: 'Vidējas klases videokarte ar DLSS 3 atbalstu, lieliska 1080p gaming izvēle.',
    price: '€449',
    image: 'src/image/rtx4060ti.png',
    badge: '1080p Gaming',
    category: 'videokartes',
    manufacturer: 'NVIDIA',
    vram: '8 GB GDDR6',
    memoryType: 'GDDR6',
    memorySpeed: '18 Gbps',
    outputs: '3x DisplayPort 1.4a, 1x HDMI 2.1',
    recommendedPSU: '550W',
    powerConnectors: '1x 8-pin',
    length: '245 mm'
  },
  {
    id: 'amd-rx-7700-xt',
    title: 'AMD Radeon RX 7700 XT',
    description: 'Budžeta videokarte ar labu veiktspēju 1440p izšķirtspējā un mazu enerģijas patēriņu.',
    price: '€399',
    image: 'src/image/rx7700xt.png',
    badge: 'Value',
    category: 'videokartes',
    manufacturer: 'AMD',
    vram: '12 GB GDDR6',
    memoryType: 'GDDR6',
    memorySpeed: '18 Gbps',
    outputs: '2x DisplayPort 2.1, 1x HDMI 2.1',
    recommendedPSU: '600W',
    powerConnectors: '1x 8-pin',
    length: '255 mm'
  },
  {
    id: 'nvidia-rtx-3050',
    title: 'NVIDIA RTX 3050',
    description: 'Entry-level gaming videokarte ar ray tracing atbalstu, ideāla 1080p gaming.',
    price: '€299',
    image: 'src/image/rtx3050.png',
    badge: 'Entry Gaming',
    category: 'videokartes',
    manufacturer: 'NVIDIA',
    vram: '8 GB GDDR6',
    memoryType: 'GDDR6',
    memorySpeed: '14 Gbps',
    outputs: '2x DisplayPort 1.4a, 1x HDMI 2.1',
    recommendedPSU: '450W',
    powerConnectors: '1x 8-pin',
    length: '200 mm'
  }
];


let currentProducts = [...products];
let currentSort = 'default';
let currentPageId = 'servisa-centrs';
let previousPageId = 'servisa-centrs';

class StateManager {
    constructor() {
        this.storageKey = 'servisa-centrs-state';
        this.init();
    }

    init() {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        this.restoreState();
        
        window.addEventListener('beforeunload', () => this.saveFullState());
        window.addEventListener('pagehide', () => this.saveFullState());
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) this.saveFullState();
        });

        this.initScrollSaving();
        this.initNavigationTracking();
        this.initScrollToTop();
    }

    saveFullState() {
        try {
            const state = {
                currentPage: currentPageId,
                previousPage: previousPageId, // Сохраняем предыдущую страницу
                scrollPosition: window.pageYOffset || document.documentElement.scrollTop,
                products: {
                    current: currentProducts,
                    sort: currentSort
                },
                filters: this.getCurrentFilters(),
                timestamp: Date.now()
            };
            
            localStorage.setItem(this.storageKey, JSON.stringify(state));
            sessionStorage.setItem(this.storageKey, JSON.stringify(state));
        } catch (e) {
            console.warn('Не удалось сохранить состояние:', e);
        }
    }

    restoreState() {
        try {
            let saved = sessionStorage.getItem(this.storageKey) || localStorage.getItem(this.storageKey);
            
            if (saved) {
                const state = JSON.parse(saved);
                
                if (state.timestamp && (Date.now() - state.timestamp) < 3600000) {
                    currentPageId = state.currentPage || 'servisa-centrs';
                    previousPageId = state.previousPage || 'servisa-centrs'; // Восстанавливаем предыдущую страницу
                    currentProducts = state.products?.current || [...products];
                    currentSort = state.products?.sort || 'default';
                    
                    this.restoreFilters(state.filters);
                    this.restorePage(state.currentPage, state.scrollPosition);
                    
                    return true;
                }
            }
        } catch (e) {
            console.warn('Не удалось восстановить состояние:', e);
        }
        
        return false;
    }

    restorePage(pageId, scrollPosition) {
        if (pageId && (pageId !== 'servisa-centrs' || 
            pageId === 'remonts' || pageId === 'diagnostika' || pageId === 'apkalposana')) {
            setTimeout(() => {
                showPage(pageId, false);
                
                setTimeout(() => {
                    if (scrollPosition > 0) {
                        window.scrollTo({ top: scrollPosition, behavior: 'auto' });
                    }
                }, 100);
            }, 50);
        }
    }

    getCurrentFilters() {
        const searchInput = document.getElementById('searchInput');
        const activeFilter = document.querySelector('.filter-btn.active');
        const activeSort = document.querySelector('.sort-btn.active');
        
        return {
            search: searchInput?.value || '',
            category: activeFilter?.dataset.filter || 'all',
            sort: activeSort?.dataset.sort || 'default'
        };
    }

    restoreFilters(filters) {
        if (!filters) return;
        
        const searchInput = document.getElementById('searchInput');
        if (searchInput && filters.search) {
            searchInput.value = filters.search;
        }

        if (filters.category) {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.filter === filters.category);
            });
        }
        
        if (filters.sort) {
            document.querySelectorAll('.sort-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.sort === filters.sort);
            });
        }
    }

    initScrollSaving() {
        let scrollTimeout;
        let lastScrollPosition = 0;
        
        window.addEventListener('scroll', () => {
            const currentPosition = window.pageYOffset || document.documentElement.scrollTop;

            if (Math.abs(currentPosition - lastScrollPosition) > 50) {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    this.saveFullState();
                    lastScrollPosition = currentPosition;
                }, 250);
            }
        }, { passive: true });
    }

    initNavigationTracking() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href]');
            if (link) {
                this.saveFullState();
            }
        });

        document.addEventListener('click', (e) => {
            const button = e.target.closest('button');
            if (button && (button.onclick || button.getAttribute('onclick'))) {
                setTimeout(() => this.saveFullState(), 100);
            }
        });
    }

    initScrollToTop() {
        const scrollBtn = document.getElementById('scrollToTopBtn');
        if (!scrollBtn) return;

        function toggleScrollButton() {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        }

        window.addEventListener('scroll', toggleScrollButton);
        
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        toggleScrollButton();
    }

    quickSave() {
        try {
            const state = {
                currentPage: currentPageId,
                previousPage: previousPageId,
                scrollPosition: window.pageYOffset || document.documentElement.scrollTop,
                timestamp: Date.now()
            };
            sessionStorage.setItem(this.storageKey + '-quick', JSON.stringify(state));
        } catch (e) {
        }
    }
}

const stateManager = new StateManager();

function goBack() {
    if (previousPageId && previousPageId !== currentPageId) {
        showPage(previousPageId);
    } else {
        showPage('servisa-centrs');
    }
}

function parsePrice(priceStr) {
    const cleanPrice = priceStr.replace(/\D/g, '');
    return parseFloat(cleanPrice) || 0;
}

function renderProducts(productsArray = currentProducts) {
    const container = document.getElementById('cardsGrid');
    const noProductsMessage = document.getElementById('noProductsMessage');
    
    if (!container) return;

    if (productsArray.length === 0) {
        container.style.display = 'none';
        if (noProductsMessage) noProductsMessage.style.display = 'block';
        return;
    }

    container.style.display = 'grid';
    if (noProductsMessage) noProductsMessage.style.display = 'none';

    container.innerHTML = productsArray.map(product => `
        <article class="product-card" tabindex="0" data-category="${product.category}">
            <figure class="card-img">
                <img src="${product.image}" alt="${product.title} attēls" 
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjUgODBDMTI1IDczLjAwMDEgMTMxIDY3LjAwMDEgMTM3LjUgNjcuMDAwMUMxNDQgNjcuMDAwMSAxNTAgNzMuMDAwMSAxNTAgODBDMTUwIDg3IDE0NCA5MyAxMzcuNSA5M0MxMzEgOTMgMTI1IDg3IDEyNSA4MFoiIGZpbGw9IiNEN0Q4REIiLz4KPHBhdGggZD0iTTEwNSAxMjBDMTA1IDExMyAxMTEgMTA3IDExNy41IDEwN0MxMjQgMTA3IDEzMCAxMTMgMTMwIDEyMEMxMzAgMTI3IDEyNCAxMzMgMTE3LjUgMTMzQzExMSAxMzMgMTA1IDEyNyAxMDUgMTIwWiIgZmlsbD0iI0Q3RDhEQiIvPgo8cGF0aCBkPSJNMTY1IDEyMEMxNjUgMTEzIDE3MSAxMDcgMTc3LjUgMTA3QzE4NCAxMDcgMTkwIDExMyAxOTAgMTIwQzE5MCAxMjcgMTg0IDEzMyAxNzcuNSAxMzNDMTcxIDEzMyAxNjUgMTI3IDE2NSAxMjBaIiBmaWxsPSIjRDdEOERCIi8+Cjwvc3ZnPgo='">
            </figure>
            <div class="card-body">
                <h3>${product.title}</h3>
                <p class="desc">${product.description}</p>
            </div>
            <div class="card-meta">
                <div class="price">${product.price}</div>
                <button class="btn" aria-label="Skatīt detaļas par ${product.title}" 
                        onclick="showPage('${product.id}')">
                    Skatīt
                </button>
            </div>
        </article>
    `).join('');

    updateProductCount();
    initScrollAnimations();
    stateManager.quickSave();
}

function initSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortButtons = document.querySelectorAll('.sort-btn');
    
    if (searchInput) {
        let timeoutId;
                searchInput.addEventListener('input', (e) => {
                    clearTimeout(timeoutId);
                    timeoutId = setTimeout(() => {
                        const searchTerm = e.target.value.toLowerCase().trim();
                        filterProducts(searchTerm);
                        stateManager.saveFullState();
                    }, 300);
                });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            filterProductsByCategory(filter);
            stateManager.saveFullState();
        });
    });

    sortButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const sortType = btn.dataset.sort;
            sortProducts(sortType);
            
            sortButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            stateManager.saveFullState();
        });
    });
}

function filterProducts(searchTerm) {
    if (!searchTerm) {
        currentProducts = [...products];
    } else {
        const searchLower = searchTerm.toLowerCase().trim();
        
        currentProducts = products.filter(product => {
            const titleMatch = product.title.toLowerCase().includes(searchLower);
            if (titleMatch) return true;
            
            if (product.manufacturer && product.manufacturer.toLowerCase().includes(searchLower)) {
                return true;
            }
            
            if (product.category.toLowerCase() === searchLower) {
                return true;
            }
            
            if (product.description) {
                const descWords = product.description.toLowerCase().split(/\s+/);
                const searchWords = searchLower.split(/\s+/);
                
                const hasWordMatch = searchWords.some(searchWord => 
                    descWords.some(descWord => descWord === searchWord)
                );
                
                if (hasWordMatch) return true;
            }
            
            return false;
        });
    }
    
    applyCurrentSort();
    renderProducts();
}

function filterProductsByCategory(category) {
    if (category === 'all') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(product => product.category === category);
    }
    
    applyCurrentSort();
    renderProducts();
}

function sortProducts(sortType) {
    currentSort = sortType;
    
    switch(sortType) {
        case 'az':
            currentProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'za':
            currentProducts.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case 'price-low':
            currentProducts.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
            break;
        case 'price-high':
            currentProducts.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
            break;
        default:
            currentProducts = [...products];
    }
    
    renderProducts();
}

function applyCurrentSort() {
    if (currentSort !== 'default') {
        sortProducts(currentSort);
    }
}

function updateProductCount() {
    const countElement = document.getElementById('productCount');
    if (countElement) {
        const count = currentProducts.length;
        let text = `Atrasti ${count} prece`;
        if (count !== 1) {
            text += 's';
        }
        countElement.textContent = text;
    }
}

function resetFilters() {
    currentProducts = [...products];
    currentSort = 'default';
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === 'all') btn.classList.add('active');
    });
    
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.sort === 'default') btn.classList.add('active');
    });
    
    renderProducts();
    stateManager.saveFullState();
}

function showPage(pageId, useLoading = true) {
    if (currentPageId !== pageId) {
        previousPageId = currentPageId;
    }
    
    stateManager.saveFullState();
    currentPageId = pageId;
    
    if (useLoading) {
        showLoadingBar();
        setTimeout(() => {
            performPageSwitch(pageId);
            hideLoadingBar();
        }, 300);
    } else {
        performPageSwitch(pageId);
    }
}

function performPageSwitch(pageId) {
    const allPages = document.querySelectorAll('.page-content');
    
    allPages.forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPageId = pageId;
        
        if (pageId === 'karte') {
            setTimeout(() => {
                renderProducts();
                initSearchAndFilter();
                
                setTimeout(() => {
                    try {
                        const quickState = sessionStorage.getItem(stateManager.storageKey + '-quick');
                        if (quickState) {
                            const state = JSON.parse(quickState);
                            if (state.scrollPosition > 0) {
                                window.scrollTo({ top: state.scrollPosition, behavior: 'auto' });
                            }
                        }
                    } catch (e) {
                    }
                }, 200);
            }, 50);
        } else {
            setTimeout(() => {
                initScrollAnimations();
            }, 50);
        }
        
        setTimeout(() => stateManager.quickSave(), 100);
    }
}

function showLoadingBar() {
    let loadingBar = document.getElementById('loadingBar');
    if (!loadingBar) {
        loadingBar = document.createElement('div');
        loadingBar.id = 'loadingBar';
        loadingBar.className = 'loading-bar';
        document.body.appendChild(loadingBar);
    }
    loadingBar.style.width = '0%';
    
    setTimeout(() => {
        loadingBar.style.width = '70%';
    }, 10);
    
    setTimeout(() => {
        loadingBar.style.width = '100%';
    }, 200);
}

function hideLoadingBar() {
    const loadingBar = document.getElementById('loadingBar');
    if (loadingBar) {
        setTimeout(() => {
            loadingBar.style.width = '0%';
            setTimeout(() => {
                if (loadingBar.parentNode) {
                    loadingBar.parentNode.removeChild(loadingBar);
                }
            }, 300);
        }, 100);
    }
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -10px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, 100);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.scroll-animate:not(.animate-in)').forEach(el => {
        observer.observe(el);
    });
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const burger = document.querySelector('.burger-menu');
    mobileMenu.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('no-scroll', mobileMenu.classList.contains('active'));
    stateManager.quickSave();
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const burger = document.querySelector('.burger-menu');
    mobileMenu.classList.remove('active');
    burger.classList.remove('active');
    document.body.classList.remove('no-scroll');
    stateManager.quickSave();
}

function scrollToSection(sectionId) {
    const scrollToElement = () => {
        const element = document.getElementById(sectionId);
        if (element) {
            const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    if (document.getElementById('servisa-centrs').classList.contains('active')) {
        scrollToElement();
    } else {
        showPage('servisa-centrs', scrollToElement);
    }
}

function scrollToTop() {
    showPage('servisa-centrs', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function toggleMobileDropdown(button) {
    const dropdown = button.parentElement;
    dropdown.classList.toggle('active');
    stateManager.quickSave();
}

function openImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageSrc;
    modal.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal-backdrop')) {
        closeImageModal();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImageModal();
    }
});

(function () {
    const storageKey = 'site-theme'; 
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeLabel = document.getElementById('theme-label');

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.setAttribute('aria-pressed', 'true');
            themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />';
            themeLabel.textContent = 'Gaiša';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.setAttribute('aria-pressed', 'false');
            themeIcon.innerHTML = '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />';
            themeLabel.textContent = 'Tumšā';
        }
    }

    function getInitialTheme() {
        const stored = localStorage.getItem(storageKey);
        if (stored === 'dark' || stored === 'light') return stored;
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem(storageKey, next);
        stateManager.quickSave();
    }

    applyTheme(getInitialTheme());

    themeToggle.addEventListener('click', function () {
        toggleTheme();
    });

    if (window.matchMedia) {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        mql.addEventListener && mql.addEventListener('change', (e) => {
            if (!localStorage.getItem(storageKey)) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
})();

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        dropbtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdowns.forEach(d => {
                if (d !== dropdown) d.classList.remove('active');
            });
            dropdown.classList.toggle('active');
            stateManager.quickSave();
        });
    });
    
    document.addEventListener('click', function() {
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    });
    
    const burgerMenu = document.querySelector('.burger-menu');
    const closeMenu = document.querySelector('.close-menu');
    
    if (burgerMenu) burgerMenu.addEventListener('click', toggleMobileMenu);
    if (closeMenu) closeMenu.addEventListener('click', closeMobileMenu);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeMobileMenu();
    });
    
    if (document.getElementById('karte').classList.contains('active')) {
        setTimeout(() => {
            renderProducts();
            initSearchAndFilter();
        }, 100);
    } else {
        initScrollAnimations();
    }
    
    window.addEventListener('load', () => {
        setTimeout(() => stateManager.saveFullState(), 500);
    });
});

setInterval(() => {
    stateManager.quickSave();
}, 30000);

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', handleFormSubmit);
    
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    
    if (validateForm(form)) {
        submitForm(form);
    }
}

function validateForm(form) {
    let isValid = true;
    const fields = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    fields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const errorElement = document.getElementById(field.id + 'Error');
    
    field.classList.remove('error', 'success');
    if (errorElement) errorElement.classList.remove('show');
    
    if (field.hasAttribute('required') && !value) {
        showError(field, errorElement, 'Šis lauks ir obligāts');
        return false;
    }
    
    switch(field.type) {
        case 'email':
            if (!isValidEmail(value)) {
                showError(field, errorElement, 'Lūdzu ievadiet derīgu e-pasta adresi');
                return false;
            }
            break;
        case 'tel':
            if (value && !isValidPhone(value)) {
                showError(field, errorElement, 'Lūdzu ievadiet derīgu tālruņa numuru');
                return false;
            }
            break;
    }
    
    if (value) {
        field.classList.add('success');
    }
    
    return true;
}

function clearFieldError(e) {
    const field = e.target;
    const errorElement = document.getElementById(field.id + 'Error');
    
    field.classList.remove('error');
    if (errorElement) errorElement.classList.remove('show');
}

function showError(field, errorElement, message) {
    field.classList.add('error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function submitForm(form) {
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const successMessage = document.getElementById('formSuccess');
    
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        btnText.style.display = 'block';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
        
        successMessage.style.display = 'block';
        form.reset();
        
        const fields = form.querySelectorAll('input, select, textarea');
        fields.forEach(field => {
            field.classList.remove('success', 'error');
            const errorElement = document.getElementById(field.id + 'Error');
            if (errorElement) errorElement.classList.remove('show');
        });
        
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
        
    }, 2000);
}

function enhanceSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const container = document.getElementById('cardsGrid');
            if (container) {
                container.classList.add('loading');
                setTimeout(() => {
                    container.classList.remove('loading');
                }, 300);
            }
        });
    }
}

function initProductsScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTopBtnProducts');
    if (!scrollBtn) return;

    function toggleScrollButton() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', toggleScrollButton);
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    toggleScrollButton();
}

const originalShowPage = showPage;
showPage = function(pageId, useLoading = true) {
    originalShowPage(pageId, useLoading);
    
    if (pageId === 'kontakti') {
        setTimeout(() => {
            initContactForm();
        }, 100);
    }
    

    if (pageId === 'karte') {
        setTimeout(() => {
            initProductsScrollToTop();
        }, 100);
    }
};

document.addEventListener('DOMContentLoaded', function() {

    if (document.getElementById('karte').classList.contains('active')) {
        setTimeout(() => {
            initProductsScrollToTop();
        }, 100);
    }
    
    if (document.getElementById('kontakti').classList.contains('active')) {
        setTimeout(() => {
            initContactForm();
        }, 100);
    }
});