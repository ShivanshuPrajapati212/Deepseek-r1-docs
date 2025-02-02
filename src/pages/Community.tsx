import React from 'react';
import { Users } from 'lucide-react';

export default function Community() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <Users className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Community & Resources</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Join the DeepSeek community and explore available resources.
        </p>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Community Channels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Discord Community</h3>
            <p className="text-muted-foreground mb-4">
              Join our Discord server to connect with other developers, share experiences,
              and get help from the community.
            </p>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
              Join Discord
            </button>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">GitHub Discussions</h3>
            <p className="text-muted-foreground mb-4">
              Participate in technical discussions, report issues, and contribute to
              the development of DeepSeek-R1.
            </p>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
              View GitHub
            </button>
          </div>
        </div>
      </section>

      <section className="bg-card p-6 rounded-xl border border-border">
        <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Tutorials</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Getting Started Guide</li>
              <li>Video Tutorials</li>
              <li>Code Examples</li>
              <li>Best Practices</li>
            </ul>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Documentation</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>API Reference</li>
              <li>Architecture Guide</li>
              <li>Deployment Guide</li>
              <li>Security Guide</li>
            </ul>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Community Content</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Blog Posts</li>
              <li>Case Studies</li>
              <li>Community Projects</li>
              <li>Research Papers</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}