import { Quiz } from "../interfaces/quiz_data";


export const quiz_questions: Quiz[] = [
    {
    id: '0',
    title: "Você se parece mais com Walter White ou Jessie Pinkman",
    image: "https://ogden_images.s3.amazonaws.com/www.lockhaven.com/images/2021/01/06173002/BreakingBad1.jpg",
    questions: [
      {
        id: 1,
        question: "Como você lida com desafios difíceis?",
        options: [
          { id: 1, name: "Prefiro evitar conflitos e buscar soluções mais pacíficas", alias: 0 },
          { id: 2, name: "Enfrento-os de frente e não desisto facilmente.", alias: 1 },
          { id: 3, name: "Uso minha inteligência para encontrar maneiras criativas de superá-los.", alias: 0 },
        ]
      },
      {
        id: 2,
        question: "Qual é a sua abordagem em relação ao dinheiro?",
        options: [
          { id: 1, name: "Dinheiro é necessário, mas não quero me envolver em atividades ilegais para obtê-lo.", alias: 0},
          { id: 2, name: "Dinheiro é importante para mim, e estou disposto a fazer o que for preciso para consegui-lo.", alias: 0 },
          { id: 3, name: "Prefiro me concentrar em outras áreas da vida além do dinheiro.", alias: 1 }
        ]
      },
      {
        id: 3,
        question: "Como você reage quando alguém te trai?",
        options: [
          { id: 1, name: "Fico magoado, mas tento resolver a situação de maneira civilizada.", alias: 1 },
          { id: 2, name: "Fico furioso e tomo medidas drásticas para me vingar.o", alias: 0 },
          { id: 3, name: "Planejo cuidadosamente minha resposta, garantindo que a traição não saia impune.", alias: 0 },
        ]
      },
      {
        id: 4,
        question: "Qual é a sua atitude em relação à família e amigos?",
        options: [
          { id: 1, name: "Prefiro manter certa distância emocional para proteger a mim mesmo e aos outros.", alias: 0 },
          { id: 2, name: "Valorizo minha família e amigos, mas também valorizo minha independência.", alias: 1 },
          { id: 3, name: "Minha família e amigos são tudo para mim, e eu faria qualquer coisa para protegê-los.", alias: 0 },
        ]
      },
      {
        id: 5,
        question: "Como você lida com a pressão e o estresse?",
        options: [
          { id: 1, name: "Procuro maneiras de aliviar o estresse, como hobbies e atividades relaxantes.", alias: 1 },
          { id: 2, name: "Às vezes, a pressão me leva a tomar decisões impulsivas e arriscadas.", alias: 0 },
          { id: 3, name: "Fico determinado e focado, usando a pressão como motivação.", alias: 0 },
        ]
      },
    ],
    results: [
      {
        0: null,
        text: 'Você seria o walter White',
        image: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2018/01/bryan-cranston-breaking-bad.jpg'
      },
      {
        1: null,
        text: 'Você seria o jessie pinkman',
        image: 'https://tm.ibxk.com.br/2023/01/20/20094833328028.jpg?ims=352x208'
      }
    ],
  },
  {
    id: '1',
    title: "Você seria um heroi ou vilão?",
    image: "https://img.quizur.com/f/img6400adc4979385.10556755.jpg?lastEdited=1677766089",
    questions: [
      {
        id: 1,
        question: "Qual é a sua motivação principal na vida?",
        options: [
          { id: 1, name: "Obter o que deseja, custe o que custar", alias: 1},
          { id: 2, name: "Alcançar poder e prestígio", alias: 1 },
          { id: 3, name: "Fazer o bem e ajudar as pessoas", alias: 0},
        ]
      },
      {
        id: 2,
        question: "Como você lida com pessoas que têm opiniões diferentes das suas?",
        options: [
          { id: 1, name: "Respeito suas opiniões e tento encontrar um consenso", alias: 0},
          { id: 2, name: "Tento convencê-las a mudar de ideia ou ignoro-as", alias: 1},
          { id: 3, name: "Desprezo suas opiniões e as faço pagar por isso", alias: 1 }
        ]
      },
      {
        id: 3,
        question: "Como você age quando alguém precisa de ajuda?",
        options: [
          { id: 1, name: "Ajudo se houver algo a ganhar com isso", alias: 1 },
          { id: 2, name: "Ignoro, a menos que isso me beneficie de alguma forma", alias: 1 },
          { id: 3, name: "Sempre tento ajudar, mesmo que seja difícil ou perigoso", alias: 0 },
        ]
      },
      {
        id: 4,
        question: "Qual é a sua opinião sobre justiça?",
        options: [
          { id: 1, name: "Acredito que a justiça é relativa e que tudo depende do ponto de vista", alias: 1 },
          { id: 2, name: "Acredito na justiça e na igualdade para todos", alias: 0 },
          { id: 3, name: "Acredito que a justiça é o que eu decidir que é certo", alias: 1 },
        ]
      },
      {
        id: 5,
        question: "Como você lida com o fracasso?",
        options: [
          { id: 1, name: "Fico com raiva e busco vingança", alias: 1 },
          { id: 2, name: "Aprendo com meus erros e tento novamente", alias: 0 },
          { id: 3, name: "Culpo outras pessoas ou circunstâncias externas", alias: 1 },
        ]
      },
    ],
    results: [
      {
        0: null,
        text: 'Você seria Heroi',
        image: 'https://recreio.uol.com.br/media/uploads/dc_comics/batman_quadrinhos_capa.jpg'
      },
      {
        1: null,
        text: 'Você seria Vilão',
        image: 'https://img.quizur.com/f/img6400af7a241881.56455230.jpg?'
      }
    ],
  },
  {
    id: '2',
    title: "Você tem a personalidade mais parecida com o Sasuke ou Naruto?",
    image: "https://img.quizur.com/f/img5ef6a179491f13.35408719.jpg?lastEdited=1593221518?o=capa",
    questions: [
      {
        id: 1,
        question: "Você se considera uma pessoa ...?",
        options: [
          { id: 1, name: "Autoconfiante", alias: 1},
          { id: 2, name: "Companheira", alias: 0 },
          { id: 3, name: "Carismática", alias: 0},
          { id: 4, name: "Amigável", alias: 0},
          { id: 5, name: "Inteligente", alias: 1},
        ]
      },
      {
        id: 2,
        question: "Você age de forma ...?",
        options: [
          { id: 1, name: "Prudente", alias: 1},
          { id: 2, name: "Impulsiva", alias: 0},
        ]
      },
      {
        id: 3,
        question: "Qual desses mais chega perto do seu sonho?",
        options: [
          { id: 1, name: "Proteger todos aqueles que amo", alias: 0 },
          { id: 2, name: "Viajar o mundo", alias: 1 },
          { id: 3, name: "Ter mais poder", alias: 1 },
          { id: 4, name: "Fazer algo importante para ser lembrado", alias: 0 },
        ]
      },
      {
        id: 4,
        question: "Você costuma pensar de forma ...?",
        options: [
          { id: 1, name: "Otimista", alias: 0 },
          { id: 2, name: "Realista", alias: 1 },
          { id: 3, name: "Pessimista", alias: 1 },
        ]
      },
      {
        id: 5,
        question: "Você prefere trabalhar ..?",
        options: [
          { id: 1, name: "Sozinho", alias: 1 },
          { id: 2, name: "Em Grupo", alias: 0 },
          { id: 3, name: "Depende de quem faria parte do meu grupo", alias: 0 },
        ]
      },
      {
        id: 6,
        question: "Você tem facilidade em se expressar?",
        options: [
          { id: 1, name: "Sim", alias: 0 },
          { id: 2, name: "Mais ou Menos", alias: 0 },
          { id: 3, name: "Não", alias: 1 },
        ]
      },
      {
        id: 7,
        question: "Escolha uma frase:",
        options: [
          { id: 1, name: '"Aquele que trabalha duro pode superar um gênio, mas de nada adianta trabalhar duro se você não confia em você mesmo"', alias: 0 },
          { id: 2, name: '"Lágrimas e chuva, caem no meu rosto, meu corpo é incapaz de ficar, mas meu coração ainda não está disposto a sair”.', alias: 1},
          { id: 3, name: '"É por termos laços, que sofremos…"', alias: 1 },
          { id: 4, name: '"Mesmo que não seja agora, não se apresse, não se confunda. Você é minha paz, acredite em si mesma e continue devagar, vou te esperar".', alias: 0 },
        ]
      },
    ],
    results: [
      {
        0: null,
        text: 'Você tem a personalidade parecida com a do Naruto',
        image: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/Naruto-e1708720675210.jpg'
      },
      {
        1: null,
        text: 'Você tem a personalidade parecida com a do Sasuke',
        image: 'https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc-f:fbcover/wp-content/uploads/2022/01/legiao_cTRroZNw1mjL.jpg.webp'
      }
    ],
  },
  {
    id: '3',
    title: "Você se parece mais com Walter White ou Jessie Pinkman",
    image: "https://ogden_images.s3.amazonaws.com/www.lockhaven.com/images/2021/01/06173002/BreakingBad1.jpg",
    questions: [
      {
        id: 1,
        question: "Como você lida com desafios difíceis?",
        options: [
          { id: 1, name: "Prefiro evitar conflitos e buscar soluções mais pacíficas", alias: 0 },
          { id: 2, name: "Enfrento-os de frente e não desisto facilmente.", alias: 1 },
          { id: 3, name: "Uso minha inteligência para encontrar maneiras criativas de superá-los.", alias: 0 },
        ]
      },
      {
        id: 2,
        question: "Qual é a sua abordagem em relação ao dinheiro?",
        options: [
          { id: 1, name: "Dinheiro é necessário, mas não quero me envolver em atividades ilegais para obtê-lo.", alias: 0},
          { id: 2, name: "Dinheiro é importante para mim, e estou disposto a fazer o que for preciso para consegui-lo.", alias: 0 },
          { id: 3, name: "Prefiro me concentrar em outras áreas da vida além do dinheiro.", alias: 1 }
        ]
      },
      {
        id: 3,
        question: "Como você reage quando alguém te trai?",
        options: [
          { id: 1, name: "Fico magoado, mas tento resolver a situação de maneira civilizada.", alias: 1 },
          { id: 2, name: "Fico furioso e tomo medidas drásticas para me vingar.o", alias: 0 },
          { id: 3, name: "Planejo cuidadosamente minha resposta, garantindo que a traição não saia impune.", alias: 0 },
        ]
      },
      {
        id: 4,
        question: "Qual é a sua atitude em relação à família e amigos?",
        options: [
          { id: 1, name: "Prefiro manter certa distância emocional para proteger a mim mesmo e aos outros.", alias: 0 },
          { id: 2, name: "Valorizo minha família e amigos, mas também valorizo minha independência.", alias: 1 },
          { id: 3, name: "Minha família e amigos são tudo para mim, e eu faria qualquer coisa para protegê-los.", alias: 0 },
        ]
      },
      {
        id: 5,
        question: "Como você lida com a pressão e o estresse?",
        options: [
          { id: 1, name: "Procuro maneiras de aliviar o estresse, como hobbies e atividades relaxantes.", alias: 1 },
          { id: 2, name: "Às vezes, a pressão me leva a tomar decisões impulsivas e arriscadas.", alias: 0 },
          { id: 3, name: "Fico determinado e focado, usando a pressão como motivação.", alias: 0 },
        ]
      },
    ],
    results: [
      {
        0: null,
        text: 'Você seria o walter White',
        image: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2018/01/bryan-cranston-breaking-bad.jpg'
      },
      {
        1: null,
        text: 'Você seria o jessie pinkman',
        image: 'https://tm.ibxk.com.br/2023/01/20/20094833328028.jpg?ims=352x208'
      }
    ],
  },
  {
    id: '4',
    title: "Você seria um heroi ou vilão?",
    image: "https://img.quizur.com/f/img6400adc4979385.10556755.jpg?lastEdited=1677766089",
    questions: [
      {
        id: 1,
        question: "Qual é a sua motivação principal na vida?",
        options: [
          { id: 1, name: "Obter o que deseja, custe o que custar", alias: 1},
          { id: 2, name: "Alcançar poder e prestígio", alias: 1 },
          { id: 3, name: "Fazer o bem e ajudar as pessoas", alias: 0},
        ]
      },
      {
        id: 2,
        question: "Como você lida com pessoas que têm opiniões diferentes das suas?",
        options: [
          { id: 1, name: "Respeito suas opiniões e tento encontrar um consenso", alias: 0},
          { id: 2, name: "Tento convencê-las a mudar de ideia ou ignoro-as", alias: 1},
          { id: 3, name: "Desprezo suas opiniões e as faço pagar por isso", alias: 1 }
        ]
      },
      {
        id: 3,
        question: "Como você age quando alguém precisa de ajuda?",
        options: [
          { id: 1, name: "Ajudo se houver algo a ganhar com isso", alias: 1 },
          { id: 2, name: "Ignoro, a menos que isso me beneficie de alguma forma", alias: 1 },
          { id: 3, name: "Sempre tento ajudar, mesmo que seja difícil ou perigoso", alias: 0 },
        ]
      },
      {
        id: 4,
        question: "Qual é a sua opinião sobre justiça?",
        options: [
          { id: 1, name: "Acredito que a justiça é relativa e que tudo depende do ponto de vista", alias: 1 },
          { id: 2, name: "Acredito na justiça e na igualdade para todos", alias: 0 },
          { id: 3, name: "Acredito que a justiça é o que eu decidir que é certo", alias: 1 },
        ]
      },
      {
        id: 5,
        question: "Como você lida com o fracasso?",
        options: [
          { id: 1, name: "Fico com raiva e busco vingança", alias: 1 },
          { id: 2, name: "Aprendo com meus erros e tento novamente", alias: 0 },
          { id: 3, name: "Culpo outras pessoas ou circunstâncias externas", alias: 1 },
        ]
      },
    ],
    results: [
      {
        0: null,
        text: 'Você seria Heroi',
        image: 'https://recreio.uol.com.br/media/uploads/dc_comics/batman_quadrinhos_capa.jpg'
      },
      {
        1: null,
        text: 'Você seria Vilão',
        image: 'https://img.quizur.com/f/img6400af7a241881.56455230.jpg?'
      }
    ],
  },
  {
    id: '5',
    title: "Você tem a personalidade mais parecida com o Sasuke ou Naruto?",
    image: "https://img.quizur.com/f/img5ef6a179491f13.35408719.jpg?lastEdited=1593221518?o=capa",
    questions: [
      {
        id: 1,
        question: "Você se considera uma pessoa ...?",
        options: [
          { id: 1, name: "Autoconfiante", alias: 1},
          { id: 2, name: "Companheira", alias: 0 },
          { id: 3, name: "Carismática", alias: 0},
          { id: 4, name: "Amigável", alias: 0},
          { id: 5, name: "Inteligente", alias: 1},
        ]
      },
      {
        id: 2,
        question: "Você age de forma ...?",
        options: [
          { id: 1, name: "Prudente", alias: 1},
          { id: 2, name: "Impulsiva", alias: 0},
        ]
      },
      {
        id: 3,
        question: "Qual desses mais chega perto do seu sonho?",
        options: [
          { id: 1, name: "Proteger todos aqueles que amo", alias: 0 },
          { id: 2, name: "Viajar o mundo", alias: 1 },
          { id: 3, name: "Ter mais poder", alias: 1 },
          { id: 4, name: "Fazer algo importante para ser lembrado", alias: 0 },
        ]
      },
      {
        id: 4,
        question: "Você costuma pensar de forma ...?",
        options: [
          { id: 1, name: "Otimista", alias: 0 },
          { id: 2, name: "Realista", alias: 1 },
          { id: 3, name: "Pessimista", alias: 1 },
        ]
      },
      {
        id: 5,
        question: "Você prefere trabalhar ..?",
        options: [
          { id: 1, name: "Sozinho", alias: 1 },
          { id: 2, name: "Em Grupo", alias: 0 },
          { id: 3, name: "Depende de quem faria parte do meu grupo", alias: 0 },
        ]
      },
      {
        id: 6,
        question: "Você tem facilidade em se expressar?",
        options: [
          { id: 1, name: "Sim", alias: 0 },
          { id: 2, name: "Mais ou Menos", alias: 0 },
          { id: 3, name: "Não", alias: 1 },
        ]
      },
      {
        id: 7,
        question: "Escolha uma frase:",
        options: [
          { id: 1, name: '"Aquele que trabalha duro pode superar um gênio, mas de nada adianta trabalhar duro se você não confia em você mesmo"', alias: 0 },
          { id: 2, name: '"Lágrimas e chuva, caem no meu rosto, meu corpo é incapaz de ficar, mas meu coração ainda não está disposto a sair”.', alias: 1},
          { id: 3, name: '"É por termos laços, que sofremos…"', alias: 1 },
          { id: 4, name: '"Mesmo que não seja agora, não se apresse, não se confunda. Você é minha paz, acredite em si mesma e continue devagar, vou te esperar".', alias: 0 },
        ]
      },
    ],
    results: [
      {
        0: null,
        text: 'Você tem a personalidade parecida com a do Naruto',
        image: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/Naruto-e1708720675210.jpg'
      },
      {
        1: null,
        text: 'Você tem a personalidade parecida com a do Sasuke',
        image: 'https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc-f:fbcover/wp-content/uploads/2022/01/legiao_cTRroZNw1mjL.jpg.webp'
      }
    ],
  }
];

