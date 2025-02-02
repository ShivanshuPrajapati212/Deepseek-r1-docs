import React from 'react';
import { Cloud } from 'lucide-react';

export default function Deployment() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <Cloud className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Deployment Guide</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Comprehensive guide for deploying DeepSeek-R1 in various environments.
        </p>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">VPS Deployment</h2>
        <div className="prose">
          <p>
            Deploy DeepSeek-R1 on a Virtual Private Server for production use.
            Follow these steps to ensure optimal performance and security.
          </p>
        </div>
        <pre className="code-block mt-4">
{`# Install system dependencies
sudo apt update && sudo apt install -y build-essential python3-dev

# Set up virtual environment
python3 -m venv venv
source venv/bin/activate

# Install DeepSeek
pip install deepseek-core deepseek-server

# Configure the server
deepseek-server config --port 8080 --workers 4`}</pre>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Docker Deployment</h2>
        <pre className="code-block">
{`# Pull the DeepSeek Docker image
docker pull deepseek/deepseek-r1:latest

# Run the container
docker run -d \\
  --gpus all \\
  -p 8080:8080 \\
  -v /path/to/models:/models \\
  deepseek/deepseek-r1:latest`}</pre>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Scaling Considerations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Hardware Requirements</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>CPU: 8+ cores recommended</li>
              <li>RAM: 32GB minimum</li>
              <li>GPU: NVIDIA A100 or similar</li>
              <li>Storage: 100GB+ SSD</li>
            </ul>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Load Balancing</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Multiple GPU support</li>
              <li>Request distribution</li>
              <li>Health monitoring</li>
              <li>Automatic failover</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}