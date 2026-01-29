import type { Tool, Article, ToolCategory, Category, UseCase } from './types';

const CATEGORIES: Category[] = [
  { slug: 'writing', name: 'Writing', description: 'Tools to assist with writing, editing, and content creation.' },
  { slug: 'image', name: 'Image', description: 'Generate, edit, and enhance images with AI.' },
  { slug: 'video', name: 'Video', description: 'Create and edit videos with AI-powered features.' },
  { slug: 'audio', name: 'Audio', description: 'Tools for audio generation, editing, and transcription.' },
  { slug: 'coding', name: 'Coding', description: 'AI assistants for writing and debugging code.' },
  { slug: 'productivity', name: 'Productivity', description: 'Boost your efficiency and organization.' },
  { slug: 'marketing', name: 'Marketing', description: 'AI tools for marketing, SEO, and social media.' },
  { slug: 'business', name: 'Business', description: 'Solutions for business intelligence and operations.' },
  { slug: 'seo', name: 'SEO', description: 'Optimize your content for search engines.' },
  { slug: 'chatbot', name: 'Chatbot', description: 'Engage with users through conversational AI assistants.' },
  { slug: 'design', name: 'Design', description: 'Create graphics and designs with AI-powered tools.' },
  { slug: 'research', name: 'Research', description: 'AI-powered tools for research and information gathering.' },
  { slug: 'search', name: 'Search', description: 'Next-generation search engines powered by AI.' },
  { slug: 'development', name: 'Development', description: 'Tools and platforms for AI application development.' },
  { slug: 'presentations', name: 'Presentations', description: 'Create compelling presentations with AI assistance.' },
  { slug: 'voice', name: 'Voice', description: 'Tools for voice synthesis and audio manipulation.' },
  { slug: 'music', name: 'Music', description: 'Generate original music and soundscapes with AI.' },
  { slug: 'hosting', name: 'Hosting', description: 'Platforms for deploying and hosting web applications.' },
];

const USE_CASES: UseCase[] = [
  { slug: 'writers', name: 'Writers', description: 'Enhance your writing process and creativity.' },
  { slug: 'students', name: 'Students', description: 'Tools for research, studying, and assignments.' },
  { slug: 'creators', name: 'Creators', description: 'For content creators, artists, and designers.' },
  { slug: 'startups', name: 'Startups', description: 'Scale your business with AI-powered solutions.' },
  { slug: 'developers', name: 'Developers', description: 'Code faster and smarter with AI assistants.' },
];

