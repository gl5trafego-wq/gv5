import {
  Cat,
  Droplet,
  Eye,
  PawPrint,
  Apple,
  Atom,
  Bone,
  Soup,
  Wind,
  Brain,
  Microscope,
  Sparkles,
  Smile,
  Heart,
  Syringe,
  type LucideIcon,
} from "lucide-react";

export type Especialidade = {
  slug: string;
  nome: string;
  navLabel: string;
  icon: LucideIcon;
  descricaoCard: string;
  h1: string;
  subheadline: string;
  oQueE: string;
  sinais: string[];
  atendimento: string[];
  ctaFinal: string;
  whatsappMessage: string;
  metaTitle: string;
  metaDescription: string;
};

const msg = (text: string) => text;

export const especialidades: Especialidade[] = [
  {
    slug: "especialistas-em-felinos",
    nome: "Especialistas em Felinos",
    navLabel: "Especialistas em Felinos",
    icon: Cat,
    descricaoCard:
      "Atendimento cat friendly pensado para reduzir o estresse do seu gato. Diagnóstico e acompanhamento com protocolos específicos para a fisiologia felina.",
    h1: "Especialistas em Felinos na VivaZhen Vet",
    subheadline:
      "Atendimento cat friendly pensado para reduzir o estresse do seu gato e cuidar da saúde dele com a atenção que ele merece.",
    oQueE:
      'Gatos não são "cães pequenos": têm comportamento, fisiologia e doenças próprias, e muitas vezes escondem sinais de dor até estágios avançados. A medicina felina é dedicada exclusivamente a entender e cuidar dessas particularidades. Na VivaZhen Vet, o atendimento é pensado para o universo do gato — do ambiente da clínica à forma de manejo — para que a consulta seja o menos estressante possível.',
    sinais: [
      "Mudanças no apetite ou na ingestão de água",
      "Idas mais frequentes (ou ausência) à caixa de areia",
      "Perda de peso mesmo comendo normalmente",
      "Vômitos ou bolas de pelo recorrentes",
      "Menos disposição para brincar ou tendência a se esconder",
      "Gato acima de 7 anos sem check-up recente",
    ],
    atendimento: [
      "Acolhimento cat friendly, com manejo cuidadoso para reduzir o estresse.",
      "Avaliação clínica completa e conversa sobre rotina, alimentação e comportamento.",
      "Exames complementares quando necessário (sangue, urina, imagem) para um diagnóstico preciso.",
      "Plano de tratamento e acompanhamento contínuo, com orientações para o dia a dia em casa.",
    ],
    ctaFinal: "Agende a consulta do seu gato.",
    whatsappMessage: msg(
      "Olá! Vim pelo site e gostaria de agendar uma consulta de Medicina Felina para o meu gato.",
    ),
    metaTitle: "Especialistas em Felinos | VivaZhen Vet — Santo André",
    metaDescription:
      "Medicina felina cat friendly em Santo André. Atendimento especializado para gatos com protocolos que reduzem o estresse e cuidam da saúde do seu felino.",
  },
  {
    slug: "nefrologia",
    nome: "Nefrologia",
    navLabel: "Nefrologia",
    icon: Droplet,
    descricaoCard:
      "Diagnóstico e acompanhamento de doenças renais, comuns em gatos idosos, com protocolos atualizados para preservar a qualidade de vida.",
    h1: "Nefrologia Veterinária na VivaZhen Vet",
    subheadline:
      "Diagnóstico e acompanhamento de doenças renais para preservar a qualidade de vida do seu pet por mais tempo.",
    oQueE:
      "A nefrologia cuida da saúde dos rins, órgãos essenciais para filtrar o sangue e manter o equilíbrio do organismo. A doença renal crônica é uma das condições mais comuns, principalmente em gatos idosos, e costuma evoluir de forma silenciosa. Quanto mais cedo identificada, maiores as chances de controlar a progressão e manter o conforto do animal.",
    sinais: [
      "Aumento da sede e da quantidade de urina",
      "Perda de apetite e de peso",
      "Apatia ou cansaço fora do comum",
      "Vômitos ou náuseas frequentes",
      "Pelagem opaca e mau hálito",
      "Pet idoso sem exames renais recentes",
    ],
    atendimento: [
      "Avaliação clínica e histórico detalhado.",
      "Exames de sangue, urina e, quando indicado, de imagem para avaliar a função renal.",
      "Definição do estágio e de um plano de manejo individualizado.",
      "Acompanhamento contínuo, incluindo manejo nutricional e ajustes ao longo do tratamento.",
    ],
    ctaFinal: "Agende a avaliação do seu pet.",
    whatsappMessage: msg(
      "Olá! Vim pelo site e gostaria de agendar uma consulta de Nefrologia para o meu pet.",
    ),
    metaTitle: "Nefrologia Veterinária | VivaZhen Vet — Santo André",
    metaDescription:
      "Diagnóstico e acompanhamento de doenças renais em cães e gatos em Santo André. Protocolos atualizados para preservar a qualidade de vida do seu pet.",
  },
  {
    slug: "oftalmologia-veterinaria",
    nome: "Oftalmologia Veterinária",
    navLabel: "Oftalmologia",
    icon: Eye,
    descricaoCard:
      "Diagnóstico e tratamento de doenças oculares com equipamentos especializados, cuidando da visão e do conforto dos olhos do seu animal.",
    h1: "Oftalmologia Veterinária na VivaZhen Vet",
    subheadline:
      "Diagnóstico e tratamento de doenças oculares para cuidar da visão e do conforto dos olhos do seu pet.",
    oQueE:
      "A oftalmologia veterinária cuida da saúde dos olhos, desde problemas comuns como conjuntivite até condições mais sérias como úlceras de córnea, catarata e glaucoma. Os olhos são sensíveis e algumas doenças evoluem rápido, por isso o diagnóstico precoce faz toda a diferença para preservar a visão.",
    sinais: [
      "Olhos vermelhos, lacrimejantes ou com secreção",
      "O pet esfrega ou aperta os olhos com frequência",
      "Opacidade ou mudança na cor do olho",
      "Sensibilidade à luz",
      "Esbarrar em objetos ou insegurança para se locomover",
      "Inchaço ou feridas ao redor dos olhos",
    ],
    atendimento: [
      "Avaliação clínica e dos olhos do seu pet.",
      "Exames oftálmicos específicos para identificar a causa.",
      "Plano de tratamento adequado a cada condição.",
      "Acompanhamento da evolução e reavaliações quando necessário.",
    ],
    ctaFinal: "Agende a avaliação oftálmica do seu pet.",
    whatsappMessage: msg(
      "Olá! Vim pelo site e gostaria de agendar uma consulta de Oftalmologia Veterinária para o meu pet.",
    ),
    metaTitle: "Oftalmologia Veterinária | VivaZhen Vet — Santo André",
    metaDescription:
      "Diagnóstico e tratamento de doenças oculares em cães e gatos em Santo André. Cuide da visão e do conforto dos olhos do seu pet com especialistas.",
  },
  {
    slug: "dermatologia-veterinaria",
    nome: "Dermatologia Veterinária",
    navLabel: "Dermatologia",
    icon: PawPrint,
    descricaoCard:
      "Investigação e tratamento de alergias, coceiras, queda de pelo e infecções de pele, devolvendo o bem-estar do seu pet.",
    h1: "Dermatologia Veterinária na VivaZhen Vet",
    subheadline:
      "Investigação e tratamento de alergias, coceiras e problemas de pele para devolver o bem-estar do seu pet.",
    oQueE:
      "A dermatologia veterinária cuida da saúde da pele, dos pelos, das orelhas e das unhas. Coceira, queda de pelo, descamação e otites estão entre as queixas mais comuns e quase sempre têm uma causa por trás — alérgica, parasitária, infecciosa ou hormonal. O papel do especialista é investigar a origem para tratar o problema, e não apenas os sintomas.",
    sinais: [
      "Coceira excessiva, lambedura ou mordidas na pele",
      "Queda de pelo ou falhas na pelagem",
      "Vermelhidão, feridas, crostas ou descamação",
      "Otites de repetição ou mau cheiro nas orelhas",
      "Pele oleosa, ressecada ou com odor",
      "Mudança na cor ou textura da pele",
    ],
    atendimento: [
      "Avaliação da pele e histórico de rotina, alimentação e ambiente.",
      "Exames dermatológicos para investigar a causa.",
      "Plano de tratamento direcionado à origem do problema.",
      "Acompanhamento e orientações de manejo para evitar recidivas.",
    ],
    ctaFinal: "Agende a consulta dermatológica do seu pet.",
    whatsappMessage: msg(
      "Olá! Vim pelo site e gostaria de agendar uma consulta de Dermatologia Veterinária para o meu pet.",
    ),
    metaTitle: "Dermatologia Veterinária | VivaZhen Vet — Santo André",
    metaDescription:
      "Tratamento de alergias, coceiras, otites e doenças de pele em cães e gatos em Santo André. Investigação dermatológica para o bem-estar do seu pet.",
  },
  {
    slug: "nutrologia",
    nome: "Nutrologia",
    navLabel: "Nutrologia",
    icon: Apple,
    descricaoCard:
      "Orientação nutricional personalizada para cada fase da vida, com planos que apoiam tratamento, longevidade e qualidade de vida.",
    h1: "Nutrologia Veterinária na VivaZhen Vet",
    subheadline:
      "Orientação nutricional personalizada para cada fase da vida e condição de saúde do seu pet.",
    oQueE:
      "A nutrologia trata a alimentação como parte essencial da saúde. A dieta ideal muda conforme idade, porte, nível de atividade e eventuais doenças do animal. Uma alimentação bem orientada apoia o tratamento de diversas condições, ajuda no controle de peso e contribui para a longevidade e a qualidade de vida.",
    sinais: [
      "Excesso ou falta de peso",
      "Pet em fase especial (filhote, idoso, gestante)",
      "Doenças que exigem dieta específica (renal, diabetes, alergias)",
      "Falta de energia ou pelagem sem brilho",
      "Dúvidas sobre qual alimentação é a ideal",
      "Recusa alimentar ou seletividade",
    ],
    atendimento: [
      "Avaliação clínica e nutricional, com análise da rotina e da dieta atual.",
      "Definição de metas (peso, suporte a tratamento, fase de vida).",
      "Plano alimentar individualizado.",
      "Acompanhamento e ajustes ao longo do tempo.",
    ],
    ctaFinal: "Agende a avaliação nutricional do seu pet.",
    whatsappMessage: msg(
      "Olá! Vim pelo site e gostaria de agendar uma consulta de Nutrologia para o meu pet.",
    ),
    metaTitle: "Nutrologia Veterinária | VivaZhen Vet — Santo André",
    metaDescription:
      "Orientação nutricional personalizada para cães e gatos em Santo André. Planos alimentares que apoiam tratamento, longevidade e qualidade de vida.",
  },
  {
    slug: "endocrinologia",
    nome: "Endocrinologia",
    navLabel: "Endocrinologia",
    icon: Atom,
    descricaoCard:
      "Tratamento de distúrbios hormonais como diabetes e hipotireoidismo, com acompanhamento contínuo para manter o equilíbrio do organismo.",
    h1: "Endocrinologia Veterinária na VivaZhen Vet",
    subheadline:
      "Diagnóstico e controle de distúrbios hormonais para manter o equilíbrio e o bem-estar do seu pet.",
    oQueE:
      "A endocrinologia cuida das doenças relacionadas aos hormônios, que regulam funções importantes do organismo. Condições como diabetes, hipotireoidismo, hipertireoidismo (comum em gatos) e doença de Cushing exigem diagnóstico preciso e acompanhamento contínuo para manter o animal estável e com qualidade de vida.",
    sinais: [
      "Aumento da sede e da fome",
      "Ganho ou perda de peso sem explicação",
      "Apatia, fraqueza ou intolerância a exercícios",
      "Alterações na pele e na pelagem",
      "Aumento da frequência de urina",
      "Mudanças de comportamento",
    ],
    atendimento: [
      "Avaliação clínica e histórico detalhado.",
      "Exames laboratoriais específicos para identificar o distúrbio.",
      "Plano de tratamento e controle individualizado.",
      "Monitoramento contínuo com reavaliações periódicas.",
    ],
    ctaFinal: "Agende a avaliação do seu pet.",
    whatsappMessage: msg(
      "Olá! Vim pelo site e gostaria de agendar uma consulta de Endocrinologia para o meu pet.",
    ),
    metaTitle: "Endocrinologia Veterinária | VivaZhen Vet — Santo André",
    metaDescription:
      "Tratamento de diabetes, hipotireoidismo e outros distúrbios hormonais em cães e gatos em Santo André. Acompanhamento contínuo para o equilíbrio do seu pet.",
  },
  {
    slug: "ortopedia-e-neurologia",
    nome: "Ortopedia e Neurologia",
    navLabel: "Ortopedia e Neurologia",
    icon: Bone,
    descricaoCard:
      "Avaliação e tratamento de problemas locomotores e neurológicos, do diagnóstico à reabilitação.",
    h1: "Ortopedia e Neurologia Veterinária na VivaZhen Vet",
    subheadline:
      "Avaliação e tratamento de problemas locomotores e neurológicos, do diagnóstico à reabilitação.",
    oQueE:
      "A ortopedia cuida dos ossos, articulações e músculos; a neurologia cuida do cérebro, da medula e dos nervos. Juntas, avaliam e tratam desde claudicações (mancar) e fraturas até problemas de coluna e alterações neurológicas. O objetivo é devolver mobilidade, conforto e qualidade de vida ao seu pet.",
    sinais: [
      "Mancar, claudicar ou dificuldade para se levantar",
      "Dor ao toque ou ao se movimentar",
      "Fraqueza nas patas ou arrastar dos membros",
      "Convulsões ou episódios de desequilíbrio",
      "Mudança de postura ou relutância em pular/subir",
      "Alterações de comportamento associadas a dor",
    ],
    atendimento: [
      "Avaliação clínica, ortopédica e neurológica.",
      "Exames de imagem e complementares quando indicados.",
      "Plano de tratamento (clínico, cirúrgico ou de reabilitação).",
      "Acompanhamento e reavaliações ao longo da recuperação.",
    ],
    ctaFinal: "Agende a avaliação do seu pet.",
    whatsappMessage: msg(
      "Olá! Vim pelo site e gostaria de agendar uma consulta de Ortopedia e Neurologia para o meu pet.",
    ),
    metaTitle: "Ortopedia e Neurologia Veterinária | VivaZhen Vet — Santo André",
    metaDescription:
      "Avaliação e tratamento de problemas locomotores e neurológicos em cães e gatos em Santo André. Do diagnóstico à reabilitação com atendimento especializado.",
  },
  {
    slug: "gastroenterologia",
    nome: "Gastroenterologia",
    navLabel: "Gastroenterologia",
    icon: Soup,
    descricaoCard:
      "Cuidado especializado para distúrbios digestivos e gastrointestinais: vômitos, diarreias e problemas de absorção.",
    h1: "Gastroenterologia Veterinária na VivaZhen Vet",
    subheadline:
      "Cuidado especializado para distúrbios digestivos e gastrointestinais do seu pet.",
    oQueE:
      "A gastroenterologia cuida do sistema digestivo, do esôfago ao intestino, incluindo fígado e pâncreas. Vômitos e diarreias frequentes, perda de peso e dificuldades de digestão podem ter diversas causas, e a investigação correta é o que permite tratar o problema na raiz e devolver o conforto ao animal.",
    sinais: [
      "Vômitos ou diarreia frequentes ou persistentes",
      "Perda de apetite e de peso",
      "Mudança no aspecto das fezes",
      "Inchaço ou dor abdominal",
      "Gases e desconforto após a alimentação",
      "Engasgos ou regurgitação",
    ],
    atendimento: [
      "Avaliação clínica e histórico alimentar e digestivo.",
      "Exames complementares (laboratoriais e de imagem) para investigar a causa.",
      "Plano de tratamento individualizado, incluindo manejo nutricional.",
      "Acompanhamento da evolução.",
    ],
    ctaFinal: "Agende a avaliação do seu pet.",
    whatsappMessage: msg(
      "Olá! Vim pelo site e gostaria de agendar uma consulta de Gastroenterologia para o meu pet.",
    ),
    metaTitle: "Gastroenterologia Veterinária | VivaZhen Vet — Santo André",
    metaDescription:
      "Tratamento de vômitos, diarreias e distúrbios digestivos em cães e gatos em Santo André. Investigação gastroenterológica completa para o seu pet.",
  },
];

