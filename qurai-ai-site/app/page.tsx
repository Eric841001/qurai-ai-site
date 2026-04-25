import { ArrowRight, ShieldCheck, BrainCircuit, Network, Layers3 } from "lucide-react";

const solutions = [
  {
    title: "Executive AI Agent",
    desc: "Executives can summarize priorities, risks, KPIs, meetings, and strategic decisions through secure AI agents.",
  },
  {
    title: "Enterprise Knowledge AI",
    desc: "AI-powered reasoning across documents, policies, proposals, internal knowledge, and business data.",
  },
  {
    title: "Proposal & Sales AI",
    desc: "Accelerate RFP responses, proposals, pricing logic, executive documents, and sales workflows.",
  },
  {
    title: "Security & Compliance AI",
    desc: "AI-enabled governance, audit readiness, data protection, and secure collaboration controls.",
  },
];

const strengths = [
  ["Enterprise-first", "Built for real business environments, not demos."],
  ["Secure by design", "Access control, governance, and data protection from day one."],
  ["Decision-oriented", "Focused on outcomes, not just automation."],
  ["Cloud-native", "Designed for modern enterprise AI integration."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute right-[-10%] top-[30%] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
      </div>

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg font-semibold shadow-[0_0_40px_rgba(47,107,255,0.35)]">
            Q
          </div>
          <div className="tracking-[0.35em] text-sm font-semibold">QURAI.AI</div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#solutions" className="hover:text-white">Solutions</a>
          <a href="#architecture" className="hover:text-white">Intelligence</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white backdrop-blur hover:bg-white/10"
        >
          Contact
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-20 lg:grid-cols-2 lg:pt-28">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs tracking-[0.25em] text-blue-200">
            DECISION INTELLIGENCE
          </div>

          <h1 className="max-w-4xl text-6xl font-semibold tracking-[-0.06em] text-white md:text-8xl">
            AI THAT
            <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-500 bg-clip-text text-transparent">
              DECIDES.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            QURAI.AI builds enterprise AI systems that transform data, documents,
            knowledge, and workflows into decision intelligence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-medium text-white shadow-[0_0_50px_rgba(47,107,255,0.45)] hover:bg-blue-500"
            >
              Start a Conversation
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm text-white hover:bg-white/10"
            >
              Explore Intelligence
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-[520px] w-full max-w-[520px]">
          <div className="absolute inset-0 rounded-full border border-blue-400/20 bg-blue-500/5 shadow-[0_0_120px_rgba(47,107,255,0.25)]" />
          <div className="absolute inset-16 rounded-full border border-white/10" />
          <div className="absolute inset-32 rounded-full border border-cyan-300/20" />

          <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.06] text-8xl font-semibold backdrop-blur-xl">
            Q
          </div>

          {[
            ["top-8 left-1/2 -translate-x-1/2", BrainCircuit],
            ["right-8 top-1/2 -translate-y-1/2", Network],
            ["bottom-8 left-1/2 -translate-x-1/2", ShieldCheck],
            ["left-8 top-1/2 -translate-y-1/2", Layers3],
          ].map(([pos, Icon]: any, i) => (
            <div
              key={i}
              className={`absolute ${pos} flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl`}
            >
              <Icon className="text-blue-300" size={26} />
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-8 text-center text-xs tracking-[0.22em] text-slate-400 md:grid-cols-5">
          <div>ENTERPRISE AI</div>
          <div>SECURE BY DESIGN</div>
          <div>DECISION INTELLIGENCE</div>
          <div>CLOUD NATIVE</div>
          <div>EXECUTIVE READY</div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            From Query
            <span className="block text-blue-400">to Decision.</span>
          </h2>
          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>
              QURAI.AI is built for organizations that need more than AI experiments.
              We design and implement AI systems that connect enterprise knowledge,
              business processes, and secure cloud architecture into practical decision
              intelligence.
            </p>
            <p>
              Our work focuses on measurable business outcomes: faster decisions,
              stronger governance, secure automation, and scalable AI adoption.
            </p>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <p className="mb-3 text-sm tracking-[0.25em] text-blue-300">SOLUTIONS</p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Intelligence systems for enterprise work.
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition hover:border-blue-400/40 hover:bg-white/[0.07]"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{item.desc}</p>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-blue-500/60 to-transparent" />
            </div>
          ))}
        </div>
      </section>

      <section id="architecture" className="mx-auto max-w-7xl px-6 py-28">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-12">
          <p className="mb-4 text-sm tracking-[0.25em] text-blue-300">ARCHITECTURE</p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em]">
            Secure AI orchestration for decision outcomes.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {["Data / Documents / Systems", "Secure AI Orchestration", "Decision Intelligence", "Business Outcomes"].map((step, i) => (
              <div key={step} className="relative rounded-2xl border border-white/10 bg-black/20 p-6">
                <div className="mb-6 text-sm text-blue-300">0{i + 1}</div>
                <div className="text-lg font-medium">{step}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
            {["Microsoft 365", "Azure AI", "Enterprise Data", "Knowledge Base", "AI Agents", "Governance Layer"].map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 px-4 py-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-4">
          {strengths.map(([title, desc]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-32 text-center">
        <h2 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Build the AI decision layer for your enterprise.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          Start with one high-impact use case. Scale into an enterprise intelligence platform.
        </p>
        <a
          href="mailto:contact@qurai.ai"
          className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-medium text-black hover:bg-blue-100"
        >
          Contact QURAI.AI
        </a>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-slate-500 md:flex-row">
          <div>
            <div className="tracking-[0.35em] text-white">QURAI.AI</div>
            <div className="mt-2">AI THAT DECIDES.</div>
          </div>
          <div>© 2026 QURAI.AI. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