const tools: Tool[] = [
  {
    id: '1',
    slug: 'chatgpt',
    name: 'ChatGPT',
    description: "OpenAI's conversational AI for writing, coding, analysis, and creative tasks.",
    longDescription: "ChatGPT is a state-of-the-art conversational AI from OpenAI. It can generate human-like text for a variety of applications, from writing emails and essays to coding and answering complex questions. Its versatility makes it an indispensable tool for writers, developers, and students.",
    category: 'Writing',
    trending: true,
    logoUrlId: 'logo-chatgpt',
    website: 'https://chat.openai.com',
    useCases: ['writers', 'developers', 'students', 'creators'],
  },
  {
    id: '2',
    slug: 'claude',
    name: 'Claude',
    description: "Anthropic's AI assistant for analysis, writing, coding, and long-form content.",
    longDescription: "Claude is a next-generation AI assistant from Anthropic, designed to be helpful, harmless, and honest. It specializes in handling long-form content, making it ideal for summarizing large documents, answering questions about complex topics, and collaborative writing.",
    category: 'Writing',
    trending: true,
    logoUrlId: 'logo-claude',
    website: 'https://claude.ai',
    useCases: ['writers', 'research', 'students'],
  },
  {
    id: '3',
    slug: 'jasper-ai',
    name: 'Jasper AI',
    description: 'AI copywriting tool for marketing content, blogs, and social media.',
    longDescription: "Jasper AI is a leading AI copywriting tool that helps marketers and businesses create high-converting content at scale. From blog posts and social media updates to ad copy and product descriptions, Jasper accelerates the content creation process with its powerful AI engine.",
    category: 'Marketing',
    logoUrlId: 'logo-jasper',
    website: 'https://www.jasper.ai',
    useCases: ['marketing', 'writers', 'startups'],
  },
  {
    id: '4',
    slug: 'copy-ai',
    name: 'Copy.ai',
    description: 'AI-powered marketing copy and content generation tool.',
    longDescription: "Copy.ai is a versatile AI-powered platform for generating marketing copy and various types of content. It provides a suite of tools to help users overcome writer's block, brainstorm ideas, and produce polished copy for websites, emails, and social media.",
    category: 'Marketing',
    logoUrlId: 'logo-copy-ai',
    website: 'https://www.copy.ai',
    useCases: ['marketing', 'writers', 'startups'],
  },
  {
    id: '5',
    slug: 'perplexity-ai',
    name: 'Perplexity AI',
    description: 'AI-powered search engine with cited sources and conversational answers.',
    longDescription: "Perplexity AI is an innovative AI search engine that provides direct, cited answers to questions. It functions as a conversational 'answer engine' by synthesizing information from multiple sources on the web, complete with citations, to deliver trustworthy and accurate results.",
    category: 'Search',
    trending: true,
    logoUrlId: 'logo-perplexity',
    website: 'https://www.perplexity.ai',
    useCases: ['students', 'research', 'writers'],
  },
  {
    id: '6',
    slug: 'midjourney',
    name: 'Midjourney',
    description: 'AI art generator creating stunning images from text prompts.',
    longDescription: "Midjourney is a renowned AI art generator that produces high-quality, artistic images from simple text prompts. Accessed through Discord, it allows users to create stunning visuals in a wide range of styles, making it a favorite among artists, designers, and hobbyists.",
    category: 'Image',
    trending: true,
    logoUrlId: 'logo-midjourney',
    website: 'https://www.midjourney.com',
    useCases: ['creators', 'designers', 'artists'],
  },
  {
    id: '7',
    slug: 'dall-e-3',
    name: 'DALL-E 3',
    description: "OpenAI's advanced text-to-image generation model.",
    longDescription: "DALL-E 3 is OpenAI's most advanced text-to-image model, capable of generating highly detailed and contextually accurate images from natural language descriptions. It is integrated into ChatGPT Plus, allowing for an interactive and iterative image creation process.",
    category: 'Image',
    logoUrlId: 'logo-dall-e-3',
    website: 'https://openai.com/dall-e-3',
    useCases: ['creators', 'designers', 'artists'],
  },
  {
    id: '8',
    slug: 'canva-ai',
    name: 'Canva AI',
    description: 'Design platform with AI-powered features like Magic Write and text-to-image.',
    longDescription: "Canva AI integrates a suite of artificial intelligence features into the popular Canva design platform. This includes 'Magic Write' for text generation and a powerful text-to-image generator, empowering users to create professional designs more efficiently.",
    category: 'Design',
    logoUrlId: 'logo-canva',
    website: 'https://www.canva.com',
    useCases: ['creators', 'marketing', 'startups'],
  },
  {
    id: '9',
    slug: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: 'Open-source AI image generation model.',
    longDescription: "Stable Diffusion is a powerful, open-source text-to-image model developed by Stability AI. Its open nature allows developers and users to run it on their own hardware, customize it, and integrate it into various applications, fostering a vibrant community of innovation.",
    category: 'Image',
    logoUrlId: 'logo-stable-diffusion',
    website: 'https://stability.ai',
    useCases: ['developers', 'creators', 'artists'],
  },
  {
    id: '10',
    slug: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that suggests code completions.',
    longDescription: "GitHub Copilot is an AI pair programmer that provides intelligent code suggestions right inside your editor. It's trained on billions of lines of code, helping developers write code faster, learn new languages, and reduce boilerplate.",
    category: 'Coding',
    logoUrlId: 'logo-github-copilot',
    website: 'https://github.com/features/copilot',
    useCases: ['developers', 'startups'],
  },
  {
    id: '11',
    slug: 'cursor',
    name: 'Cursor',
    description: 'AI-first code editor built on VS Code with intelligent code generation.',
    longDescription: "Cursor is an AI-first code editor designed for modern software development. Built on VS Code, it offers intelligent code generation, editing, and debugging capabilities, allowing you to build software faster and more efficiently with the help of AI.",
    category: 'Coding',
    trending: true,
    logoUrlId: 'logo-cursor',
    website: 'https://www.cursor.so',
    useCases: ['developers'],
  },
  {
    id: '12',
    slug: 'bolt-new',
    name: 'Bolt.new',
    description: 'AI-powered full-stack web development in the browser by StackBlitz.',
    longDescription: "Bolt.new, from StackBlitz, is an AI-powered tool that enables full-stack web development directly in the browser. It helps you scaffold, build, and deploy web applications with AI assistance, streamlining the development workflow.",
    category: 'Development',
    trending: true,
    logoUrlId: 'logo-bolt-new',
    website: 'https://bolt.new',
    useCases: ['developers', 'startups'],
  },
  {
    id: '13',
    slug: 'v0-by-vercel',
    name: 'v0 by Vercel',
    description: 'AI-powered UI generation tool that creates React components.',
    longDescription: "v0.dev is a generative UI tool by Vercel that creates React components based on text prompts and images. It allows developers to rapidly prototype and build user interfaces using AI, generating production-ready code that can be easily copied and customized.",
    category: 'Development',
    trending: true,
    logoUrlId: 'logo-v0',
    website: 'https://v0.dev',
    useCases: ['developers', 'designers'],
  },
  {
    id: '14',
    slug: 'replit-ai',
    name: 'Replit AI',
    description: 'AI-powered collaborative coding environment.',
    longDescription: "Replit AI brings artificial intelligence into the collaborative, browser-based Replit IDE. It assists with code completion, explanation, and generation, making it a powerful tool for learning, prototyping, and building applications.",
    category: 'Coding',
    logoUrlId: 'logo-replit',
    website: 'https://replit.com',
    useCases: ['developers', 'students'],
  },
  {
    id: '15',
    slug: 'notion-ai',
    name: 'Notion AI',
    description: 'AI-powered workspace for notes, docs, and project management.',
    longDescription: "Notion AI integrates the power of artificial intelligence directly into your Notion workspace. It can summarize notes, draft content, brainstorm ideas, and organize information, turning your notes, docs, and projects into a more dynamic and intelligent system.",
    category: 'Productivity',
    logoUrlId: 'logo-notion',
    website: 'https://www.notion.so/product/ai',
    useCases: ['students', 'writers', 'startups', 'productivity'],
  },
  {
    id: '16',
    slug: 'gamma',
    name: 'Gamma',
    description: 'AI-powered presentation and document creation.',
    longDescription: "Gamma is an AI-powered tool for creating engaging presentations, documents, and webpages. Instead of designing slide by slide, you can generate a polished and professional-looking presentation from a simple text prompt, saving hours of work.",
    category: 'Presentations',
    logoUrlId: 'logo-gamma',
    website: 'https://gamma.app',
    useCases: ['students', 'startups', 'marketing'],
  },
  {
    id: '17',
    slug: 'descript',
    name: 'Descript',
    description: 'AI-powered video and podcast editing with transcription.',
    longDescription: "Descript revolutionizes audio and video editing by making it as simple as editing a text document. Its AI-powered features include automatic transcription, filler word removal, and Overdub, which lets you create a text-to-speech model of your own voice.",
    category: 'Video',
    logoUrlId: 'logo-descript',
    website: 'https://www.descript.com',
    useCases: ['creators', 'podcasters', 'video-editors'],
  },
  {
    id: '18',
    slug: 'google-ai-studio',
    name: 'Google AI Studio',
    description: "Google's platform for experimenting with Gemini models.",
    longDescription: "Google AI Studio is a web-based platform that allows developers to experiment with and prototype using Google's latest Gemini models. It provides a user-friendly interface to test prompts and explore the capabilities of Google's powerful AI.",
    category: 'Development',
    logoUrlId: 'logo-google-ai',
    website: 'https://aistudio.google.com',
    useCases: ['developers', 'research'],
  },
  {
    id: '19',
    slug: 'hugging-face',
    name: 'Hugging Face',
    description: 'Platform for building, training, and deploying ML models.',
    longDescription: "Hugging Face is the leading open-source platform for machine learning. It provides a vast repository of pre-trained models, datasets, and tools, enabling developers and researchers to build, train, and deploy state-of-the-art AI applications.",
    category: 'Development',
    logoUrlId: 'logo-hugging-face',
    website: 'https://huggingface.co',
    useCases: ['developers', 'research'],
  },
  {
    id: '20',
    slug: 'vercel',
    name: 'Vercel',
    description: 'Frontend deployment platform with AI features.',
    longDescription: "Vercel is a premier frontend deployment platform optimized for Next.js and other modern frameworks. It offers a seamless development and deployment experience, with integrated AI features to enhance developer productivity and site performance.",
    category: 'Hosting',
    logoUrlId: 'logo-vercel',
    website: 'https://vercel.com',
    useCases: ['developers', 'startups'],
  },
  {
    id: '21',
    slug: 'netlify',
    name: 'Netlify',
    description: 'Web development platform with AI-powered features.',
    longDescription: "Netlify is a powerful web development platform for building and deploying fast, modern websites and applications. It provides a git-based workflow, serverless functions, and a growing suite of AI-powered features to simplify web development.",
    category: 'Hosting',
    logoUrlId: 'logo-netlify',
    website: 'https://www.netlify.com',
    useCases: ['developers', 'startups'],
  },
  {
    id: '22',
    slug: 'runway',
    name: 'Runway',
    description: 'AI-powered video editing and generation tools.',
    longDescription: "Runway offers a suite of powerful AI-powered tools for video and image creation and editing. From text-to-video generation to advanced motion tracking and green screen removal, Runway is a comprehensive platform for creative professionals.",
    category: 'Video',
    logoUrlId: 'logo-runwayml',
    website: 'https://runwayml.com',
    useCases: ['creators', 'video-editors', 'designers'],
  },
  {
    id: '23',
    slug: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'AI voice generation and text-to-speech with realistic voices.',
    longDescription: "ElevenLabs is a leader in AI voice generation, providing incredibly realistic and natural-sounding text-to-speech and voice cloning technology. It's widely used for audiobooks, content creation, and accessibility applications.",
    category: 'Voice',
    logoUrlId: 'logo-elevenlabs',
    website: 'https://elevenlabs.io',
    useCases: ['creators', 'podcasters', 'developers'],
  },
  {
    id: '24',
    slug: 'suno',
    name: 'Suno',
    description: 'AI music generation from text prompts.',
    longDescription: "Suno is an AI music generation tool that creates original songs, complete with vocals and instrumentation, from simple text prompts. It empowers anyone to create radio-quality music in any genre, regardless of their musical ability.",
    category: 'Music',
    trending: true,
    logoUrlId: 'logo-suno',
    website: 'https://www.suno.ai',
    useCases: ['creators', 'musicians', 'developers'],
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

export function getAllCategories(): Category[] {
  return CATEGORIES;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return tools.filter((tool) => tool.category === category);
}

export function getAllUseCases(): UseCase[] {
  return USE_CASES;
}

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return USE_CASES.find((uc) => uc.slug === slug);
}

export function getToolsByUseCase(useCaseSlug: string): Tool[] {
  return tools.filter((tool) => tool.useCases?.includes(useCaseSlug));
}
