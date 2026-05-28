import React, { useState } from 'react';

// =========================================
// INTERNAL CONTROLS SURVIVOR
// =========================================

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
  // SCENARIOS
  // =========================================
  const scenarios = [

    // =====================================
    // PROCUREMENT
    // =====================================
    {
      title: 'Internal Controls Survivor — Procurement Chaos',
      agency: 'Department of Extremely Important Purchasing',
      comic: '/assets/comics/executive-chaos.png',
      badge: 'PROCUREMENT',

      story: `
A contracting officer approves a $4.2 million invoice.

Three minutes later someone notices:
• the vendor name is misspelled
• the invoice already appeared last month
• the approving official is currently on vacation in Aruba

Meanwhile, your Deputy CFO quietly whispers:
"Please tell me someone reviewed this."
      `,

      spouse:
        'The fictional agency director begins stress-eating trail mix directly from the container.',

      dog:
        'The office support dog senses audit risk and leaves the room immediately.',

      question:
        'Which control would BEST reduce this risk?',

      choices: [
        {
          text: 'Independent invoice review and 3-way match before payment approval',
          correct: true,
          assertion: 'Accuracy / Occurrence'
        },

        {
          text: 'Allow approvers to verbally certify invoices',
          correct: false,
          assertion: 'No meaningful control activity'
        },

        {
          text: 'Increase motivational posters in Accounts Payable',
          correct: false,
          assertion: 'Absolutely not COSO compliant'
        }
      ]
    },

    // =====================================
    // PAYROLL
    // =====================================
    {
      title: 'Internal Controls Survivor — Payroll Nightmare',
      agency: 'Bureau of Administrative Turbulence',
      comic: '/assets/comics/payroll-disaster.png',
      badge: 'PAYROLL',

      story: `
An employee appears on payroll records despite retiring 14 months ago.

Oddly, they also received:
• three retention bonuses
• two travel reimbursements
• access to the building gym

Nobody is entirely sure who owns payroll reconciliation responsibilities.
      `,

      spouse:
        'The HR Director stares silently into the distance like a Vietnam flashback just started.',

      dog:
        'The office dog refuses direct eye contact with Accounting.',

      question:
        'Which assertion is MOST at risk?',

      choices: [
        {
          text: 'Occurrence / Validity',
          correct: true,
          assertion: 'Occurrence'
        },

        {
          text: 'Presentation',
          correct: false,
          assertion: 'Incorrect assertion'
        },

        {
          text: 'Color coordination',
          correct: false,
          assertion: 'Not recognized by GAO'
        }
      ]
    },

    // =====================================
    // ACCESS CONTROL
    // =====================================
    {
      title: 'Internal Controls Survivor — Access Control Disaster',
      agency: 'Federal Office of Questionable Technology Decisions',
      comic: '/assets/comics/intern-admin.png',
      badge: 'IT ACCESS',

      story: `
An intern accidentally receives administrator access
to a financial reporting system.

Nobody notices for six weeks.

The intern mainly uses the power responsibly
except for renaming several production servers after Marvel characters.
      `,

      spouse:
        'The CIO begins using phrases like “career limiting event.”',

      dog:
        'The office dog barks every time someone says “shared password.”',

      question:
        'What is the BEST preventive control?',

      choices: [
        {
          text: 'Role-based access approvals with quarterly reviews',
          correct: true,
          assertion: 'Authorization'
        },

        {
          text: 'Hope nobody notices',
          correct: false,
          assertion: 'Weak control environment'
        },

        {
          text: 'Give everyone admin access equally',
          correct: false,
          assertion: 'Chaos framework'
        }
      ]
    },

    // =====================================
    // TRAVEL
    // =====================================
    {
      title: 'Internal Controls Survivor — Travel Voucher Incident',
      agency: 'National Administration of Reimbursable Activities',
      comic: '/assets/comics/terrified-office-dog.png',
      badge: 'TRAVEL',

      story: `
A travel voucher claims:
• $942 for airport snacks
• $611 for taxi rides
• one receipt simply labeled:
  “emotional support burrito”

The approving official signs everything in under seven seconds.
      `,

      spouse:
        'The finance office collectively enters the bargaining stage of grief.',

      dog:
        'The office dog hears the word reimbursement and hides under a desk.',

      question:
        'Which control activity is MOST appropriate?',

      choices: [
        {
          text: 'Detailed supervisory review of supporting documentation',
          correct: true,
          assertion: 'Accuracy'
        },

        {
          text: 'Approve faster to improve morale',
          correct: false,
          assertion: 'Material weakness'
        },

        {
          text: 'Replace receipts with handwritten promises',
          correct: false,
          assertion: 'Catastrophically noncompliant'
        }
      ]
    }
  ];

  // =========================================
  // RANDOM START
  // =========================================
  const randomScenario =
    scenarios[Math.floor(Math.random() * scenarios.length)];

  const [scenario, setScenario] = useState(randomScenario);

  // =========================================
  // SCORE
  // =========================================
  const [score, setScore] = useState({
    correct: 0,
    incorrect: 0
  });

  const [result, setResult] = useState(null);

  // =========================================
  // ANSWER ENGINE
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

