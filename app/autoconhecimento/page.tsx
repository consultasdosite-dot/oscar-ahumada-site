"use client";

import { FormEvent, useRef, useState } from "react";

type Desafios = { pessoal: string; afetivo: string; material: string };
const desafios: Record<number, Desafios> = {
  1: { pessoal: "Seu desafio é desenvolver iniciativa sem agir por impulso. Confie nas suas decisões, mas aprenda a ouvir outras perspectivas.", afetivo: "Cultive a independência sem transformar sua vontade em imposição. O diálogo fortalece vínculos e evita disputas desnecessárias.", material: "Transforme sua capacidade de liderança em realizações consistentes. Planeje antes de assumir riscos e conclua o que começar." },
  2: { pessoal: "Seu desafio é reconhecer seu próprio valor sem depender da aprovação alheia. Exercite a confiança e estabeleça limites.", afetivo: "Sua sensibilidade pede equilíbrio. Expresse o que sente e evite guardar mágoas ou aceitar relações desiguais.", material: "Aprenda a negociar sem ceder por pressão. Organize suas finanças e escolha parcerias com responsabilidades claras." },
  3: { pessoal: "Seu desafio é transformar criatividade em foco. Expresse seus talentos sem abandonar compromissos importantes.", afetivo: "Use sua comunicação para aproximar, não para esconder sentimentos. Evite promessas que não poderá cumprir.", material: "Suas ideias precisam de disciplina para prosperar. Controle gastos por entusiasmo e dê continuidade aos projetos." },
  4: { pessoal: "Seu desafio é construir segurança sem se tornar rígido. Permita-se descansar e aceitar novas possibilidades.", afetivo: "Demonstre afeto além das responsabilidades. Evite cobranças excessivas e abra espaço para a espontaneidade.", material: "Organização é uma força, mas cuidado com o medo de mudar. Planeje seus passos sem perder oportunidades." },
  5: { pessoal: "Seu desafio é viver mudanças com consciência. Aprenda a distinguir liberdade de impulsividade.", afetivo: "Valorize sua autonomia sem fugir de compromissos afetivos. Conversas sinceras ajudam a preservar os vínculos.", material: "Antes de abraçar uma novidade, avalie seus riscos. Transforme versatilidade em resultados duradouros." },
  6: { pessoal: "Seu desafio é cuidar de si com a mesma dedicação que oferece aos outros. Diminua a autocobrança.", afetivo: "Amar não significa controlar nem se sacrificar sempre. Construa relações com reciprocidade e limites saudáveis.", material: "Não assuma todas as responsabilidades financeiras da família. Equilibre generosidade e planejamento." },
  7: { pessoal: "Seu desafio é confiar mais em sua intuição sem se isolar. Aprenda a compartilhar seus sentimentos e descubra como a energia do nome completo pode ampliar essa leitura.", afetivo: "Seu desafio é abrir o coração. Não transforme a necessidade de proteção em distância emocional. Seus outros números podem aprofundar a compreensão dos vínculos.", material: "Seu desafio é transformar conhecimento em resultados. Evite analisar tanto as possibilidades que acaba adiando decisões importantes. Conheça também seus ciclos até 31/12/2027." },
  8: { pessoal: "Seu desafio é reconhecer que seu valor vai além das conquistas. Exercite a flexibilidade e reduza a necessidade de controle.", afetivo: "Não deixe que trabalho e ambição ocupem todo o espaço do afeto. Valorize a escuta e a parceria.", material: "Administre recursos e poder com responsabilidade. Avalie contratos e riscos antes de assumir grandes compromissos." },
  9: { pessoal: "Seu desafio é concluir ciclos sem carregar o peso do passado. Aprenda a renovar suas escolhas com serenidade.", afetivo: "Pratique o desapego sem perder a sensibilidade. Evite manter relações apenas por culpa ou receio da solidão.", material: "Reavalie compromissos que já não fazem sentido. Organize pendências e direcione seus recursos para novos objetivos." },
};

const mapa: Record<string, number> = {
  A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,
  J:1,K:2,L:3,M:4,N:5,"Ñ":6,O:7,P:8,Q:9,
  R:1,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9,
};

function calcularNome(nome: string) {
  const letras = nome.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
  if (!/^[A-ZÑ]+$/.test(letras)) return null;
  const soma = Array.from(letras).reduce((total, letra) => total + (mapa[letra] ?? 0), 0);
  let regente = soma;
  while (regente > 9) regente = String(regente).split("").reduce((t, n) => t + Number(n), 0);
  return { soma, regente };
}

const ofertas = [
  { titulo: "MAPA NUMEROLÓGICO PESSOAL COMPLETO", detalhe: "Sem consulta individual", anterior: "R$ 395,00", promocional: "R$ 170,00", botao: "QUERO MEU MAPA COMPLETO" },
  { titulo: "MAPA NUMEROLÓGICO PESSOAL COMPLETO + CONSULTA", detalhe: "Com consulta individual", anterior: "R$ 800,00", promocional: "R$ 395,00", botao: "QUERO MEU MAPA + CONSULTA" },
  { titulo: "MAPA DE PREVISÕES ATÉ 31/12/2027", detalhe: "Tendências pessoais, afetivas, espirituais, materiais e profissionais", anterior: "R$ 260,00", promocional: "R$ 80,00", botao: "QUERO MINHAS PREVISÕES" },
];

