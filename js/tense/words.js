const wordset = [
  {
    title: "주니어 능률 VOCA 기본 1200제",
    template: "swap",
    timelimit: 20,
    test: {
      all: 0,
      step: 10,
    },
    steps: [
      [
        ["fix", "수리하다, 고치다"],
        ["shade", "그늘"],
        ["bury", "묻다, 매장하다"],
        ["cave", "동굴, 굴"],
        ["useful", "쓸모 있는, 유용한"],
        ["dot", "(동그란) 점"],
        ["copy", "복사(본), 복사하다"],
        ["through", "통과하여, 지나서"],
        ["oven", "오븐"],
        ["lend", "빌려주다"],
        ["moment", "순간, 시점, 잠깐, 잠시"],
        ["wing", "날개"],
        ["neighbor", "이웃"],
        ["piece", "조각, 한 개, 한 장"],
        ["still", "아직도, 여전히"],
        ["twin", "쌍둥이, 쌍둥이의"],
        ["pure", "순수한, 맑은, 깨끗한"],
        ["stage", "단계, 시기, 무대"],
        ["at first", "처음에는"],
        ["put on", "~을 입다"]
      ],
      [
        ["war", "전쟁"],
        ["cash", "현금, 현찰"],
        ["advice", "충고, 조언"],
        ["lead", "안내하다, 지도하다, 이끌다"],
        ["perfect", "완벽한, 꼭 알맞은"],
        ["search", "찾다, 수색하다"],
        ["contest", "대회, 콘테스트"],
        ["display", "전시하다, 진열하다"],
        ["tip", "끝, 팁, 봉사료, 조언"],
        ["borrow", "빌리다"],
        ["sharp", "날카로운, 뾰족한"],
        ["machine", "기계"],
        ["trouble", "어려움, 문제"],
        ["roll", "구르다, 굴리다, 두루마리"],
        ["exit", "출구, 나가다, 퇴장하다"],
        ["proud", "자랑스러워하는, 자랑스러운, 거만한"],
        ["flood", "홍수"],
        ["stamp", "우표, 도장"],
        ["at last", "마침내"],
        ["grow up", "자라다, 성장하다"]
      ],
      [
        ["mix", "섞이다, 섞다"],
        ["healthy", "건강한, 건강에 좋은"],
        ["active", "활동적인, 적극적인"],
        ["dig", "파다"],
        ["simple", "간단한, 단순한"],
        ["view", "경치, 전망, 견해, 의견"],
        ["insect", "곤충"],
        ["sleepy", "졸리는"],
        ["root", "뿌리, 근원, 원인"],
        ["total", "총, 전체의, 완전한, 전적인, 합계"],
        ["final", "마지막의, 최후의, 결승"],
        ["scene", "장면, 경치, 풍경"],
        ["prize", "상, 상품"],
        ["nickname", "별명"],
        ["pan", "팬, 프라이팬"],
        ["cartoon", "만화"],
        ["leader", "지도자, 리더"],
        ["coach", "코치, 감독"],
        ["find out", "~을 알아내다"],
        ["be in trouble", "어려움에 처하다"],
      ],
      [
        ["lift", "(들어) 올리다"],
        ["pack", "(짐을) 싸다, 포장하다, 한 갑"],
        ["score", "득점, 점수, 득점하다"],
        ["court", "법정, 법원, 경기장, 코트"],
        ["desert", "사막"],
        ["award", "상, 수여하다, 주다"],
        ["elder", "나이가 더 많은, 노인"],
        ["among", "~ 사이에, ~에 둘러싸여, ~ 중에"],
        ["male", "남성, 수컷"],
        ["finally", "마침내, 결국, 마지막으로"],
        ["sometime", "언젠가"],
        ["rule", "규칙, 규정, 지배하다"],
        ["harmony", "조화, 화합, 화음"],
        ["bark", "짖다"],
        ["crash", "충돌하다, 충돌, 추락"],
        ["nature", "자연, 천성, 본성"],
        ["valley", "계속, 골짜기"],
        ["wonder", "궁금하다, 경탄, 놀라움"],
        ["think up", "~을 생각해내다"],
        ["be famous for", "~로 유명하다"],
      ],
      [
        ["hang", "걸리다, 걸다, 매달리다"],
        ["able", "~할 수 있는, 능력있는"],
        ["pain", "통증, 고통"],
        ["uniform", "제복, 유니폼, 균일한"],
        ["beauty", "아름다움, 미"],
        ["taste", "맛, 맛이 나다"],
        ["shout", "소리치다, 외치다"],
        ["without", "~ 없이, ~하지 않고"],
        ["care", "주의, 보살핌, 상관하다, 신경 쓰다"],
        ["sunlight", "햇빛, 햇살"],
        ["female", "여성, 암컷"],
        ["lower", "아래쪽의, 낮추다, 내리다"],
        ["miss", "놓치다, 빗나가다, 그리워하다"],
        ["exact", "정확한"],
        ["popular", "인기 있는, 대중의, 대중적인"],
        ["regular", "정기적인, 규칙적인, 보통의, 표준적인"],
        ["noisy", "시끄러운"],
        ["dive", "뛰어들다, 다이빙하다"],
        ["before long", "머지않아, 얼마 후에"],
        ["calm down", "진정하다, ~을 진정시키다"],
      ],
      [
        ["pill", "알약, 정제"],
        ["alarm", "경보(기), 자명종, 알람"],
        ["bored", "지루한, 지겨운"],
        ["freeze", "얼다, 얼리다"],
        ["nobody", "아무도 ~않다"],
        ["language", "언어, 말"],
        ["teenager", "십 대"],
        ["usual", "평소의, 보통의"],
        ["chance", "가능성, 기회, 우연"],
        ["hero", "영웅, 주인공"],
        ["curl", "곱슬곱슬하다, 곱슬머리"],
        ["planet", "행성"],
        ["regularly", "정기적으로, 규칙적으로"],
        ["invent", "발명하다"],
        ["smart", "영리한, 똑똑한"],
        ["dead", "죽은"],
        ["soil", "흙, 토양"],
        ["meal", "식사, 끼니, 음식"],
        ["take care", "조심하다"],
        ["because of", "~ 때문에"],
      ],
      [
        ["coin", "동전"],
        ["prepare", "준비하다, 마련하다"],
        ["quite", "꽤, 상당히"],
        ["collect", "모으다, 수집하다"],
        ["main", "주된, 주요한"],
        ["shower", "샤워, 소나기"],
        ["alike", "비슷한, 비슷하게, 마찬가지로"],
        ["blank", "공백의, 빈, 빈칸, 공란"],
        ["freezing", "몹시 추운"],
        ["important", "중요한"],
        ["spicy", "매콤한, 자극적인"],
        ["teenager", "십 대, 십 대의"],
        ["weigh", "무게가 ~이다, 무게를 재다"],
        ["deaf", "귀가 먹은"],
        ["law", "법, 법률"],
        ["rub", "비비다, 문지르다"],
        ["pour", "따르다, 붓다, 쏟아지다, 퍼붓다"],
        ["yet", "아직, 벌써"],
        ["take out", "~을 꺼내다, ~을 데리고 나가다"],
        ["get out of", "나가다, 내리다"],
      ],
      [
        ["skill", "기량, 솜씨, 기술"],
        ["neat", "정돈된, 단정한"],
        ["ache", "아프다, 쑤시다, 아픔, 통증"],
        ["patient", "환자, 참을성 있는"],
        ["elderly", "나이가 지긋한, 연세가 드신"],
        ["mistake", "실수, 잘못"],
        ["channel", "채널"],
        ["during", "~동안 (내내)"],
        ["flour", "밀가루"],
        ["lawyer", "변호사"],
        ["tire", "지치다, 지치게 하다, 타이어"],
        ["bar", "막대기, (창문) 살, 바"],
        ["soldier", "군인, 병사"],
        ["recipe", "요리법, 레시피"],
        ["course", "강의, 강좌, 항로, 방향"],
        ["wallet", "지갑"],
        ["guide", "안내자, 가이드, 안내하다"],
        ["silent", "말이 없는, 침묵하는, 조용한, 고요한"],
        ["fill in", "기입하다, 써넣다, 메우다"],
        ["be different from", "~와 다르다"],
      ],
      [
        ["rail", "철로, 철도, 기차", "1"],
        ["adult", "성인, 어른, 성인의, 다 자란", "1"],
        ["tasty", "맛있는", "1"],
        ["couple", "한 쌍, 두 개, 부부", "1"],
        ["especially", "특히, 특별히, 각별히", "2"],
        ["soap", "비누", "1"],
        ["lonely", "외로운, 쓸쓸한", "1"],
        ["mind", "마음, 정신 / 꺼리다, 싫어하다", "2"],
        ["invention", "발명(품)", "1"],
        ["blind", "눈 먼, 맹인의 / 깨닫지 못하는", "1"],
        ["curly", "곱슬솝슬한", "1"],
        ["stick", "나뭇가지, 막대기 / 채 / 붙다, 붙이다", "2"],
        ["purse", "(여성용) 지갑, 핸드백", "1"],
        ["share", "함께 쓰다, 공유하다 / 나누다", "1"],
        ["design", "디자인하다, 설계하다", "1"],
        ["form", "종류, 유형 / 서식 / 형성하다", "2"],
        ["wild", "야생의", "2"],
        ["gallery", "미술관, 화랑", "1"],
        ["pick up", "~을 집어 들다 / ~를 태우러 가다(오다)", "3"],
        ["help out", "도와주다", "2"],
      ],
      [
        ["chat", "수다를 떨다 / 수다, 담소", "1"],
        ["designer", "디자이너", "1"],
        ["result", "결과 / (~의 결과로) 발생하다, 생기다", "2"],
        ["type", "종류, 유형", "1"],
        ["someday", "(미래의) 언젠가", "1"],
        ["actual", "실제의, 사실의", "1"],
        ["culture", "문화", "1"],
        ["lost", "길을 잃은 / 잃어버린", "1"],
        ["item", "물품, 품목 / 항목, 사항", "1"],
        ["natural", "자연의 / 당연한, 자연스러운 / 타고난", "2"],
        ["secret", "비밀, 비밀의", "1"],
        ["breath", "숨, 호흡", "1"],
        ["excite", "흥분시키다, 들뜨게 하다", "2"],
        ["online", "온라인의", "1"],
        ["garbage", "쓰레기", "1"],
        ["suck", "빨아 먹다 / 빨다", "1"],
        ["prison", "교도소, 감옥", "1"],
        ["flow", "흐름/ 흐르다", "1"],
        ["make noise", "소란을 피우다, 떠들다", "2"],
        ["hand in hand", "서로 손을 잡고", "2"],
      ],
      [
        ["solar", "태양의 / 태양열의", "2"],
        ["captain", "선장, 기장 / 주장", "2"],
        ["dialogue", "대화, 회화", "2"],
        ["fail", "실패하다 / (시험에) 떨어지다", "1"],
        ["actually", "실제로, 정말로", "1"],
        ["special", "특별한", "1"],
        ["tear", "눈물 / 찢어지다, 찢다", "1"],
        ["however", "그런, 그렇지만", "1"],
        ["burn", "타다, 태우다", "1"],
        ["upstairs", "위층에 / 위층", "1"],
        ["living", "살아 있는 / 생활비, 생계 수단", "1"],
        ["report", "보고서 / 보고하다, 발표하다 / 보도하다", "2"],
        ["produce", "생산하다 / 낳다, 일으키다", "2"],
        ["cheer", "환호(성) / 환호하다, 격려하다", "1"],
        ["excited", "신이 난, 흥분한", "1"],
        ["gather", "모이다, 모으다 / 수집하다", "1"],
        ["melt", "녹다, 녹이다", "1"],
        ["straw", "짚, 밀짚 / 빨대", "1"],
        ["take care of", "~을 돌보다", "2"],
        ["not ~ anymore", "더 이상 ~ 않다", "2"],
      ],
      [
        ["save", "구하다 / 저축하다 / 절약하다", "2"],
        ["cause", "원인, ~의 원인이 되다", "2"],
        ["exercise", "운동, 운동하다 / 훈련, 연습", "1"],
        ["member", "회원, 일원", "1"],
        ["press", "누르다 / 신문, 언론", "1"],
        ["serious", "심각한 / 진지한", "1"],
        ["talent", "(타고난) 재능, 재주", "2"],
        ["greet", "맞이하다, 환영하다", "2"],
        ["beat", "때리다, 두드리다 / 이기다", "1"],
        ["stress", "압박 / 강조, 강조하다", "1"],
        ["later", "나중에, 후에 / 더 늦은, 나중의", "1"],
        ["create", "창조하다, 만들다", "1"],
        ["flat", "평평한 / 바람이 빠진", "1"],
        ["return", "돌아가다 / 돌려주다, 반납하다 / 귀환", "1"],
        ["activity", "활동", "1"],
        ["afraid", "두려워하는 / 걱정하는", "1"],
        ["dessert", "후식", "1"],
        ["toothache", "치통", "1"],
        ["in fact", "사실은", "2"],
        ["no longer", "더 이상 ~ 않다", "2"],
      ],
      [
        ["effect", "영향, 결과", "2"],
        ["focus", "집중하다, 집중시키다 / 초점, 중점", "2"],
        ["dictionary", "사전", "1"],
        ["allow", "허락하다, 허용하다", "1"],
        ["print", "인쇄하다 / 출판하다, 발행하다", "1"],
        ["safety", "안전하게, 무사히", "2"],
        ["giant", "거인 / 거대한, 특대의", "1"],
        ["usually", "보통, 대개", "1"],
        ["creative", "창의적인, 창조적인", "1"],
        ["review", "검토(하다) / 평론, 비평 / 복습(하다)", "2"],
        ["kiss", "입맞추다 / 입맞춤", "1"],
        ["strange", "이상한 / 낯선", "1"],
        ["comic", "웃기는 / 희극의 / 만화책", "1"],
        ["mark", "얼룩, 자국 / 표시(하다)", "2"],
        ["shop", "가게, 상점 / 물건을 사다", "1"],
        ["talented", "재능 있는, 유능한", "2"],
        ["bare", "벌거벗은, 날 것의", "2"],
        ["housework", "집안일, 가사", "1"],
        ["at least", "적어도, 최소한", "2"],
        ["pass through", "지나가다, 통과하다 / 겪다, 경험하다", "3"],
      ],
      [
        ["rise", "오르다, 상승하다 / 일어나다 / 뜨다", "1"],
        ["accept", "받아들이다, 수락하다", "1"],
        ["topic", "주제, 화제", "2"],
        ["flight", "여행, 비행 / 항공편, 항공기", "1"],
        ["hunter", "사냥꾼", "1"],
        ["medicine", "약, 약물 / 의학, 의술", "2"],
        ["text", "글, 본문 / 문서", "1"],
        ["boil", "끓다, 끓이다 / 삶다", "1"],
        ["pleasure", "즐거움, 기쁨", "1"],
        ["dirt", "먼지, 때 / 흙", "2"],
        ["everywhere", "모든 곳에, 어디든지", "2"],
        ["sheet", "얇은 천 / 한 장", "1"],
        ["village", "(시골) 마을", "1"],
        ["powerful", "영향력 있는 / 강력한, 효과적인", "2"],
        ["scare", "겁주다, 겁나게 하다", "2"],
        ["step", "(발)걸음 / 조치 / 단계", "1"],
        ["cooking", "요리(하기) / 요리의", "1"],
        ["anger", "화, 분노", "1"],
        ["look up", "찾아보다 / 올려다보다", "2"],
        ["cut ~ into pieces", "~를 여러 조각으로 자르다", "2"],
      ],
      [
        ["own", "자기 자신의 / 소유하다", "1"],
        ["praise", "칭찬하다 / 칭찬, 찬양", "1"],
        ["continue", "계속되다, 계속하다", "1"],
        ["wooden", "나무로 된, 목재의", "1"],
        ["coast", "해안, 연안", "1"],
        ["hike", "도보 여행 (하다)", "1"],
        ["scared", "두려워하는, 겁먹은", "1"],
        ["beyond", "~너머에 / ~를 지나서", "1"],
        ["meeting", "회의", "1"],
        ["danger", "위험(성)", "1"],
        ["traffic", "교통(량)", "1"],
        ["even", "~조차, ~까지, ~도 / 훨씬, 더욱", "1"],
        ["foreign", "외국의", "1"],
        ["lie", "눕다 / 놓여 있다 / 거짓말하다", "1"],
        ["skip", "거르다 / 건너뛰나, 생략하다", "1"],
        ["refuse", "거절하다, 거부하다", "1"],
        ["plate", "접시", "1"],
        ["alive", "살아 있는", "1"],
        ["stay up", "깨어 있다, 안 자다", "1"],
        ["get along with", "~와 잘 지내다", "1"],
      ],
      [
        ["sign", "표지판 / 기미, 조짐 / 서명하다", "1"],
        ["branch", "나뭇가지 / 지점, 지사", "1"],
        ["reach", "도착하다, 도달하다 / 닿다", "1"],
        ["common", "흔한 / 공통의, 공동의", "1"],
        ["path", "길, 오솔길 / 경로, 방향", "1"],
        ["core", "핵심, 중심부 / 핵심적인, 가장 중요한", "1"],
        ["foreigner", "외국인", "1"],
        ["toward", "~ 쪽으로, ~을 향하여", "1"],
        ["vote", "투표하다 / 투표, 표결", "1"],
        ["headache", "두통", "1"],
        ["interest", "흥미, 관심사 / 관심을 끌다", "1"],
        ["match", "경기, 시합 / 성냥 / 어울리다", "1"],
        ["owner", "주인, 소유자", "1"],
        ["scary", "무서운, 두려운", "1"],
        ["aid", "도움 / 원조, 지원", "1"],
        ["tradition", "전통, 관습", "1"],
        ["per", "~당, ~마다", "1"],
        ["wax", "밀랍 / 밀랍을 발라 광을 내다", "1"],
        ["at that time", "그때, 그 당시", "1"],
        ["sooner or later", "조만간, 곧", "1"],
      ],
      [
        ["judge", "판사 / 심판 / 판단하다, 평가하다",],
        ["agree", "동의하다",],
        ["basic", "기본적인, 기초적인 / 기본, 기초",],
        ["drawer", "서랍",],
        ["greenhouse", "온실",],
        ["iron", "철, 쇠 / 다리미",],
        ["tower", "탑",],
        ["either", "어느 한 쪽 / ~도 또한",],
        ["mad", "화가 난 / 미친",],
        ["straight", "똑바로, 곧장 / 곧은, 일직선의",],
        ["record", "기록 / 기록하다",],
        ["solve", "풀다, 해결하다",],
        ["company", "회사 / 동료, 일행",],
        ["nation", "국가, 나라",],
        ["pleased", "기쁜, 만족스러운",],
        ["control", "통제(력), 지배(력) / 통제하다, 지배하다",],
        ["helpful", "도움이 되는, 유익한",],
        ["self", "자신, 자아",],
        ["run out", "(시간, 돈, 기름이) 다 되다, 다 떨어지다",],
        ["after all", "결국, 어쨌든",],
      ],
      [
        ["fry", "튀기다, 볶다",],
        ["habit", "버릇, 습관",],
        ["tax", "세금",],
        ["surprised", "놀란, 놀라는",],
        ["abroad", "해외에, 해외로",],
        ["slide", "미끄러지다 / 미끄럼틀",],
        ["disagree", "동의하지 않다",],
        ["while", "~하는 동안 / ~에 반하여 / 잠깐, 잠시",],
        ["row", "열, 줄",],
        ["festival", "축제",],
        ["aloud", "소리 내어 / 큰 소리로",],
        ["shape", "형태, 모양 / 상태, 몸매",],
        ["tough", "힘든, 어려운 / 강인한, 굳센",],
        ["cafeteria", "구내식당",],
        ["lock", "잠기다, 잠그다 / 자물쇠, 잠금장치",],
        ["bottom", "맨 아래, 바닥 / 맨 아래의",],
        ["product", "생산품, 제품",],
        ["medal", "훈장",],
        ["get to", "~에 도착하다, ~에 이르다",],
        ["come true", "이루어지다, 실현되다",],
      ],
      [
        ["sale", "판매 / 할인 판매"],
        ["metal", "금속"],
        ["complete", "완전한, 완벽한 / 완료하다, 완성하다"],
        ["general", "전반적인 / 일반적인, 일반의 / 장군"],
        ["parade", "행진"],
        ["royal", "왕실의, 왕족의"],
        ["ever", "언젠가, 지금까지 / 결코, 전혀 (부정문)"],
        ["though", "비록 ~이지만"],
        ["direct", "직접적인 / 지휘하다, 안내하다"],
        ["amazing", "놀라운, 굉장한"],
        ["clay", "점토, 찰흙"],
        ["bow", "인사하다, 절하다 / 인사, 절 / 활"],
        ["interview", "면접 / 회견"],
        ["outdoor", "야외의"],
        ["normal", "보통의, 평범한 / 정상적인"],
        ["factory", "공장"],
        ["peer", "또래, 동료 / 집단 "],
        ["sketch", "밑그림"],
        ["after a while", "잠시 후에"],
        ["slow down", "(속도를) 늦추다"],
      ],
      [
        ["base", "맨 아랫부붙, 밑바닥 / 기초, 기반"],
        ["grade", "등급 / 학년 / 성적"],
        ["signal", "신호"],
        ["meaning", "의미, 뜻"],
        ["cover", "덮다 / 다루다, 포함하다"],
        ["awake", "깨어 있는"],
        ["quickly", "빨리, 빠르게"],
        ["trash", "쓰레기"],
        ["protect", "보호하다, 지키다"],
        ["evil", "사악한, 악"],
        ["character", "성격, 성질 / 특징, 특색 / 등장인물"],
        ["friendly", "친절한, 다정한"],
        ["worried", "걱정스러운"],
        ["director", "이사, 임원 / 책임자, 관리자 / 감독"],
        ["sentence", "문장 / 선고, 판결"],
        ["loose", "헐거운, 느슨한 / 헐렁한"],
        ["indoor", "실내(용)의"],
        ["puzzle", "수수께기"],
        ["take away", "~을 치우다"],
        ["have ~ in common", "공통적으로 ~을 가지다"],
      ],
      [
        ["bill", "고지서, 청구서 / 지폐"],
        ["cough", "기침하다 / 기침"],
        ["image", "인상 / 모습"],
        ["national", "국가의, 국가적인 / 국립의, 국영의"],
        ["seed", "씨앗, 종자"],
        ["truth", "진실, 사실"],
        ["mixture", "혼합(물)"],
        ["reuse", "재사용하다"],
        ["discover", "발견하다 / 알게 되다, 깨닫다"],
        ["junk", "쓸모 없는 물건, 쓰레기"],
        ["courage", "용기"],
        ["shine", "빛나다, 반짝이다"],
        ["eastern", "동쪽의, 동쪽에 있는"],
        ["peace", "평화, 평온함"],
        ["fortune", "부, 재산 / 운"],
        ["accident", "사고 / 우연(한 사건)"],
        ["humor", "익살스러움"],
        ["wrap", "싸다, 포장하다 / 두르다"],
        ["show up", "나타나다, 모습을 드러내다"],
        ["be covered with", "~로 덮여 있다"],
      ],
      [
        ["breathe", "숨 쉬다, 호흡하다"],
        ["gain", "얻다 / 늘다, 쌓다"],
        ["fit", "꼭 맞다 / 적합하다, 어울리다"],
        ["cheif", "최고의, 수석의 / 주요한 / 우두머리"],
        ["humorous", "재미있는"],
        ["unique", "독특한, 특별한 / 유일한, 특유한"],
        ["completely", "완전히, 완벽하게"],
        ["pose", "자세 / 자세를 취하다"],
        ["adventure", "모험"],
        ["tight", "꽉 끼는 / 빡빡한 / 단단히"],
        ["stupid", "어리석은, 우둔한"],
        ["double", "이중의 / 2인용의 / 두 배로 되다"],
        ["race", "경주, 경기 / 인종"],
        ["express", "표현하다, 나타내다"],
        ["illegal", "불법의, 불법적인"],
        ["symbol", "상징(물) / 기호, 부호"],
        ["mention", "(간단히) 말하다, 언급하다"],
        ["sum", "금액 / 합계 / 요약하다"],
        ["look through", "~을 훑어보다"],
        ["throw away", "~을 버리다"],
      ],
      [
        ["bite", "물다 / 한 입, 물린 상처"],
        ["society", "사회 / 협회, 학회, 단체"],
        ["title", "제목, 표제"],
        ["anybody", "누구나, 누구든지 / 누군가 / 아무도"],
        ["fever", "열"],
        ["scenery", "풍경, 경치"],
        ["order", "순서 / 명령하다 / 주문하다"],
        ["neither", "어느 쪽도 ~ 아니다"],
        ["diamond", "마름모꼴"],
        ["source", "원천 / 근원, 원인 / 출처"],
        ["contact", "연락 / 접촉, 맞닿음 / 연락하다"],
        ["equal", "동일한, 같은 / 평등한 / 같다, ~이다"],
        ["none", "아무도 ~않다"],
        ["period", "기간 / 시대"],
        ["journey", "여행"],
        ["rough", "거친 / 대강의 / 힘든"],
        ["million", "100만 / 다수"],
        ["ceiling", "천장"],
        ["give up", "포기하다, 그만두다"],
        ["hang out with", "~와 어울리다, ~와 함께 다니다"],
      ],
      [
        ["hug", "껴안다, 포옹하다 / 껴안기, 포옹"],
        ["vision", "시력 / 전망"],
        ["century", "1세기, 100년"],
        ["anywhere", "어디든지 / 어딘가에 / 아무 데도"],
        ["nearly", "거의"],
        ["beard", "턱수염"],
        ["surround", "둘러싸다, 에워싸다"],
        ["upper", "더 위의, 위쪽의"],
        ["dynasty", "왕조, 시대"],
        ["whole", "전체의, 모든 / 전체, 전부"],
        ["follow", "따라가다 / 뒤를 잇다 / 따르다"],
        ["effort", "노력, 수고"],
        ["imagine", "상상하다"],
        ["shot", "발사 / 슛"],
        ["pimple", "여드름, 뾰루지"],
        ["raindrop", "빗방울"],
        ["ghost", "유령, 귀신"],
        ["sweat", "땀 / 땀을 흘리다"],
        ["care for", "~을 돌보다 / ~을 좋아하다"],
        ["make up", "이루다, 구성하다 / 지어내다"],
      ],
      [
        ["huge", "거대한 / 막대한"],
        ["tool", "연장, 도구"],
        ["attack", "공격, 공격하다"],
        ["battle", "전투, 교전 / 투쟁, 싸움"],
        ["universe", "우주"],
        ["global", "세계적인, 지구 전체의"],
        ["sudden", "갑작스러운"],
        ["rude", "무례한, 버릇없는"],
        ["challenge", "도전, 난제 / 도전하다 / 이의를 제기하다"],
        ["frankly", "솔직히 / 솔직히 말해서"],
        ["death", "죽음"],
        ["else", "그 밖의, 다른 / 달리"],
        ["fantasic", "환성적인, 멋진"],
        ["swing", "흔들리다, 흔들다 / 휘두르다"],
        ["master", "대가, 명수 / 주인 / 숙달하다"],
        ["social", "사회의, 사회적인 / 사교의"],
        ["code", "암호, 부호"],
        ["pedal", "발걸이, 발판"],
        ["watch out (for)", "주의하다, 조심하다"],
        ["not ~ at all", "전혀 ~ 아니다"],
      ],
      [
        ["action", "행동, 조치 / 행위, 동작"],
        ["backward", "뒤로, 뒤쪽으로 / 거꾸로, 반대로"],
        ["sore", "아픈, 따가운"],
        ["daytime", "낮, 주간"],
        ["chore", "(일상적으로 하는) 일"],
        ["impress", "감동을 주다, 인상을 주다"],
        ["fair", "타당한, 합당한 / 공정한, 공평한"],
        ["process", "과정, 절차 / 가공하다, 처리하다"],
        ["comfort", "안락, 편안함 / 위로, 위안"],
        ["suddenly", "갑자기, 별안간"],
        ["host", "주인 / 진행자 / 주최자"],
        ["graphic", "그래픽의, 도표의 / 도형, 그래픽"],
        ["merry", "명랑한, 즐거운"],
        ["silence", "고요, 정적 / 침묵"],
        ["trade", "무역(하다), 교역(하다) / 교환(하다)"],
        ["enemy", "적 / 적국, 적군"],
        ["volume", "음량 / 양, 용량"],
        ["journal", "잡지, 학술지 / 일기, 일지"],
        ["on time", "시간을 어기지 않고, 제 시간에"],
        ["make fun of", "~을 놀리다"],
      ],
      [
        ["pace", "속도 / 한 걸음, 보폭"],
        ["compare", "비교하다, 견주다 / 비유하다"],
        ["cloth", "옷감 / 천, 헝겊"],
        ["novel", "소설"],
        ["rate", "비율 / 속도 / 요금"],
        ["gorgeous", "멋진, 우아한"],
        ["relax", "쉬다 / 긴장을 풀다, 이완시키다"],
        ["against", "~에 반대하여 / ~에 맞서"],
        ["duty", "의무 / 직무, 임무"],
        ["unfair", "불공평한, 불공정한"],
        ["traditional", "전통의 / 전통적인"],
        ["prove", "증명하다 / 드러나다"],
        ["seem", "~처럼 보이다, ~인 것 같다"],
        ["equally", "똑같이, 동등하기 / 균등하게"],
        ["modern", "현대의, 근대의 / 최신의"],
        ["footprint", "발자국"],
        ["loudly", "큰 소리로, 시끄럽게"],
        ["seafood", "해산물"],
        ["stop by", "잠시 들르다"],
        ["be over", "끝나다"],
      ],
      [
        ["mild", "가벼운, 약한 / 따뜻한 / 온화한"],
        ["absent", "결석한 / 없는, 부재의"],
        ["connect", "연결하다, 접속하다 / 관련시키다"],
        ["fur", "털 / 모피"],
        ["interested", "흥미 있는, 관심 있는"],
        ["rival", "경쟁자, 경쟁 상대"],
        ["decide", "결정하다, 결심하다"],
        ["throat", "목구멍, 목"],
        ["examination", "시험 / 조사, 검토 / 검진, 검사"],
        ["bump", "부딪치다, 충돌하다"],
        ["golden", "금색의, 금빛의 / 금으로 된"],
        ["swimsuit", "수영복"],
        ["cancel", "취소하다"],
        ["passion", "열정, 열망"],
        ["stomach", "위, 배"],
        ["wheel", "바퀴 / 핸들"],
        ["sour", "(맛이) 신 / 상한"],
        ["pole", "막대기, 기둥 / 극"],
        ["hand out", "~을 나눠주다"],
        ["try one's best", "최선을 다하다"],
      ],
      [
        ["brick", "벽돌"],
        ["edge", "가장자리, 모서리 / 날"],
        ["chase", "뒤쫓다, 추적하다 / 추적, 추격"],
        ["fashionable", "유행의, 유행하는 / 고급의"],
        ["human", "인간, 사람 / 인간의"],
        ["mask", "가면"],
        ["single", "단 하나의, 단독의 / 미혼의, 독신의 / 1인용"],
        ["therefore", "그러므로, 그 결과"],
        ["closely", "면밀히, 자세히 / 밀접하게, 긴밀하게"],
        ["divide", "나뉘다, 나누다 / 분배하다"],
        ["impression", "인상, 감상"],
        ["animation", "만화 (영화)"],
        ["target", "목표 / 목표물, 표적 / 목표로 삼다"],
        ["repair", "고치다, 수리하다 / 수리, 보수"],
        ["skin", "피부"],
        ["western", "서쪽의, 서쪽에 있는"],
        ["speed", "속력, 속도 / 질주하다"],
        ["port", "항구"],
        ["ask ~ for", "~에게 ~를 요청하다"],
        ["for the first time", "처음으로"],
      ],
      [
        ["forward", "앞(쪽)으로"],
        ["track", "(밟아 생긴) 길 / 자취, 흔적 / 추적하다"],
        ["choice", "선택권 / 선택 (하는 행동)"],
        ["shoot", "쏘다"],
        ["peel", "껍질을 벗기다 / 벗겨지다"],
        ["decision", "결정, 결심"],
        ["quietly", "조용히, 살짝"],
        ["beside", "~ 옆에"],
        ["clearly", "명백하게, 분명히 / 또렷하게"],
        ["repeat", "다시 말하다 / 반복하다"],
        ["switch", "전환, 변경 / 전환하다, 바꾸다"],
        ["landmark", "주요 지형지물"],
        ["goods", "상품, 제품"],
        ["announce", "발표하다, 알리다"],
        ["poem", "시, 운문"],
        ["electric", "전기의, 전기로 움직이는"],
        ["storm", "폭풍, 폭풍우"],
        ["wire", "철사 / 선, 전선"],
        ["day by day", "나날이, 서서히"],
        ["turn ~ into", "~을 ~로 바꾸다"],
      ],
      [
        ["advise", "충고하다, 조언하다"],
        ["introduce", "소개하다"],
        ["opinion", "의견, 견해"],
        ["smooth", "매끈한, 부드러운 / 순조로운"],
        ["defend", "방어하다, 지키다"],
        ["possible", "가능한"],
        ["wave", "파도, 물결 / 흔들다, 흔들리다"],
        ["nor", "~도 또한 아니다"],
        ["chemical", "화학의, 화학적인 / 화학 물질"],
        ["fake", "가짜의, 위조의 / 가짜, 모조품"],
        ["rapidly", "빨리, 급속히"],
        ["trust", "신뢰 / 신뢰하다, 믿다"],
        ["garage", "차고"],
        ["plain", "분명한, 명백한 / 꾸미지 않은 / 평지, 평원"],
        ["bother", "괴롭히다, 귀찮게 하다"],
        ["favorite", "가장 좋아하는"],
        ["victory", "승리"],
        ["salty", "짠, 짭짤한"],
        ["check out", "~을 확인하다 / 나가다"],
        ["more and more", "점점 더 (많이)"],
      ],
      [
        ["birth", "탄생, 출생"],
        ["accent", "말투, 강조"],
        ["educate", "교육하다"],
        ["forever", "영원히"],
        ["handle", "처리하다 / 만지다 / 손잡이"],
        ["impossible", "불가능한"],
        ["lastly", "끝으로, 마지막으로"],
        ["site", "현장 / 부지"],
        ["condition", "상태 / 환경, 상황 / 조건"],
        ["doubt", "의심하다 / 의심, 의혹"],
        ["subject", "주제, 화제 / 과목"],
        ["youth", "젊은 시절 / 젊은이들, 청년층"],
        ["monster", "괴물"],
        ["stomachache", "위통, 복통"],
        ["public", "대중의 / 공공의 / 대중"],
        ["private", "사적인, 개인의 / 사립의, 사유의"],
        ["task", "일, 과업"],
        ["circus", "곡예"],
        ["run away", "달아나다, 도망치다"],
        ["at the same time", "동시에, 한번에"],
      ],
      [
        ["apart", "떨어져 / 따로, 헤어져"],
        ["poetry", "시, 시가"],
        ["balance", "균형 / 균형을 잡다"],
        ["chart", "도표"],
        ["damp", "축축한, 습기 찬"],
        ["publish", "발행하다, 출판하다"],
        ["weekday", "평일"],
        ["celebrate", "축하하다, 기념하다"],
        ["triangle", "삼각형"],
        ["electricity", "전기"],
        ["fear", "공포, 두려움 / 두려워하다, 무서워하다"],
        ["recent", "최근의"],
        ["injury", "부상"],
        ["select", "선택하다, 고르다"],
        ["haircut", "이발 / 머리 모양"],
        ["net", "그물, 망"],
        ["screen", "화면"],
        ["shore", "해안, 해변, 기슭"],
        ["fill out", "~을 작성하다, ~을 기입하다"],
        ["more than", "~보다 많이"],
      ],
      [
        ["offer", "제안하다 / 제공하다 / 제안, 제의"],
        ["address", "주소 / 연설"],
        ["bitter", "쓴 / 쓰라린, 비통한"],
        ["cancer", "암"],
        ["fold", "접다, 개다"],
        ["downtown", "시내에 / 도심지의"],
        ["crime", "범죄 / 범행"],
        ["surface", "표면, 겉"],
        ["entrance", "문, 출입구 / 입장 / 입학, 입사"],
        ["slice", "조각 / 얇게 썰다"],
        ["pattern", "양식 / 무늬"],
        ["respect", "존경(하다) / 존중(하다)"],
        ["soul", "영혼, 정신"],
        ["instead", "그 대신에"],
        ["muscle", "근육"],
        ["unit", "구성 단위 / 단위"],
        ["powder", "가루, 분말"],
        ["theme", "주제"],
        ["as well", "또한, 역시"],
        ["hand in", "~을 제출하다"],
      ],
      [
        ["cycle", "순환, 주기"],
        ["degree", "각도, 온도의 도 / 정도, 수준"],
        ["bend", "굽히다, 숙이다 / 구부리다"],
        ["reason", "이유, 원인 / 근거 / 이성, 제정신"],
        ["safety", "안전"],
        ["asleep", "잠든, 잠자고 있는"],
        ["confident", "자신감 있는 / 확신하는"],
        ["wavy", "물결 모양의"],
        ["tube", "(액체가 흐르는) 관 / 통"],
        ["attend", "출석(참석)하다 / 가다, 다니다"],
        ["destroy", "파괴하다 / 망가뜨리다, 파멸시키다"],
        ["visitor", "방문객, 손님"],
        ["emotion", "감정"],
        ["spin", "돌다, 회전하다, 돌리다, 회전시키다"],
        ["southern", "남쪽의, 남쪽에 있는"],
        ["fortunately", "운 좋게, 다행히"],
        ["guest", "손님, 하객 / 투숙객"],
        ["pump", "퍼 올리다, 퍼내다"],
        ["take place", "(사건이) 일어나다, (행사가) 열리다"],
        ["instead of", "~ 대신에"],
      ],
      [
        ["origin", "기원, 유래 / 태생, 출신"],
        ["major", "주요한, 중대한 / 전공 / 전공하다"],
        ["appear", "나타나다 / ~인 것 같다, ~처럼 보이다"],
        ["fabric", "천, 직물"],
        ["customer", "손님, 고객"],
        ["importance", "중요성"],
        ["candle", "양초"],
        ["although", "비록 ~일지라도"],
        ["expect", "기대하다, 예상하다 / 기다리다"],
        ["sink", "가라앉다 / 개수대"],
        ["trick", "속임수 / 장난 / 묘기, 마술"],
        ["detail", "세부 사항 / 자세한 내용"],
        ["remind", "상기시키다, 생각나게 하다"],
        ["happen", "일어나다, 발생하다 / 우연히 ~ 하다"],
        ["beg", "간청하다, 부탁하다 / 구걸하다"],
        ["plenty", "많음, 충분, 다량"],
        ["schoolwork", "학업, 학교 공부"],
        ["steal", "훔치다, 도둑질하다"],
        ["end up with", "결국 ~하게 되다"],
        ["would like to", "~하고 싶다"],
      ],
      [
        ["feed", "먹이를 주다"],
        ["pile", "쌓아 놓은 것, 더미 / 쌓다"],
        ["reply", "대답, 답장 / 대답하다, 답장하다"],
        ["similar", "비슷한, 유사한"],
        ["awful", "끔찍한, 불쾌한"],
        ["escape", "탈출하다 / 피하다, 모면하다 / 탈출, 도망"],
        ["overcome", "극복하다, 이겨내다"],
        ["anyway", "어쨌든 / 그건 그렇고, 그런데"],
        ["blend", "섞이다, 섞다, 혼합하다"],
        ["disappear", "사라지다 / 없어지다"],
        ["found", "설립하다"],
        ["international", "국제적인, 국제의"],
        ["curious", "궁금한, 호기심이 강한"],
        ["shock", "춤격, 충격적인 일 / 충격을 주다"],
        ["worth", "가치가 있는 / (얼마) 어치 / 가치, 유용성"],
        ["cell", "세포"],
        ["scream", "비명을 지르다, 소리치다 / 비명"],
        ["provide", "제공하다, 공급하다"],
        ["get together", "모이다, 만나다"],
        ["talk to oneself", "혼잣말하다"],
      ],
      [
        ["brain", "뇌 / 머리, 지능"],
        ["disease", "병, 질병"],
        ["gesture", "몸짓 / (감정) 표현, 표시"],
        ["locker", "사물함"],
        ["remember", "기억나다, 기억하다"],
        ["curiosity", "호기심"],
        ["athlete", "(운동) 선수"],
        ["such", "그러한, 그런 / 매우 ~한"],
        ["article", "글, 기사, 논문"],
        ["capital", "수도 / 자본금, 자금  / 대문자"],
        ["explain", "설명하다 / 해명하다, 변명하다"],
        ["forget", "잊다, 잊어버리다"],
        ["manner", "방식, 방법 / 태도 / 예의, 예절"],
        ["navy", "해군"],
        ["skillful", "숙련된, 능숙한"],
        ["tune", "곡, 선율 / 음을 맞추다, 조율하다"],
        ["sticky", "끈적끈적한"],
        ["perhaps", "아마, 어쩌면"],
        ["in need", "어려움에 처한"],
        ["come across", "우연히 마주치다 (발견하다)"],
      ],
      [
        ["sense", "감각 / 느낌, 감"],
        ["army", "군대, 육군"],
        ["booth", "작은 공간"],
        ["conduct", "수행하다 / 지휘하다 / 행위, 행동"],
        ["fault", "잘못, 과실 / 결점, 결함"],
        ["ladder", "사다리"],
        ["heal", "낫다, 치유하다"],
        ["difference", "차이(점)"],
        ["success", "성공, 성과"],
        ["violent", "폭력적인 / 난폭한"],
        ["guard", "경비원 / 경비, 보초 / 보호하다, 지키다"],
        ["manage", "경영하다, 관리하다 / 간신히 해내다"],
        ["remain", "여전히 ~이다 / 남다 / 남은 것, 유물"],
        ["exchange", "교환 / 교환하다, 주고받다"],
        ["castle", "성"],
        ["northern", "북쪽의, 북쪽에 있는"],
        ["pillow", "베개"],
        ["tomb", "무덤, 묘"],
        ["set up", "~을 세우다, 건립하다 / ~을 설치하다"],
        ["all the time", "항상, 늘"],
      ],
      [
        ["sight", "시력 / 보기, 봄 / 시야"],
        ["amount", "양 / 액수"],
        ["bold", "대담한, 용감한 / 굵은, 뚜렷한"],
        ["community", "지역사회 / 공동체, ~계"],
        ["diet", "식사 / 규정식, 식이요법, 다이어트"],
        ["explore", "탐험하다 / 조사하다"],
        ["grain", "곡물 / 낟알, 알갱이"],
        ["represent", "대표하다"],
        ["disappointed", "실망한"],
        ["wealth", "부, 재산, 재물"],
        ["solution", "해법, 해결책 / 해답, 정답"],
        ["loss", "분실, 상실 / 손해, 손실액 / 죽음, 사망"],
        ["notice", "알아차리다 / 주의, 주목 / 통지, 예고"],
        ["poison", "독약 / 독을 넣다"],
        ["series", "연속, 일련 / 연속물"],
        ["tribe", "종족, 부족"],
        ["failure", "실패  / 실패작"],
        ["cage", "우리, 새장"],
        ["ahead of", "~ 앞에 / ~보다 앞서는"],
        ["in short", "요약하면"],
      ],
      [
        ["familiar", "익숙한, 낯익은"],
        ["argue", "언쟁하다 / 주장하다"],
        ["honor", "명예, 명성 / 영광"],
        ["campaign", "(사회적, 정치적) 운동"],
        ["delight", "기쁨, 즐거움 / 기쁘게 하다"],
        ["cable", "전선"],
        ["zone", "구역, 지대"],
        ["memory", "기억력 / 추억, 기억"],
        ["expression", "표현 / 표정"],
        ["pipe", "관"],
        ["volunteer", "지원자 / 자원봉사자 / 자원하다, 자원봉사하다"],
        ["spill", "쏟아지다, 쏟다, 흘리다"],
        ["physical", "신체의, 육체의 / 물질의, 물질적인"],
        ["lean", "기울이다, 숙이다 / 기대다"],
        ["research", "연구, 조사 / 연구하다, 조사하다"],
        ["include", "포함하다"],
        ["successful", "성공적인"],
        ["silly", "어리석은, 바보 같은"],
        ["be filled with", "~로 가득 차다"],
        ["on one's way (to)", "(~로 가는) 길(도중)에"],
      ],
      [
        ["ease", "쉬움, 용이함 / 완화하다, 편해지다"],
        ["force", "힘 / 강요하다"],
        ["average", "평균, 평균의 / 보통 수준의"],
        ["relationship", "관계"],
        ["information", "정보, 자료"],
        ["pollute", "더럽히다, 오염시키다"],
        ["smoke", "연기 / 흡연하다"],
        ["document", "서류, 문서"],
        ["ancient", "고대의 / 아주 오래된"],
        ["succeed", "성공하다 / 뒤를 있다"],
        ["kindness", "친절, 상냥함"],
        ["growth", "성장, 발육 / 증대, 증가"],
        ["university", "대학교"],
        ["crazy", "정신 나간, 말도 안 되는 / 열광하는, 푹 빠진"],
        ["newborn", "갓 태어난"],
        ["virus", "바이러스"],
        ["chemistry", "화학"],
        ["steel", "강철"],
        ["cut down", "베어 쓰러뜨리다 / 줄이다"],
        ["be familiar with", "~에 익숙하다, ~을 잘 알다"],
      ],
      [
        ["value", "가치, 가격 / 유용성"],
        ["cast", "내던지다 / 보내다 / 캐스팅하다"],
        ["fame", "명성, 명예"],
        ["object", "물건, 물체 / 목표, 목적 / 반대하다"],
        ["recycle", "재활용하다, 재생하여 이용하다"],
        ["schedule", "일정, 예정 / 시간표"],
        ["stare", "응시하다, 빤히 쳐다보다"],
        ["probably", "아마도"],
        ["supply", "공급(량) / 공금품, 물자 / 공급하다"],
        ["debt", "빚, 부채 / 빚진 상태"],
        ["experience", "경험 / 경험하다, 겪다"],
        ["instant", "즉각적인, 당장의 / 즉석의, 인스턴트의 / 순간"],
        ["bacteria", "세균"],
        ["appropriate", "적절한, 적합한"],
        ["comment", "논평, 의견 / 논평하다"],
        ["apology", "사과, 사죄"],
        ["magnet", "자석"],
        ["tap", "수도꼭지 / 톡톡 치다"],
        ["hang on", "매달리다, 붙잡다 / 끊지 않고 기다리다"],
        ["get used to", "~에 익숙해지다"],
      ],
      [
        ["blame", "탓하다, 비난하다"],
        ["realize", "깨닫다, 인식하다 / 실현하다, 달성하다"],
        ["tend", "~하는 경향이 있다, ~하기 쉽다"],
        ["college", "(단과) 대학"],
        ["comfortable", "편안한, 안락한"],
        ["scold", "꾸짖다, 야단치다"],
        ["freedom", "자유"],
        ["hardly", "거의 ~않다, 도저히 ~할 수 없다"],
        ["lay", "놓다, 두다 / 낳다"],
        ["separate", "분리된 / 다른, 별개의 / 분리되다, 분리하다"],
        ["moonlight", "달빛"],
        ["pity", "동정, 연민 / 동정하다"],
        ["discuss", "토론하다, 논의하다"],
        ["education", "교육"],
        ["pardon", "용서(하다) / 사면(하다)"],
        ["wisdom", "현명함, 지혜"],
        ["afterward", "후에, 나중에"],
        ["slip", "미끄러지다"],
        ["one another", "(셋 이상) 서로"],
        ["take part in", "~에 참여하다, ~에 참가하다"],
      ],
    ],
  },
  {
    title: "Grammar Zone 동사 시제 변화 132제",
    template: "tense",
    timelimit: 20,
    test: {
      all: 24,
      step: 10,
    },
    steps: [
      [
        ["깨우다", "awake", "awoke", "awoken"],
        ["~이다, 있다", "be", "was, were", "been"],
        ["낳다, 견디다", "bear", "bore", "bore, borne"],
        ["치다", "beat", "beat", "beaten"],
        ["되다", "become", "became", "become"],
        ["시작하다", "begin", "began", "begun"],
        ["구부리다", "bend", "bent", "bent"],
        ["내기하다", "bet", "bet", "bet"],
        ["물다", "bite", "bit", "bitten"],
        ["피 흘리다", "bleed", "bled", "bled"],
        ["불다", "blow", "blew", "blown"],
      ],
      [
        ["깨다", "break", "broke", "broken"],
        ["가져오다", "bring", "brought", "brought"],
        ["세우다", "build", "built", "built"],
        ["타다", "burn", "burnt, burned", "burnt, burned"],
        ["터지다", "burst", "burst", "burst"],
        ["사다", "buy", "bought", "bought"],
        ["잡다", "catch", "caught", "caught"],
        ["선택하다", "choose", "chose", "chosen"],
        ["오다", "come", "came", "come"],
        ["비용이 들다", "cost", "cost", "cost"],
        ["자르다", "cut", "cut", "cut"],
      ],
      [
        ["다루다", "deal", "dealt", "dealt"],
        ["뛰어들다", "dive", "dived, dove", "dived"],
        ["하다", "do", "did", "done"],
        ["그리다, 끌다", "draw", "drew", "drawn"],
        ["꿈꾸다", "dream", "dreamt, dreamed", "dreamt, dreamed"],
        ["마시다", "drink", "drank", "drunk"],
        ["운전하다", "drive", "drove", "driven"],
        ["먹다", "eat", "ate", "eaten"],
        ["떨어지다", "fall", "fell", "fallen"],
        ["먹이다", "feed", "fed", "fed"],
        ["느끼다", "feel", "felt", "felt"],
      ],
      [
        ["싸우다", "fight", "fought", "fought"],
        ["발견하다", "find", "found", "found"],
        ["꼭 맞다", "fit", "fit", "fit"],
        ["날다", "fly", "flew", "flown"],
        ["금하다", "forbid", "forbade, forbad", "forbidden"],
        ["잊다", "forget", "fotgot", "forgotten"],
        ["용서하다", "forgive", "forgave", "forgiven"],
        ["얼다", "freeze", "froze", "frozen"],
        ["얻다", "get", "got", "got, gotten"],
        ["주다", "give", "gave", "given"],
        ["가다", "go", "went", "gone"],
      ],
      [
        ["자라다", "grow", "grew", "grown"],
        ["걸다", "hang", "hung", "hung"],
        ["가지다", "have", "had", "had"],
        ["듣다", "hear", "heard", "heard"],
        ["숨기다", "hide", "hid", "hidden"],
        ["치다", "hit", "hit", "hit"],
        ["잡다", "hold", "held", "held"],
        ["다치게 하다", "hurt", "hurt", "hurt"],
        ["유지하다", "keep", "kept", "kept"],
        ["무릎 꿇다", "kneel", "knelt, kneeled", "knelt, kneeled"],
        ["뜨개질하다", "knit", "knit, knitted", "knit, knitted"],
      ],
      [
        ["알다", "know", "knew", "known"],
        ["놓다", "lay", "laid", "laid"],
        ["이끌다", "lead", "led", "led"],
        ["뛰어오르다", "leap", "leapt, leaped", "leapt, leaped"],
        ["떠나다", "leave", "left", "left"],
        ["빌려주다", "lend", "lent", "lent"],
        ["시키다", "let", "let", "let"],
        ["눕다", "lie", "lay", "lain"],
        ["비추다", "light", "lit, lighted", "lit, lighted"],
        ["잃다", "lose", "lost", "lost"],
        ["만들다", "make", "made", "made"],
      ],
      [
        ["뜻하다", "mean", "meant", "meant"],
        ["만나다", "meet", "met", "met"],
        ["지불하다", "pay", "paid", "paid"],
        ["증명하다", "prove", "proved", "proven, proved"],
        ["놓다, 두다", "put", "put", "put"],
        ["그만두다", "quit", "quit, quitted", "quit, quitted"],
        ["읽다", "read", "read", "read"],
        ["올라타다", "ride", "rode", "ridden"],
        ["소리가 울리다", "ring", "rang", "rung"],
        ["일어나다", "rise", "rose", "risen"],
        ["달리다", "run", "ran", "run"],
      ],
      [
        ["말하다", "say", "said", "said"],
        ["보다", "see", "saw", "seen"],
        ["찾다", "seek", "sought", "sought"],
        ["팔다", "sell", "sold", "sold"],
        ["보내다", "send", "sent", "sent"],
        ["놓다", "set", "set", "set"],
        ["꿰매다", "sew", "sewed", "sewn, sewed"],
        ["흔들다", "shake", "shook", "shaken"],
        ["면도하다", "shave", "shaved", "shaved, shaven"],
        ["빛나다", "shine", "shone", "shone"],
        ["쏘다", "shoot", "shot", "shot"],
      ],
      [
        ["보여주다", "show", "showed", "shown"],
        ["움츠러들다", "shrink", "shrank, shrunk", "shrunk"],
        ["닫다", "shut", "shut", "shut"],
        ["노래하다", "sing", "sang", "sung"],
        ["가라앉다", "sink", "sank", "sunk"],
        ["앉다", "sit", "sat", "sat"],
        ["자다", "sleep", "slept", "slept"],
        ["미끄러지다", "slide", "slid", "slid"],
        ["냄새를 맡다", "smell", "smelt, smelled", "smelt, smelled"],
        ["씨 뿌리다", "sow", "sowed", "sown, sowed"],
        ["말하다", "speak", "spoke", "spoken"],
      ],
      [
        ["속력을 내다", "speed", "sped, speeded", "sped, speeded"],
        ["소비하다", "spend", "spent", "spent"],
        ["엎지르다", "spill", "spilt, spilled", "spilt"],
        ["돌다", "spin", "spun", "spun"],
        ["침을 뱉다", "spit", "spit, spat", "spit, spat"],
        ["쪼개다", "split", "split", "split"],
        ["펴다", "spread", "spread", "spread"],
        ["튀어 오르다", "spring", "sprang, sprung", "sprung"],
        ["서다", "stand", "stood", "stood"],
        ["훔치다", "steal", "stole", "stolen"],
        ["붙이다", "stick", "stuck", "stuck"],
      ],
      [
        ["찌르다", "sting", "stung", "stung"],
        ["치다", "strike", "struck", "struck"],
        ["맹세하다", "swear", "swore", "sworn"],
        ["쓸다", "sweep", "swept", "swept"],
        ["수영하다", "swim", "swam", "swum"],
        ["흔들다", "swing", "swung", "swung"],
        ["잡다", "take", "took", "taken"],
        ["가르치다", "teach", "taught", "taught"],
        ["찢다", "tear", "tore", "torn"],
        ["말하다", "tell", "told", "told"],
        ["생각하다", "think", "thought", "thought"],
      ],
      [
        ["던지다", "throw", "threw", "thrown"],
        ["이해하다", "understand", "understood", "understood"],
        ["뒤엎다", "upset", "upset", "upset"],
        ["잠에서 깨다", "wake", "woke, wake", "woken, waked"],
        ["입다, 닳다", "wear", "wore", "worn"],
        ["엮다", "weave", "wove", "woven"],
        ["울다", "weep", "wept", "wept"],
        ["이기다", "win", "won", "won"],
        ["감다", "wind", "wound", "wound"],
        ["물러나다", "withdraw", "withdrew", "withdrawn"],
        ["쓰다", "write", "wrote", "written"]
      ]
    ]
  }
];
