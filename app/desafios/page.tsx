
"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Diagnostico = {
  titulo: string;
  desafio: string;
  evitar: string[];
  conselho: string;
};

type Orientacoes = {
  pessoal: string[];
  afetivo: string[];
  espiritual: string[];
  material: string[];
  profissional: string[];
  leituraMapa: string;
};

const orientacoes: Record<number, Orientacoes> = {
  "1": {
    "pessoal": [
      "Evita comenzar varios proyectos al mismo tiempo. Establece prioridades.",
      "No permitas que la inseguridad frene tus decisiones.",
      "Controla la impaciencia y la necesidad de obtener resultados inmediatos."
    ],
    "afetivo": [
      "Evita imponer tu voluntad a tu pareja.",
      "No tomes decisiones sentimentales por impulso.",
      "Ten cuidado de no confundir independencia con distancia emocional."
    ],
    "espiritual": [
      "Evita buscar respuestas externas para todas tus dudas.",
      "No permitas que el orgullo obstaculice tu crecimiento interior.",
      "Dedica momentos de silencio a comprender tus verdaderas motivaciones."
    ],
    "material": [
      "Evita las inversiones precipitadas.",
      "No contraigas deudas para financiar proyectos todavía inciertos.",
      "Ten cuidado con los gastos motivados por el deseo de impresionar a los demás."
    ],
    "profissional": [
      "Evita abandonar tu estabilidad sin planificación.",
      "No entres en disputas innecesarias por el liderazgo.",
      "No dejes pasar buenas oportunidades por miedo a asumir responsabilidades."
    ],
    "leituraMapa": "Reserva momentos de silencio para releer tu Mapa Numerológico. Haz pausas para comprender qué talentos y desafíos pueden ayudarte a iniciar un nuevo ciclo con mayor conciencia."
  },
  "2": {
    "pessoal": [
      "Evita posponer decisiones por miedo a desagradar.",
      "No permitas que la opinión de los demás determine tus elecciones.",
      "Ten cuidado con la ansiedad y la necesidad de aprobación."
    ],
    "afetivo": [
      "Evita los celos, los reclamos y la dependencia emocional.",
      "No acumules resentimientos esperando que la otra persona adivine lo que sientes.",
      "Ten cuidado de no aceptar relaciones desequilibradas por miedo a la soledad."
    ],
    "espiritual": [
      "Evita absorber los problemas emocionales de otras personas.",
      "No confundas sensibilidad con fragilidad.",
      "Cultiva momentos de silencio y fortalece tu confianza interior."
    ],
    "material": [
      "Evita prestar dinero solo para complacer a alguien.",
      "No asumas compromisos financieros por presión familiar.",
      "Ten cuidado con las decisiones económicas motivadas por la inseguridad."
    ],
    "profissional": [
      "Evita conflictos innecesarios con colegas y socios.",
      "No permitas que la timidez oculte tus capacidades.",
      "Ten cuidado con los acuerdos profesionales cuyas condiciones no estén claramente definidas."
    ],
    "leituraMapa": "Lee tu Mapa Numerológico con calma. Haz pequeñas pausas para reflexionar sobre tu sensibilidad, tus relaciones y la importancia de respetar tus propios límites."
  },
  "3": {
    "pessoal": [
      "Evita comenzar demasiadas actividades sin terminar ninguna.",
      "No conviertas la diversión en una forma de escapar de tus responsabilidades.",
      "Ten cuidado con la procrastinación disfrazada de creatividad."
    ],
    "afetivo": [
      "Evita las promesas amorosas que no tienes intención de cumplir.",
      "No uses bromas o ironías para ocultar tus sentimientos.",
      "Ten cuidado con las relaciones superficiales y las expectativas exageradas."
    ],
    "espiritual": [
      "Evita buscar estímulos externos constantemente.",
      "No permitas que los pensamientos dispersos te alejen del autoconocimiento.",
      "Dedica tiempo a reflexionar sobre el verdadero significado de tus decisiones."
    ],
    "material": [
      "Evita comprar por entusiasmo momentáneo.",
      "No comprometas tu presupuesto con gastos excesivos en entretenimiento.",
      "Ten cuidado con las oportunidades financieras que parecen demasiado fáciles."
    ],
    "profissional": [
      "Evita hablar más de lo que haces.",
      "No abandones proyectos cuando desaparezca el entusiasmo inicial.",
      "Ten cuidado con la falta de organización y el incumplimiento de plazos."
    ],
    "leituraMapa": "Dedica unos minutos a leer tu Mapa Numerológico. Haz pausas para identificar talentos que quizás todavía no estés aprovechando plenamente."
  },
  "4": {
    "pessoal": [
      "Evita convertir pequeñas dificultades en grandes preocupaciones.",
      "No seas demasiado rígido contigo mismo.",
      "Ten cuidado con el exceso de responsabilidades y la falta de descanso."
    ],
    "afetivo": [
      "Evita controlar la rutina de las personas que amas.",
      "No permitas que el trabajo ocupe todo el espacio de tus relaciones.",
      "Ten cuidado con las críticas constantes y las exigencias exageradas."
    ],
    "espiritual": [
      "Evita creer que todo depende exclusivamente de tu esfuerzo.",
      "No confundas prudencia con miedo al cambio.",
      "Cultiva la paciencia ante situaciones que no puedes controlar."
    ],
    "material": [
      "Evita contraer deudas sin planificación.",
      "No descuides documentos, contratos y compromisos financieros.",
      "Ten cuidado con las inversiones que prometen rendimientos rápidos."
    ],
    "profissional": [
      "Evita resistirte a métodos de trabajo más eficientes.",
      "No asumas más tareas de las que puedes realizar.",
      "Ten cuidado con la terquedad ante las recomendaciones constructivas."
    ],
    "leituraMapa": "Relee tu Mapa Numerológico sin prisa. Observa, en cada pausa, qué comportamientos podrían estar dificultando la estabilidad que deseas construir."
  },
  "5": {
    "pessoal": [
      "Evita las decisiones precipitadas motivadas por el deseo de novedad.",
      "No abandones compromisos solo porque hayas perdido el entusiasmo.",
      "Ten cuidado con los excesos y las conductas impulsivas."
    ],
    "afetivo": [
      "Evita confundir libertad con falta de responsabilidad afectiva.",
      "No tomes decisiones definitivas durante conflictos pasajeros.",
      "Ten cuidado con los vínculos que puedan comprometer relaciones importantes."
    ],
    "espiritual": [
      "Evita buscar cambios externos para huir de conflictos interiores.",
      "No permitas que la inquietud te impida reflexionar.",
      "Aprende a reconocer la diferencia entre intuición e impulso."
    ],
    "material": [
      "Evita comprar o invertir por puro entusiasmo.",
      "No comprometas tus ahorros en aventuras financieras.",
      "Ten cuidado con las propuestas que exigen decisiones inmediatas."
    ],
    "profissional": [
      "Evita cambiar de trabajo sin evaluar las consecuencias.",
      "No abandones proyectos prometedores por impaciencia.",
      "Ten cuidado con las oportunidades que ofrecen libertad, pero poca seguridad contractual."
    ],
    "leituraMapa": "Mientras lees tu Mapa Numerológico, haz pausas para reflexionar sobre tus decisiones y comprender si tus cambios representan crecimiento o una manera de escapar de las responsabilidades."
  },
  "6": {
    "pessoal": [
      "Evita asumir responsabilidades que les corresponden a otras personas.",
      "No pongas siempre tus necesidades en último lugar.",
      "Ten cuidado con el perfeccionismo y la autoexigencia."
    ],
    "afetivo": [
      "Evita los celos, los reclamos y las actitudes controladoras.",
      "No permanezcas en una relación solo por obligación o culpa.",
      "Ten cuidado de no confundir amor con sacrificio permanente."
    ],
    "espiritual": [
      "Evita creer que debes resolver los problemas de todo el mundo.",
      "No permitas que la culpa determine tus decisiones.",
      "Desarrolla la capacidad de perdonar sin renunciar a tus límites."
    ],
    "material": [
      "Evita comprometer tus finanzas para atender todas las peticiones familiares.",
      "No asumas deudas ajenas sin evaluar los riesgos.",
      "Ten cuidado con los gastos domésticos motivados por la presión emocional."
    ],
    "profissional": [
      "Evita cargar en soledad con todas las responsabilidades del equipo.",
      "No permitas que los problemas familiares afecten continuamente tu trabajo.",
      "Ten cuidado con la dificultad para delegar tareas."
    ],
    "leituraMapa": "Lee tu Mapa Numerológico prestando especial atención a los desafíos afectivos. Haz pausas para reflexionar sobre la diferencia entre cuidar a los demás y olvidarte de ti mismo."
  },
  "7": {
    "pessoal": [
      "Evita aislarte demasiado y alejarte de las personas cercanas.",
      "No conviertas tus dudas en desconfianza permanente.",
      "Ten cuidado con los pensamientos negativos y la autocrítica exagerada."
    ],
    "afetivo": [
      "Evita ocultar tus sentimientos por miedo a mostrar vulnerabilidad.",
      "No interpretes cada silencio como un rechazo.",
      "Ten cuidado con la frialdad emocional y la dificultad para dialogar."
    ],
    "espiritual": [
      "Evita buscar respuestas definitivas para todas las preguntas de la vida.",
      "No permitas que las creencias rígidas impidan nuevas reflexiones.",
      "Cultiva el autoconocimiento sin desconectarte de la realidad práctica."
    ],
    "material": [
      "Evita las inversiones que no comprendes completamente.",
      "No tomes decisiones financieras basándote solo en suposiciones.",
      "Ten cuidado de no descuidar los asuntos materiales por exceso de introspección."
    ],
    "profissional": [
      "Evita trabajar de forma aislada cuando necesitas colaborar.",
      "No permitas que el perfeccionismo retrase entregas importantes.",
      "Ten cuidado con la desconfianza excesiva hacia colegas y socios."
    ],
    "leituraMapa": "Convierte la lectura de tu Mapa Numerológico en un momento de introspección. Lee despacio, haz pausas y procura comprender las enseñanzas que más se relacionan con tu momento de vida."
  },
  "8": {
    "pessoal": [
      "Evita convertir todas las situaciones en competencias.",
      "No permitas que la ambición determine tu valor personal.",
      "Ten cuidado con las exigencias excesivas y la necesidad de control."
    ],
    "afetivo": [
      "Evita dar prioridad exclusivamente al trabajo y al dinero.",
      "No utilices tus logros materiales como forma de ejercer autoridad.",
      "Ten cuidado con los conflictos provocados por el orgullo o la competencia."
    ],
    "espiritual": [
      "Evita asociar el éxito económico con la superioridad personal.",
      "No abandones tus valores para conseguir resultados.",
      "Desarrolla gratitud y responsabilidad ante tus logros."
    ],
    "material": [
      "Evita endeudarte para mantener las apariencias.",
      "No asumas riesgos financieros sin planificación.",
      "Ten cuidado con los contratos, sociedades e inversiones poco transparentes."
    ],
    "profissional": [
      "Evita las actitudes autoritarias con colegas y colaboradores.",
      "No comprometas tu reputación por resultados inmediatos.",
      "Ten cuidado con las decisiones estratégicas motivadas únicamente por la ambición."
    ],
    "leituraMapa": "Reserva un momento tranquilo para releer tu Mapa Numerológico. Haz pausas para evaluar cómo tus talentos, valores y actitudes pueden contribuir a logros más equilibrados."
  },
  "9": {
    "pessoal": [
      "Evita insistir en situaciones que ya no contribuyen a tu crecimiento.",
      "No permitas que los recuerdos dolorosos determinen tus decisiones.",
      "Ten cuidado con la dificultad para terminar proyectos y resolver asuntos pendientes."
    ],
    "afetivo": [
      "Evita permanecer en relaciones solo por miedo a la soledad.",
      "No alimentes resentimientos ni deseos de venganza.",
      "Ten cuidado con las reconciliaciones motivadas únicamente por la necesidad afectiva."
    ],
    "espiritual": [
      "Evita convertir el pasado en una fuente permanente de sufrimiento.",
      "No confundas desapego con indiferencia.",
      "Practica el perdón como un proceso de liberación emocional, sin ignorar tus límites."
    ],
    "material": [
      "Evita mantener compromisos financieros que ya no tienen sentido.",
      "No gastes dinero para compensar frustraciones emocionales.",
      "Ten cuidado con las decisiones patrimoniales tomadas durante conflictos personales."
    ],
    "profissional": [
      "Evita insistir en proyectos sin perspectivas solo por el tiempo ya invertido.",
      "No termines asociaciones de manera impulsiva o conflictiva.",
      "Ten cuidado con la resistencia a reconocer que ciertos ciclos profesionales han llegado a su fin."
    ],
    "leituraMapa": "Lee tu Mapa Numerológico con serenidad. Haz pausas para reconocer los aprendizajes del pasado y reflexionar sobre lo que necesitas transformar antes de comenzar un nuevo ciclo."
  }
};

