import React from 'react';
import { MessageSquare } from 'lucide-react';

const CODE_EXAMPLES = [
  {
    title: 'Basic Chat',
    description: 'Simple chat completion example',
    code: `from openai import OpenAI

client = OpenAI(
    api_key="<DeepSeek API Key>",
    base_url="https://api.deepseek.com"
)

response = client.chat.completions.create(
    model="deepseek-reasoner",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What is quantum computing?"}
    ]
)

print(response.choices[0].message.content)`
  },
  {
    title: 'Structured Reasoning',
    description: 'Using think and answer tags for better reasoning',
    code: `messages = [
    {"role": "system", "content": "Use <think> tags for reasoning and <answer> tags for final responses."},
    {"role": "user", "content": "Solve: If x + 2 = 5, what is x?"}
]

response = client.chat.completions.create(
    model="deepseek-reasoner",
    messages=messages
)

# Example response:
# <think>
# Let's solve this step by step:
# 1. We have the equation: x + 2 = 5
# 2. To find x, subtract 2 from both sides
# 3. x = 5 - 2
# </think>
# <answer>x = 3</answer>`
  },
  {
    title: 'Streaming Response',
    description: 'Stream tokens as they are generated',
    code: `response = client.chat.completions.create(
    model="deepseek-reasoner",
    messages=[{"role": "user", "content": "Write a story about space"}],
    stream=True
)

for chunk in response:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")`
  }
];

export default function Examples() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Code Examples</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Practical examples of using DeepSeek-R1 in different scenarios.
        </p>
      </section>

      <div className="space-y-6">
        {CODE_EXAMPLES.map((example) => (
          <section key={example.title} className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-bold mb-2">{example.title}</h2>
            <p className="text-muted-foreground mb-4">{example.description}</p>
            <pre className="code-block">
              <code>{example.code}</code>
            </pre>
          </section>
        ))}
      </div>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Error Handling</h2>
        <pre className="code-block">
          <code>{`try:
    response = client.chat.completions.create(
        model="deepseek-reasoner",
        messages=[{"role": "user", "content": "Hello"}]
    )
except Exception as e:
    if isinstance(e, client.APIError):
        print(f"API error: {e}")
    elif isinstance(e, client.APIConnectionError):
        print(f"Connection error: {e}")
    else:
        print(f"Unknown error: {e}")`}</code>
        </pre>
      </section>
    </div>
  );
}