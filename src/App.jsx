import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Cpu, Terminal, Database, Code } from 'lucide-react';
import Section from './components/Section';
import Card from './components/Card';

const App = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 text-slate-200 font-sans">
      
      {/* Background Gradient */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        {/* Header / Hero */}
        <header className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 relative"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px] mx-auto mb-6">
              <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden relative group">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <Cpu size={48} className="text-slate-400 group-hover:text-slate-200 transition-colors duration-500" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              <span className="gradient-text">王 健 霖</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light tracking-wide max-w-2xl mx-auto">
              AI Product Manager & Full-Stack Developer
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex gap-6 justify-center"
          >
            <a href="mailto:jianlinwang@ln.hk" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:scale-110 hover:text-primary">
              <Mail size={24} />
            </a>
            <a href="https://github.com/wjl110" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:scale-110 hover:text-primary">
              <Github size={24} />
            </a>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2 opacity-50">
              <div className="w-1 h-2 bg-slate-400 rounded-full" />
            </div>
          </motion.div>
        </header>

        {/* Work Experience */}
        <Section>
          <div className="flex items-center gap-4 mb-12">
            <Terminal className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">工作经历</h2>
          </div>

          <Card 
            title="新浪微博 AI 创新产品部" 
            subtitle="新浪集团产品管培生" 
            date="2025.05 - 2026.02 (Expected)"
          >
            <ul className="list-disc list-inside space-y-3 text-slate-300 ml-2">
              <li>
                <strong className="text-slate-100">微博内部 AI 智能体提效项目：</strong> 
                主导 RAG 智能体研发，利用 LangChain 构建基于 Ghost、Big Model 和 Shell 的产品原型。
                构建 LLM 的微博博主 RAG 能力，接入检索控制幻觉。设计 Agent Function Call 调用内部数据库。
                累计 1500+ 人次使用，收集 58 条反馈，通过 A/B Test 驱动迭代。
              </li>
              <li>
                <strong className="text-slate-100">iOS 系统级合作与功能落地：</strong> 
                结合 iOS26 端侧大模型与 App Intents 框架，将微博功能暴露到系统级入口（Spotlight, Siri 等）。
                输出 "iOS 26 × 微博" PRD，带领团队完成开发上线，日均使用量 30,962+。
              </li>
              <li>
                <strong className="text-slate-100">AIGC 视频创新实验室：</strong> 
                搭建 ComfyUI/WebUI 私有化工作流，跟踪 Sora、Flux 等前沿模型。
                设计工业化批量生产方案，支撑内容运营。沉淀 20+ 篇技术方案，发布全运会 AIGC 视频（50w+ 浏览）。
              </li>
            </ul>
          </Card>

          <Card 
            title="新浪微博 AIGC 产品部" 
            subtitle="AIGC 产品实习生" 
            date="2024.06 - 2024.09"
          >
             <ul className="list-disc list-inside space-y-3 text-slate-300 ml-2">
              <li>
                <strong className="text-slate-100">AIGC 博主知识库构建：</strong> 
                建立河南、天津、国家博物馆知识库索引，优化千问大模型生成能力。
              </li>
              <li>
                <strong className="text-slate-100">产品需求分析：</strong> 
                分析竞品 Twitter Hunter，重新设计微博自动发文、文字补全、热点标签预测板块。
              </li>
              <li>
                <strong className="text-slate-100">智能体和工作流搭建：</strong> 
                分析 Top50 游戏博主，利用 LangGPT 生成结构化提示词，嵌入 Workflow 实现自动发博。
                搭建 ComfyUI+DiFy 工作流，实现热门游戏博文内容生成并行上线。
              </li>
             </ul>
          </Card>
        </Section>

        {/* Research & Education */}
        <Section className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Database className="text-secondary" size={32} />
              <h2 className="text-3xl font-bold">研究 & 专利</h2>
            </div>
            
            <Card title="情绪检测模型训练方法及系统" subtitle="专利号 2025109759684" delay={0.1}>
              <p>基于 Transformer (BERT) 的端到端情绪检测方案。设计动态注意力强化机制、模型剪枝与知识蒸馏。使用 AdamW, 梯度累积等策略优化训练。对比传统 CNN/LSTM 性能显著提升。</p>
            </Card>

            <Card title="具身智能机器人混合协议" subtitle="专利号 2025110055992" delay={0.2}>
              <p>设计 MCP (模型上下文协议) 与 A2A (智能体间通信) 混合架构。基于 JSON-RPC 2.0 实现工具调用标准化，利用 HTTP/S+SSE 实现多智能体协作。</p>
            </Card>
            
            <Card title="智能电网强化学习论文" subtitle="RPG2025 Oral Presentation" delay={0.3}>
              <p>IET/EI 检索论文。基于强化学习优化智能电网调度。</p>
            </Card>
          </div>

          <div className="space-y-12">
            <div>
               <div className="flex items-center gap-4 mb-8">
                <Code className="text-accent" size={32} />
                <h2 className="text-3xl font-bold">教育背景</h2>
              </div>

              <Card title="香港岭南大学 (Lingnan University)" subtitle="MSc in Computer Science" date="2024 - 2025">
                <p>专注于 AI 与大数据方向。担任具身智能 & AI 研究员。</p>
              </Card>

              <Card title="重庆邮电大学移通学院" subtitle="电气工程自动化 (本科)" date="2020 - 2024">
                <p>工科背景，具备扎实的数理逻辑基础。</p>
              </Card>
            </div>

             <div>
               <div className="flex items-center gap-4 mb-8">
                <Cpu className="text-primary" size={32} />
                <h2 className="text-3xl font-bold">项目经历</h2>
              </div>
              <Card title="Kaggle 房产价格预测" subtitle="Top 7% (322/4759)" date="2025.12 - 2026.01">
                <p>优化特征工程，提升准确率 18%。完成从数据分析到模型落地的全流程。</p>
              </Card>
              <Card title="ProductHunt 独立产品" subtitle="Redlining, QuittingTomorrow" date="2025.12 - 2026.01">
                <p>独立负责产品需求挖掘、功能规划与 Vibe Coding 设计。成功上线 ProductHunt。</p>
              </Card>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-12 text-center text-slate-500 text-sm border-t border-white/5 mt-20">
          <p className="mb-2">© {new Date().getFullYear()} Wang Jianlin. All rights reserved.</p>
          <p className="text-xs text-slate-600">Built with React, Tailwind & Vite.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
