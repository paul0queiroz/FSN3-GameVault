const products = [
  {
    id: 1,
    name: "Pokémon FireRed",
    description:
      "Versão aprimorada do clássico Pokémon Red para Game Boy Advance.",
    price: "118.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Pokemon_FireRed_Boxart.jpg",
  },
  {
    id: 2,
    name: "Pokémon Emerald",
    description:
      "RPG de aventura e estratégia com a terceira geração de Pokémon.",
    price: "138.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/98/Pokemon_Emerald_Box_Art.png",
  },
  {
    id: 3,
    name: "God of War II",
    description:
      "Kratos enfrenta os deuses do Olimpo em sua jornada por vingança.",
    price: "94.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/03/God_of_War_II_cover_art.jpg",
  },
  {
    id: 4,
    name: "Devil May Cry 3",
    description: "Hack and slash intenso com Dante em sua juventude.",
    price: "100.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Devil_May_Cry_3_box_art.jpg",
  },
  {
    id: 5,
    name: "Shadow of the Colossus",
    description: "Obra-prima artística de aventura e ação para PS2.",
    price: "100.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Shadow_of_the_Colossus_cover.jpg",
  },
  {
    id: 6,
    name: "Resident Evil 4",
    description:
      "Revolucionário título da franquia com Leon enfrentando o horror em um vilarejo europeu.",
    price: "136.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/85/Resident_Evil_4_cover_art.jpg",
  },
  {
    id: 7,
    name: "Metal Gear Solid 3: Snake Eater",
    description: "Espionagem tática ambientada na Guerra Fria.",
    price: "112.90",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4b/MGS3box.jpg",
  },
  {
    id: 8,
    name: "Doom (1983)",
    description:
      "O lendário jogo de tiro em primeira pessoa que definiu o gênero.",
    price: "211.90",
    image: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg",
  },
  {
    id: 9,
    name: "Need for Speed: Most Wanted (2005)",
    description:
      "Corridas urbanas com perseguições policiais e carros tunados.",
    price: "64.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c2/NFSMWcover.jpg",
  },
  {
    id: 10,
    name: "GTA: San Andreas",
    description: "Exploração e ação em mundo aberto com CJ em Los Santos.",
    price: "112.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg",
  },
  {
    id: 11,
    name: "Pokémon FireRed",
    description:
      "Versão aprimorada do clássico Pokémon Red para Game Boy Advance.",
    price: "206.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Pokemon_FireRed_Boxart.jpg",
  },
  {
    id: 12,
    name: "Pokémon Emerald",
    description:
      "RPG de aventura e estratégia com a terceira geração de Pokémon.",
    price: "145.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/98/Pokemon_Emerald_Box_Art.png",
  },
  {
    id: 13,
    name: "God of War II",
    description:
      "Kratos enfrenta os deuses do Olimpo em sua jornada por vingança.",
    price: "94.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/03/God_of_War_II_cover_art.jpg",
  },
  {
    id: 14,
    name: "Devil May Cry 3",
    description: "Hack and slash intenso com Dante em sua juventude.",
    price: "196.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Devil_May_Cry_3_box_art.jpg",
  },
  {
    id: 15,
    name: "Shadow of the Colossus",
    description: "Obra-prima artística de aventura e ação para PS2.",
    price: "202.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Shadow_of_the_Colossus_cover.jpg",
  },
  {
    id: 16,
    name: "Resident Evil 4",
    description:
      "Revolucionário título da franquia com Leon enfrentando o horror em um vilarejo europeu.",
    price: "206.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/85/Resident_Evil_4_cover_art.jpg",
  },
  {
    id: 17,
    name: "Metal Gear Solid 3: Snake Eater",
    description: "Espionagem tática ambientada na Guerra Fria.",
    price: "53.90",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4b/MGS3box.jpg",
  },
  {
    id: 18,
    name: "Doom (1983)",
    description:
      "O lendário jogo de tiro em primeira pessoa que definiu o gênero.",
    price: "83.90",
    image: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg",
  },
  {
    id: 19,
    name: "Need for Speed: Most Wanted (2005)",
    description:
      "Corridas urbanas com perseguições policiais e carros tunados.",
    price: "98.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c2/NFSMWcover.jpg",
  },
  {
    id: 20,
    name: "GTA: San Andreas",
    description: "Exploração e ação em mundo aberto com CJ em Los Santos.",
    price: "187.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg",
  },
  {
    id: 21,
    name: "Pokémon FireRed",
    description:
      "Versão aprimorada do clássico Pokémon Red para Game Boy Advance.",
    price: "193.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Pokemon_FireRed_Boxart.jpg",
  },
  {
    id: 22,
    name: "Pokémon Emerald",
    description:
      "RPG de aventura e estratégia com a terceira geração de Pokémon.",
    price: "145.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/98/Pokemon_Emerald_Box_Art.png",
  },
  {
    id: 23,
    name: "God of War II",
    description:
      "Kratos enfrenta os deuses do Olimpo em sua jornada por vingança.",
    price: "223.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/03/God_of_War_II_cover_art.jpg",
  },
  {
    id: 24,
    name: "Devil May Cry 3",
    description: "Hack and slash intenso com Dante em sua juventude.",
    price: "138.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Devil_May_Cry_3_box_art.jpg",
  },
  {
    id: 25,
    name: "Shadow of the Colossus",
    description: "Obra-prima artística de aventura e ação para PS2.",
    price: "66.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Shadow_of_the_Colossus_cover.jpg",
  },
  {
    id: 26,
    name: "Resident Evil 4",
    description:
      "Revolucionário título da franquia com Leon enfrentando o horror em um vilarejo europeu.",
    price: "164.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/85/Resident_Evil_4_cover_art.jpg",
  },
  {
    id: 27,
    name: "Metal Gear Solid 3: Snake Eater",
    description: "Espionagem tática ambientada na Guerra Fria.",
    price: "159.90",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4b/MGS3box.jpg",
  },
  {
    id: 28,
    name: "Doom (1983)",
    description:
      "O lendário jogo de tiro em primeira pessoa que definiu o gênero.",
    price: "121.90",
    image: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg",
  },
  {
    id: 29,
    name: "Need for Speed: Most Wanted (2005)",
    description:
      "Corridas urbanas com perseguições policiais e carros tunados.",
    price: "62.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c2/NFSMWcover.jpg",
  },
  {
    id: 30,
    name: "GTA: San Andreas",
    description: "Exploração e ação em mundo aberto com CJ em Los Santos.",
    price: "72.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg",
  },
  {
    id: 31,
    name: "Pokémon FireRed",
    description:
      "Versão aprimorada do clássico Pokémon Red para Game Boy Advance.",
    price: "159.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Pokemon_FireRed_Boxart.jpg",
  },
  {
    id: 32,
    name: "Pokémon Emerald",
    description:
      "RPG de aventura e estratégia com a terceira geração de Pokémon.",
    price: "227.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/98/Pokemon_Emerald_Box_Art.png",
  },
  {
    id: 33,
    name: "God of War II",
    description:
      "Kratos enfrenta os deuses do Olimpo em sua jornada por vingança.",
    price: "130.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/03/God_of_War_II_cover_art.jpg",
  },
  {
    id: 34,
    name: "Devil May Cry 3",
    description: "Hack and slash intenso com Dante em sua juventude.",
    price: "65.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Devil_May_Cry_3_box_art.jpg",
  },
  {
    id: 35,
    name: "Shadow of the Colossus",
    description: "Obra-prima artística de aventura e ação para PS2.",
    price: "128.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Shadow_of_the_Colossus_cover.jpg",
  },
  {
    id: 36,
    name: "Resident Evil 4",
    description:
      "Revolucionário título da franquia com Leon enfrentando o horror em um vilarejo europeu.",
    price: "99.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/85/Resident_Evil_4_cover_art.jpg",
  },
  {
    id: 37,
    name: "Metal Gear Solid 3: Snake Eater",
    description: "Espionagem tática ambientada na Guerra Fria.",
    price: "94.90",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4b/MGS3box.jpg",
  },
  {
    id: 38,
    name: "Doom (1983)",
    description:
      "O lendário jogo de tiro em primeira pessoa que definiu o gênero.",
    price: "205.90",
    image: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg",
  },
  {
    id: 39,
    name: "Need for Speed: Most Wanted (2005)",
    description:
      "Corridas urbanas com perseguições policiais e carros tunados.",
    price: "147.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c2/NFSMWcover.jpg",
  },
  {
    id: 40,
    name: "GTA: San Andreas",
    description: "Exploração e ação em mundo aberto com CJ em Los Santos.",
    price: "79.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg",
  },
  {
    id: 41,
    name: "Pokémon FireRed",
    description:
      "Versão aprimorada do clássico Pokémon Red para Game Boy Advance.",
    price: "123.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Pokemon_FireRed_Boxart.jpg",
  },
  {
    id: 42,
    name: "Pokémon Emerald",
    description:
      "RPG de aventura e estratégia com a terceira geração de Pokémon.",
    price: "119.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/98/Pokemon_Emerald_Box_Art.png",
  },
  {
    id: 43,
    name: "God of War II",
    description:
      "Kratos enfrenta os deuses do Olimpo em sua jornada por vingança.",
    price: "114.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/03/God_of_War_II_cover_art.jpg",
  },
  {
    id: 44,
    name: "Devil May Cry 3",
    description: "Hack and slash intenso com Dante em sua juventude.",
    price: "158.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Devil_May_Cry_3_box_art.jpg",
  },
  {
    id: 45,
    name: "Shadow of the Colossus",
    description: "Obra-prima artística de aventura e ação para PS2.",
    price: "159.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Shadow_of_the_Colossus_cover.jpg",
  },
  {
    id: 46,
    name: "Resident Evil 4",
    description:
      "Revolucionário título da franquia com Leon enfrentando o horror em um vilarejo europeu.",
    price: "123.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/85/Resident_Evil_4_cover_art.jpg",
  },
  {
    id: 47,
    name: "Metal Gear Solid 3: Snake Eater",
    description: "Espionagem tática ambientada na Guerra Fria.",
    price: "82.90",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4b/MGS3box.jpg",
  },
  {
    id: 48,
    name: "Doom (1983)",
    description:
      "O lendário jogo de tiro em primeira pessoa que definiu o gênero.",
    price: "190.90",
    image: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg",
  },
  {
    id: 49,
    name: "Need for Speed: Most Wanted (2005)",
    description:
      "Corridas urbanas com perseguições policiais e carros tunados.",
    price: "81.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c2/NFSMWcover.jpg",
  },
  {
    id: 50,
    name: "GTA: San Andreas",
    description: "Exploração e ação em mundo aberto com CJ em Los Santos.",
    price: "95.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg",
  },
  {
    id: 51,
    name: "Pokémon FireRed",
    description:
      "Versão aprimorada do clássico Pokémon Red para Game Boy Advance.",
    price: "89.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Pokemon_FireRed_Boxart.jpg",
  },
  {
    id: 52,
    name: "Pokémon Emerald",
    description:
      "RPG de aventura e estratégia com a terceira geração de Pokémon.",
    price: "69.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/98/Pokemon_Emerald_Box_Art.png",
  },
  {
    id: 53,
    name: "God of War II",
    description:
      "Kratos enfrenta os deuses do Olimpo em sua jornada por vingança.",
    price: "118.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/03/God_of_War_II_cover_art.jpg",
  },
  {
    id: 54,
    name: "Devil May Cry 3",
    description: "Hack and slash intenso com Dante em sua juventude.",
    price: "55.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Devil_May_Cry_3_box_art.jpg",
  },
  {
    id: 55,
    name: "Shadow of the Colossus",
    description: "Obra-prima artística de aventura e ação para PS2.",
    price: "175.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Shadow_of_the_Colossus_cover.jpg",
  },
  {
    id: 56,
    name: "Resident Evil 4",
    description:
      "Revolucionário título da franquia com Leon enfrentando o horror em um vilarejo europeu.",
    price: "151.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/85/Resident_Evil_4_cover_art.jpg",
  },
  {
    id: 57,
    name: "Metal Gear Solid 3: Snake Eater",
    description: "Espionagem tática ambientada na Guerra Fria.",
    price: "117.90",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4b/MGS3box.jpg",
  },
  {
    id: 58,
    name: "Doom (1983)",
    description:
      "O lendário jogo de tiro em primeira pessoa que definiu o gênero.",
    price: "174.90",
    image: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg",
  },
  {
    id: 59,
    name: "Need for Speed: Most Wanted (2005)",
    description:
      "Corridas urbanas com perseguições policiais e carros tunados.",
    price: "179.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c2/NFSMWcover.jpg",
  },
  {
    id: 60,
    name: "GTA: San Andreas",
    description: "Exploração e ação em mundo aberto com CJ em Los Santos.",
    price: "106.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg",
  },
  {
    id: 61,
    name: "Pokémon FireRed",
    description:
      "Versão aprimorada do clássico Pokémon Red para Game Boy Advance.",
    price: "68.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Pokemon_FireRed_Boxart.jpg",
  },
  {
    id: 62,
    name: "Pokémon Emerald",
    description:
      "RPG de aventura e estratégia com a terceira geração de Pokémon.",
    price: "195.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/98/Pokemon_Emerald_Box_Art.png",
  },
  {
    id: 63,
    name: "God of War II",
    description:
      "Kratos enfrenta os deuses do Olimpo em sua jornada por vingança.",
    price: "128.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/03/God_of_War_II_cover_art.jpg",
  },
  {
    id: 64,
    name: "Devil May Cry 3",
    description: "Hack and slash intenso com Dante em sua juventude.",
    price: "104.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Devil_May_Cry_3_box_art.jpg",
  },
  {
    id: 65,
    name: "Shadow of the Colossus",
    description: "Obra-prima artística de aventura e ação para PS2.",
    price: "96.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Shadow_of_the_Colossus_cover.jpg",
  },
  {
    id: 66,
    name: "Resident Evil 4",
    description:
      "Revolucionário título da franquia com Leon enfrentando o horror em um vilarejo europeu.",
    price: "196.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/85/Resident_Evil_4_cover_art.jpg",
  },
  {
    id: 67,
    name: "Metal Gear Solid 3: Snake Eater",
    description: "Espionagem tática ambientada na Guerra Fria.",
    price: "147.90",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4b/MGS3box.jpg",
  },
  {
    id: 68,
    name: "Doom (1983)",
    description:
      "O lendário jogo de tiro em primeira pessoa que definiu o gênero.",
    price: "195.90",
    image: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg",
  },
  {
    id: 69,
    name: "Need for Speed: Most Wanted (2005)",
    description:
      "Corridas urbanas com perseguições policiais e carros tunados.",
    price: "215.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c2/NFSMWcover.jpg",
  },
  {
    id: 70,
    name: "GTA: San Andreas",
    description: "Exploração e ação em mundo aberto com CJ em Los Santos.",
    price: "124.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg",
  },
  {
    id: 71,
    name: "Pokémon FireRed",
    description:
      "Versão aprimorada do clássico Pokémon Red para Game Boy Advance.",
    price: "152.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Pokemon_FireRed_Boxart.jpg",
  },
  {
    id: 72,
    name: "Pokémon Emerald",
    description:
      "RPG de aventura e estratégia com a terceira geração de Pokémon.",
    price: "68.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/98/Pokemon_Emerald_Box_Art.png",
  },
  {
    id: 73,
    name: "God of War II",
    description:
      "Kratos enfrenta os deuses do Olimpo em sua jornada por vingança.",
    price: "133.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/03/God_of_War_II_cover_art.jpg",
  },
  {
    id: 74,
    name: "Devil May Cry 3",
    description: "Hack and slash intenso com Dante em sua juventude.",
    price: "216.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Devil_May_Cry_3_box_art.jpg",
  },
  {
    id: 75,
    name: "Shadow of the Colossus",
    description: "Obra-prima artística de aventura e ação para PS2.",
    price: "86.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Shadow_of_the_Colossus_cover.jpg",
  },
  {
    id: 76,
    name: "Resident Evil 4",
    description:
      "Revolucionário título da franquia com Leon enfrentando o horror em um vilarejo europeu.",
    price: "74.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/85/Resident_Evil_4_cover_art.jpg",
  },
  {
    id: 77,
    name: "Metal Gear Solid 3: Snake Eater",
    description: "Espionagem tática ambientada na Guerra Fria.",
    price: "127.90",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4b/MGS3box.jpg",
  },
  {
    id: 78,
    name: "Doom (1983)",
    description:
      "O lendário jogo de tiro em primeira pessoa que definiu o gênero.",
    price: "164.90",
    image: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg",
  },
  {
    id: 79,
    name: "Need for Speed: Most Wanted (2005)",
    description:
      "Corridas urbanas com perseguições policiais e carros tunados.",
    price: "139.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c2/NFSMWcover.jpg",
  },
  {
    id: 80,
    name: "GTA: San Andreas",
    description: "Exploração e ação em mundo aberto com CJ em Los Santos.",
    price: "59.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg",
  },
  {
    id: 81,
    name: "Pokémon FireRed",
    description:
      "Versão aprimorada do clássico Pokémon Red para Game Boy Advance.",
    price: "96.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Pokemon_FireRed_Boxart.jpg",
  },
  {
    id: 82,
    name: "Pokémon Emerald",
    description:
      "RPG de aventura e estratégia com a terceira geração de Pokémon.",
    price: "170.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/98/Pokemon_Emerald_Box_Art.png",
  },
  {
    id: 83,
    name: "God of War II",
    description:
      "Kratos enfrenta os deuses do Olimpo em sua jornada por vingança.",
    price: "145.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/03/God_of_War_II_cover_art.jpg",
  },
  {
    id: 84,
    name: "Devil May Cry 3",
    description: "Hack and slash intenso com Dante em sua juventude.",
    price: "97.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Devil_May_Cry_3_box_art.jpg",
  },
  {
    id: 85,
    name: "Shadow of the Colossus",
    description: "Obra-prima artística de aventura e ação para PS2.",
    price: "191.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Shadow_of_the_Colossus_cover.jpg",
  },
  {
    id: 86,
    name: "Resident Evil 4",
    description:
      "Revolucionário título da franquia com Leon enfrentando o horror em um vilarejo europeu.",
    price: "88.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/85/Resident_Evil_4_cover_art.jpg",
  },
  {
    id: 87,
    name: "Metal Gear Solid 3: Snake Eater",
    description: "Espionagem tática ambientada na Guerra Fria.",
    price: "49.90",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4b/MGS3box.jpg",
  },
  {
    id: 88,
    name: "Doom (1983)",
    description:
      "O lendário jogo de tiro em primeira pessoa que definiu o gênero.",
    price: "110.90",
    image: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg",
  },
  {
    id: 89,
    name: "Need for Speed: Most Wanted (2005)",
    description:
      "Corridas urbanas com perseguições policiais e carros tunados.",
    price: "125.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c2/NFSMWcover.jpg",
  },
  {
    id: 90,
    name: "GTA: San Andreas",
    description: "Exploração e ação em mundo aberto com CJ em Los Santos.",
    price: "135.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg",
  },
  {
    id: 91,
    name: "Pokémon FireRed",
    description:
      "Versão aprimorada do clássico Pokémon Red para Game Boy Advance.",
    price: "95.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Pokemon_FireRed_Boxart.jpg",
  },
  {
    id: 92,
    name: "Pokémon Emerald",
    description:
      "RPG de aventura e estratégia com a terceira geração de Pokémon.",
    price: "223.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/98/Pokemon_Emerald_Box_Art.png",
  },
  {
    id: 93,
    name: "God of War II",
    description:
      "Kratos enfrenta os deuses do Olimpo em sua jornada por vingança.",
    price: "156.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/03/God_of_War_II_cover_art.jpg",
  },
  {
    id: 94,
    name: "Devil May Cry 3",
    description: "Hack and slash intenso com Dante em sua juventude.",
    price: "141.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Devil_May_Cry_3_box_art.jpg",
  },
  {
    id: 95,
    name: "Shadow of the Colossus",
    description: "Obra-prima artística de aventura e ação para PS2.",
    price: "65.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Shadow_of_the_Colossus_cover.jpg",
  },
  {
    id: 96,
    name: "Resident Evil 4",
    description:
      "Revolucionário título da franquia com Leon enfrentando o horror em um vilarejo europeu.",
    price: "219.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/85/Resident_Evil_4_cover_art.jpg",
  },
  {
    id: 97,
    name: "Metal Gear Solid 3: Snake Eater",
    description: "Espionagem tática ambientada na Guerra Fria.",
    price: "121.90",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4b/MGS3box.jpg",
  },
  {
    id: 98,
    name: "Doom (1983)",
    description:
      "O lendário jogo de tiro em primeira pessoa que definiu o gênero.",
    price: "203.90",
    image: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg",
  },
  {
    id: 99,
    name: "Need for Speed: Most Wanted (2005)",
    description:
      "Corridas urbanas com perseguições policiais e carros tunados.",
    price: "146.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c2/NFSMWcover.jpg",
  },
  {
    id: 100,
    name: "GTA: San Andreas",
    description: "Exploração e ação em mundo aberto com CJ em Los Santos.",
    price: "214.90",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg",
  },
];

export default products;
