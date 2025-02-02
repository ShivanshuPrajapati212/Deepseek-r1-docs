import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function PromptEngineering() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Prompt Engineering</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Advanced techniques for crafting effective prompts with DeepSeek-R1.
        </p>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Do's</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use clear and specific instructions</li>
              <li>Break complex tasks into steps</li>
              <li>Provide context and examples</li>
              <li>Use structured formatting</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Don'ts</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Avoid ambiguous language</li>
              <li>Don't use few-shot prompting</li>
              <li>Avoid unnecessary context</li>
              <li>Don't overload with instructions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Prompt Templates</h2>
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Reasoning Template</h3>
            <pre className="code-block">
{`<think>
Let's approach this step by step:
1. First, we need to...
2. Then, we should...
3. Finally, we can...
</think>
<answer>
The solution is...
</answer>`}</pre>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Code Generation Template</h3>
            <pre className="code-block">
{`Task: [Describe the coding task]
Requirements:
- Input: [Specify input format]
- Output: [Specify output format]
- Constraints: [List any constraints]

Please provide a solution in [language] that meets these requirements.`}</pre>
          </div>
        </div>
      </section>
    </div>
  );
}