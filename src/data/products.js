const products = [
  {
    id: 1,
    name: "Pokémon FireRed",
    description:
      "Versão aprimorada do clássico Pokémon Red para Game Boy Advance.",
    price: "118.90",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/4/43/FireRed_EN_boxart.png/600px-FireRed_EN_boxart.png?20231031060051",
  },
  {
    id: 2,
    name: "Pokémon Emerald",
    description:
      "RPG de aventura e estratégia com a terceira geração de Pokémon.",
    price: "138.90",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/6/65/Emerald_EN_boxart.jpg/599px-Emerald_EN_boxart.jpg?20100729165716",
  },
  {
    id: 3,
    name: "God of War II",
    description:
      "Kratos enfrenta os deuses do Olimpo em sua jornada por vingança.",
    price: "94.90",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/7/7e/God_of_War_2_capa.png",
  },
  {
    id: 4,
    name: "Devil May Cry 3",
    description: "Hack and slash intenso com Dante em sua juventude.",
    price: "100.90",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/c/c1/Dmc3.png",
  },
  {
    id: 5,
    name: "Shadow of the Colossus",
    description: "Obra-prima artística de aventura e ação para PS2.",
    price: "100.90",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/6/66/ShadowOfTheColossusGH.jpg",
  },
  {
    id: 6,
    name: "Resident Evil 4",
    description:
      "Revolucionário título da franquia com Leon enfrentando o horror em um vilarejo europeu.",
    price: "136.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d9/Resi4-gc-cover.jpg",
  },
  {
    id: 7,
    name: "Metal Gear Solid 3: Snake Eater",
    description: "Espionagem tática ambientada na Guerra Fria.",
    price: "112.90",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b3/Mgs3box.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Need_for_Speed_Most_Wanted_Box_Art.jpg",
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
    name: "Pokémon LeafGreen",
    description:
      "Pokémon LeafGreen foi lançado para o Game Boy Advance, sendo parte da terceira geração dos jogos da franquia Pokémon.",
    price: "170",
    image:
      "https://archives.bulbagarden.net/media/upload/d/d7/LeafGreen_EN_boxart.png",
  },
  {
    id: 12,
    name: "Pokémon Emerald",
    description:
      "RPG de aventura e estratégia com a terceira geração de Pokémon.",
    price: "145.90",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/6/65/Emerald_EN_boxart.jpg/800px-Emerald_EN_boxart.jpg",
  },
  {
    id: 13,
    name: "God of War",
    description:
      "O primeiro título da lendária franquia coloca você na pele de Kratos, um guerreiro espartano atormentado por seu passado. Após ser manipulado por Ares, o Deus da Guerra, e acabar assassinando sua própria família, Kratos busca redenção e vingança.",
    price: "50",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b5/God_of_War_%282005%29_cover.jpg",
  },
  {
    id: 14,
    name: "Devil May Cry",
    description: "Lançado em 2001 pela Capcom, este é o jogo que deu início à lendária franquia. Você assume o papel de Dante, um caçador de demônios estiloso e sarcástico, em uma missão para derrotar o Lorde Demônio Mundus na misteriosa ilha de Mallet.",
    price: "80",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/1e/DMC1FrontCover.jpg",
  },
  {
    id: 15,
    name: "The Secret of Monkey Island",
    description: "Lançado originalmente em 1990 pela Lucasfilm Games, este clássico do gênero point-and-click acompanha o aspirante a pirata Guybrush Threepwood em sua jornada para se tornar o mais temido dos sete mares.",
    price: "82.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a8/The_Secret_of_Monkey_Island_artwork.jpg",
  },
  {
    id: 16,
    name: "Resident Evil",
    description:
      "ançado originalmente em 1996 pela Capcom, este é o jogo que definiu o gênero survival horror. Você assume o papel de Chris Redfield ou Jill Valentine, membros da equipe S.T.A.R.S., enviados para investigar assassinatos misteriosos nas Montanhas Arklay, nos arredores de Raccoon City.",
    price: "76.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a6/Resident_Evil_1_cover.png",
  },
  {
    id: 17,
    name: "Metal Gear",
    description: "Criado por Hideo Kojima e lançado originalmente para o MSX2, Metal Gear é o jogo que deu início à icônica franquia de espionagem tática.",
    price: "53.90",
    image: "https://upload.wikimedia.org/wikipedia/en/3/33/Metal_Gear_Solid_cover_art.png",
  },
  {
    id: 18,
    name: "Monkey Island 2: A Vingança de LeChuck",
    description:
      "A sequência direta de The Secret of Monkey Island, este clássico da LucasArts leva o aspirante a pirata Guybrush Threepwood em uma nova e hilária jornada para encontrar o lendário tesouro de Big Whoop.",
    price: "43.90",
    image: "https://upload.wikimedia.org/wikipedia/en/1/1c/LeChuck%27s_Revenge_artwork.jpg",
  },
  {
    id: 19,
    name: "Twisted Metal",
    description:
      "Twisted Metal 1 (1995 – PlayStation 1) O primeiro jogo da icônica franquia de combate veicular da Sony, Twisted Metal coloca os jogadores em uma competição mortal chamada Twisted Metal Tournament, onde o vencedor tem direito a realizar um desejo qualquer — mas com consequências imprevisíveis.",
    price: "48.90",
    image: "https://upload.wikimedia.org/wikipedia/en/3/3d/Twisted_Metal_cover.jpg",
  },
  {
    id: 20,
    name: "Grand Theft Auto: Vice City",
    description: "Grand Theft Auto: Vice City (2002 – PS2 / PC / Xbox / outras plataformas) Ambientado em 1986, este clássico da Rockstar Games mergulha os jogadores em uma versão fictícia de Miami, repleta de neon, excessos e criminalidade. Você assume o papel de Tommy Vercetti, um ex-presidiário enviado a Vice City para expandir os negócios da família Forelli.",
    price: "87.90",
    image: "https://upload.wikimedia.org/wikipedia/en/3/3e/GTA_Vice_City_Stories_PSP_boxart.jpg",
  },
  {
    id: 21,
    name: "Resident Evil Outbreak",
    description:
      "Ambientado em Raccoon City durante o surto do T-Vírus, o jogo permite que você controle um dos oito civis sobreviventes, cada um com habilidades únicas, enquanto tenta escapar da cidade infestada de zumbis e criaturas mutantes.",
    price: "93.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/ad/Re_outbreak_a.jpg",
  },
  {
    id: 22,
    name: "Sid Meier's Civilization (1991)",
    description:
      "O jogo que deu origem ao gênero 4X (eXplore, eXpand, eXploit, eXterminate), Civilization permite que você construa uma civilização desde 4000 a.C. até o futuro, guiando-a por meio de descobertas científicas, diplomacia, guerras e construção de maravilhas.",
    price: "85.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/ec/Civilizationboxart.jpg",
  },
  {
    id: 23,
    name: "The Sims",
    description:
      "The Sims revolucionou os jogos ao permitir que os jogadores simulassem a vida cotidiana de personagens virtuais chamados Sims. Sem objetivos fixos ou “chefões”, o jogo oferece liberdade total para construir casas, desenvolver relacionamentos, seguir carreiras e cuidar das necessidades básicas dos Sims — tudo isso em um ambiente interativo e cheio de possibilidades.",
    price: "63.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/22/The_Sims_Coverart.png",
  },
  {
    id: 24,
    name: "SimCity 2000",
    description: "SimCity 2000 (1993 – PC / Mac / Amiga / SNES / PS1 / Saturn / GBA / outros) Sequência direta do clássico SimCity, este título da Maxis, criado por Will Wright, elevou o gênero de simulação urbana a um novo patamar. Com uma visão isométrica e camadas subterrâneas, SimCity 2000 permite que você construa e gerencie uma cidade complexa, lidando com infraestrutura, orçamento, desastres e a felicidade dos cidadãos.",
    price: "68.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d4/SimCity_2000_Coverart.png",
  },
  {
    id: 25,
    name: "Shin Megami Tensei (1992)",
    description: "O primeiro título principal da série Shin Megami Tensei, lançado pela Atlus, é um RPG sombrio e filosófico que se passa em um mundo pós-apocalíptico dominado por demônios, onde o jogador deve escolher entre ordem, caos ou neutralidade para moldar o destino da humanidade.",
    price: "66.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/43/Shin_Megami_Tensei_The_First.jpg",
  },
  {
    id: 26,
    name: "Metroid",
    description:
      "Lançado pela Nintendo e criado por Gunpei Yokoi, Metroid é um dos pilares do gênero ação e exploração, dando origem ao estilo conhecido como Metroidvania. Você assume o papel da misteriosa caçadora de recompensas Samus Aran, enviada ao planeta Zebes para impedir que os Space Pirates usem os perigosos Metroids como armas biológicas.",
    price: "80.10",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/5d/Metroid_boxart.jpg",
  },
  {
    id: 27,
    name: "Chrono Trigger (1995)",
    description: "Chrono Trigger é um dos RPGs mais aclamados de todos os tempos. Criado pelo lendário “Time dos Sonhos” — Hironobu Sakaguchi (Final Fantasy), Yuji Horii (Dragon Quest) e Akira Toriyama (Dragon Ball) — o jogo combina narrativa envolvente, personagens carismáticos e um sistema de combate inovador.",
    price: "79.99",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a7/Chrono_Trigger.jpg",
  },
  {
    id: 28,
    name: "Chrono Cross",
    description:
      "Desenvolvido pela Square como sucessor espiritual de Chrono Trigger, Chrono Cross é um RPG profundo e poético que explora realidades paralelas, identidade e destino. Você controla Serge, um jovem que descobre que morreu em outra dimensão e embarca numa jornada para entender essa divergência — enfrentando o sombrio Lynx, buscando a misteriosa Frozen Flame, e cruzando caminhos com a ladra carismática Kid.",
    price: "61.90",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Chronocrossbox.jpg",
  },
  {
    id: 29,
    name: "Mortal Kombat (1992)",
    description:
      "Mortal Kombat é o jogo que iniciou uma das franquias mais icônicas e controversas dos videogames. Com gráficos digitalizados de atores reais e uma violência gráfica inédita para a época, o jogo se destacou por sua atmosfera sombria, personagens marcantes e os famosos Fatalities — movimentos de finalização brutais que se tornaram marca registrada da série.",
    price: "42.90",
    image: "https://upload.wikimedia.org/wikipedia/en/3/33/Mortal_Kombat_cover.JPG",
  },
  {
    id: 30,
    name: "Snatcher",
    description: "que mistura investigação, ficção científica e narrativa cinematográfica. Ambientado em Neo Kobe City, uma metrópole futurista inspirada em Blade Runner, você assume o papel de Gillian Seed, um agente da força-tarefa J.U.N.K.E.R., encarregado de caçar os misteriosos Snatchers.",
    price: "49.90",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e9/PC88_Snatcher_Front.jpg",
  },
  {
    id: 31,
    name: "Policenauts",
    description:
      "Você assume o papel de Jonathan Ingram, um ex-astronauta que, após um acidente, passa 24 anos à deriva em criogenia no espaço. Ao retornar à Terra, ele se torna detetive e é envolvido em uma investigação que o leva de volta à colônia espacial Beyond Coast, onde descobre uma conspiração envolvendo tráfico de órgãos e drogas.",
    price: "159.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e1/PC-98_Policenauts_box.jpg",
  },
  {
    id: 32,
    name: "Ninja Gaiden (NES)",
    description:
      "Ninja Gaiden é um dos jogos mais icônicos da era 8-bits. Você controla Ryu Hayabusa, um jovem ninja que viaja aos Estados Unidos para investigar o desaparecimento de seu pai e acaba envolvido em uma trama sombria envolvendo estátuas demoníacas, conspirações globais e uma ameaça ancestral.",
    price: "127.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9b/Ninja_Gaiden_%28NES%29.jpg",
  },
  {
    id: 33,
    name: "The Legend of Zelda",
    description:
      "The Legend of Zelda é o jogo que deu início a uma das franquias mais influentes da história dos videogames. Você controla Link, um jovem herói que deve resgatar a Princesa Zelda e derrotar o maligno Ganon, reunindo os fragmentos da Triforce da Sabedoria espalhados pelo reino de Hyrule.",
    price: "130.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png",
  },
  {
    id: 34,
    name: "Mega Man 3",
    description: "Mega Man 3 é o terceiro título da série clássica e marca a estreia de personagens icônicos como Rush, o cão robô, e Proto Man, o misterioso rival de Mega Man. A história gira em torno da criação de um robô gigante chamado Gamma, fruto da colaboração entre Dr. Light e Dr. Wily — que, claro, acaba traindo todos e foge com a máquina.",
    price: "59.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/49/Megaman3_box.jpg",
  },
  {
    id: 35,
    name: "EarthBound",
    description: "Você controla Ness, um garoto com poderes psíquicos, que embarca numa jornada surreal para derrotar a entidade maligna Giygas, coletando melodias sagradas e enfrentando inimigos como hippies, robôs, pilhas de vômito e estátuas de lápis.",
    price: "31.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/1f/EarthBound_Box.jpg",
  },
  {
    id: 36,
    name: "Fire Emblem Gaiden",
    description:
      "A história se passa no continente de Valentia, dividido entre os reinos de Zofia e Rigel, governados pelos deuses Mila e Duma. Você controla dois protagonistas — Alm e Celica — em campanhas paralelas que buscam restaurar a paz e enfrentar os efeitos da corrupção divina.",
    price: "68.90",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/ee/Fe2box.png",
  },
  {
    id: 37,
    name: "Super Bomberman 5",
    description: "Último título da série Super Bomberman para o Super Nintendo, lançado exclusivamente no Japão pela Hudson Soft, este jogo leva a fórmula clássica de ação e estratégia a um novo nível. O vilão Imperador Terrorin liberta criminosos interdimensionais, e cabe ao Bomberman Branco restaurar a paz no planeta — enfrentando inimigos em zonas inspiradas nos jogos anteriores da franquia.",
    price: "50.90",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9f/SuperBomberman5.jpg",
  },
  {
    id: 38,
    name: "Harvest Moon: Friends of Mineral Town",
    description:
      "Este clássico da série Harvest Moon coloca você no papel de um jovem que herda uma fazenda abandonada em Mineral Town. Seu objetivo? Restaurar a propriedade, cultivar a terra, criar animais e construir relacionamentos com os habitantes da cidade — tudo isso enquanto vive uma vida tranquila e cheia de eventos sazonais.",
    price: "45.90",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7a/Harvest_Moon-_FoMT.jpg",
  },
  {
    id: 39,
    name: "Yu-Gi-Oh! Forbidden Memories",
    description:
      "A história começa no Antigo Egito, com o Príncipe Atem enfrentando conspirações mágicas e duelos intensos. Após ser selado no Enigma do Milênio, ele desperta no futuro como Yugi Mutou, participando de um torneio da KaibaCorp para reunir os Itens do Milênio e salvar o mundo.",
    price: "47.00",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b3/Yu-Gi-Oh%21_Forbidden_Memories_Cover.png",
  },
  {
    id: 40,
    name: "Silent Hill",
    description: "O primeiro capítulo de uma das franquias mais influentes do gênero survival horror psicológico. Você controla Harry Mason, um homem comum que chega à misteriosa cidade de Silent Hill em busca de sua filha adotiva Cheryl, desaparecida após um acidente de carro. O que ele encontra é uma cidade envolta em névoa, repleta de criaturas grotescas e segredos perturbadores.",
    price: "43.90",
    image: "https://upload.wikimedia.org/wikipedia/en/9/96/Silent_Hill_video_game_cover.png",
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
