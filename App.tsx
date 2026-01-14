
import React, { useState } from 'react';
import Terminal from './components/Terminal';
import CodeDisplay from './components/CodeDisplay';
import { CommandLineIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'code'>('terminal');

  return (
    <div className="h-screen w-full flex flex-col bg-black overflow-hidden relative crt-screen">
      {/* Scanline Animation */}
      <div className="scanline" />

      {/* Header / Navigation */}
      <header className="z-20 border-b border-green-900/30 bg-black/80 backdrop-blur-sm p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-green-950 border border-green-500/50 flex items-center justify-center animate-pulse">
            <span className="text-green-500 font-bold text-xs">C++</span>
          </div>
          <div>
            <h1 className="text-sm md:text-base font-bold tracking-widest text-green-400 uppercase glow-text">
              RETRO_CALC_V1.0.4
            </h1>
            <p className="text-[10px] text-green-700 font-mono">SYSTEM READY // LATENCY: 24ms</p>
          </div>
        </div>

        <nav className="flex items-center bg-zinc-900/50 rounded-lg p-1 border border-green-900/20">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-md transition-all duration-200 text-xs font-medium uppercase ${
              activeTab === 'terminal' 
                ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                : 'text-zinc-500 hover:text-green-600'
            }`}
          >
            <CommandLineIcon className="w-4 h-4" />
            Terminal
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-md transition-all duration-200 text-xs font-medium uppercase ${
              activeTab === 'code' 
                ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                : 'text-zinc-500 hover:text-green-600'
            }`}
          >
            <CodeBracketIcon className="w-4 h-4" />
            Source
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden relative z-10 p-4 md:p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl h-full flex flex-col gap-6">
          {activeTab === 'terminal' ? <Terminal /> : <CodeDisplay />}
        </div>
      </main>

      {/* Footer Info */}
      <footer className="z-20 p-2 px-6 border-t border-green-900/10 bg-black text-[10px] text-green-900 flex justify-between items-center font-mono">
        <span>© 1984 VAPOR_SOFT_INTL</span>
        <div className="flex gap-4">
          <span className="animate-pulse">● LIVE_SIM_ACTIVE</span>
          <span>MEM_ALLOC: 640KB</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
