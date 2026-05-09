/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Award, 
  BookOpen, 
  GraduationCap, 
  CheckCircle, 
  ArrowRight, 
  Instagram, 
  ExternalLink,
  MessageCircle,
  PlayCircle,
  FileText,
  Sparkles,
  ChevronRight,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('상담 신청 데이터:', formData);
    alert('상담 신청이 완료되었습니다. 제니 선생님이 확인 후 연락드리겠습니다!');
    setIsModalOpen(false);
    setFormData({ name: '', phone: '', age: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '홈', id: 'home' },
    { name: '강사 소개', id: 'about' },
    { name: 'CVC 커리큘럼', id: 'curriculum' },
    { name: '학습 자료', id: 'materials' },
    { name: '블로그', id: 'blog' },
  ];

  const curriculumSteps = [
    {
      title: "Step 1: Letter Sounds",
      desc: "알파벳의 이름이 아닌, 단어 속에서 실제로 나는 소리를 익히는 기초 단계입니다.",
      details: [
        "핵심: A는 '에이'가 아니라 [애], B는 '비'가 아니라 [브].",
        "예시: f [프], m [음], s [스]"
      ],
      icon: <PlayCircle className="w-8 h-8 text-blue-500" />,
      color: "bg-blue-50"
    },
    {
      title: "Step 2: CVC (Short Vowels)",
      desc: "'자음+모음+자음'으로 이루어진 짧은 단어를 소리 내어 합치는 '블렌딩' 단계입니다.",
      details: [
        "핵심: 세 개의 소리를 끊지 않고 연결해 읽기.",
        "예시: c(크)+a(애)+t(트)=cat(캣), p(프)+i(이)+g(그)=pig(피그)"
      ],
      icon: <BookOpen className="w-8 h-8 text-emerald-500" />,
      color: "bg-emerald-50"
    },
    {
      title: "Step 3: Magic E (Long Vowels)",
      desc: "단어 끝에 e가 붙으면서 앞의 모음 소리를 '알파벳 이름' 그대로 길게 바꾸는 단계입니다.",
      details: [
        "핵심: 끝의 e는 소리 내지 않고 앞 모음만 길게 발음.",
        "예시: h-o-p(홉)→hope(호우프), m-a-d(매드)→made(메이드)"
      ],
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      color: "bg-purple-50"
    },
    {
      title: "Step 4: Consonant Clusters",
      desc: "두 개의 자음이 나란히 올 때 어떻게 소리 나는지 배우는 단계입니다.",
      details: [
        "Blends(혼합): 두 소리가 살아있음 (bl, st, fr 등)",
        "Digraphs(이중): 합쳐져 새로운 소리 (sh, ch, th 등)"
      ],
      icon: <GraduationCap className="w-8 h-8 text-orange-500" />,
      color: "bg-orange-50"
    },
    {
      title: "Step 5: R-controlled (Vowel Teams)",
      desc: "모음 두 개가 만나거나, 모음 뒤에 r이 붙어 소리가 변하는 고난도 단계입니다.",
      details: [
        "Vowel Teams: ai[에이], ee[이-], oa[오우] (예: rain)",
        "Bossy R: ar[아-ㄹ], er/ir/ur[어-ㄹ] (예: car, bird)"
      ],
      icon: <Star className="w-8 h-8 text-rose-500" />,
      color: "bg-rose-50"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 md:gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 transition-transform group-hover:scale-105">
              <span className="text-xl md:text-2xl font-black">J</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-base md:text-xl font-black text-slate-900 leading-tight">
                Jenny Tr. <span className="text-blue-600 sm:inline block">Canada English</span>
              </h1>
              <p className="text-[8px] md:text-[10px] text-slate-600 font-extrabold tracking-widest uppercase">Expert Phonics Education</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, idx) => (
              <motion.button 
                key={link.id} 
                onClick={() => scrollToSection(link.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`text-sm font-bold tracking-wide transition-all hover:text-blue-600 relative group cursor-pointer ${
                  scrolled ? 'text-slate-800' : 'text-slate-900'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </motion.button>
            ))}
            <motion.button 
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 cursor-pointer"
            >
              상담 신청
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-900" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-20">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src="https://github.com/parkys1004/img/blob/main/etc/jennytr02.png?raw=true" 
            alt="English Class" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-md border border-blue-100 rounded-full text-blue-600 font-bold text-sm mb-8 animate-float shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                <span>캐나다 토론토 몬테소리 자격 보유</span>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-[1.1] tracking-tight text-slate-900"
            >
              우리 아이 첫 영어,<br />
              <span className="text-blue-600 underline decoration-blue-200 underline-offset-4 md:underline-offset-8">
                CVC Words
              </span><br className="sm:hidden" />로 시작하세요!
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl mb-10 md:mb-12 text-slate-600 max-w-xl leading-relaxed font-semibold italic"
            >
              토론토 몬테소리 자격증 보유, 캐나다 현지 교육 경험을 담아<br className="hidden md:block" />
              놀이처럼 즐거운 파닉스 학습의 기적을 선물합니다.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <motion.button 
                onClick={() => scrollToSection('curriculum')}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-black transition-all cursor-pointer"
              >
                커리큘럼 확인하기
              </motion.button>
              <motion.a 
                href="https://blog.naver.com/canada-english" 
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                네이버 블로그 <span className="text-green-500">●</span>
              </motion.a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative z-10 glass-card p-8 rounded-[3rem] shadow-2xl border-white/50"
            >
              <div className="aspect-square w-full rounded-[2.5rem] overflow-hidden bg-blue-50 mb-8 ring-1 ring-blue-100">
                <img 
                  src="https://github.com/parkys1004/img/blob/main/etc/1772974232614.jpg?raw=true" 
                  alt="Teacher Jenny" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-display font-black text-3xl tracking-tighter">Jenny Tr.</span>
                  <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-100"></span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/50 rounded-2xl border border-blue-50">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Experience</p>
                    <p className="text-sm font-bold text-slate-700">Toronto ECE</p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-2xl border border-blue-50">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Certificate</p>
                    <p className="text-sm font-bold text-slate-700">Montessori</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Credentials", val: "Toronto", sub: "몬테소리 자격 보유", icon: Award },
            { label: "Experience", val: "Canada", sub: "현지 유치원 교사 경력", icon: GraduationCap },
            { label: "Specialty", val: "CVC", sub: "파닉스 특화 교수법", icon: BookOpen },
            { label: "Quality", val: "100%", sub: "직접 제작 수제 교구", icon: Star }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col items-center justify-center text-center group transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="mb-4 p-4 bg-white rounded-2xl shadow-sm group-hover:bg-blue-600 transition-colors duration-500">
                {React.createElement(stat.icon, { 
                  className: "w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-500" 
                })}
              </div>
              <p className="font-display font-black text-4xl mb-2 text-slate-900">{stat.val}</p>
              <p className="text-slate-500 font-extrabold text-sm tracking-tight">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section - Splendid Layout */}
      <section id="about" className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-40 -mt-40"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-[45%] relative"
            >
              <div className="absolute -inset-4 bg-blue-600/30 blur-2xl rounded-[3rem]"></div>
              <img 
                src="https://github.com/parkys1004/img/blob/main/etc/1772974232614.jpg?raw=true" 
                alt="Jenny Teacher" 
                className="relative rounded-[2.5rem] shadow-3xl w-full aspect-[4/5] object-cover ring-1 ring-white/20"
              />
              <div className="absolute bottom-10 -right-10 hidden xl:block p-8 bg-white text-slate-900 rounded-3xl shadow-2xl max-w-xs">
                <Star className="text-yellow-400 fill-yellow-400 mb-3" />
                <p className="font-bold text-lg leading-snug">"아이들의 눈높이에서 영어가 즐거움이 되도록 지도합니다."</p>
                <p className="mt-2 text-sm text-slate-500 font-medium">Teacher Jenny</p>
              </div>
            </motion.div>
            
            <div className="w-full lg:w-[55%]">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-blue-400 font-display font-bold tracking-[0.2em] uppercase mb-4">강사 소개</h3>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-8 md:mb-10 leading-tight">캐나다 교육 전문가,<br />제니 선생님입니다</h2>
                
                <div className="grid gap-8">
                  {[
                    { title: "현지 유치원 리얼 티칭", desc: "캐나다 아이들이 실제로 영어를 배우는 방식을 그대로 구현합니다.", icon: <CheckCircle className="text-emerald-400" /> },
                    { title: "토론토 몬테소리 자격증", desc: "교구 중심의 자아 실현 교육 철학으로 아이들의 잠재력을 끌어냅니다.", icon: <CheckCircle className="text-emerald-400" /> },
                    { title: "1:1 밀착 감성 코칭", desc: "단순 교육을 넘어 아이와 정서적 유대를 통해 영어를 친숙하게 만듭니다.", icon: <CheckCircle className="text-emerald-400" /> }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                      viewport={{ once: true }}
                      className="flex gap-6 items-start"
                    >
                      <div className="mt-1 flex-shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="text-lg md:text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-12 p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm"
                >
                  <p className="text-slate-300 italic text-lg leading-relaxed">
                    "캐나다 현지 교육 현장에서 가장 효과적이었던 파닉스 교수법을 우리 아이들에게 전하고 싶습니다. 단순 암기가 아닌 원리를 깨닫는 환희를 경험하게 해줄게요."
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum - Interactive Steps */}
      <section id="curriculum" className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
            >
              Jenny's <span className="text-blue-600">Phonics</span> Curriculum
            </motion.h2>
            <p className="text-slate-500 text-xl font-medium">영어가 술술 읽히는 마법의 5단계 로드맵</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative">
            {curriculumSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 rounded-[2rem] glass-card border-white/50 h-full flex flex-col items-start transition-all hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5">
                  <div className={`mb-6 p-4 ${step.color} rounded-2xl`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-black mb-4 font-display text-slate-900 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                  <p className="leading-relaxed text-sm font-medium text-slate-600 mb-6">
                    {step.desc}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-100 w-full space-y-2">
                    {step.details.map((detail, dIdx) => (
                      <p key={dIdx} className="text-[11px] font-bold text-slate-400 flex items-start gap-1.5 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1 flex-shrink-0"></span>
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-blue-50/50 border border-blue-100 rounded-[2rem] flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl flex-shrink-0">💡</div>
            <div>
              <h4 className="font-black text-blue-900 mb-1">Jenny's Tip: Sight Words 병행</h4>
              <p className="text-blue-800/70 text-sm font-medium leading-relaxed">
                파닉스 규칙을 벗어나는 Sight Words(the, is, you 등)는 규칙과 상관없이 통째로 외워주는 것이 <br className="hidden md:block" />
                병행되어야 완벽한 독해가 가능합니다. 규칙과 예외를 함께 배워요!
              </p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="mt-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-10 md:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-12 shadow-3xl shadow-blue-600/30"
          >
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-black mb-4 font-display">왜 CVC Words 인가요?</h3>
              <p className="text-blue-100 text-lg md:text-xl leading-relaxed font-medium">
                CVC(자음+모음+자음)는 모든 영어 단어의 기본이자 핵심입니다. 
                이 패턴만 마스터해도 아이들은 모르는 단어를 보았을 때 스스로 소리를 유추해내는 '자체 해결 능력'을 갖게 됩니다.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-[2rem] backdrop-blur-md border border-white/20 text-center min-w-[240px]">
              <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-70">Total Students</p>
              <p className="text-6xl font-black mb-2">1,500+</p>
              <div className="flex justify-center -space-x-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white ring-2 ring-blue-500 overflow-hidden bg-slate-300 transition-transform hover:scale-110 hover:z-10">
                    <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="avatar" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Materials Section - Visual Showcase */}
      <section id="materials" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">차원이 다른<br className="sm:hidden" /> <span className="text-blue-600 underline">교구</span> 컬렉션</h2>
              <p className="text-slate-500 text-xl font-medium">선생님이 밤새 고민하며 직접 제작한 고퀄리티 학습 자료들입니다.</p>
            </div>
            <motion.a 
              whileHover={{ x: 10 }}
              href="https://blog.naver.com/canada-english" 
              className="text-blue-600 font-bold text-lg flex items-center gap-2 group"
            >
              자료 전체 보기 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "CVC 마스터 카드", type: "Visual Arts", color: "bg-orange-100", img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400" },
              { title: "블렌딩 워크시트", type: "Logic", color: "bg-blue-100", img: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80&w=400" },
              { title: "몬테소리 매치 큐브", type: "Tactile", color: "bg-emerald-100", img: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=400" },
              { title: "무료 레벨링 교구", type: "Gift", color: "bg-purple-100", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400" }
            ].map((material, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 group"
              >
                <div className="h-56 relative overflow-hidden">
                  <img src={material.img} alt={material.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${material.color} text-slate-800`}>
                      {material.type}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-black mb-4 group-hover:text-blue-600 transition-colors">{material.title}</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm font-bold">Updated weekly</span>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <FileText size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Blog CTA */}
      <section id="blog" className="py-40 bg-white relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-block p-6 bg-blue-50 rounded-[2.5rem] mb-12 shadow-inner"
          >
            <Instagram size={56} className="text-blue-600" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-10 tracking-tight leading-tight">
            Jenny's Canada English <br /><span className="text-slate-400 text-2xl sm:text-4xl md:text-5xl">네이버 블로그</span>
          </h2>
          <p className="text-lg md:text-2xl text-slate-500 mb-16 leading-relaxed max-w-3xl mx-auto font-medium">
            매일 업데이트되는 교육 정보와 캐나다 현지 리얼 소식,<br />
            그리고 다양한 무료 학습 자료 나눔을 놓치지 마세요!
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-slate-50 border-2 border-dashed border-blue-200 rounded-[3rem] mb-20 group"
          >
            <div className="flex items-center gap-6 text-left">
              <div className="w-20 h-20 rounded-full ring-4 ring-blue-500 overflow-hidden shadow-2xl group-hover:rotate-6 transition-transform">
                <img src="https://github.com/parkys1004/img/blob/main/etc/1772974232614.jpg?raw=true" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-display font-black text-2xl text-slate-900 tracking-tight">제니 선생님</h4>
                <p className="text-blue-600 font-bold">@canada-english_jenny</p>
              </div>
            </div>
            <a 
              href="https://blog.naver.com/canada-english" 
              className="bg-[#2DB400] text-white px-12 py-5 rounded-2xl font-black text-xl hover:shadow-[0_0_40px_rgba(45,180,0,0.4)] transition-all flex items-center gap-3"
            >
              이웃 맺기 <ChevronRight />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 p-8 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-100/50">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                <MessageCircle />
              </div>
              <span className="font-bold text-slate-800">1:1 네이버 톡톡 상담</span>
            </div>
            <div className="flex items-center gap-4 p-8 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-100/50">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                <CheckCircle />
              </div>
              <span className="font-bold text-slate-800">학습 레벨 무료 진단</span>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="p-6 md:p-12 overflow-y-auto custom-scrollbar">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-10 bg-white/80 backdrop-blur-md"
                >
                  <X size={20} />
                </button>
                
                <div className="mb-6 md:mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider mb-3 md:mb-4">
                    <Sparkles size={12} /> 상담 문의
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black font-display text-slate-900 tracking-tight leading-tight">
                    진짜 영어를 만나는 시작<br />
                    <span className="text-blue-600">제니 선생님과 <br className="sm:hidden" />상담하세요!</span>
                  </h2>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-5">
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-xs md:text-sm font-bold text-slate-700 ml-1">학부모님 성함</label>
                    <input 
                      required
                      type="text" 
                      placeholder="성함을 입력해주세요"
                      className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium text-sm md:text-base"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-xs md:text-sm font-bold text-slate-700 ml-1">연락처</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="010-0000-0000"
                      className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium text-sm md:text-base"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-xs md:text-sm font-bold text-slate-700 ml-1">아이 나이 / 학년</label>
                    <input 
                      required
                      type="text" 
                      placeholder="예: 7세 / 초등 1학년"
                      className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium text-sm md:text-base"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-xs md:text-sm font-bold text-slate-700 ml-1">문의 내용 (선택)</label>
                    <textarea 
                      placeholder="궁금하신 내용을 남겨주세요"
                      className="w-full px-4 md:px-5 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium h-20 md:h-24 resize-none text-sm md:text-base"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 md:py-5 bg-blue-600 text-white rounded-xl md:rounded-2xl font-black text-base md:text-lg shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 mt-2 md:mt-4"
                  >
                    상담 신청 완료하기 <ArrowRight size={20} />
                  </motion.button>
                </form>
                
                <p className="mt-6 md:mt-8 text-center text-[10px] md:text-xs text-slate-400 font-medium">
                  입력하신 개인정보는 상담 목적으로만 사용되며 안전하게 관리됩니다.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-[110] lg:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl flex flex-col h-full"
            >
              <div className="p-6 flex justify-between items-center border-b border-slate-100 bg-white sticky top-0 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-sm">J</div>
                  <span className="font-bold text-slate-900 tracking-tight">Jenny's Menu</span>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <X size={24} className="text-slate-600" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto px-6 py-8 custom-scrollbar">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <button 
                      key={link.id} 
                      type="button"
                      onClick={() => scrollToSection(link.id)}
                      className="flex items-center justify-between w-full py-4 px-2 text-left text-slate-700 hover:text-blue-600 font-bold text-lg border-b border-slate-50 transition-colors group"
                    >
                      {link.name}
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-blue-600 transition-all opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" />
                    </button>
                  ))}
                </div>
                
                <div className="mt-10">
                  <button 
                    type="button"
                    onClick={() => {
                      setIsModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-blue-600 text-white rounded-2xl py-5 font-black text-lg shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                  >
                    상담 신청하기 <ArrowRight size={20} />
                  </button>
                  
                  <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Contact</p>
                    <p className="text-sm font-bold text-slate-600 mb-1">AM 10:00 - PM 07:00</p>
                    <p className="text-xs text-slate-400">네이버 톡톡 / 블로그 비밀댓글</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modern Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8 text-white">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl shadow-blue-600/30">J</div>
              <span className="font-display font-black text-3xl tracking-tighter">Jenny Tr.</span>
            </div>
            <p className="max-w-md leading-loose mb-10 text-lg">
              캐나다 현지 유치원 교사 출신의 전문성과 몬테소리 교육 철학을 더해, 
              아이들에게 세상에서 가장 행복한 영어 경험을 선물합니다. 
              정확한 소리 원리를 통해 영어의 기틀을 완성합니다.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Instagram />, color: "hover:bg-pink-600" },
                { icon: <MessageCircle />, color: "hover:bg-blue-600" },
                { icon: <ExternalLink />, color: "hover:bg-green-600" }
              ].map((social, i) => (
                <button key={i} className={`w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:-translate-y-2`}>
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-display font-black text-base md:text-xl mb-6 md:mb-10 uppercase tracking-widest">메뉴 바로가기</h4>
            <ul className="space-y-4 md:space-y-6">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)} 
                    className="hover:text-blue-400 font-bold transition-all flex items-center gap-2 group w-full text-left cursor-pointer"
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display font-black text-base md:text-xl mb-6 md:mb-10 uppercase tracking-widest">상담 및 지원</h4>
            <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-white/5">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">상담 및 문의 안내</p>
              <p className="text-white font-black text-lg mb-6">AM 10:00 - PM 07:00</p>
              <p className="leading-relaxed text-sm">
                수업 관련 상담 및 교구 문의는 네이버 블로그 비밀댓글 또는 톡톡을 이용해 주세요.
              </p>
              <a href="https://blog.naver.com/canada-english" className="mt-8 block bg-blue-600 text-white py-3 rounded-xl font-bold text-center hover:bg-blue-700 transition-all">블로그로 이동</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-white/5 mt-24 pt-12 text-sm font-medium flex flex-col md:flex-row justify-between items-center gap-6">
          <p>&copy; 2026 Jenny Teacher Canada English. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
