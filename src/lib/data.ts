import type { Tool, Article } from './types';

const tools: Tool[] = [
  {
    id: '1',
    slug: 'scribe-ai',
    name: 'Scribe AI',
    description: 'The ultimate AI-powered writing assistant for creators.',
    longDescription:
      'Scribe AI is a revolutionary tool designed to augment your writing process. It provides real-time suggestions, grammar correction, and style enhancements to help you produce high-quality content faster. Whether you are a blogger, marketer, or student, Scribe AI is your perfect partner.',
    category: 'Writing',
    trending: true,
    logoUrlId: 'tool-logo-1',
    website: 'https://example.com/scribe-ai',
  },
  {
    id: '2',
    slug: 'pixel-perfect',
    name: 'Pixel Perfect',
    description: 'Generate stunning, high-resolution images from text prompts.',
    longDescription:
      "Unleash your creativity with Pixel Perfect. This state-of-the-art image generation model can turn your wildest ideas into photorealistic or stylized images. It's perfect for artists, designers, and anyone looking to visualize their thoughts.",
    category: 'Image',
    trending: true,
    logoUrlId: 'tool-logo-2',
    website: 'https://example.com/pixel-perfect',
  },
  {
    id: '3',
    slug: 'cinemator',
    name: 'Cinemator',
    description: 'Create professional-quality videos with AI-driven editing.',
    longDescription:
      'Cinemator simplifies video creation. Upload your footage, and our AI will automatically edit it, add transitions, music, and effects to create a compelling narrative. No video editing skills required.',
    category: 'Video',
    logoUrlId: 'tool-logo-3',
    website: 'https://example.com/cinemator',
  },
  {
    id: '4',
    slug: 'code-pilot',
    name: 'CodePilot',
    description: 'Your AI pair programmer for faster, smarter development.',
    longDescription:
      'CodePilot integrates with your favorite IDE to provide intelligent code completions, bug detection, and documentation generation. It supports over 20 programming languages and helps you ship code faster.',
    category: 'Coding',
    trending: true,
    logoUrlId: 'tool-logo-4',
    website: 'https://example.com/codepilot',
  },
  {
    id: '5',
    slug: 'task-master',
    name: 'TaskMaster',
    description: 'Organize your life and work with an intelligent to-do list.',
    longDescription:
      'TaskMaster is more than just a to-do list. It uses AI to prioritize your tasks, schedule your day, and help you focus on what truly matters. Integrate it with your calendar and email for seamless productivity.',
    category: 'Productivity',
    logoUrlId: 'tool-logo-5',
    website: 'https://example.com/taskmaster',
  },
  {
    id: '6',
    slug: 'focus-flow',
    name: 'FocusFlow',
    description: 'AI-powered pomodoro timer and website blocker.',
    longDescription:
      'Enhance your focus sessions with FocusFlow. Our AI learns your work patterns and suggests optimal break times. It can also block distracting websites to keep you on track. Achieve deep work and boost your productivity.',
    category: 'Productivity',
    logoUrlId: 'tool-logo-6',
    website: 'https://example.com/focusflow',
  },
];

const articles: Article[] = [
  {
    id: '1',
    slug: 'the-rise-of-generative-ai',
    title: 'The Rise of Generative AI',
    excerpt:
      'A deep dive into the models and technologies powering the current wave of AI creativity.',
    date: '2024-07-15',
    author: 'Jane Doe',
    imageUrlId: 'article-image-1',
    content: `Generative Artificial Intelligence is transforming industries at an unprecedented pace. From creating art to writing code, these powerful models are unlocking new possibilities for human-computer collaboration. This article explores the fundamental concepts behind generative AI, including Large Language Models (LLMs) and diffusion models.

We'll discuss the architecture of models like GPT-4 and Midjourney, breaking down how they are trained and how they generate such coherent and creative outputs. The implications are vast, impacting everything from content creation to scientific research.

The ethical considerations are also significant. As these tools become more powerful, questions about authorship, bias, and misinformation become more pressing. We must navigate these challenges thoughtfully to ensure that AI is developed and used responsibly. Join us as we explore the exciting and complex world of generative AI.`,
  },
  {
    id: '2',
    slug: 'ai-in-the-future-of-work',
    title: 'AI and the Future of Work',
    excerpt:
      'How artificial intelligence is reshaping jobs, skills, and the modern workplace.',
    date: '2024-07-10',
    author: 'John Smith',
    imageUrlId: 'article-image-2',
    content: `Artificial intelligence is no longer a futuristic concept; it's a present-day reality that is actively reshaping the world of work. This article examines the dual role of AI as both a tool for automation and a catalyst for augmentation.

Many fear that AI will lead to widespread job displacement. While some roles will certainly be automated, AI is also creating new jobs and augmenting the capabilities of human workers. We'll look at specific industries, such as healthcare and finance, to see how AI is being implemented to improve efficiency and outcomes.

The key to thriving in this new era is adaptation. We'll explore the critical skills for the future, including data literacy, AI ethics, and the ability to collaborate with intelligent systems. Lifelong learning will be more important than ever. The workplace of tomorrow will be a partnership between human ingenuity and artificial intelligence.`,
  },
  {
    id: '3',
    slug: 'getting-started-with-ai-for-developers',
    title: 'Getting Started with AI for Developers',
    excerpt:
      'A practical guide for software engineers looking to integrate AI into their workflow.',
    date: '2024-07-05',
    author: 'Alex Ray',
    imageUrlId: 'article-image-3',
    content: `For developers, AI offers a treasure trove of tools to build smarter, more efficient applications. This guide provides a roadmap for engineers who want to start leveraging AI in their projects.

We'll begin with an overview of the different types of AI tools available, from code completion assistants like GitHub Copilot to powerful APIs from OpenAI and Google. You don't need a Ph.D. in machine learning to get started. Many of these tools are designed to be easily integrated into your existing workflow.

Next, we'll walk through a practical example: building a simple application that uses an LLM to generate user-friendly error messages. This hands-on project will demonstrate how to make API calls, handle responses, and implement prompt engineering best practices. By the end of this article, you'll have the confidence to start exploring the world of AI-powered development.`,
  },
  {
    id: '4',
    slug: 'navigating-the-ethical-maze-of-ai',
    title: 'Navigating the Ethical Maze of AI',
    excerpt:
      'Exploring the critical ethical questions we face as AI becomes more integrated into society.',
    date: '2024-06-28',
    author: 'Dr. Evelyn Reed',
    imageUrlId: 'article-image-4',
    content: `As artificial intelligence systems become more autonomous and influential, the ethical implications of their design and deployment are of paramount importance. This article delves into the complex ethical landscape of AI.

We will examine several key areas of concern. First, algorithmic bias: how can we ensure that AI models trained on historical data do not perpetuate and amplify societal biases? Second, privacy: how do we protect personal data when AI systems require vast amounts of it to function effectively? Third, accountability: who is responsible when an AI system makes a mistake that causes harm?

Addressing these challenges requires a multi-disciplinary approach, involving not just technologists but also ethicists, policymakers, and the public. We will explore proposed frameworks for AI governance and the importance of transparency and explainability in building trustworthy AI. The goal is not to halt progress, but to steer it in a direction that is aligned with human values.`,
  },
];

export function getTools(): Tool[] {
  return tools;
}

export function getArticles(): Article[] {
  return articles;
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getTrendingTools(): Tool[] {
  return tools.filter((tool) => tool.trending);
}

export function getLatestArticles(count: number): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