export default function AutoconhecimentoPage() {
  const [nome, setNome] = useState("");
  const [erro, setErro] = useState("");
  const [resultado, setResultado] = useState<{ nome: string; soma: number; regente: number } | null>(null);
  const resultadoRef = useRef<HTMLElement>(null);

  function descobrir(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const primeiroNome = nome.trim().split(/\s+/)[0] ?? "";
    const calculo = calcularNome(primeiroNome);
    if (!calculo) { setErro("Digite um primeiro nome válido, usando apenas letras."); setResultado(null); return; }
    setErro("");
    setResultado({ nome: primeiroNome, ...calculo });
    window.setTimeout(() => resultadoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }

  return (
    <main className="min-h-screen bg-[#17130f] text-white">
      <section className="mx-auto w-full max-w-[1500px] md:grid md:min-h-screen md:grid-cols-2">
        <div className="flex items-start justify-center bg-[#201b17] md:items-center">
          <img src="/oscar-autoconhecimento.png" alt="Oscar Ahumada — Numerólogo das Estrelas" className="block h-auto max-h-[min(65svh,480px)] w-auto max-w-full object-contain md:max-h-screen" />
        </div>
        <div className="flex items-start justify-center px-5 pt-1 pb-5 md:items-center md:px-10 md:py-14 lg:px-14">
          <div className="w-full max-w-[520px] text-center">
            <h1 className="text-2xl font-extrabold leading-tight text-[#e3c17b] md:text-4xl">O QUE SEU NOME REVELA SOBRE SEUS DESAFIOS?</h1>
            <p className="mt-2 text-sm leading-6 text-[#eee4d6]">Descubra os desafios que a Numerologia Latina associa ao seu primeiro nome.</p>
            <form onSubmit={descobrir} className="mt-3">
              <label htmlFor="primeiro-nome" className="mb-2 block font-bold text-[#e3c17b]">DIGITE SEU PRIMEIRO NOME</label>
              <input id="primeiro-nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu primeiro nome" autoComplete="given-name" className="w-full rounded-xl border border-[#bda16e] bg-white px-4 py-4 text-center text-lg font-bold text-[#29231d] outline-none focus:ring-2 focus:ring-[#d7b46c]" />
              <button type="submit" className="mt-4 w-full rounded-xl bg-[#d7b46c] px-5 py-4 font-extrabold text-[#17130f] hover:bg-[#edce8e]">DESCOBRIR MEUS DESAFIOS</button>
              {erro && <p role="alert" className="mt-3 text-sm text-red-300">{erro}</p>}
            </form>
          </div>
        </div>
      </section>
      {resultado && (
        <section ref={resultadoRef} className="mx-auto max-w-[850px] scroll-mt-5 px-5 py-10">
          <div className="rounded-2xl border border-[#bda16e] bg-[#211b16] p-5 md:p-10">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-[#d7b46c]">O desafio do seu nome</p>
            <h2 className="mt-3 text-center text-3xl font-extrabold text-[#e3c17b]">{resultado.nome.toLocaleUpperCase("pt-BR")} — NÚMERO {resultado.regente}</h2>
            <p className="mt-2 text-center text-sm text-[#c9b9a4]">Soma numerológica: {resultado.soma} / {resultado.regente}</p>
            {(["pessoal", "afetivo", "material"] as const).map((area) => (
              <div key={area} className="mt-7">
                <h3 className="font-bold uppercase text-[#e3c17b]">DESAFIO {area}</h3>
                <p className="mt-2 leading-7 text-[#eee4d6]">{desafios[resultado.regente][area]}</p>
              </div>
            ))}
            <div className="mt-9 border-t border-[#6d5739] pt-7 text-center">
              <h3 className="text-xl font-extrabold text-[#e3c17b]">SEU PRIMEIRO NOME É APENAS O COMEÇO!</h3>
              <p className="mt-3 leading-7 text-[#eee4d6]">Aprofunde a descoberta do Poder do Nome Social, Nome Completo, Destino, Pináculo e das previsões pessoais até 31/12/2027 com Oscar Ahumada.</p>
              <div className="mt-6 flex flex-col items-center gap-3">
                <img src="/oscar-autoconhecimento.png" alt="Oscar Ahumada" className="h-36 w-auto max-w-full rounded-lg object-contain" />
                <p className="text-sm text-[#c9b9a4]">Oscar Ahumada — Numerólogo das Estrelas</p>
              </div>
              <h3 className="mt-7 text-2xl font-extrabold text-[#e3c17b]">PROMOÇÃO ESPECIAL PARA VOCÊ!</h3>
              {ofertas.map((oferta) => {
                const mensagem = `Olá, Oscar Ahumada! Descobri o desafio numerológico do meu nome ${resultado.nome} (número ${resultado.regente}) e quero aproveitar a promoção de ${oferta.titulo}, de ${oferta.anterior} por ${oferta.promocional}. Como faço para adquirir?`;
                return (
                  <div key={oferta.titulo} className="mt-5 rounded-xl border border-[#6d5739] bg-[#33291f] p-5">
                    <h4 className="font-extrabold">{oferta.titulo}</h4>
                    <p className="mt-2 text-sm text-[#eee4d6]">{oferta.detalhe}</p>
                    <p className="mt-4 text-sm text-[#c9b9a4] line-through">De {oferta.anterior}</p>
                    <p className="mt-1 text-3xl font-extrabold text-[#e3c17b]">Por {oferta.promocional}</p>
                    <a href={`https://wa.me/5531972159908?text=${encodeURIComponent(mensagem)}`} target="_blank" rel="noopener noreferrer" className="mt-5 block rounded-xl bg-[#16803d] px-4 py-4 text-sm font-extrabold text-white hover:bg-[#116632]">{oferta.botao} — WHATSAPP</a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
