(() => {
  const languages = {
    ru: {
      url: 'https://raw.githubusercontent.com/danakt/russian-words/master/russian.txt',
      encoding: 'windows-1251',
      forms: /^[а-яё]{5}$/gimu,
      word: /^[А-Я]{5}$/u,
      answers: `
        АЛМАЗ АМБАР АРБУЗ АТЛАС БАГАЖ БАЛЕТ БАНАН БАШНЯ БЕРЕГ БИЛЕТ БОКАЛ БУКВА
        БУТОН ВАГОН ВЕСНА ВЕТЕР ВИЛКА ВИШНЯ ВОЛНА ВОРОН ВЫДРА ГАРАЖ ГЛИНА ГОЛОС
        ГОРОД ГОСТЬ ГРОЗА ГРУША ДВЕРЬ ДИВАН ДОЖДЬ ДОСКА ДЯТЕЛ ЖАЖДА ЖАКЕТ ЖИЗНЬ
        ЖИРАФ ЗАБОР ЗАМОК ЗЕБРА ЗЕМЛЯ ЗЕРНО ИГРОК ИКОНА ИСКРА КАБАН КАКАО КАМИН
        КАНАЛ КАРТА КАТЕР КАЧКА КЕФИР КИСТЬ КЛОУН КНИГА КНЯЗЬ КОВЕР КОКОС КОМАР
        КОШКА КРЕСТ КУБИК КУКЛА КУХНЯ ЛАМПА ЛАПША ЛЕНТА ЛИМОН ЛОДКА ЛОЖКА МАГИЯ
        МАСКА МАСЛО МАЧТА МЕЧТА МЕШОК МЕТЛА МЕТРО МИСКА МОЛОТ МОРОЗ МОТОР МУЗЕЙ
        МЫШКА НАСОС НИТКА НОСОК ОБРАЗ ОБРУЧ ОЗЕРО ОКЕАН ОЛЕНЬ ОМЛЕТ ОПЕРА ОСЕНЬ
        ОСИНА ОХОТА ПАКЕТ ПАЛЕЦ ПАЛКА ПАНДА ПАРУС ПАСТА ПЕВЕЦ ПЕСНЯ ПЕСОК ПЕЧКА
        ПИЛОТ ПИРОГ ПИТОН ПИЦЦА ПЛАМЯ ПЛЕЧО ПЛИТА ПОВАР ПОЖАР ПОЛКА ПОЛЮС ПОРОГ
        ПОЧВА ПОЧТА ПРАВО ПТИЦА ПЧЕЛА ПЯТНО РАДИО РАЙОН РАМКА РЕБРО РЕПКА РИФМА
        РОБОТ РОМАН РОЯЛЬ РУЧЕЙ РУЧКА РЫБАК РЫБКА РЫНОК САЛАТ САЛЮТ САНКИ САХАР
        СВЕЧА СЕВЕР СЕДЛО СЕЗОН СЕМЬЯ СЕТКА СИРОП СКАЛА СКВЕР СКЛАД СЛИВА СЛОВО
        СМЕНА СМОЛА СМЫСЛ СОКОЛ СОСНА СПИНА СПОРТ ССОРА СТАДО СТАЛЬ СТЕНА СТЕПЬ
        СТРАХ СУМКА СЦЕНА ТАЙГА ТАЙНА ТАКСИ ТАНЕЦ ТЕАТР ТЕКСТ ТЕСТО ТКАНЬ ТОПОР
        ТОЧКА ТРАВА ТРОПА ТРУБА ТУМАН ТЫКВА УГОЛЬ УКРОП УЛИКА УЛИЦА УСПЕХ УЧЕБА
        ФАКЕЛ ФЕРМА ФИЛИН ФОКУС ФОРМА ФРАЗА ФРУКТ ХВОСТ ХИМИЯ ХОБОТ ХОЛОД ХОМЯК
        ХУРМА ЦАПЛЯ ЦИФРА ЧАЙКА ЧАШКА ЧЕРВЬ ЧИСЛО ШАЙБА ШАЛАШ ШАПКА ШАХТА ШЕПОТ
        ШИШКА ШКОЛА ШЛЯПА ШМЕЛЬ ШПИОН ШТОРА ШУТКА ЩЕНОК ЩЕТКА ЭКРАН ЭМАЛЬ ЭПОХА
        ЭСКИЗ ЮРИСТ ЯКОРЬ ЯСЕНЬ
      `,
    },
    en: {
      url: 'https://raw.githubusercontent.com/dolph/dictionary/master/enable1.txt',
      encoding: 'utf-8',
      forms: /^[a-z]{5}$/gim,
      word: /^[A-Z]{5}$/,
      answers: `
        ABIDE ABOUT ABOVE ACORN ACUTE ADAPT ADMIT ADOBE ADOPT AGENT AGILE AHEAD ALARM ALBUM ALERT
        ALIEN ALIGN ALIKE ALIVE ALLOW AMBER ANGEL ANGER ANGLE ANKLE APPLE APRON ARENA ARGUE
        AROMA ASIDE ASSET ATLAS ATTIC AUDIO AVOID BACON BADGE BASIC BASIL BASIS BEACH BEARD BEAST
        BENCH BERRY BIRTH BLACK BLADE BLAME BLAND BLANK BLAST BLAZE BLEND BLIND BLINK BLOCK BLOOM
        BLUSH BOARD BOAST BONUS BOOST BOOTH BOUND BRACE BRAIN BRAKE BRAND BRASS BRAVE BREAD BREAK
        BRICK BRIDE BRIEF BRING BROAD BROOM BROWN BRUSH BUILD BUNCH BURNT CABIN CABLE CAMEL CANDY
        CANOE CARGO CARRY CARVE CATCH CAUSE CHAIN CHAIR CHALK CHAMP CHANT CHAOS CHARM CHART CHASE
        CHEAP CHEEK CHESS CHEST CHIEF CHILD CHILI CHILL CHIME CHIPS CHOIR CHORD CIVIC CLAIM CLASS
        CLEAN CLEAR CLERK CLICK CLIFF CLIMB CLOCK CLOSE CLOTH CLOUD CLOWN COACH COAST COLOR COMET
        CORAL COUCH COUGH COULD COUNT COURT COVER CRACK CRAFT CRANE CRASH CRAWL CRAZE CREAM CREEK
        CREST CRIME CRISP CROSS CROWD CROWN CRUSH CURRY CURVE CYCLE DANCE DECAY DECOR DELAY DELTA
        DENSE DEPTH DIARY DICEY DIGIT DINER DIRTY DITCH DIVER DIZZY DOING DONOR DONUT DOUBT DOUGH
        DRAFT DRAIN DRAMA DRAPE DRAWN DREAM DRESS DRIED DRIFT DRILL DRINK DRIVE DROVE DROWN DRUNK
        DUSTY DWARF EAGER EAGLE EARLY EARTH EIGHT ELBOW ELDER ELECT EMPTY ENEMY ENJOY ENTER ENTRY
        EQUAL EQUIP ERASE ERROR ESSAY EVENT EVERY EXACT EXCEL EXIST EXTRA FABLE FAINT FAIRY FAITH
        FALSE FANCY FATAL FAULT FEAST FENCE FERRY FEVER FIBER FIELD FIERY FIFTY FIGHT FINAL FIRST
        FLAME FLASH FLEET FLESH FLICK FLINT FLOAT FLOCK FLOOD FLOOR FLOUR FLUID FLUTE FOCAL FOCUS
        FORCE FORGE FORTH FORTY FORUM FOUND FRAME FRESH FRIED FRONT FROST FRUIT FUNNY GAMER GAUGE
        GENRE GHOST GIANT GIVEN GLADE GLAND GLARE GLASS GLAZE GLOBE GLORY GLOSS GLOVE GNOME GOING
        GRACE GRADE GRAIN GRAND GRANT GRAPE GRAPH GRASP GRASS GRATE GRAVE GRAVY GREAT GREED GREEN
        GREET GRIEF GRILL GRIND GROAN GROIN GROOM GROUP GROVE GROWN GUARD GUESS GUEST GUIDE GUILD
        HABIT HAIRY HANDY HAPPY HARSH HASTE HATCH HAVEN HEART HEAVY HEDGE HELLO HENCE HERON HIKER
        HINGE HIPPO HOBBY HONEY HONOR HORSE HOTEL HOUSE HUMAN HUMOR HURRY IDEAL IMAGE IMBUE IMPLY
        INBOX INDEX INERT INFER INPUT INTER IRONY ISSUE IVORY JEANS JELLY JEWEL JOINT JOKER JUDGE
        JUICE JUICY JUMBO KARMA KAYAK KIOSK KNEEL KNIFE KNOCK KNOWN LABEL LABOR LANCE LASER LATER
        LAUGH LAYER LEARN LEASE LEAST LEAVE LEGAL LEMON LEVEL LEVER LIGHT LILAC LIMIT LINEN LINER
        LIVER LOBBY LOCAL LODGE LOGIC LOOSE LOSER LOVER LOWER LUCKY LUNAR LUNCH LUNGE LURCH LYRIC
        MAGIC MAJOR MAKER MANGO MANOR MAPLE MARCH MARRY MARSH MATCH MAYOR MEDAL MEDIA MELON MERCY
        MERGE MERIT MERRY METAL METER METRO MICRO MIDST MIGHT MINOR MINUS MIXED MOCHA MODEL MODEM
        MOIST MONEY MONTH MOOSE MOTEL MOTOR MOUND MOUNT MOUSE MOUTH MOVIE MUSIC NAIVE NANNY NASTY
        NAVAL NEEDY NERVE NEVER NEWER NEWLY NEXUS NICHE NIECE NIGHT NINJA NOBLE NOISE NORTH NOVEL
        NURSE NYLON OCCUR OCEAN OLDER OLIVE ONION ONSET OPERA ORBIT ORDER ORGAN OTHER OTTER OUGHT
        OUNCE OUTER OWNER OXIDE OZONE PAINT PANEL PANIC PAPER PARTY PASTE PATCH PATIO PAUSE PEACE
        PEACH PEARL PEDAL PENNY PERCH PERIL PESTO PHASE PHONE PHOTO PIANO PIECE PILOT PINCH PITCH
        PIZZA PLACE PLAIN PLANE PLANT PLATE PLAZA PLEAD PLUCK PLUMB PLUME POINT POKER POLAR POLKA
        POUCH POUND POWER PRESS PRICE PRIDE PRIME PRINT PRIOR PRISM PRIZE PROBE PRONE PROOF PROSE
        PROUD PROVE PROXY PULSE PUNCH PUPIL PUPPY PURSE QUAIL QUAKE QUALM QUEEN QUERY QUEST QUEUE
        QUICK QUIET QUILL QUILT QUIRK QUITE QUOTA QUOTE RADAR RADIO RAINY RALLY RAMEN RANCH RAVEN
        RAYON RAZOR REACH REACT READY REALM REBEL REFER REIGN RELAX RELAY RENEW REPAY REPEL REPLY
        RESET RESIN RETCH RETRO RHINO RHYME RIDER RIDGE RIFLE RINSE RISEN RISKY RIVAL RIVER ROAST
        ROBIN ROBOT ROCKY RODEO ROGUE ROUGH ROUND ROUTE ROYAL RUGBY RULER RURAL SADLY SALAD SANDY
        SATIN SAUCE SAUNA SCALE SCALP SCARF SCARY SCENE SCENT SCOPE SCORE SCOUT SCREW SENSE SERVE
        SEVEN SHADE SHAFT SHAKE SHALL SHAME SHAPE SHARE SHARK SHARP SHAVE SHEAR SHEDS SHEEN SHEEP
        SHEER SHEET SHELF SHELL SHIFT SHINE SHINY SHIRT SHOCK SHOOT SHORE SHORT SHOUT SHOVE SHRUB
        SHRUG SIEGE SIGHT SILKY SILLY SINCE SIXTH SKATE SKIER SKILL SKIRT SKULL SLANT SLATE SLAVE
        SLEEP SLICE SLICK SLIDE SLOPE SLOTH SMALL SMART SMELL SMILE SMOKE SNAIL SNAKE SNARE SNEAK
        SNORE SNOUT SOGGY SOLAR SOLID SOLVE SONAR SORRY SOUND SOUTH SPACE SPADE SPARE SPARK SPAWN
        SPEAK SPEAR SPEED SPELL SPEND SPICE SPICY SPIKE SPILL SPINE SPLIT SPOIL SPOKE SPOON SPORT
        SPRAY SQUAD STACK STAFF STAGE STAIN STAIR STAKE STALE STAMP STAND STARE STARK START STASH
        STATE STEAL STEAM STEEL STEEP STEER STERN STICK STIFF STILL STING STOCK STONE STOOL STORM
        STORY STOVE STRAP STRAW STRAY STRIP STUCK STUDY STYLE SUGAR SUITE SUNNY SUPER SURGE SUSHI
        SWAMP SWARM SWEAR SWEAT SWEEP SWEET SWIFT SWING SWIPE SWORD SYRUP TABLE TABOO TACIT TAFFY
        TANGO TANGY TASTE TASTY TEACH TEETH TEMPO TENOR TENSE TENTH THANK THEFT THEIR THEME THERE
        THESE THICK THIEF THIGH THING THINK THIRD THORN THOSE THREE THROB THROW THUMB THUMP THYME
        TIARA TIBIA TIDAL TIGER TIGHT TIMER TIMID TIPSY TIRED TITAN TITLE TOAST TODAY TOKEN TONAL
        TONIC TOOTH TOPAZ TOPIC TORCH TOTAL TOTEM TOUCH TOUGH TOWEL TOWER TOXIC TOXIN TRACE TRACK
        TRACT TRADE TRAIL TRAIN TRAIT TRAMP TRASH TREAD TREAT TREND TRIAD TRIAL TRIBE TRICK TRIED
        TRIPE TRITE TROLL TROOP TROUT TROVE TRUCE TRUCK TRULY TRUMP TRUNK TRUST TRUTH TULIP TUNIC
        TURBO TUTOR TWANG TWEAK TWEED TWEET TWICE TWINE TWIRL TWIST TYING ULTRA UNCLE UNCUT UNDER
        UNDUE UNFIT UNIFY UNION UNITE UNITY UNTIE UNTIL UNWED UNZIP UPPER UPSET URBAN URINE USAGE
        USHER USUAL UTTER VAGUE VALET VALID VALOR VALUE VALVE VAPOR VAULT VEGAN VENOM VENUE
        VERGE VERSE VERVE VICAR VIDEO VIGIL VIGOR VILLA VINYL VIOLA VIRAL VIRUS VISIT VISOR VISTA
        VITAL VIVID VIXEN VOCAL VODKA VOGUE VOICE VOILA VOTER VOUCH VOWEL VYING WACKY WAFER WAGER
        WAGON WAIST WAIVE WALTZ WARTY WASTE WATCH WATER WAXEN WEARY WEAVE WEDGE WEEDY WEIGH WEIRD
        WHACK WHALE WHARF WHEAT WHEEL WHELP WHERE WHICH WHIFF WHILE WHINE WHINY WHIRL
        WHISK WHITE WHOLE WHOOP WHOSE WIDEN WIDER WIDOW WIDTH WIELD WIGHT WILLY WIMPY WINCE WINCH
        WINDY WISER WISPY WITCH WITTY WOKEN WOMAN WOMEN WOODY WOOER WOOLY WOOZY WORDY WORLD WORRY
        WORSE WORST WORTH WOULD WOUND WOVEN WRACK WRATH WREAK WRECK WREST WRING WRIST WRITE WRONG
        WROTE WRUNG WRYLY YACHT YEARN YEAST YIELD YOUNG YOUTH ZEBRA ZESTY ZONAL
      `,
    },
  };
  for (const config of Object.values(languages)) {
    config.answers = config.answers.trim().split(/\s+/u).filter(word => config.word.test(word));
  }

  const cached = new Map();
  const pending = new Map();
  const ttl = 24 * 60 * 60 * 1000;

  async function refresh(language, previous) {
    const { url, encoding, forms, answers } = languages[language];
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(6500) });
      if (!response.ok) throw new Error('Dictionary download failed');
      const source = new TextDecoder(encoding).decode(await response.arrayBuffer());
      const words = new Set(answers);
      if (language === 'ru') {
        for (const word of globalThis.wordleGuesses) words.add(word);
      }
      let entries = 0;
      for (const [word] of source.matchAll(forms)) {
        words.add(word.toUpperCase().replaceAll('Ё', 'Е'));
        entries++;
      }
      if (entries < 5000) throw new Error('Incomplete dictionary');
      cached.set(language, { words, expires: Date.now() + ttl });
      return words;
    } catch {
      const words = previous?.words ?? (language === 'ru' ? globalThis.wordleGuesses : null);
      cached.set(language, { words, expires: Date.now() + 15_000 });
      return words;
    }
  }

  function dictionary(language) {
    const existing = cached.get(language);
    if (existing?.expires > Date.now()) return Promise.resolve(existing.words);
    if (!pending.has(language)) {
      pending.set(language, refresh(language, existing).finally(() => pending.delete(language)));
    }
    return pending.get(language);
  }

  async function command(data) {
    const legacy = /^[А-ЯЁ]{5}$/iu.test(data);
    const [action, language, input = ''] = legacy ? ['guess', 'ru', data] : data.split(':');
    if (!Object.hasOwn(languages, language) || (action !== 'start' && action !== 'guess')) return '0';
    const config = languages[language];
    const word = input.toUpperCase().replaceAll('Ё', 'Е');

    if (action === 'guess') {
      if (!config.word.test(word)) return '0';
      if (config.answers.includes(word) || (language === 'ru' && globalThis.wordleGuesses.has(word))) return '1';
      const words = await dictionary(language);
      return words ? (words.has(word) ? '1' : '0') : 'retry';
    }

    if (!await dictionary(language)) return 'retry';
    const options = config.answers.filter(answer => answer !== word);
    return options[Math.floor(Math.random() * options.length)];
  }

  const copy = {
    ru: {
      title: 'Игры Ника', language: 'Язык слов', play: 'Играть',
      again: 'Новое слово', back: 'Назад', enter: 'Ввод', erase: 'Стереть букву',
      word: 'Введи слово', length: 'Нужно пять букв',
      missing: 'Этого слова нет в словаре', checking: 'Проверяю…', loading: 'Загружаю словарь…',
      retry: 'Словарь недоступен. Попробуй ещё раз.', won: 'Угадано!', answer: 'Слово: ',
      exitQuestion: 'Уверены, что хотите выйти? Прогресс не сохранится', stay: 'Остаться', leave: 'Выйти',
    },
    en: {
      title: "Nick's Games", language: 'Word language', play: 'Play',
      again: 'New word', back: 'Back', enter: 'Enter', erase: 'Backspace',
      word: 'Enter a word', length: 'Enter five letters',
      missing: 'Word not in dictionary', checking: 'Checking…', loading: 'Loading dictionary…',
      retry: 'Dictionary unavailable. Try again.', won: 'Solved!', answer: 'Word: ',
      exitQuestion: "Are you sure you want to leave? Your progress won't be saved.", stay: 'Stay', leave: 'Leave',
    },
  };

  globalThis.nickWordle = { command, copy };
})();
