"use client";

import { FormEvent, useRef, useState } from "react";

type Desafios = { pessoal: string; afetivo: string; material: string };
const desafios: Record<number, Desafios> = {
  1: { pessoal: "Tu desafío es desarrollar iniciativa sin actuar por impulso. Confía en tus decisiones, pero aprende a escuchar otras perspectivas.", afetivo: "Cultiva tu independencia sin imponer tu voluntad. El diálogo fortalece los vínculos y evita conflictos innecesarios.", material: "Transforma tu capacidad de liderazgo en logros sólidos. Planifica antes de asumir riesgos y termina lo que empiezas." },
  2: { pessoal: "Tu desafío es reconocer tu propio valor sin depender de la aprobación de los demás. Fortalece tu confianza y establece límites.", afetivo: "Tu sensibilidad necesita equilibrio. Expresa lo que sientes y evita guardar resentimientos o aceptar relaciones desiguales.", material: "Aprende a negociar sin ceder ante la presión. Organiza tus finanzas y elige alianzas con responsabilidades claras." },
  3: { pessoal: "Tu desafío es transformar la creatividad en concentración. Expresa tus talentos sin abandonar compromisos importantes.", afetivo: "Utiliza tu capacidad de comunicación para acercarte a los demás, no para ocultar sentimientos. Evita promesas que no puedas cumplir.", material: "Tus ideas necesitan disciplina para prosperar. Controla los gastos impulsados por el entusiasmo y da continuidad a tus proyectos." },
  4: { pessoal: "Tu desafío es construir seguridad sin volverte rígido. Permítete descansar y aceptar nuevas posibilidades.", afetivo: "Demuestra afecto más allá de tus responsabilidades. Evita las exigencias excesivas y deja espacio para la espontaneidad.", material: "La organización es una fortaleza, pero ten cuidado con el miedo al cambio. Planifica tus pasos sin dejar pasar oportunidades." },
  5: { pessoal: "Tu desafío es vivir los cambios con conciencia. Aprende a distinguir la libertad de la impulsividad.", afetivo: "Valora tu autonomía sin huir de los compromisos afectivos. Las conversaciones sinceras ayudan a preservar los vínculos.", material: "Antes de aceptar una novedad, evalúa sus riesgos. Transforma tu versatilidad en resultados duraderos." },
  6: { pessoal: "Tu desafío es cuidarte con la misma dedicación que ofreces a los demás. Reduce la autoexigencia.", afetivo: "Amar no significa controlar ni sacrificarse siempre. Construye relaciones basadas en la reciprocidad y en límites saludables.", material: "No asumas todas las responsabilidades económicas de la familia. Equilibra la generosidad con la planificación." },
  7: { pessoal: "Tu desafío es confiar más en tu intuición sin aislarte. Aprende a compartir tus sentimientos y descubre cómo la energía de tu nombre completo puede ampliar esta interpretación.", afetivo: "Tu desafío es abrir el corazón. No conviertas la necesidad de protección en distancia emocional. Tus otros números pueden ayudarte a comprender mejor tus vínculos.", material: "Tu desafío es transformar el conocimiento en resultados. Evita analizar tanto las posibilidades que termines posponiendo decisiones importantes. Conoce también tus ciclos hasta el 31/12/2027." },
  8: { pessoal: "Tu desafío es reconocer que tu valor va más allá de tus logros. Practica la flexibilidad y reduce la necesidad de control.", afetivo: "No permitas que el trabajo y la ambición ocupen todo el espacio del afecto. Valora la escucha y la colaboración.", material: "Administra los recursos y el poder con responsabilidad. Evalúa los contratos y los riesgos antes de asumir grandes compromisos." },
  9: { pessoal: "Tu desafío es cerrar ciclos sin cargar con el peso del pasado. Aprende a renovar tus decisiones con serenidad.", afetivo: "Practica el desapego sin perder la sensibilidad. Evita mantener relaciones solo por culpa o por miedo a la soledad.", material: "Reevalúa los compromisos que ya no tienen sentido. Resuelve los asuntos pendientes y dirige tus recursos hacia nuevos objetivos." },
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
  { titulo: "MAPA NUMEROLÓGICO PERSONAL COMPLETO", detalhe: "Sin consulta individual", promocional: "$ 44.000", botao: "QUIERO MI MAPA COMPLETO" },
  { titulo: "MAPA NUMEROLÓGICO PERSONAL COMPLETO + CONSULTA", detalhe: "Con consulta individual", promocional: "$ 98.000", botao: "QUIERO MI MAPA + CONSULTA" },
  { titulo: "MAPA DE PREDICCIONES HASTA EL 31/12/2027", detalhe: "Aspectos personales, afectivos, espirituales, materiales y profesionales", promocional: "$ 35.000", botao: "QUIERO MIS PREDICCIONES" },
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
    if (!calculo) { setErro("Escribe un nombre válido utilizando solo letras."); setResultado(null); return; }
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
            <h1 className="text-2xl font-extrabold leading-tight text-[#e3c17b] md:text-4xl">¿QUÉ REVELA TU NOMBRE SOBRE TUS DESAFÍOS?</h1>
            <p className="mt-2 text-sm leading-6 text-[#eee4d6]">Descubre los desafíos que la Numerología Latina asocia con tu nombre de pila.</p>
            <form onSubmit={descobrir} className="mt-3">
              <label htmlFor="primeiro-nome" className="mb-2 block font-bold text-[#e3c17b]">ESCRIBE TU NOMBRE DE PILA</label>
              <input id="primeiro-nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Tu nombre de pila" autoComplete="given-name" className="w-full rounded-xl border border-[#bda16e] bg-white px-4 py-4 text-center text-lg font-bold text-[#29231d] outline-none focus:ring-2 focus:ring-[#d7b46c]" />
              <button type="submit" className="mt-4 w-full rounded-xl bg-[#d7b46c] px-5 py-4 font-extrabold text-[#17130f] hover:bg-[#edce8e]">DESCUBRIR MIS DESAFÍOS</button>
              {erro && <p role="alert" className="mt-3 text-sm text-red-300">{erro}</p>}
            </form>
          </div>
        </div>
      </section>
      {resultado && (
        <section ref={resultadoRef} className="mx-auto max-w-[850px] scroll-mt-5 px-5 py-10">
          <div className="rounded-2xl border border-[#bda16e] bg-[#211b16] p-5 md:p-10">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-[#d7b46c]">El desafío de tu nombre</p>
            <h2 className="mt-3 text-center text-3xl font-extrabold text-[#e3c17b]">{resultado.nome.toLocaleUpperCase("es")} — NÚMERO {resultado.regente}</h2>
            <p className="mt-2 text-center text-sm text-[#c9b9a4]">Suma numerológica: {resultado.soma} / {resultado.regente}</p>
            {(["pessoal", "afetivo", "material"] as const).map((area) => (
              <div key={area} className="mt-7">
                <h3 className="font-bold uppercase text-[#e3c17b]">DESAFÍO {area === "pessoal" ? "PERSONAL" : area === "afetivo" ? "AFECTIVO" : "MATERIAL"}</h3>
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
                const mensagem = `¡Hola, Oscar Ahumada! Descubrí el desafío numerológico de mi nombre ${resultado.nome} (número ${resultado.regente}) y quiero adquirir ${oferta.titulo} por ${oferta.promocional}. ¿Cómo puedo comprarlo?`;
                return (
                  <div key={oferta.titulo} className="mt-5 rounded-xl border border-[#6d5739] bg-[#33291f] p-5">
                    <h4 className="font-extrabold">{oferta.titulo}</h4>
                    <p className="mt-2 text-sm text-[#eee4d6]">{oferta.detalhe}</p>
                    
                    <p className="mt-1 text-3xl font-extrabold text-[#e3c17b]">{oferta.promocional}</p>
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