The selected control appropriately addresses the identified risk and supports the related assertion.

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

The OIG would like a word.

This response would likely result in:
• audit findings
• remediation meetings
• uncomfortable Congressional questions

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

    <div
      className="min-h-screen bg-cover bg-center text-white p-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(2,6,23,0.92), rgba(2,6,23,0.95)), url('/assets/backgrounds/control-room.jpg')"
      }}
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ================================= */}
        {/* MAIN STORY PANEL */}
        {/* ================================= */}
        <div className="backdrop-blur-xl bg-slate-900/80 border border-cyan-500/20 rounded-[32px] p-8 shadow-2xl flex flex-col min-h-[780px]">

          {/* HEADER */}
          <div className="mb-8">

            <div className="inline-flex items-center bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-bold tracking-widest mb-4">
              {scenario.badge}
            </div>

            <h1 className="text-5xl font-black leading-tight text-white mb-4">
              {scenario.title}
            </h1>

            <div className="text-slate-400 text-lg">
              Agency: {scenario.agency}
            </div>

          </div>

          {/* STORY BOX */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-3xl p-7 mb-6 shadow-xl">

            <div className="text-slate-100 whitespace-pre-line leading-9 text-xl">
              {scenario.story}
            </div>

          </div>

          {/* EXECUTIVE REACTION */}
          <div className="bg-purple-500/10 border border-purple-400/30 rounded-3xl p-5 mb-4">

            <div className="text-purple-300 font-black tracking-wide mb-2">
              😬 EXECUTIVE REACTION
            </div>

            <div className="text-slate-300 leading-7">
              {scenario.spouse}
            </div>

          </div>

          {/* DOG STATUS */}
          <div className="bg-blue-500/10 border border-blue-400/30 rounded-3xl p-5 mb-8">

            <div className="text-blue-300 font-black tracking-wide mb-2">
              🐶 OFFICE DOG STATUS
            </div>

            <div className="text-slate-300 leading-7">
              {scenario.dog}
            </div>

          </div>

          {/* QUESTION */}
          <div className="text-3xl font-black text-yellow-300 mb-8 leading-tight">
            {scenario.question}
          </div>

          <div className="flex-grow"></div>

          {/* RESULT PANEL */}
          {result && (
            <div className={`rounded-3xl p-6 mb-6 border shadow-lg
              ${result.success
                ? 'bg-green-500/10 border-green-400/40'
                : 'bg-red-500/10 border-red-400/40'}
            `}>

              <div className="whitespace-pre-line leading-8 text-slate-100 text-lg">
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
                  className="w-full text-left p-6 rounded-3xl border border-slate-600 bg-slate-800/80 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 hover:scale-[1.01] shadow-lg"
                >

                  <div className="text-xl font-bold text-white">
                    {choice.text}
                  </div>

                </button>

              ))}

            </div>

          ) : (

            <button
              onClick={nextScenario}
              className="w-full p-6 bg-cyan-500 hover:bg-cyan-400 rounded-3xl font-black text-xl tracking-wide transition-all duration-300 hover:scale-[1.01] shadow-2xl"
            >
              NEXT SCENARIO
            </button>

          )}

        </div>

        {/* ================================= */}
        {/* VISUAL PANEL */}
        {/* ================================= */}
        <div className="backdrop-blur-xl bg-slate-900/80 border border-cyan-500/20 rounded-[32px] p-8 shadow-2xl flex flex-col items-center justify-center min-h-[780px]">

          {/* IMAGE */}
          <div className="relative mb-10">

            <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>

            <img
              src={scenario.comic}
              alt="comic"
              className="relative z-10 w-full max-w-lg object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.35)] animate-float"
            />

          </div>

          {/* SCORE CARDS */}
          <div className="grid grid-cols-2 gap-5 w-full max-w-lg">

            <div className="bg-slate-800/80 border border-green-400/20 rounded-3xl p-6 text-center shadow-xl">

              <div className="text-5xl font-black text-green-300 mb-2">
                {score.correct}
              </div>

              <div className="text-slate-400 tracking-widest text-sm font-bold">
                CONTROLS SAVED
              </div>

            </div>

            <div className="bg-slate-800/80 border border-red-400/20 rounded-3xl p-6 text-center shadow-xl">

              <div className="text-5xl font-black text-red-300 mb-2">
                {score.incorrect}
              </div>

              <div className="text-slate-400 tracking-widest text-sm font-bold">
                AUDIT FINDINGS
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
