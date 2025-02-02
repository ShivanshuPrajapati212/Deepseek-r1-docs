import React from 'react';
import { BarChart } from 'lucide-react';

export default function Performance() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <BarChart className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Performance Benchmarks</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Comprehensive analysis of DeepSeek-R1's performance across various tasks and benchmarks.
        </p>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Benchmark Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Mathematical Reasoning</h3>
            <div className="bg-secondary p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span>MATH</span>
                <span className="font-semibold">92%</span>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <div className="bg-primary rounded-full h-2" style={{width: '92%'}}></div>
              </div>
            </div>
            <div className="bg-secondary p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span>GSM8K</span>
                <span className="font-semibold">89%</span>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <div className="bg-primary rounded-full h-2" style={{width: '89%'}}></div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Code Generation</h3>
            <div className="bg-secondary p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span>HumanEval</span>
                <span className="font-semibold">87%</span>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <div className="bg-primary rounded-full h-2" style={{width: '87%'}}></div>
              </div>
            </div>
            <div className="bg-secondary p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span>MBPP</span>
                <span className="font-semibold">85%</span>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <div className="bg-primary rounded-full h-2" style={{width: '85%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Resource Usage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Memory</h3>
            <p className="text-3xl font-bold text-primary">16GB</p>
            <p className="text-sm text-muted-foreground">Minimum RAM required</p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Storage</h3>
            <p className="text-3xl font-bold text-primary">40GB</p>
            <p className="text-sm text-muted-foreground">Model size on disk</p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">GPU VRAM</h3>
            <p className="text-3xl font-bold text-primary">24GB</p>
            <p className="text-sm text-muted-foreground">Recommended minimum</p>
          </div>
        </div>
      </section>
    </div>
  );
}