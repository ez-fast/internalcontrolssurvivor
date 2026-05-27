import React, { useState } from 'react';

export default function InternalControlsSurvivor() {

  // =========================================
  // SOUND ENGINE
  // =========================================
  const sound = {
    click: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
    success: 'https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3',
    fail: 'https://assets.mixkit.co/active_storage/sfx/209/209-preview.mp3',
  };

  const play = (type) => {
    const audio = new Audio(sound[type]);
    audio.volume = 0.3;
    audio.play().catch(() => {});
  };

  // =========================================
  // RANDOM SCENARIOS
  // =========================================
  const scenarios = [

    // =====================================
    // PROCUREMENT
    // =====================================
    {
      title: "Internal Controls Survivor — Procurement Chaos",
      agency: "Department of Extremely Important Purchasing",
      comic: "/images/angry-spouse.png",

      story: `
A contracting officer approves a $4.2 million invoice.

Three minutes later someone notices:
the vendor name is misspelled,
the invoice number already appeared last month,
and the approving official is currently on vacation in Aruba.

Meanwhile, your Deputy CFO quietly whispers:
'Please tell me someone reviewed this.'
      `,

      spouse:
        "Your fictional federal agency director begins stress-eating trail mix directly from the container.",

      dog:
        "The office support dog senses audit risk and leaves the room.",

      question:
        "Which control would BEST reduce this risk?",

      choices: [
        {
          text: "Independent invoice review and 3-way match before payment approval",
          correct: true,
          assertion: "Accuracy / Occurrence"
        },

        {
          text: "Allow approvers to self-certify invoices verbally",
          correct: false,
          assertion: "No control"
        },

        {
          text: "Increase office motivational posters",
          correct: false,
          assertion: "Absolutely not COSO compliant"
        }
      ]
    },

    // =====================================
    // PAYROLL
    // =====================================
    {
      title: "Internal Controls Survivor — Payroll Nightmare",
      agency: "Bureau of Administrative Turbulence",
      comic: "/images/exploding-pipe.png",

      story: `
An employee appears on payroll records despite retiring 14 months ago.

Oddly, they also received:
three retention bonuses,
two travel reimbursements,
and access to the building gym.

Nobody is entirely sure who owns payroll reconciliation responsibilities.
      `,

      spouse:
        "The HR Director stares silently into the distance like a Vietnam flashback just started.",

      dog:
        "The office dog refuses direct eye contact with Accounting.",

      question:
        "Which assertion is MOST at risk?",

      choices: [
        {
          text: "Occurrence / Validity",
          correct: true,
          assertion: "Occurrence"
        },

        {
          text: "Presentation",
          correct: false,
          assertion: "Incorrect"
        },

        {
          text: "Color coordination",
          correct: false,
          assertion: "Not GAO approved"
        }
      ]
    },

    // =====================================
    // IT ACCESS
    // =====================================
    {
      title: "Internal Controls Survivor — Access Control Disaster",
      agency: "Federal Office of Questionable Technology Decisions",
      comic: "/images/plumber-cartoon.png",

      story: `
An intern accidentally receives administrator access
to a financial reporting system.

Nobody notices for six weeks.

The intern mainly uses the power responsibly
except for renaming several production servers after Marvel characters.
      `,

      spouse:
        "The CIO begins using phrases like 'career limiting event.'",

      dog:
        "The office dog barks every time someone says 'shared password.'",

      question:
        "What is the BEST preventive control?",

      choices: [
        {
          text: "Role-based access approvals with quarterly reviews",
          correct: true,
          assertion: "Authorization"
        },

        {
          text: "Hope nobody notices",
          correct: false,
          assertion: "Weak control environment"
        },

        {
          text: "Give everyone admin access equally",
          correct: false,
          assertion: "Chaos framework"
        }
      ]
    },

    // =====================================
    // TRAVEL
    // =====================================
    {
      title: "Internal Controls Survivor — Travel Voucher Incident",
      agency: "National Administration of Reimbursable Activities",
      comic: "/images/terrified-dog.png",

      story: `
A travel voucher claims:
$942 for airport snacks,
$611 for taxi rides,
and one receipt simply labeled:
'emotional support burrito.'

The approving official signs everything in under seven seconds.
      `,

      spouse:
        "The finance office collectively enters the bargaining stage of grief.",

      dog:
        "The office dog hears the word 'reimbursement' and hides under a desk.",

      question:
        "Which control activity is MOST appropriate?",

      choices: [
        {
          text: "Detailed supervisory review of supporting documentation",
          correct: true,
          assertion: "Accuracy"
        },

        {
          text: "Approve faster to improve morale",
          correct: false,
          assertion: "Material weakness"
        },

        {
          text: "Replace receipts with handwritten promises",
          correct: false,
          assertion: "Catastrophically noncompliant"
        }
      ]
    }
  ];

  // =========================================
  // RANDOMIZE START
  // =========================================
  const randomScenario =
    scenarios[Math.floor(Math.random() * scenarios.length)];

  const [scenario, setScenario] = useState(randomScenario);

  // =========================================
  // GAME STATE
  // =========================================
  const [result, setResult] = useState(null);

  const [score, setScore] = useState({
    correct: 0,
    incorrect: 0
  });

  // =========================================
  // CHOICE ENGINE
  // =========================================
  const chooseAnswer = (choice) => {

    play('click');

    if (choice.correct) {

      play('success');

      setScore(prev => ({
        ...prev,
        correct: prev.correct + 1
      }));

      setResult({
        success: true,
        text: `
CONTROL EFFECTIVE

Excellent work.

The control properly addresses the risk and supports the relevant assertion.

Assertion:
${choice.assertion}
        `
      });

    } else {

      play('fail');

      setScore(prev => ({
        ...prev,
        incorrect: prev.incorrect + 1
      }));

      setResult({
        success: false,
        text: `
CONTROL FAILURE

OIG would like a word.

This response would likely result in:
- audit findings
- management comments
- painful remediation meetings

Assertion impact:
${choice.assertion}
        `
      });
    }
  };

  // =========================================
  // NEXT SCENARIO
  // =========================================
  const nextScenario = () => {

    const newScenario =
      scenarios[Math.floor(Math.random() * scenarios.length)];

    setScenario(newScenario);

    setResult(null);
  };

  // =========================================
  // MAIN UI
  // =========================================
  return (

    <div className="min-h-screen bg-slate-950 text-white p-6 flex items-center justify-center">

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ================================= */}
        {/* MAIN PANEL */}
        {/* ================================= */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 flex flex-col min-h-[750px]">

          {/* TITLE */}
          <h1 className="text-4xl font-black text-cyan-400 mb-3">
            {scenario.title}
          </h1>

          {/* AGENCY */}
          <div className="text-slate-400 mb-6">
            Agency: {scenario.agency}
          </div>

          {/* STORY */}
          <div className="bg-slate-800/70 rounded-2xl p-6 mb-6">

            <div className="text-slate-200 whitespace-pre-line leading-8 text-lg">
              {scenario.story}
            </div>

          </div>

          {/* SPOUSE */}
          <div className="bg-purple-500/10 border border-purple-400 rounded-2xl p-4 mb-4">

            <div className="text-purple-300 font-bold mb-2">
              😬 EXECUTIVE REACTION
            </div>

            <div className="text-slate-300 text-sm">
              {scenario.spouse}
            </div>

          </div>

          {/* DOG */}
          <div className="bg-blue-500/10 border border-blue-400 rounded-2xl p-4 mb-6">

            <div className="text-blue-300 font-bold mb-2">
              🐶 OFFICE DOG STATUS
            </div>

            <div className="text-slate-300 text-sm">
              {scenario.dog}
            </div>

          </div>

          {/* QUESTION */}
          <div className="text-2xl font-black text-yellow-300 mb-6">
            {scenario.question}
          </div>

          {/* PUSH CONTENT */}
          <div className="flex-grow"></div>

          {/* RESULT */}
          {result && (

            <div className={`rounded-2xl p-5 mb-6 border
              ${result.success
                ? 'bg-green-500/10 border-green-400'
                : 'bg-red-500/10 border-red-400'}
            `}>

              <div className="whitespace-pre-line leading-7 text-slate-200">
                {result.text}
              </div>

            </div>
          )}

          {/* BUTTONS */}
          {!result ? (

            <div className="space-y-4">

              {scenario.choices.map((choice, i) => (

                <button
                  key={i}
                  onClick={() => chooseAnswer(choice)}
                  className="w-full p-5 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-2xl text-left font-bold text-lg transition-all duration-200 hover:scale-[1.01]"
                >
                  {choice.text}
                </button>

              ))}

            </div>

          ) : (

            <button
              onClick={nextScenario}
              className="w-full p-5 bg-cyan-600 hover:bg-cyan-500 rounded-2xl font-black text-lg transition-all duration-200"
            >
              NEXT SCENARIO
            </button>

          )}

        </div>

        {/* ================================= */}
        {/* COMIC PANEL */}
        {/* ================================= */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[750px]">

          <img
            src={scenario.comic}
            alt="comic"
            className="w-full max-w-md object-contain animate-float"
          />

          {/* SCORE */}
          <div className="mt-10 w-full max-w-sm">

            <div className="bg-slate-800 rounded-2xl p-5 mb-4 text-center">

              <div className="text-green-300 text-4xl font-black">
                {score.correct}
              </div>

              <div className="text-slate-400 text-sm">
                CONTROLS SAVED
              </div>

            </div>

            <div className="bg-slate-800 rounded-2xl p-5 text-center">

              <div className="text-red-300 text-4xl font-black">
                {score.incorrect}
              </div>

              <div className="text-slate-400 text-sm">
                AUDIT FINDINGS
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}