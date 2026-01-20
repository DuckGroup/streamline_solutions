'use client';

import React, { useEffect, useRef } from 'react';
import { Footer } from './components/footer';

interface Service {
  num: string;
  title: string;
  desc: string;
}

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

const StreamlineSolutions = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observeElements = document.querySelectorAll('.animate-on-scroll');
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    observeElements.forEach((el) => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'all 0.5s ease-out';
      observerRef.current?.observe(element);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = (): void => {
    alert(
      'Thanks for your interest! Reach us at: hello@streamlinesolutions.com or call us at +1 (555) 123-4567'
    );
  };

  const services: Service[] = [
    {
      num: '01',
      title: 'Web Development',
      desc: 'Modern websites that convert visitors into customers. Fast, responsive, and built to last.',
    },
    {
      num: '02',
      title: 'Custom Software',
      desc: 'Tailored solutions for unique business needs. We build exactly what you need, nothing more.',
    },
    {
      num: '03',
      title: 'Mobile Apps',
      desc: 'iOS and Android apps that people actually want to use. Intuitive, powerful, polished.',
    },
    {
      num: '04',
      title: 'API Development',
      desc: 'Connect your systems seamlessly. Clean, documented APIs that just work.',
    },
    {
      num: '05',
      title: 'Cloud Infrastructure',
      desc: 'Scalable, secure cloud solutions. We handle the tech so you can focus on growth.',
    },
    {
      num: '06',
      title: 'Tech Consulting',
      desc: 'Strategic advice without the corporate nonsense. Honest recommendations from people who build.',
    },
  ];

  const approachPoints: string[] = [
    'No account managers. You talk directly to the people building your product.',
    'Weekly updates, not monthly surprises. Youre always in the loop.',
    'Fixed-price projects available. Know exactly what youre paying upfront.',
    'Code quality matters. We build for the long term, not just launch day.',
  ];

  const processSteps: ProcessStep[] = [
    {
      num: 'STEP 1',
      title: 'Discovery Call',
      desc: 'We learn about your business and goals',
    },
    {
      num: 'STEP 2',
      title: 'Proposal & Planning',
      desc: 'Clear scope, timeline, and pricing',
    },
    {
      num: 'STEP 3',
      title: 'Build & Iterate',
      desc: 'Weekly sprints with constant feedback',
    },
    {
      num: 'STEP 4',
      title: 'Launch & Support',
      desc: 'Smooth deployment and ongoing help',
    },
  ];

  return (
    <div className="bg-[#fefdfb] text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-[4%] py-5 flex justify-between items-center z-50 bg-[#fefdfb]/85 backdrop-blur-xl border-b border-[#e8e5df]">
        <div className="text-lg font-semibold text-gray-900 tracking-tight">
          Streamline <span className="text-[#ff6b35]">Solutions</span>
        </div>
        <ul className="hidden md:flex gap-10 list-none">
          <li>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-600 text-sm font-medium hover:text-[#ff6b35] transition-colors"
            >
              What we do
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('approach')}
              className="text-gray-600 text-sm font-medium hover:text-[#ff6b35] transition-colors"
            >
              How we work
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 text-sm font-medium hover:text-[#ff6b35] transition-colors"
            >
              Get in touch
            </button>
          </li>
        </ul>
        <button
          onClick={() => scrollToSection('contact')}
          className="px-6 py-2.5 bg-[#ff6b35] text-white rounded-md font-semibold text-sm hover:bg-[#f55a24] hover:-translate-y-0.5 transition-all"
        >
          Let&apos;s talk
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-[4%] max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div>
            <h1 className="text-6xl leading-tight font-bold text-gray-900 mb-6 tracking-tight">
              We build{' '}
              <span className="text-[#ff6b35] relative inline-block">
                software
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#ff6b35]/15 -z-10"></span>
              </span>{' '}
              that actually works for your business
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              No fluff, no buzzwords. Just well-crafted websites, custom
              software, and digital solutions built by people who care about
              getting it right.
            </p>
            <div className="flex gap-4 items-center mb-12">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-[#ff6b35] text-white rounded-lg font-semibold hover:bg-[#f55a24] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,107,53,0.25)] transition-all"
              >
                Start a project
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-transparent text-gray-900 border-2 border-[#d4d1c9] rounded-lg font-semibold hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all"
              >
                See what we do
              </button>
            </div>
            <div className="flex gap-12 pt-8 mt-12 border-t border-[#e8e5df]">
              <div className="animate-on-scroll">
                <h3 className="text-4xl text-[#ff6b35] font-bold mb-1">Fast</h3>
                <p className="text-gray-600 text-sm">2-week sprints</p>
              </div>
              <div className="animate-on-scroll">
                <h3 className="text-4xl text-[#ff6b35] font-bold mb-1">
                  Reliable
                </h3>
                <p className="text-gray-600 text-sm">On-time delivery</p>
              </div>
              <div className="animate-on-scroll">
                <h3 className="text-4xl text-[#ff6b35] font-bold mb-1">
                  Personal
                </h3>
                <p className="text-gray-600 text-sm">Direct access</p>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="hidden md:block relative h-[500px]">
            <div className="absolute top-5 right-10 w-60 bg-white rounded-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#e8e5df] animate-[float1_6s_ease-in-out_infinite]">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-base font-semibold text-gray-900 mb-1">
                Real-time Analytics
              </div>
              <div className="text-sm text-gray-500">Track what matters</div>
            </div>
            <div className="absolute bottom-20 left-5 w-52 bg-white rounded-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#e8e5df] animate-[float2_7s_ease-in-out_infinite]">
              <div className="text-3xl mb-2">🔒</div>
              <div className="text-base font-semibold text-gray-900 mb-1">
                Secure by Default
              </div>
              <div className="text-sm text-gray-500">
                Enterprise-grade security
              </div>
            </div>
            <div className="absolute top-44 right-44 w-48 bg-white rounded-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#e8e5df] animate-[float3_5s_ease-in-out_infinite]">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-base font-semibold text-gray-900 mb-1">
                Lightning Fast
              </div>
              <div className="text-sm text-gray-500">Optimized performance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 px-[4%] bg-white border-t border-[#e8e5df]"
      >
        <div className="max-w-xl mb-16">
          <div className="text-[#ff6b35] text-sm font-semibold uppercase tracking-wider mb-3">
            What we do
          </div>
          <h2 className="text-5xl text-gray-900 font-bold leading-tight mb-4 tracking-tight">
            Software solutions that solve real problems
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We&apos;re a small team that punches above its weight. Here&apos;s
            what we&apos;re really good at.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-[1400px]">
          {services.map((service, i) => (
            <div
              key={i}
              className="animate-on-scroll p-10 bg-[#fefdfb] border-2 border-[#e8e5df] rounded-2xl hover:border-[#ff6b35] hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="text-xs text-[#ff6b35] font-bold mb-6 tracking-wider">
                {service.num}
              </div>
              <h3 className="text-2xl text-gray-900 mb-4 font-semibold">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <a
                href="#"
                className="text-[#ff6b35] text-sm font-semibold inline-flex items-center gap-2"
              >
                Learn more
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section
        id="approach"
        className="py-24 px-[4%] bg-gradient-to-br from-[#fff5f0] to-[#fefdfb]"
      >
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl text-gray-900 font-bold leading-tight mb-6 tracking-tight">
              We work differently
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Most agencies overcomplicate things. We don&apos;t. You get a
              dedicated team that moves fast, communicates clearly, and delivers
              what we promise.
            </p>
            <ul className="list-none space-y-0">
              {approachPoints.map((point, i) => (
                <li
                  key={i}
                  className="py-5 border-b border-[#e8e5df] text-lg text-gray-900 font-medium flex items-center gap-4"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-[#ff6b35] text-white rounded-full flex items-center justify-center text-xs">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div>
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="animate-on-scroll bg-white p-8 rounded-xl mb-6 border-l-4 border-[#ff6b35] shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
              >
                <div className="text-[#ff6b35] font-bold text-sm mb-2">
                  {step.num}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {step.title}
                </div>
                <div className="text-gray-600 text-sm">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 px-[4%] bg-gray-900 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl text-white font-bold leading-tight mb-5">
            Ready to build something great?
          </h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            Let&apos;s have a quick chat about your project. No pressure, no
            sales pitch—just a conversation about how we can help.
          </p>
          <button
            onClick={handleContact}
            className="px-10 py-4 bg-[#ff6b35] text-white rounded-lg font-semibold hover:bg-[#f55a24] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,107,53,0.4)] transition-all"
          >
            Schedule a call
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer></Footer>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0) rotate(2deg);
          }
          50% {
            transform: translateY(-20px) rotate(-1deg);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0) rotate(-3deg);
          }
          50% {
            transform: translateY(-15px) rotate(1deg);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0) rotate(1deg);
          }
          50% {
            transform: translateY(-25px) rotate(-2deg);
          }
        }
      `}</style>
    </div>
  );
};

export default StreamlineSolutions;
