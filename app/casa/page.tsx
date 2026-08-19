"use client";

import LandingDiagnostico, {
  type ResultadoLanding,
} from "../components/LandingDiagnostico";

import { landingPagesConfig } from "../data/landingPages";

const telefoneOscar = "555180339532";

function criarLinkWhatsApp(
  valores: Record<string, string>,
  resultado: ResultadoLanding
) {
  const nome = valores.nome || "";
  const whatsapp = valores.whatsapp || "";
  const numeroCasa = valores.numeroCasa || "";

  const mensagem = [
    "Olá, Oscar Ahumada.",
    "",
    "Acabei de fazer o diagnóstico da Numerologia da Casa no seu site.",
    "",
    `Nome: ${nome}`,
    `WhatsApp: ${whatsapp}`,
    `Número da residência: ${numeroCasa}`,
    "",
    `Resultado: Casa ${resultado.numero}`,
    resultado.titulo,
    "",
    resultado.diagnostico,
    "",
    "Gostaria de conversar com você para entender melhor essa energia e saber se é necessário harmonizar minha residência.",
  ].join("\n");

  return `https://wa.me/${telefoneOscar}?text=${encodeURIComponent(
    mensagem
  )}`;
}

function reduzirNumero(numero: number): number {
  let atual = Math.abs(numero);

  while (atual > 9) {
    atual = atual
      .toString()
      .split("")
      .reduce(
        (total, digito) => total + Number(digito),
        0
      );
  }

  return atual;
}

const diagnosticosCasa: Record<
  number,
  ResultadoLanding
