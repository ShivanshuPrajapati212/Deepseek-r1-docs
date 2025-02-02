import React from 'react';
import { Shield } from 'lucide-react';

export default function Security() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Security Considerations</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Important security information and best practices for using DeepSeek-R1 safely.
        </p>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Known Vulnerabilities</h2>
        <div className="prose">
          <p>
            Recent evaluations have highlighted vulnerabilities in DeepSeek-R1's safety measures. 
            Researchers from Cisco and the University of Pennsylvania conducted tests using 50 prompts 
            designed to elicit harmful content, achieving a 100% success rate in bypassing the system's 
            safety measures.
          </p>
        </div>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Security Best Practices</h2>
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Input Validation</h3>
            <p className="text-muted-foreground">
              Implement robust input validation to filter potentially harmful prompts.
            </p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Output Filtering</h3>
            <p className="text-muted-foreground">
              Add content filtering for model outputs to prevent harmful or inappropriate responses.
            </p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Monitoring</h3>
            <p className="text-muted-foreground">
              Continuously monitor AI interactions and implement logging for security audits.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Implementation Guidelines</h2>
        <div className="prose">
          <ul className="list-disc list-inside space-y-2">
            <li>Use system-level prompts to enforce safety boundaries</li>
            <li>Implement rate limiting to prevent abuse</li>
            <li>Set up proper authentication and authorization</li>
            <li>Regular security audits and updates</li>
            <li>Maintain logs of all interactions</li>
          </ul>
        </div>
      </section>
    </div>
  );
}