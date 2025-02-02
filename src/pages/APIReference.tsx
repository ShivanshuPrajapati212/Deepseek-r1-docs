import React from 'react';
import { Code } from 'lucide-react';

export default function APIReference() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <Code className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">API Reference</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Complete guide to integrating DeepSeek-R1 into your applications using the API.
        </p>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Authentication</h2>
        <p className="text-muted-foreground mb-4">
          Register on the DeepSeek platform to receive your API key. All API requests require authentication using this key.
        </p>
        <pre className="code-block">
          <code>Authorization: Bearer YOUR_API_KEY</code>
        </pre>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Chat Completions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Basic Usage</h3>
            <pre className="code-block">
              <code>{`from openai import OpenAI

client = OpenAI(
    api_key="<DeepSeek API Key>",
    base_url="https://api.deepseek.com"
)

response = client.chat.completions.create(
    model="deepseek-reasoner",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"}
    ],
    stream=False
)

print(response.choices[0].message.content)`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Parameters</h2>
        
        <div className="space-y-4">
          <div className="border-b border-border pb-4">
            <h3 className="text-lg font-semibold mb-2">messages</h3>
            <p className="text-muted-foreground">Array of messages comprising the conversation.</p>
            <p className="text-sm text-muted-foreground mt-1">Required</p>
          </div>

          <div className="border-b border-border pb-4">
            <h3 className="text-lg font-semibold mb-2">model</h3>
            <p className="text-muted-foreground">ID of the model to use (e.g., "deepseek-reasoner").</p>
            <p className="text-sm text-muted-foreground mt-1">Required</p>
          </div>

          <div className="border-b border-border pb-4">
            <h3 className="text-lg font-semibold mb-2">stream</h3>
            <p className="text-muted-foreground">Whether to stream the response tokens.</p>
            <p className="text-sm text-muted-foreground mt-1">Optional, Default: false</p>
          </div>
        </div>
      </section>
    </div>
  );
}