> = {
  1: {
    numero: 1,

    titulo:
      "Uma casa de iniciativa, independência e novos começos",

    diagnostico:
      "Sua residência vibra na energia do número 1. Essa é uma casa que estimula movimento, iniciativa e independência. Quem vive nesse ambiente pode sentir uma necessidade maior de tomar decisões, começar projetos, buscar autonomia e abrir novos caminhos. É uma energia muito interessante para pessoas que desejam reagir, empreender ou iniciar uma nova etapa da vida.",

    positivo:
      "Favorece liderança, coragem, criatividade, autonomia, iniciativa e capacidade de começar novamente.",

    atencao:
      "Quando essa energia fica muito intensa, podem surgir impaciência, individualismo, dificuldade de dividir decisões e disputas por comando dentro da casa.",

    orientacao:
      "Use essa energia para criar movimento e realização, mas lembre-se de que uma casa precisa acolher todas as pessoas que vivem nela. Liderança é positiva; controle excessivo pode gerar desgaste.",
  },

  2: {
    numero: 2,

    titulo:
      "Uma casa de união, sensibilidade e relacionamentos",

    diagnostico:
      "Sua residência vibra na energia do número 2. Essa casa tende a valorizar vínculos, convivência, parceria e sensibilidade. É um ambiente que pode estimular maior aproximação entre as pessoas e favorecer diálogo, acolhimento e cooperação.",

    positivo:
      "Favorece união, diplomacia, parceria, romantismo, sensibilidade, convivência familiar e capacidade de chegar a acordos.",

    atencao:
      "Em desequilíbrio, pode aumentar dependência emocional, insegurança, excesso de sensibilidade e dificuldade para tomar decisões mais firmes.",

    orientacao:
      "A energia 2 funciona melhor quando existe troca. A casa deve unir as pessoas, mas sem fazer com que alguém perca sua própria identidade para manter a paz.",
  },

  3: {
    numero: 3,

    titulo:
      "Uma casa de comunicação, alegria e criatividade",

    diagnostico:
      "Sua residência vibra na energia do número 3. É uma casa que tende a estimular comunicação, criatividade, encontros e movimento social. Pode ser um ambiente naturalmente mais alegre, expansivo e aberto à presença de outras pessoas.",

    positivo:
      "Favorece comunicação, criatividade, amizades, sociabilidade, alegria, divulgação, expressão e expansão.",

    atencao:
      "O excesso de movimento pode trazer dispersão, desorganização, dificuldade de concentração ou muitas coisas acontecendo ao mesmo tempo.",

    orientacao:
      "Aproveite a leveza e a criatividade dessa vibração, mas cuide da organização. Uma casa alegre fica ainda melhor quando também existe direção.",
  },

  4: {
    numero: 4,

    titulo:
      "Uma casa de estabilidade, estrutura e segurança",

    diagnostico:
      "Sua residência vibra na energia do número 4. Essa é uma casa que busca estrutura, segurança e estabilidade. Pode favorecer construção de patrimônio, organização familiar, disciplina e sensação de que existe uma base sólida para a vida.",

    positivo:
      "Favorece estabilidade, organização, responsabilidade, disciplina, segurança, trabalho e construção de patrimônio.",

    atencao:
      "Quando a vibração fica rígida demais, o ambiente pode parecer pesado, excessivamente rotineiro ou resistente às mudanças.",

    orientacao:
      "A estrutura é uma grande qualidade dessa casa. Apenas cuide para que segurança não se transforme em imobilidade. Renovar também faz parte da vida.",
  },

  5: {
    numero: 5,

    titulo:
      "Uma casa de liberdade, movimento e mudanças",

    diagnostico:
      "Sua residência vibra na energia do número 5. Essa casa costuma trazer movimento, novidades e uma necessidade maior de liberdade. Pode favorecer viagens, mudanças, novos contatos, experiências e uma vida menos previsível.",

    positivo:
      "Favorece liberdade, versatilidade, comunicação, mudanças, oportunidades, movimento, novos contatos e experiências.",

    atencao:
      "Pode gerar inquietação, instabilidade, dificuldade de criar rotina ou uma necessidade constante de mudar aquilo que ainda poderia ser desenvolvido.",

    orientacao:
      "Movimento é uma das grandes forças dessa casa. Use-o para crescer, mas não permita que a busca pelo novo impeça você de valorizar o que já foi conquistado.",
  },

  6: {
    numero: 6,

    titulo:
      "Uma casa de amor, família e acolhimento",

    diagnostico:
      "Sua residência vibra na energia do número 6. Essa é uma vibração profundamente relacionada ao lar, à família, ao cuidado e à busca de harmonia. É uma casa que pode fortalecer vínculos afetivos e aumentar o desejo de proteger e cuidar das pessoas.",

    positivo:
      "Favorece família, amor, união, acolhimento, beleza, responsabilidade, cuidado e compromisso.",

    atencao:
      "Pode aumentar cobranças, perfeccionismo, excesso de responsabilidade e a tendência de algumas pessoas assumirem os problemas de todos.",

    orientacao:
      "Cuide dessa casa e das pessoas que vivem nela, mas lembre-se: harmonia verdadeira também precisa de limites e espaço individual.",
  },

  7: {
    numero: 7,

    titulo:
      "Uma casa de introspecção, estudo e profundidade",

    diagnostico:
      "Sua residência vibra na energia do número 7. Essa casa pode estimular silêncio, reflexão, estudo, espiritualidade e busca por conhecimento. É uma energia interessante para quem precisa de concentração ou de um espaço mais reservado.",

    positivo:
      "Favorece estudo, pesquisa, reflexão, concentração, autoconhecimento, espiritualidade e tranquilidade.",

    atencao:
      "Em excesso, pode gerar isolamento, distanciamento, pouca convivência ou sensação de solidão dentro do ambiente.",

    orientacao:
      "Valorize os momentos de silêncio dessa casa, mas não feche as portas para a troca. Conhecimento e convivência podem caminhar juntos.",
  },

  8: {
    numero: 8,

    titulo:
      "Uma casa de prosperidade, poder e realização",

    diagnostico:
      "Sua residência vibra na energia do número 8. É uma casa ligada à realização material, administração, patrimônio, trabalho e prosperidade. Pode estimular ambição, responsabilidade financeira e desejo de crescimento.",

    positivo:
      "Favorece negócios, finanças, patrimônio, organização material, liderança, realização e prosperidade.",

    atencao:
      "Pode aumentar conflitos envolvendo poder, dinheiro, controle, ciúme ou excesso de preocupação com resultados materiais.",

    orientacao:
      "A energia 8 pode ser excelente para construir prosperidade. Apenas não permita que dinheiro, trabalho ou controle ocupem o espaço que deveria pertencer também ao afeto.",
  },

  9: {
    numero: 9,

    titulo:
      "Uma casa de sensibilidade, generosidade e renovação",

    diagnostico:
      "Sua residência vibra na energia do número 9. Essa casa tende a estimular sensibilidade, generosidade, espiritualidade, criatividade e uma visão mais ampla da vida. Também pode trazer períodos importantes de encerramento e renovação.",

    positivo:
      "Favorece generosidade, criatividade, espiritualidade, acolhimento, compaixão, inspiração e visão coletiva.",

    atencao:
      "Pode trazer altos e baixos emocionais, idealização, excesso de doação ou dificuldade de encerrar situações que já cumpriram sua função.",

    orientacao:
      "Essa casa pode ensinar muito sobre desapego. Ajude, acolha e compartilhe, mas não transforme sua residência em um lugar onde todos deixam seus problemas e você fica responsável por carregá-los.",
  },
};

function calcularCasa(
  valores: Record<string, string>
): ResultadoLanding | null {
  const numeroDigitado =
    valores.numeroCasa?.trim();

  if (!numeroDigitado) {
    return null;
  }

  const somenteNumeros =
    numeroDigitado.replace(/\D/g, "");

  if (!somenteNumeros) {
    return null;
  }

  const soma = somenteNumeros
    .split("")
    .reduce(
      (total, digito) =>
        total + Number(digito),
      0
    );

  const numero = reduzirNumero(soma);

  return diagnosticosCasa[numero] ?? null;
}

export default function CasaPage() {
  const pagina =
    landingPagesConfig.casa;

  return (
    <LandingDiagnostico
      imagem={pagina.imagem}
      altImagem={pagina.altImagem}
      titulo={pagina.titulo}
      subtitulo={pagina.subtitulo}
      campos={pagina.campos}
      textoAntesBotao={
        pagina.textoAntesBotao
      }
      textoBotao={pagina.textoBotao}
      calcular={calcularCasa}
      tituloPosDiagnostico={
        pagina.tituloPosDiagnostico
      }
      textoPosDiagnostico={
        pagina.textoPosDiagnostico
      }
      textoBotaoOscar={
        pagina.textoBotaoOscar
      }
      linkWhatsAppOscar={
        criarLinkWhatsApp
      }
    />
  );
}