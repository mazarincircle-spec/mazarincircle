import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const [portalOpen, setPortalOpen] = useState(false);
  const [status, setStatus] = useState("");

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      );

      setStatus("Request submitted successfully.");
      formRef.current.reset();
    } catch (error) {
      setStatus("Submission failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover scale-110"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0B0F1A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,168,91,0.14),transparent_35%)]" />

        <header className="absolute left-0 right-0 top-0 z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-gradient-to-r from-[#C6A85B] to-[#8F6B2E]" />
              <img
                src="/mazarin-logo.png"
                alt="Mazarin Capital"
                className="h-8 object-contain opacity-90"
              />
            </div>

            <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
              <a href="#framework" className="hover:text-white">
                Framework
              </a>
              <a href="#submission" className="hover:text-white">
                Engagement
              </a>
              <a href="#consortium" className="hover:text-white">
                Consortium
              </a>
              <a href="#contact" className="hover:text-white">
                Access
              </a>
            </nav>
          </div>
        </header>

        <div className="relative z-10 max-w-5xl">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-white/80 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#C6A85B]" />
            Invitation Only • Limited Admissions Annually • Limited seats allocated
          </div>

          <h1 className="text-5xl font-light tracking-[0.02em] md:text-7xl lg:text-8xl">
            Mazarin Capital
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            Institutional Capital • Sovereign Mandates • Strategic Assets
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            Engaged in transactions exceeding $100M–$1B+ across global markets.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
            Private capital. Sovereign relationships. By invitation only.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-xs uppercase tracking-[0.22em] text-white/50 md:text-sm">
            Strategic Presence Across Asia • Americas • Africa
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-[11px] uppercase tracking-[0.2em] text-white/35">
            Aligned with strategic corridors and emerging market infrastructure
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-white px-7 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Request Access
            </a>

            <a
              href="#submission"
              className="rounded-lg border border-white/30 bg-white/5 px-7 py-3 text-sm text-white transition hover:bg-white hover:text-black"
            >
              Submit for Review
            </a>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C6A85B]">
              Restricted Materials
            </p>

            <p className="mt-2 text-sm text-white/70">
              Confidential materials and private portal access are available
              upon approval. All engagements are conducted under strict
              confidentiality.
            </p>

            <div className="mt-4">
              <button
                type="button"
                onClick={() => setPortalOpen(true)}
                className="text-xs uppercase tracking-widest text-[#C6A85B] transition hover:opacity-80"
              >
                Enter Private Portal
              </button>

              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/35">
                Access is not guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="framework" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-light">
          Mandate & Execution
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Sovereign Engagement",
              copy: "Ministries, DFIs, multilaterals: we align mandates with bankable project formats.",
            },
            {
              title: "Capital Structuring",
              copy: "Project finance stacks, blended capital, and offtake-tied facilities.",
            },
            {
              title: "Risk & Compliance",
              copy: "Political risk, ESG diligence, and transparent procurement that survives audits.",
            },
            {
              title: "Delivery & PMO",
              copy: "Owner’s rep, EPC oversight, and KPI-driven PMO for on-time, on-budget execution.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-left transition hover:-translate-y-1 hover:border-[#C6A85B]/40"
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="submission" className="bg-[#111827] px-6 py-24">
        <div className="mx-auto max-w-5xl text-left">
          <h2 className="mb-6 text-center text-3xl font-light">
            Project Submission & Fees
          </h2>

          <p className="mx-auto max-w-3xl text-center leading-relaxed text-gray-300">
            Engagements with Mazarin Capital are invitation-only. If you have
            been referred or believe there is a strategic fit, you may request a
            review. All submissions are evaluated for mandate alignment,
            strategic fit, and confidentiality. Minimum project value
            $100,000,000.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-medium">Financing Review</h3>
              <p className="mt-2 text-white">$20,000 Review Fee</p>
              <p className="mt-3 text-sm text-gray-400">
                For projects seeking financing review. Non-refundable. Includes
                screening of materials, initial risk and bankability assessment,
                and a short recommendation memo.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li>• Eligibility: referral or existing relationship preferred</li>
                <li>
                  • Required: executive summary, financial model, permits/status,
                  offtake/inputs
                </li>
                <li>• Turnaround: scoped upon receipt of complete materials</li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                Typical range: $10,000–$50,000 depending on complexity and
                volume. Review fee may be credited toward future engagement if
                approved for financing.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-medium">Readiness Consulting</h3>
              <p className="mt-2 text-gray-300">Preparation & Packaging</p>
              <p className="mt-3 text-sm text-gray-400">
                For projects not yet bankable. We provide scoping, document
                readiness, model standards, and data-room packaging.
                Consultation fees start at $20,000 and are determined after
                scope definition.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li>
                  • Deliverables may include: checklist, data-room index, model
                  template, risk register
                </li>
                <li>• Timeline & fee based on complexity and stage</li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                Consultation rates typically range between $500–$1000/hour, or
                retainer-based between $50,000–$150,000 depending on project
                scale.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="mb-4 text-2xl font-light">Completeness Checklist</h3>
            <p className="mb-6 text-sm text-gray-400">
              Required for Review — Submissions must include the following
              artifacts. Incomplete packages may be redirected to consultation.
            </p>

            <div className="grid gap-4 text-sm text-gray-300 md:grid-cols-2">
              {[
                "Executive Summary (problem, solution, ask)",
                "Sponsors & Stakeholders (owners, decision rights)",
                "Market/Needs Analysis (beneficiaries, demand)",
                "Technical Scope & Design (drawings/specs or SOW)",
                "Location & Permits (site control, licenses, approvals)",
                "Delivery Plan (timeline, milestones, EPC/O&M model)",
                "Financial Model (capex/opex, revenue, sensitivities)",
                "Capital Structure (equity, debt, guarantees, use of funds)",
                "Risk Register (technical, regulatory, FX, counterparty)",
                "ESG & Compliance (environmental, social, governance)",
                "Legal Documents (MOUs, concessions, contracts, IP)",
                "Data Room Link (read-only access, index)",
                "Team & Track Record (bios, prior projects)",
                "Contact Protocol (single point of contact)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-[#C6A85B]">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="rounded-lg bg-white px-8 py-3 text-black transition hover:opacity-90"
            >
              Request Access
            </a>
          </div>
        </div>
      </section>

      <section id="consortium" className="px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-3xl font-light">Mazarin Consortium</h2>
          <p className="mb-4 text-xs uppercase tracking-widest text-[#C6A85B]">
            Limited Admissions Annually • Capacity Constrained
          </p>
          <p className="mx-auto max-w-3xl leading-relaxed text-gray-300">
            A private alliance of elite financiers, investors, and strategists.
            Participation is selective and not all applicants are accepted.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur transition hover:scale-[1.02]">
            <h3 className="text-xl font-medium">Circle Tier</h3>
            <p className="mt-2 text-gray-300">Annual Fee: $1,000,000</p>
            <p className="mt-3 text-xs uppercase tracking-widest text-white/40">
              Admission subject to internal review
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-400">
              <li>• Quarterly intelligence briefings</li>
              <li>• Private invitations to select project reviews</li>
              <li>• Consortium portal access with curated deal flow</li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-block rounded-lg bg-white/10 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
            >
              Request Access
            </a>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-[#C6A85B] to-[#8F6B2E] p-8 text-left text-black shadow-2xl transition hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(198,168,91,0.35)]">
            <h3 className="text-xl font-semibold">Summit Tier</h3>
            <p className="mt-2">Annual Fee: $5,000,000</p>
            <p className="mt-3 text-xs uppercase tracking-widest text-black/60">
              Admission subject to internal review
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>• All Circle benefits</li>
              <li>• Annual closed-door retreat access</li>
              <li>• Priority co-investment review and referral privileges</li>
              <li>• Dedicated liaison for project introductions</li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-block rounded-lg bg-black px-5 py-2 text-sm text-white hover:opacity-90"
            >
              Request Access
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur transition hover:scale-[1.02]">
            <h3 className="text-xl font-medium">Sovereign Tier</h3>
            <p className="mt-2 text-gray-300">Annual Fee: $10,000,000</p>
            <p className="mt-3 text-xs uppercase tracking-widest text-white/40">
              Admission subject to internal review
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-400">
              <li>• All Summit benefits</li>
              <li>• Private advisory sessions with Mazarin Partners</li>
              <li>• First-look participation in major investment syndicates</li>
              <li>
                • Access to confidential intelligence briefings and roundtables
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-block rounded-lg border border-white/20 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
            >
              Request Access
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0B0F1A] px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl border-t border-white/10 pt-16">
          <h2 className="mb-6 text-3xl font-light">Request an Introduction</h2>
          <p className="leading-relaxed text-gray-300">
            Access is strictly by referral or approval. Mazarin Capital engages
            selectively with governments, family offices, and institutional
            investors. All inquiries are vetted and handled under strict
            confidentiality.
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C6A85B]">
              Preliminary Intake
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Provide minimal details for initial screening. Completion does not
              guarantee review.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-6">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  name="full_name"
                  className="rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm outline-none"
                  placeholder="Full Name"
                  required
                />
                <input
                  name="organization"
                  className="rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm outline-none"
                  placeholder="Organization"
                />
                <input
                  name="email"
                  type="email"
                  className="rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm outline-none md:col-span-2"
                  placeholder="Email"
                  required
                />
                <input
                  name="region"
                  className="rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm outline-none md:col-span-2"
                  placeholder="Jurisdiction / Region"
                />
                <textarea
                  name="message"
                  rows="3"
                  className="rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm outline-none md:col-span-2"
                  placeholder="Brief Description of Opportunity or Intent"
                  required
                />
              </div>

              <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                  Access is not guaranteed
                </span>

                <button
                  type="submit"
                  className="rounded-lg bg-white px-6 py-2 text-sm text-black transition hover:opacity-90"
                >
                  Submit Request
                </button>
              </div>

              {status && (
                <p className="mt-4 text-sm text-gray-300">{status}</p>
              )}
            </form>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            Offices: Hong Kong, Miami, Tokyo, Beverly Hills
          </div>
        </div>
      </section>

      {portalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-[#0A0D15] p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setPortalOpen(false)}
              className="absolute right-5 top-5 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60 transition hover:border-white/30 hover:text-white"
            >
              Close
            </button>

            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C6A85B]">
              Private Access Portal
            </p>

            <h2 className="mt-4 text-3xl font-light md:text-5xl">
              Restricted Environment
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              Access to private materials is restricted to approved partners and
              consortium participants. The environment below is a controlled
              preview only. Full access is granted at Mazarin Capital’s
              discretion.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                  Deal Flow Preview
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    "Strategic Port Expansion",
                    "Utility-Scale Energy Platform",
                    "Critical Minerals Corridor",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3"
                    >
                      <span className="text-sm text-white/55 blur-[1px]">
                        {item}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                        Locked
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                  Strategic Introductions
                </p>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  Approved applicants may be considered for curated
                  introductions, consortium briefings, and private materials.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="#contact"
                    onClick={() => setPortalOpen(false)}
                    className="block rounded-xl bg-white px-5 py-3 text-center text-sm font-medium text-black transition hover:opacity-90"
                  >
                    Request Credentials
                  </a>

                  <a
                    href="#contact"
                    onClick={() => setPortalOpen(false)}
                    className="block rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-center text-sm text-white/80 transition hover:border-white/30 hover:bg-white/[0.06]"
                  >
                    Request Introduction
                  </a>
                </div>

                <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/30">
                  Access is restricted. Approval is discretionary.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}