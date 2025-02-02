import React from 'react';
import { Terminal } from 'lucide-react';

export default function AdvancedUsage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <Terminal className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Advanced Usage</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Advanced techniques and configurations for getting the most out of DeepSeek-R1.
        </p>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Model Configuration</h2>
        <div className="prose">
          <p>
            Fine-tune DeepSeek-R1's behavior and performance through advanced configuration options.
            These settings allow you to optimize the model for specific use cases and requirements.
          </p>
        </div>
        <pre className="code-block mt-4">
{`{
  "model": "deepseek-r1",
  "config": {
    "context_length": 8192,
    "top_k": 40,
    "top_p": 0.9,
    "temperature": 0.7,
    "repetition_penalty": 1.1
  }
}`}</pre>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Custom Inference Pipelines</h2>
        <div className="space-y-4">
          <pre className="code-block">
{`from deepseek import Pipeline

pipeline = Pipeline(
    model="deepseek-r1",
    tasks=["reasoning", "math", "code"],
    optimizations={
        "batch_size": 16,
        "dynamic_batching": true
    }
)`}</pre>
        </div>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Performance Optimization</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Memory Management</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Gradient checkpointing</li>
              <li>Mixed precision training</li>
              <li>Memory-efficient attention</li>
              <li>Dynamic batch sizing</li>
            </ul>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Inference Optimization</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>KV cache management</li>
              <li>Batch processing</li>
              <li>Quantization options</li>
              <li>Custom kernels</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}