const diagnosticos: Record<number, Diagnostico> = {
  1: {
    titulo: "El desafío de comenzar sin perder tu rumbo",
    desafio: "2027 podría traer nuevos comienzos. Tu desafío será superar la inseguridad y tomar las riendas de tu propia vida.",
    evitar: [
      "Actuar por impulso y sin planificación.",
      "Querer controlar todas las situaciones.",
      "Permitir que el orgullo perjudique tus relaciones.",
      "Comenzar proyectos sin darles continuidad.",
      "Depender de la aprobación de los demás.",
    ],
    conselho: "Toma la iniciativa, pero elige conscientemente los caminos que deseas construir.",
  },
  2: {
    titulo: "El desafío de equilibrar tus emociones",
    desafio: "Tu sensibilidad podría ponerse a prueba, especialmente en las relaciones y en las decisiones que requieren paciencia.",
    evitar: [
      "Dependencia emocional.",
      "Celos y resentimientos.",
      "Indecisión ante las oportunidades.",
      "Someterte para complacer a otras personas.",
      "Guardar rencores y alimentar conflictos.",
    ],
    conselho: "Aprende a cooperar sin renunciar a tu individualidad.",
  },
  3: {
    titulo: "El desafío de controlar la dispersión",
    desafio: "Podrían surgir ideas y oportunidades, pero la falta de enfoque podría impedir que tus proyectos avancen.",
    evitar: [
      "Gastar por impulso.",
      "Prometer más de lo que puedes cumplir.",
      "Posponer decisiones importantes.",
      "Hablar sin evaluar las consecuencias.",
      "Dejar proyectos a medias.",
    ],
    conselho: "Tu creatividad podrá abrir puertas cuando vaya acompañada de disciplina.",
  },
  4: {
    titulo: "El desafío de construir con paciencia",
    desafio: "Las responsabilidades podrían aumentar y exigir organización, perseverancia y atención a la estabilidad material.",
    evitar: [
      "Terquedad y rigidez excesiva.",
      "Desorganización financiera.",
      "Exceso de trabajo.",
      "Pesimismo ante los obstáculos.",
      "Resistencia a los cambios necesarios.",
    ],
    conselho: "Construye bases sólidas y respeta el tiempo necesario para alcanzar resultados.",
  },
  5: {
    titulo: "El desafío de utilizar bien tu libertad",
    desafio: "Los cambios y las nuevas experiencias podrían poner a prueba tu estabilidad y tu capacidad para elegir con responsabilidad.",
    evitar: [
      "Decisiones precipitadas.",
      "Excesos y comportamientos impulsivos.",
      "Inestabilidad en las relaciones.",
      "Aventuras financieras sin planificación.",
      "Abandonar compromisos importantes.",
    ],
    conselho: "La libertad será tu mayor conquista cuando vaya acompañada de responsabilidad.",
  },
  6: {
    titulo: "El desafío de no cargar con todo",
    desafio: "Los asuntos familiares y afectivos podrían exigir equilibrio entre cuidar a los demás y respetar tus propias necesidades.",
    evitar: [
      "Asumir problemas que no son tuyos.",
      "Celos y reclamos excesivos.",
      "Controlar las decisiones de otras personas.",
      "Sacrificar tus propios objetivos.",
      "Perfeccionismo y sentimientos de culpa.",
    ],
    conselho: "Amar y cuidar no significa asumir todas las responsabilidades.",
  },
  7: {
    titulo: "El desafío de enfrentar tus verdades",
    desafio: "Será un período favorable para la reflexión, pero las dudas y los cuestionamientos podrían generar inseguridad o aislamiento.",
    evitar: [
      "Aislamiento prolongado.",
      "Desconfianza excesiva.",
      "Pesimismo y pensamientos negativos.",
      "Criticar constantemente a los demás.",
      "Tomar decisiones sin reflexionar.",
    ],
    conselho: "Transforma tus dudas en conocimiento y tus experiencias en sabiduría.",
  },
  8: {
    titulo: "El desafío de administrar el poder y el dinero",
    desafio: "Las responsabilidades profesionales y financieras podrían exigir madurez, equilibrio y decisiones estratégicas.",
    evitar: [
      "Endeudarte por impulso.",
      "Autoritarismo y luchas de poder.",
      "Ambición sin límites.",
      "Descuidar las relaciones afectivas.",
      "Asumir riesgos financieros innecesarios.",
    ],
    conselho: "Busca resultados materiales sin comprometer tus valores ni tu equilibrio personal.",
  },
  9: {
    titulo: "El desafío de cerrar lo que perdió su sentido",
    desafio: "2027 podría traer la necesidad de concluir etapas, resolver asuntos pendientes y dejar atrás situaciones que ya no contribuyen a tu crecimiento.",
    evitar: [
      "Insistir en relaciones desgastadas.",
      "Alimentar resentimientos.",
      "Resistirte a los cierres necesarios.",
      "Tomar decisiones por culpa o venganza.",
      "Cargar con problemas del pasado.",
    ],
    conselho: "Aprende a cerrar ciclos con madurez para abrir espacio a nuevas oportunidades.",
  },
};

