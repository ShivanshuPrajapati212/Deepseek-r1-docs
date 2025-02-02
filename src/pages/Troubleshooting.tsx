import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function Troubleshooting() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Troubleshooting Guide</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Solutions for common issues and frequently asked questions.
        </p>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Common Issues</h2>
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Installation Problems</h3>
            <div className="prose">
              <p className="text-muted-foreground">
                Error: CUDA not found
              </p>
              <pre className="code-block mt-2">
{`# Solution: Install CUDA Toolkit
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/cuda-ubuntu2004.pin
sudo mv cuda-ubuntu2004.pin /etc/apt/preferences.d/cuda-repository-pin-600
sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/7fa2af80.pub
sudo add-apt-repository "deb https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/ /"
sudo apt update
sudo apt install cuda`}</pre>
            </div>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Memory Issues</h3>
            <div className="prose">
              <p className="text-muted-foreground">
                Error: CUDA out of memory
              </p>
              <pre className="code-block mt-2">
{`# Solution: Enable gradient checkpointing
model.gradient_checkpointing_enable()

# Or reduce batch size
config = {
    "batch_size": 4,  # Reduce from default
    "gradient_accumulation_steps": 4
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Q: What are the minimum system requirements?
            </h3>
            <p className="text-muted-foreground">
              A: For optimal performance, we recommend:
            </p>
            <ul className="list-disc list-inside mt-2 text-muted-foreground">
              <li>NVIDIA GPU with 24GB+ VRAM</li>
              <li>32GB+ System RAM</li>
              <li>100GB+ free disk space</li>
              <li>Ubuntu 20.04 or later</li>
            </ul>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Q: How can I improve response speed?
            </h3>
            <p className="text-muted-foreground">
              A: Try these optimization techniques:
            </p>
            <ul className="list-disc list-inside mt-2 text-muted-foreground">
              <li>Enable KV cache</li>
              <li>Use batch processing</li>
              <li>Implement quantization</li>
              <li>Optimize context length</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}