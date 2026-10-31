"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Reading = { title: string; overview: string; advice: string; alerts: string[][]; reflection: string };
const readings: Record<number, Reading> = {
  "1": {
    "title": "The challenge of starting without losing your direction",
    "overview": "2027 may bring fresh beginnings. Your challenge is to overcome self-doubt and take charge of your choices.",
    "advice": "Take initiative, but choose your direction thoughtfully.",
    "alerts": [
      [
        "Avoid starting too many projects at once; set priorities.",
        "Do not let insecurity make your decisions for you.",
        "Manage impatience and the urge for immediate results."
      ],
      [
        "Avoid imposing your wishes on your partner.",
        "Do not make romantic decisions on impulse.",
        "Do not confuse independence with emotional distance."
      ],
      [
        "Do not look outside yourself for every answer.",
        "Do not let pride stand in the way of inner growth.",
        "Make time for silence and examine your true motivations."
      ],
      [
        "Avoid hasty investments.",
        "Do not borrow to fund projects that are still uncertain.",
        "Watch for spending driven by a desire to impress others."
      ],
      [
        "Do not leave a stable position without a plan.",
        "Avoid unnecessary power struggles.",
        "Do not let fear of responsibility make you miss opportunities."
      ]
    ],
    "reflection": "Read your Numerology Chart slowly, pausing to consider which talents and challenges can help you begin a new cycle with greater awareness."
  },
  "2": {
    "title": "The challenge of balancing your emotions",
    "overview": "Your sensitivity may be tested, especially in relationships and decisions that require patience.",
    "advice": "Learn to cooperate without giving up your individuality.",
    "alerts": [
      [
        "Do not postpone decisions just to avoid disappointing others.",
        "Do not let other people's opinions dictate your choices.",
        "Be mindful of anxiety and the need for approval."
      ],
      [
        "Avoid jealousy, excessive demands, and emotional dependence.",
        "Do not expect someone to guess what you are feeling.",
        "Do not accept an unbalanced relationship out of fear of being alone."
      ],
      [
        "Avoid absorbing other people's emotional burdens.",
        "Do not mistake sensitivity for weakness.",
        "Cultivate quiet moments and strengthen your inner confidence."
      ],
      [
        "Do not lend money solely to please someone.",
        "Avoid financial commitments made under family pressure.",
        "Be careful with money decisions driven by insecurity."
      ],
      [
        "Avoid unnecessary conflicts with coworkers or partners.",
        "Do not let shyness hide your abilities.",
        "Do not enter agreements without clear terms."
      ]
    ],
    "reflection": "Review your Numerology Chart at an unhurried pace, pausing to reflect on sensitivity, relationships, and healthy personal boundaries."
  },
  "3": {
    "title": "The challenge of staying focused",
    "overview": "Ideas and opportunities may emerge, but a lack of focus could prevent your plans from moving forward.",
    "advice": "Creativity can open doors when supported by discipline.",
    "alerts": [
      [
        "Avoid beginning many activities without finishing them.",
        "Do not use entertainment to escape responsibilities.",
        "Watch for procrastination disguised as creativity."
      ],
      [
        "Do not make romantic promises you cannot keep.",
        "Avoid using jokes or sarcasm to conceal feelings.",
        "Be careful with superficial relationships and unrealistic expectations."
      ],
      [
        "Avoid constantly seeking external stimulation.",
        "Do not let scattered thoughts pull you away from self-understanding.",
        "Make time to reflect on the meaning behind your choices."
      ],
      [
        "Avoid purchases driven by short-lived excitement.",
        "Do not overspend on entertainment.",
        "Be skeptical of financial opportunities that seem too easy."
      ],
      [
        "Do not substitute talking for doing.",
        "Avoid abandoning projects when the initial excitement fades.",
        "Stay organized and honor deadlines."
      ]
    ],
    "reflection": "Spend a few minutes with your Numerology Chart, pausing to identify talents you may not yet be using fully."
  },
  "4": {
    "title": "The challenge of building with patience",
    "overview": "Responsibilities may increase, calling for organization, persistence, and attention to financial stability.",
    "advice": "Build a solid foundation and respect the time that meaningful progress takes.",
    "alerts": [
      [
        "Avoid turning small setbacks into major worries.",
        "Do not be excessively hard on yourself.",
        "Balance responsibilities with adequate rest."
      ],
      [
        "Avoid controlling the routines of people you love.",
        "Do not let work crowd out your relationships.",
        "Watch for constant criticism and unrealistic demands."
      ],
      [
        "Do not assume everything depends on your effort alone.",
        "Do not confuse caution with fear of change.",
        "Practice patience with situations beyond your control."
      ],
      [
        "Do not take on debt without planning.",
        "Keep track of documents, contracts, and financial obligations.",
        "Be wary of investments promising quick returns."
      ],
      [
        "Stay open to more effective ways of working.",
        "Do not accept more tasks than you can reasonably handle.",
        "Avoid stubbornness when receiving constructive feedback."
      ]
    ],
    "reflection": "Reread your Numerology Chart without rushing, noticing which habits may be keeping you from the stability you want."
  },
  "5": {
    "title": "The challenge of using your freedom wisely",
    "overview": "Changes and new experiences may test your stability and your ability to make responsible choices.",
    "advice": "Freedom becomes more meaningful when paired with responsibility.",
    "alerts": [
      [
        "Avoid rushed decisions motivated by novelty.",
        "Do not abandon commitments when excitement fades.",
        "Be mindful of excess and impulsive behavior."
      ],
      [
        "Do not confuse freedom with a lack of emotional responsibility.",
        "Avoid permanent decisions during temporary arguments.",
        "Be careful with choices that may damage important relationships."
      ],
      [
        "Do not seek external change just to escape inner conflict.",
        "Make room for reflection despite restlessness.",
        "Learn to distinguish intuition from impulse."
      ],
      [
        "Avoid impulsive purchases and investments.",
        "Do not risk your savings on unplanned adventures.",
        "Be cautious about offers that demand an immediate answer."
      ],
      [
        "Do not change jobs without weighing the consequences.",
        "Avoid abandoning promising projects out of impatience.",
        "Review contracts behind opportunities that promise freedom."
      ]
    ],
    "reflection": "As you read your Numerology Chart, pause to ask whether each change reflects growth or an attempt to escape responsibility."
  },
  "6": {
    "title": "The challenge of not carrying everyone's burdens",
    "overview": "Family and relationship matters may call for balance between caring for others and honoring your own needs.",
    "advice": "Loving and caring do not mean taking responsibility for everything.",
    "alerts": [
      [
        "Do not take responsibility for problems that belong to others.",
        "Avoid putting your needs last every time.",
        "Watch for perfectionism and harsh self-judgment."
      ],
      [
        "Avoid jealousy, excessive demands, and controlling behavior.",
        "Do not remain in a relationship solely out of guilt or duty.",
        "Do not confuse love with constant self-sacrifice."
      ],
      [
        "Do not assume you must solve everyone's problems.",
        "Avoid letting guilt dictate your choices.",
        "Practice forgiveness while maintaining your boundaries."
      ],
      [
        "Do not strain your finances to satisfy every family request.",
        "Avoid assuming another person's debt without evaluating the risk.",
        "Watch for household spending driven by emotional pressure."
      ],
      [
        "Do not carry the whole team's responsibilities alone.",
        "Set boundaries when family problems disrupt work.",
        "Practice delegating instead of doing everything yourself."
      ]
    ],
    "reflection": "Read your Numerology Chart with special attention to relationships, pausing to distinguish caring for others from neglecting yourself."
  },
  "7": {
    "title": "The challenge of facing your own truths",
    "overview": "This may be a period for reflection, but doubts and questions could lead to insecurity or isolation.",
    "advice": "Turn your questions into knowledge and your experiences into wisdom.",
    "alerts": [
      [
        "Avoid withdrawing excessively from people close to you.",
        "Do not let uncertainty become constant suspicion.",
        "Be mindful of negative thinking and excessive self-criticism."
      ],
      [
        "Do not hide your feelings out of fear of vulnerability.",
        "Avoid interpreting every silence as rejection.",
        "Work on emotional openness and honest communication."
      ],
      [
        "Do not demand definitive answers to every life question.",
        "Stay open to perspectives beyond rigid beliefs.",
        "Pursue self-knowledge without losing touch with practical life."
      ],
      [
        "Avoid investments you do not fully understand.",
        "Do not make financial decisions based only on assumptions.",
        "Do not neglect practical matters while reflecting inwardly."
      ],
      [
        "Avoid working alone when collaboration is needed.",
        "Do not let perfectionism delay important work.",
        "Be mindful of excessive distrust toward coworkers and partners."
      ]
    ],
    "reflection": "Make reading your Numerology Chart a quiet moment of reflection. Read slowly and consider which insights speak most clearly to your current life."
  },
  "8": {
    "title": "The challenge of managing power and money",
    "overview": "Professional and financial responsibilities may require maturity, balance, and strategic decisions.",
    "advice": "Pursue material success without compromising your values or personal balance.",
    "alerts": [
      [
        "Avoid treating every situation as a competition.",
        "Do not let ambition define your personal worth.",
        "Be mindful of excessive demands and a need for control."
      ],
      [
        "Do not prioritize work and money at the expense of love.",
        "Avoid using material success to exert authority.",
        "Be careful with conflicts fueled by pride or competition."
      ],
      [
        "Do not equate financial success with personal superiority.",
        "Do not abandon your values in pursuit of results.",
        "Practice gratitude and responsibility as you achieve goals."
      ],
      [
        "Avoid borrowing money to maintain appearances.",
        "Do not take financial risks without a plan.",
        "Review contracts, partnerships, and investments for transparency."
      ],
      [
        "Avoid authoritarian behavior toward colleagues.",
        "Do not sacrifice your reputation for immediate results.",
        "Make strategic decisions for more than ambition alone."
      ]
    ],
    "reflection": "Set aside a peaceful moment to revisit your Numerology Chart, pausing to assess how your talents and values can support balanced achievements."
  },
  "9": {
    "title": "The challenge of letting go of what no longer fits",
    "overview": "2027 may call you to complete chapters, resolve unfinished matters, and release situations that no longer support your growth.",
    "advice": "Close chapters with maturity so you can make room for new opportunities.",
    "alerts": [
      [
        "Avoid clinging to situations that no longer help you grow.",
        "Do not let painful memories control your choices.",
        "Work on finishing projects and resolving loose ends."
      ],
      [
        "Do not stay in a relationship solely out of fear of loneliness.",
        "Avoid nurturing resentment or thoughts of revenge.",
        "Be cautious about reconnecting solely out of emotional need."
      ],
      [
        "Do not turn the past into a permanent source of pain.",
        "Do not confuse letting go with indifference.",
        "Practice forgiveness while respecting your boundaries."
      ],
      [
        "Review financial commitments that no longer serve a purpose.",
        "Avoid spending money to compensate for emotional frustration.",
        "Do not make property decisions in the heat of personal conflict."
      ],
      [
        "Do not keep investing in a project solely because of time already spent.",
        "Avoid ending professional partnerships impulsively.",
        "Recognize when a professional chapter has reached its end."
      ]
    ],
    "reflection": "Read your Numerology Chart with calm attention, pausing to recognize past lessons and what you may want to change before a new cycle begins."
  }
};