// Cuenta regresiva diaria hasta las 00:00, hora de Brasilia.
function segundosAteMeiaNoiteBrasilia(): number {
  const partes = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const valor = (tipo: string) =>
    Number(partes.find((parte) => parte.type === tipo)?.value ?? 0);
  const decorridos = valor("hour") * 3600 + valor("minute") * 60 + valor("second");
  return 86400 - decorridos;
}

function ContagemPromocional({ segundos }: { segundos: number | null }) {
  const formatar = (numero: number) => String(numero).padStart(2, "0");
  const horas = segundos === null ? "--" : formatar(Math.floor(segundos / 3600));
  const minutos = segundos === null ? "--" : formatar(Math.floor((segundos % 3600) / 60));
  const restantes = segundos === null ? "--" : formatar(segundos % 60);

  return (
    <div className="mt-4 text-center text-[#e8d5b3]" aria-live="off">
      <p className="text-sm font-semibold">La oferta del día termina en:</p>
      <p className="mt-1 text-3xl font-extrabold tracking-wider tabular-nums text-[#e3c17b] sm:text-4xl">
        {horas}:{minutos}:{restantes}
      </p>
    </div>
  );
}

function reduzirNumero(numero: number): number {
  let resultado = numero;

  while (resultado > 9) {
    resultado = String(resultado)
      .split("")
      .reduce((soma, digito) => soma + Number(digito), 0);
  }

  return resultado;
}

