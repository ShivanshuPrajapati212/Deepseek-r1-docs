import React from 'react';
import { Zap } from 'lucide-react';

export default function GettingStarted() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">DeepSeek-R1</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          An advanced open-source reasoning model with 671B parameters, designed for complex tasks in mathematics, coding, and reasoning.
        </p>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <div className="prose">
          <p>
            DeepSeek-R1 is an advanced open-source reasoning model developed by the Chinese startup DeepSeek. 
            It has gained significant attention for its performance in complex tasks such as mathematics, coding, 
            and reasoning, positioning it as a strong competitor to models like OpenAI's offerings.
          </p>
          <p>
            Notably, DeepSeek-R1 is available for free and is open-source, allowing users and organizations 
            to modify and integrate it into various applications.
          </p>
        </div>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Model Architecture</h2>
        <div className="prose">
          <p>
            DeepSeek-R1 employs a Mixture of Experts (MoE) architecture, comprising 671 billion parameters in total. 
            However, during any given inference, only 37 billion parameters are activated.
          </p>
          <p>
            This design enables efficient computation by routing queries to the most relevant expert clusters, 
            allowing the model to specialize in different problem domains while maintaining overall efficiency.
          </p>
        </div>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Quick Start Guide</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Install Ollama</h3>
            <p className="text-muted-foreground mb-2">
              Download and install Ollama for your operating system (Mac, Windows, or Linux).
            </p>
            <pre className="code-block">
              <code>type ollama</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Pull the Model</h3>
            <pre className="code-block">
              <code>ollama pull deepseek-r1</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. Run the Model</h3>
            <pre className="code-block">
              <code>ollama run deepseek-r1</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}