const areas = ["PERSONAL", "RELATIONSHIPS", "SPIRITUAL", "FINANCIAL", "PROFESSIONAL"];

function reduceNumber(value: number): number {
  while (value > 9) value = String(value).split("").reduce((sum, digit) => sum + Number(digit), 0);
  return value;
}

// The daily countdown uses Brasília time, matching the original landing page.
function secondsUntilMidnight(): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => Number(parts.find((part) => part.type === type)?.value ?? 0);
  return 86400 - (get("hour") * 3600 + get("minute") * 60 + get("second"));
}

function OfferCountdown({ seconds }: { seconds: number | null }) {
  const pad = (value: number) => String(value).padStart(2, "0");
  const display = seconds === null ? "--:--:--" :
    `${pad(Math.floor(seconds / 3600))}:${pad(Math.floor((seconds % 3600) / 60))}:${pad(seconds % 60)}`;
  return <div className="mt-4 text-center text-[#e8d5b3]" aria-live="off">
    <p className="text-sm font-semibold">Today&apos;s offer ends in:</p>
    <p className="mt-1 text-3xl font-extrabold tracking-wider tabular-nums text-[#e3c17b] sm:text-4xl">{display}</p>
  </div>;
}

export default function ChallengesPage() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [error, setError] = useState("");
  const [personalYear, setPersonalYear] = useState<number | null>(null);
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const resultRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const update = () => setSecondsLeft(secondsUntilMidnight());
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  function discoverChallenges(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const d = Number(day);
    const m = Number(month);
    if (!day.trim() || !month.trim() || !Number.isInteger(d) || !Number.isInteger(m) || m < 1 || m > 12) {
      setError("Please enter a valid birth day and month.");
      return;
    }
    const daysInMonth = new Date(2024, m, 0).getDate();
    if (d < 1 || d > daysInMonth) {
      setError("This birth date is not valid.");
      return;
    }
    const digitSum = (value: number) => String(value).split("").reduce((sum, digit) => sum + Number(digit), 0);
    setPersonalYear(reduceNumber(digitSum(d) + digitSum(m) + 2 + 0 + 2 + 7));
    window.setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }

  const reading = personalYear === null ? null : readings[personalYear];
  const offers = [
    {
      title: "COMPLETE PERSONAL NUMEROLOGY CHART",
      detail: "Complete written report in American English, including personalized answers to up to 10 specific questions you write yourself. No live consultation.",
      price: "US$ 197.00",
      button: "GET MY COMPLETE CHART",
      message: "Hello, Oscar Ahumada! I read my 2027 numerology challenges and would like to purchase the Complete Personal Numerology Chart for US$ 197.00, including written answers to up to 10 questions I will prepare. How do I order?",
    },
    {
      title: "2027 PERSONAL NUMEROLOGY FORECAST",
      detail: "Written predictions through December 31, 2027, covering personal, relationship, spiritual, financial, and professional themes. No live consultation.",
      price: "US$ 80.00",
      button: "GET MY 2027 FORECAST",
      message: "Hello, Oscar Ahumada! I read my 2027 numerology challenges and would like to purchase the written 2027 Personal Numerology Forecast for US$ 80.00. How do I order?",
    },
  ];

  return (
    <main className="min-h-screen bg-[#17130f] text-white" lang="en-US">
      <section className="mx-auto w-full max-w-[1500px] md:grid md:min-h-screen md:grid-cols-2">
        <div className="bg-[#201b17]">
          <img src="/oscar-desafio.png" alt="Oscar Ahumada — Numerology Expert" className="block h-auto w-full md:h-full md:object-cover md:object-center" />
        </div>
        <div className="flex items-center justify-center px-6 py-9 md:px-10 md:py-14 lg:px-14">
          <div className="w-full max-w-[520px] text-center">
            <h1 className="text-3xl font-extrabold leading-tight text-[#e3c17b] md:text-4xl lg:text-5xl">
              WHAT WILL YOUR BIGGEST CHALLENGES BE IN 2027?
            </h1>
            <form onSubmit={discoverChallenges} className="mt-8">
              <p className="mb-5 text-base font-bold text-[#e3c17b] sm:text-lg">ENTER THE DAY AND MONTH OF YOUR BIRTH</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="day-challenges" className="mb-2 block text-sm font-bold">DAY</label>
                  <input id="day-challenges" type="number" inputMode="numeric" min="1" max="31" placeholder="DD" value={day}
                    onChange={(event) => setDay(event.target.value)} className="w-full rounded-xl border border-[#bda16e] bg-white px-3 py-4 text-center text-xl font-bold text-[#29231d] outline-none focus:ring-2 focus:ring-[#d7b46c]" />
                </div>
                <div>
                  <label htmlFor="month-challenges" className="mb-2 block text-sm font-bold">MONTH</label>
                  <input id="month-challenges" type="number" inputMode="numeric" min="1" max="12" placeholder="MM" value={month}
                    onChange={(event) => setMonth(event.target.value)} className="w-full rounded-xl border border-[#bda16e] bg-white px-3 py-4 text-center text-xl font-bold text-[#29231d] outline-none focus:ring-2 focus:ring-[#d7b46c]" />
                </div>
              </div>
              <button type="submit" className="mt-5 w-full rounded-xl bg-[#d7b46c] px-5 py-4 text-base font-extrabold uppercase tracking-wide text-[#17130f] transition hover:bg-[#edce8e]">
                DISCOVER MY CHALLENGES
              </button>
              {error && <div role="alert" className="mt-4 rounded-lg bg-red-700 px-4 py-3 text-center text-sm font-semibold text-white">{error}</div>}
            </form>
          </div>
        </div>
      </section>
      {reading && (
        <section ref={resultRef} className="mx-auto max-w-[850px] scroll-mt-6 px-5 py-12">
          <div className="rounded-2xl border border-[#bda16e] bg-[#211b16] p-6 md:p-10">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-[#d7b46c]">Your 2027 Numerology Reading</p>
            <h2 className="mt-4 text-center text-3xl font-extrabold text-[#e3c17b]">PERSONAL YEAR {personalYear}</h2>
            <h3 className="mt-5 text-center text-xl font-bold">{reading.title}</h3>
            <p className="mt-6 leading-7 text-[#eee4d6]">{reading.overview}</p>
            <h4 className="mt-7 text-lg font-bold text-[#e3c17b]">YOUR 15 IMPORTANT GUIDELINES FOR 2027</h4>
            {areas.map((area, index) => (
              <div key={area} className="mt-6">
                <h5 className="text-base font-bold text-[#e3c17b]">{area}</h5>
                <ol className="mt-3 list-decimal space-y-3 pl-5 text-[#eee4d6]">
                  {reading.alerts[index].map((alert) => <li key={alert} className="leading-7">{alert}</li>)}
                </ol>
                {index === 2 && <div className="mt-4 rounded-xl border border-[#6d5739] bg-[#33291f] p-4">
                  <p className="font-bold text-[#e3c17b]">A REFLECTION FOR YOUR PERSONAL GROWTH</p>
                  <p className="mt-2 leading-7 text-[#eee4d6]">If you already have a Numerology Chart, this is a meaningful time to revisit it. If not, a personalized reading can help you explore your talents and challenges.</p>
                  <p className="mt-3 leading-7 text-[#eee4d6]">{reading.reflection}</p>
                </div>}
              </div>
            ))}
            <div className="mt-7 rounded-xl bg-[#33291f] p-5">
              <h4 className="font-bold text-[#e3c17b]">ADVICE FROM OSCAR AHUMADA</h4>
              <p className="mt-3 leading-7">{reading.advice}</p>
            </div>
            <div className="mt-9 border-t border-[#6d5739] pt-8 text-center">
              <p className="mb-6 text-base leading-7 text-[#eee4d6]">You have just explored 15 important guidelines for 2027. A Complete Personal Numerology Chart offers a deeper interpretation of your talents, challenges, and personal tendencies, helping you reflect on your choices with greater awareness.</p>
              <h4 className="text-center text-2xl font-extrabold text-[#e3c17b]">SPECIAL OFFER FOR YOU!</h4>
              <p className="mt-3 text-center text-sm text-[#eee4d6]">Available to readers of this personalized numerology result.</p>
              {offers.map((offer) => (
                <div key={offer.title} className="mt-5 rounded-xl border border-[#6d5739] bg-[#33291f] p-5 text-center">
                  <h5 className="text-base font-extrabold text-white">{offer.title}</h5>
                  <p className="mt-2 text-sm text-[#eee4d6]">{offer.detail}</p>
                  <p className="mt-4 text-3xl font-extrabold text-[#e3c17b]">{offer.price}</p>
                  <a href={`https://wa.me/5531972159908?text=${encodeURIComponent(offer.message)}`} target="_blank" rel="noopener noreferrer"
                    className="mt-5 block rounded-xl bg-[#16803d] px-4 py-4 text-center text-sm font-extrabold text-white transition hover:bg-[#116632]">
                    {offer.button} — WHATSAPP
                  </a>
                  <OfferCountdown seconds={secondsLeft} />
                </div>
              ))}
              <p className="mt-5 text-sm text-[#c9b9a4]">Oscar Ahumada — Numerology Expert</p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