export default function DesafiosPage() {
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [erro, setErro] = useState("");
  const [anoPessoal, setAnoPessoal] = useState<number | null>(null);

  const resultadoRef = useRef<HTMLElement | null>(null);

  const [segundosRestantes, setSegundosRestantes] = useState<number | null>(null);

  useEffect(() => {
    const atualizar = () => setSegundosRestantes(segundosAteMeiaNoiteBrasilia());
    atualizar();
    const intervalo = window.setInterval(atualizar, 1000);
    return () => window.clearInterval(intervalo);
  }, []);



  function descobrirDesafio(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErro("");

    const diaNumero = Number(dia);
    const mesNumero = Number(mes);

    if (
      dia.trim() === "" ||
      mes.trim() === "" ||
      !Number.isInteger(diaNumero) ||
      !Number.isInteger(mesNumero) ||
      mesNumero < 1 ||
      mesNumero > 12
    ) {
      setErro("Ingresa un día y un mes válidos.");
      return;
    }

    const diasNoMes = new Date(2024, mesNumero, 0).getDate();

    if (diaNumero < 1 || diaNumero > diasNoMes) {
      setErro("Esta fecha de nacimiento no es válida.");
      return;
    }

    const soma =
      String(diaNumero)
        .split("")
        .reduce((total, numero) => total + Number(numero), 0) +
      String(mesNumero)
        .split("")
        .reduce((total, numero) => total + Number(numero), 0) +
      2 + 0 + 2 + 7;

    setAnoPessoal(reduzirNumero(soma));

    setTimeout(() => {
      resultadoRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  const diagnostico =
    anoPessoal !== null ? diagnosticos[anoPessoal] : null;

  return (
    <main className="min-h-screen bg-[#17130f] text-white">
      <section className="mx-auto w-full max-w-[1500px] md:grid md:min-h-screen md:grid-cols-2">
        {/* FOTOGRAFÍA */}
        <div className="bg-[#201b17]">
          <img
            src="/oscar-desafio.png"
            alt="Oscar Ahumada — Numerólogo de las Estrellas"
            className="block h-auto w-full md:h-full md:object-cover md:object-center"
          />
        </div>

        {/* TÍTULO Y FORMULARIO */}
        <div className="flex items-center justify-center px-6 py-9 md:px-10 md:py-14 lg:px-14">
          <div className="w-full max-w-[520px] text-center">
            <h1 className="text-3xl font-extrabold leading-tight text-[#e3c17b] md:text-4xl lg:text-5xl">
              ¿CUÁLES SERÁN TUS MAYORES DESAFÍOS EN 2027?
            </h1>

            <p className="mt-8 text-lg font-bold text-[#e3c17b]">
              INGRESA EL DÍA Y EL MES DE TU NACIMIENTO
            </p>

            <form onSubmit={descobrirDesafio} className="mt-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="dia-desafios"
                    className="mb-2 block text-sm font-bold"
                  >
                    DÍA
                  </label>

                  <input
                    id="dia-desafios"
                    type="number"
                    inputMode="numeric"
                    min="1"
                    max="31"
                    placeholder="DD"
                    value={dia}
                    onChange={(event) => setDia(event.target.value)}
                    className="w-full rounded-xl border border-[#bda16e] bg-white px-3 py-4 text-center text-xl font-bold text-[#29231d] outline-none focus:ring-2 focus:ring-[#d7b46c]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mes-desafios"
                    className="mb-2 block text-sm font-bold"
                  >
                    MES
                  </label>

                  <input
                    id="mes-desafios"
                    type="number"
                    inputMode="numeric"
                    min="1"
                    max="12"
                    placeholder="MM"
                    value={mes}
                    onChange={(event) => setMes(event.target.value)}
                    className="w-full rounded-xl border border-[#bda16e] bg-white px-3 py-4 text-center text-xl font-bold text-[#29231d] outline-none focus:ring-2 focus:ring-[#d7b46c]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 w-full rounded-xl bg-[#d7b46c] px-5 py-4 text-base font-extrabold uppercase tracking-wide text-[#17130f] transition hover:bg-[#edce8e]"
              >
                DESCUBRIR MIS DESAFÍOS
              </button>

              {erro && (
                <div
                  role="alert"
                  className="mt-4 rounded-lg bg-red-700 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  {erro}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO NUMEROLÓGICO */}
      {diagnostico && (
        <section
          ref={resultadoRef}
          className="mx-auto max-w-[850px] scroll-mt-6 px-5 py-12"
        >
          <div className="rounded-2xl border border-[#bda16e] bg-[#211b16] p-6 md:p-10">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-[#d7b46c]">
              Tu diagnóstico numerológico para 2027
            </p>

            <h2 className="mt-4 text-center text-3xl font-extrabold text-[#e3c17b]">
              AÑO PERSONAL {anoPessoal}
            </h2>

            <h3 className="mt-5 text-center text-xl font-bold">
              {diagnostico.titulo}
            </h3>

            <p className="mt-6 leading-7 text-[#eee4d6]">
              {diagnostico.desafio}
            </p>

            <h4 className="mt-7 text-lg font-bold text-[#e3c17b]">
              TUS 15 ALERTAS PARA 2027
            </h4>

            {([
              ["PERSONAL", "pessoal"],
              ["AFECTIVO", "afetivo"],
              ["ESPIRITUAL", "espiritual"],
              ["MATERIAL", "material"],
              ["PROFESIONAL", "profissional"],
            ] as const).map(([titulo, area]) => (
              <div key={area} className="mt-6">
                <h5 className="text-base font-bold text-[#e3c17b]">{titulo}</h5>
                <ol className="mt-3 list-decimal space-y-3 pl-5 text-[#eee4d6]">
                  {orientacoes[anoPessoal!][area].map((dica) => (
                    <li key={dica} className="leading-7">{dica}</li>
                  ))}
                </ol>
                {area === "espiritual" && (
                  <div className="mt-4 rounded-xl border border-[#6d5739] bg-[#33291f] p-4">
                    <p className="font-bold text-[#e3c17b]">UNA ORIENTACIÓN PARA TU AUTOCONOCIMIENTO</p>
                    <p className="mt-2 leading-7 text-[#eee4d6]">
                      Si ya tienes tu Mapa Numerológico, este es un excelente momento para volver a leerlo. Si todavía no lo tienes, descubre lo que un análisis personalizado puede revelar sobre tus talentos y desafíos.
                    </p>
                    <p className="mt-3 leading-7 text-[#eee4d6]">
                      {orientacoes[anoPessoal!].leituraMapa}
                    </p>
                  </div>
                )}
              </div>
            ))}

            <div className="mt-7 rounded-xl bg-[#33291f] p-5">
              <h4 className="font-bold text-[#e3c17b]">
                CONSEJO DE OSCAR AHUMADA
              </h4>

              <p className="mt-3 leading-7">
                {diagnostico.conselho}
              </p>
            </div>

            <div className="mt-9 border-t border-[#6d5739] pt-8 text-center">
              <div>
                <p className="mb-6 text-base leading-7 text-[#eee4d6]">
                  Acabas de conocer 15 alertas para 2027. Sin embargo, hay otros aspectos de tu vida que merecen atención. El Mapa Numerológico Completo profundiza en la interpretación de tus talentos, desafíos y tendencias personales para ayudarte a reflexionar sobre tus decisiones con mayor conciencia.
                </p>
                <h4 className="text-center text-2xl font-extrabold text-[#e3c17b]">
                  ¡PROMOCIÓN ESPECIAL PARA TI!
                </h4>
                <p className="mt-3 text-center text-sm text-[#eee4d6]">
                  Condiciones especiales para quienes están leyendo su diagnóstico.
                </p>

                {[
                  {
                    titulo: "MAPA NUMEROLÓGICO PERSONAL COMPLETO",
                    detalhe: "Sin consulta individual",
                    anterior: null,
                    promocional: "$ 44.000",
                    botao: "QUIERO MI MAPA COMPLETO",
                    mensagem:
                      "¡Hola, Oscar Ahumada! Leí mi diagnóstico de los desafíos numerológicos de 2027 y quiero adquirir el Mapa Numerológico Personal Completo sin consulta por $ 44.000. ¿Cómo puedo comprarlo?",
                  },
                  {
                    titulo: "MAPA NUMEROLÓGICO PERSONAL COMPLETO + CONSULTA",
                    detalhe: "Con consulta individual",
                    anterior: null,
                    promocional: "$ 98.000",
                    botao: "QUIERO MI MAPA + CONSULTA",
                    mensagem:
                      "¡Hola, Oscar Ahumada! Leí mi diagnóstico de los desafíos numerológicos de 2027 y quiero adquirir el Mapa Numerológico Personal Completo con consulta por $ 98.000. ¿Cómo puedo comprarlo y agendar la consulta?",
                  },
                  {
                    titulo: "MAPA DE PREDICCIONES HASTA EL 31/12/2027",
                    detalhe:
                      "Aspectos personales, afectivos, espirituales, materiales y profesionales",
                    anterior: null,
                    promocional: "$ 35.000",
                    botao: "QUIERO MIS PREDICCIONES",
                    mensagem:
                      "¡Hola, Oscar Ahumada! Leí mi diagnóstico de los desafíos numerológicos de 2027 y quiero adquirir el Mapa de Predicciones hasta el 31/12/2027 por $ 35.000, con los aspectos personales, afectivos, espirituales, materiales y profesionales. ¿Cómo puedo comprarlo?",
                  },
                ].map((oferta) => (
                  <div
                    key={oferta.titulo}
                    className="mt-5 rounded-xl border border-[#6d5739] bg-[#33291f] p-5 text-center"
                  >
                    <h5 className="text-base font-extrabold text-white">
                      {oferta.titulo}
                    </h5>
                    <p className="mt-2 text-sm text-[#eee4d6]">
                      {oferta.detalhe}
                    </p>
                    <p className="mt-1 text-3xl font-extrabold text-[#e3c17b]">
                      {oferta.promocional}
                    </p>
                    <a
                      href={`https://wa.me/5531972159908?text=${encodeURIComponent(oferta.mensagem)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 block rounded-xl bg-[#16803d] px-4 py-4 text-center text-sm font-extrabold text-white transition hover:bg-[#116632]"
                    >
                      {oferta.botao} — WHATSAPP
                    </a>
                    <ContagemPromocional segundos={segundosRestantes} />
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm text-[#c9b9a4]">
                Oscar Ahumada — Numerólogo de las Estrellas
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
