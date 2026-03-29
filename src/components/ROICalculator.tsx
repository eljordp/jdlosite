"use client";

import { useState } from "react";
import Link from "next/link";

interface SliderConfig {
  label: string;
  min: number;
  max: number;
  step: number;
  default: number;
  prefix?: string;
  suffix?: string;
}

interface ROIResult {
  label: string;
  calculate: (values: number[]) => string;
}

interface ROICalculatorProps {
  title?: string;
  subtitle?: string;
  sliders: SliderConfig[];
  results: ROIResult[];
  product: string;
}

export default function ROICalculator({ title, subtitle, sliders, results, product }: ROICalculatorProps) {
  const [values, setValues] = useState(sliders.map(s => s.default));

  const updateValue = (index: number, val: number) => {
    setValues(prev => {
      const next = [...prev];
      next[index] = val;
      return next;
    });
  };

  return (
    <section className="section-gap bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
          {title || "See Your ROI"}
        </p>
        <p className="text-text-secondary text-[15px] leading-relaxed max-w-[500px] mb-12">
          {subtitle || "Drag the sliders to match your business. See what this system would do for you."}
        </p>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
          {/* Sliders */}
          <div className="space-y-10">
            {sliders.map((slider, i) => (
              <div key={slider.label}>
                <div className="flex items-baseline justify-between mb-3">
                  <label className="text-[14px] font-medium">{slider.label}</label>
                  <span className="text-[18px] font-semibold font-mono tracking-tight">
                    {slider.prefix || ""}{values[i].toLocaleString()}{slider.suffix || ""}
                  </span>
                </div>
                <input
                  type="range"
                  min={slider.min}
                  max={slider.max}
                  step={slider.step}
                  value={values[i]}
                  onChange={(e) => updateValue(i, Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-text [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-text [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <div className="flex justify-between mt-1">
                  <span className="text-text-muted text-[11px] font-mono">{slider.prefix || ""}{slider.min.toLocaleString()}{slider.suffix || ""}</span>
                  <span className="text-text-muted text-[11px] font-mono">{slider.prefix || ""}{slider.max.toLocaleString()}{slider.suffix || ""}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          <div>
            <p className="text-text-muted text-[11px] tracking-[0.3em] uppercase font-mono mb-6">
              Your projected results
            </p>
            <div className="space-y-6 mb-10">
              {results.map((result) => (
                <div key={result.label} className="bg-bg rounded-xl border border-border p-6">
                  <p className="text-text-muted text-[11px] font-mono tracking-wider uppercase mb-2">
                    {result.label}
                  </p>
                  <p className="font-display text-[clamp(1.5rem,3vw,2.2rem)] tracking-[-0.03em] leading-none">
                    {result.calculate(values)}
                  </p>
                </div>
              ))}
            </div>
            <Link href={`/contact?product=${product}`} className="magnetic-btn">
              <span className="relative z-10">Get Started</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