export const PORQUE_VIVAZHEN =
  "Na VivaZhen Vet, unimos cuidado especializado, ambiente acolhedor e atendimento humanizado. Somos referência em medicina felina em Santo André e tratamos cada pet com a atenção e o respeito que ele merece, do diagnóstico ao acompanhamento.";

export const WHATSAPP_BASE = "https://wa.me/5511972547757";
export const WHATSAPP_GENERICO =
  "Olá! Vim pelo site e gostaria de agendar uma consulta para o meu pet.";

export const buildWhatsappUrl = (message: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;

export const getEspecialidade = (slug?: string) =>
  especialidades.find((e) => e.slug === slug);

export type CtaExtra = { label: string; message: string };

export const CTA_POS_SINAIS: Record<string, CtaExtra> = {
  "especialistas-em-felinos": {
    label: "Cuide da saúde do seu gato agora",
    message:
      "Olá! Notei alguns sinais no meu gato e gostaria de agendar uma avaliação de Medicina Felina.",
  },
  nefrologia: {
    label: "Proteja os rins do seu pet",
    message:
      "Olá! Meu pet apresenta sinais de problema renal e gostaria de agendar uma consulta de Nefrologia.",
  },
  "oftalmologia-veterinaria": {
    label: "Cuide já dos olhos do seu pet",
    message:
      "Olá! Notei alterações nos olhos do meu pet e gostaria de agendar uma avaliação de Oftalmologia Veterinária.",
  },
  "dermatologia-veterinaria": {
    label: "Acabe com a coceira do seu pet",
    message:
      "Olá! Meu pet está com coceira/problema de pele e gostaria de agendar uma consulta de Dermatologia Veterinária.",
  },
  nutrologia: {
    label: "Monte a dieta ideal do seu pet",
    message:
      "Olá! Gostaria de agendar uma avaliação de Nutrologia para definir a alimentação ideal do meu pet.",
  },
  endocrinologia: {
    label: "Equilibre os hormônios do seu pet",
    message:
      "Olá! Meu pet apresenta sinais hormonais e gostaria de agendar uma consulta de Endocrinologia.",
  },
  "ortopedia-e-neurologia": {
    label: "Devolva o movimento ao seu pet",
    message:
      "Olá! Meu pet está com dificuldade de locomoção e gostaria de agendar uma avaliação de Ortopedia e Neurologia.",
  },
  gastroenterologia: {
    label: "Resolva o problema digestivo do seu pet",
    message:
      "Olá! Meu pet está com problemas digestivos e gostaria de agendar uma consulta de Gastroenterologia.",
  },
};

export const CTA_POS_ATENDIMENTO_LABEL: Record<string, string> = {
  "especialistas-em-felinos": "Agende a consulta do seu gato",
  nefrologia: "Marque a avaliação renal do seu pet",
  "oftalmologia-veterinaria": "Marque a avaliação oftálmica do seu pet",
  "dermatologia-veterinaria": "Marque a consulta dermatológica do seu pet",
  nutrologia: "Marque a avaliação nutricional do seu pet",
  endocrinologia: "Marque a avaliação endocrinológica do seu pet",
  "ortopedia-e-neurologia": "Marque a avaliação ortopédica do seu pet",
  gastroenterologia: "Marque a avaliação gastroenterológica do seu pet",
};
