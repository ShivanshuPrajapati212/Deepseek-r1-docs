import React from 'react';
import { Cpu } from 'lucide-react';

export default function ModelArchitecture() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <Cpu className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Model Architecture</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Deep dive into DeepSeek-R1's advanced Mixture of Experts (MoE) architecture and its innovative design principles.
        </p>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Mixture of Experts (MoE) Architecture</h2>
        <div className="prose">
          <p>
            DeepSeek-R1 utilizes a sophisticated MoE architecture that efficiently manages its 671 billion parameters.
            The model employs a dynamic routing system that activates only 37 billion parameters during inference,
            significantly reducing computational overhead while maintaining high performance.
          </p>
        </div>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Expert Clusters</h2>
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Routing Mechanism</h3>
            <p className="text-muted-foreground">
              The model's router dynamically assigns queries to the most relevant expert clusters,
              ensuring optimal performance for specific types of tasks.
            </p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Specialization</h3>
            <p className="text-muted-foreground">
              Each expert cluster specializes in different domains, allowing the model to maintain
              high performance across various tasks while keeping computational costs manageable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Model Parameters</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Total Parameters: 671 billion</li>
              <li>Active Parameters: 37 billion</li>
              <li>Number of Expert Clusters: Multiple</li>
              <li>Attention Heads: Advanced multi-head attention</li>
            </ul>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Architecture Benefits</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Reduced inference costs</li>
              <li>Improved task specialization</li>
              <li>Better resource utilization</li>
              <li>Enhanced scalability</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}