import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { cn } from "@/lib/utils";

export default function MissionVision() {
  return (
    <section id="missionvission" className="w-full py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative rounded-3xl border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-12 gap-6 p-6 md:p-10 lg:p-12">
            {/* Left visuals */}
            <div className="col-span-12 md:col-span-3 flex flex-col gap-6">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-100 relative">
                <Image
                  src="/images/mission/mission.png"
                  alt="Team working in hallway"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="hidden md:block aspect-[4/3] w-9/12 overflow-hidden rounded-xl bg-zinc-100 relative">
                <Image
                src="/images/mission/mission2.png"
                  alt="Happy team"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>
            </div>

            {/* Center text */}
            <div className="col-span-12 md:col-span-6 flex items-center">
              <div>
                <h2 className="text-3xl leading-tight md:text-5xl font-semibold tracking-tight text-zinc-900">
                  Where Creativity
                  <br />
                  Meets Cutting-
                  <br />
                  Edge Technology
                </h2>
                <p className="mt-5 max-w-xl text-sm md:text-[15px] leading-relaxed text-zinc-500">
                  We believe in the power of creativity to transform ideas into impactful digital experiences. Founded with a passion for
                  innovation, we are a team of visionary creators, strategic thinkers, and tech-savvy professionals dedicated to bringing your brand’s
                  story to life in the digital realm.
                </p>
              </div>
            </div>

            {/* Right visuals */}
            <div className="col-span-12 md:col-span-3 flex flex-col items-end gap-6">
              <div className="aspect-[4/5] w-8/12 md:w-full overflow-hidden rounded-xl bg-zinc-100 relative">
                <Image
                 src="/images/mission/mission2.png"
                  alt="Coworking"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="hidden md:block aspect-[4/3] w-8/12 overflow-hidden rounded-xl bg-zinc-100 relative">
                <Image
               src="/images/mission/mission.png"
                  alt="Workshop"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>
            </div>
          </div>

          {/* Subtle radial motif at bottom center */}
          <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center opacity-15">
            <div className="h-28 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(0,0,0,0.08),transparent_60%)]" />
          </div>
        </div>
      </div>

      {/* Secondary section like in design */}
      <div className="mx-auto mt-10 md:mt-14 max-w-6xl px-4 md:px-6">
        <div className="rounded-3xl border border-black/5 bg-white p-6 md:p-10 lg:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)]">
          <h3 className="text-xl md:text-2xl font-semibold text-zinc-900">Our Vision</h3>
          <p className="mt-4 max-w-2xl text-sm md:text-[15px] leading-relaxed text-zinc-600">
            We aim to innovate and create impactful digital experiences that empower brands to succeed and connect meaningfully with their
            audiences in a dynamic digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
}