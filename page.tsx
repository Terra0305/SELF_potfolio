import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Github, Mail, Trophy, Server, Cpu, Activity, User, BookOpen } from 'lucide-react';

const Portfolio = () => {
  // 이번 알고리즘 대회 최종 통계 데이터
  const successData = [
    { name: '성공 (200/304)', value: 1238 },
    { name: '실패/기타', value: 25 },
  ];
  const COLORS = ['#3b82f6', '#ef4444'];

  const projects = [
    {
      title: "Korean-codeforces 인프라 운영",
      period: "2026.02",
      description: "Azure VM 및 Docker 기반의 MSA 아키텍처 설계 및 실시간 트래픽 관리.",
      tags: ["Azure", "Docker", "Nginx", "Redis", "Celery"],
      achievement: "총 1,263건의 요청 처리, 실질 성공률 98.02% 달성"
    },
    {
      title: "AI 기차표 예약 서비스 '손에딱'",
      period: "2025.10",
      description: "사용자 편의성을 극대화한 AI 기반 자동 예약 시스템 구축.",
      tags: ["Python", "AI", "Crawler"],
      achievement: "비동기 처리를 통한 예약 성공률 개선"
    },
    {
      title: "GIST-MIT 공동 연구 데이터 전처리",
      period: "2025.08",
      description: "대규모 연구 데이터의 정제 및 분석을 위한 파이프라인 개발.",
      tags: ["Data Engineering", "Python"],
      achievement: "데이터 정제 자동화로 처리 시간 50% 단축"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-4 md:p-8">
      {/* 1. 인트로 섹션 */}
      <header className="max-w-5xl mx-auto mb-16 text-center">
        <div className="w-32 h-32 bg-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-slate-700 overflow-hidden">
          <User size={64} />
        </div>
        <h1 className="text-4xl font-bold mb-2">박성민 (Park Seong-min)</h1>
        <p className="text-xl text-blue-400 mb-4">조선대학교 컴퓨터공학과 4학년 | 백엔드 & 인프라 엔지니어</p>
        <div className="flex justify-center gap-4 text-slate-400">
          <span className="flex items-center gap-1"><Mail size={18} /> contact@chosun.ac.kr</span>
          <span className="flex items-center gap-1"><Github size={18} /> github.com/sungmin</span>
        </div>
      </header>

      {/* 2. 실시간 운영 성과 대시보드 */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4 flex items-center gap-2">
          <Activity /> 실시간 서비스 운영 지표 (교내 알고리즘 대회)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col items-center">
            <p className="text-slate-400 mb-4 font-medium text-lg">HTTP 요청 성공률</p>
            <div className="h-48 w-full">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={successData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {successData.map((entry, index) => <Cell key={index} fill={COLORS[index]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-3xl font-bold text-blue-400 mt-2">98.02%</p>
            <p className="text-sm text-slate-500 mt-1">1,168 성공 / 1,263 전체</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center">
            <Cpu className="mx-auto mb-4 text-green-400" size={48} />
            <p className="text-slate-400 font-medium text-lg">자원 최적화 성과</p>
            <p className="text-5xl font-bold mt-4">22.08%</p>
            <p className="text-slate-400 mt-2 italic text-sm">Peak Time CPU 사용률</p>
            <div className="mt-6 text-sm text-left bg-slate-900 p-3 rounded-lg border border-slate-700">
              <p className="text-green-400 font-mono">Status: Healthy</p>
              <p className="text-slate-400 font-mono">Mem Usage: 196MiB / 848MiB</p>
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col justify-center">
            <Server className="mx-auto mb-4 text-purple-400" size={48} />
            <p className="text-slate-400 font-medium text-lg text-center font-bold">MSA 아키텍처 구성</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex justify-between"><span>✓ Reverse Proxy</span> <span className="text-blue-400 font-mono">Nginx</span></li>
              <li className="flex justify-between"><span>✓ Async Worker</span> <span className="text-blue-400 font-mono">Celery</span></li>
              <li className="flex justify-between"><span>✓ Message Broker</span> <span className="text-blue-400 font-mono">Redis</span></li>
              <li className="flex justify-between"><span>✓ Backend Framework</span> <span className="text-blue-400 font-mono">Django/DRF</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. 프로젝트 쇼케이스 */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4 flex items-center gap-2">
          <BookOpen /> 주요 프로젝트
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-blue-300">{p.title}</h3>
                <span className="text-sm text-slate-500">{p.period}</span>
              </div>
              <p className="text-slate-400 mb-4">{p.description}</p>
              <div className="bg-blue-500/10 text-blue-400 p-3 rounded-lg mb-4 text-sm font-medium border border-blue-500/20">
                ⭐ 성과: {p.achievement}
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => <span key={tag} className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">#{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. 연혁 및 수상 */}
      <section className="max-w-5xl mx-auto pb-16">
        <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4 flex items-center gap-2">
          <Trophy /> 연혁 및 활동 이력
        </h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-1 bg-slate-700 rounded-full relative">
              <div className="absolute top-0 -left-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900" />
            </div>
            <div>
              <p className="text-sm text-slate-500">2024.11</p>
              <p className="font-bold text-lg">조선대학교 알고리즘 프로그래밍 대회(ICPC) 동상</p>
              <p className="text-slate-400">팀 협업을 통한 문제 해결 역량 입증</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1 bg-slate-700 rounded-full relative">
              <div className="absolute top-0 -left-1.5 w-4 h-4 bg-slate-500 rounded-full border-4 border-slate-900" />
            </div>
            <div>
              <p className="text-sm text-slate-500">2022.03 ~ 2023.09</p>
              <p className="font-bold text-lg">대한민국 육군 병장 만기전역</p>
              <p className="text-slate-400">책임감 및 조직 관리 능력 함양</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
