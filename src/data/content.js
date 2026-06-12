import { Code, Server, Database, Brain, Globe, BarChart } from 'lucide-react';
import promptcraftImg from '../assets/promptcraft.png';
import finsightImg from '../assets/finsight-light.png';
import caloriesenseImg from '../assets/caloriesense.png';

export const profile = {
    name: "Ajith Kumar",
    role: "AI Engineer",
    summary: "Junior AI Engineer and product-minded builder with hands-on experience designing end-to-end LLM, agentic AI, and automation systems across backend engineering, document intelligence, and growth-focused applications. Strong foundation in Python, FastAPI, RAG, vector search, LangChain, LangGraph, cloud AI services, and production AI workflows. Experienced in converting ambiguous business problems into scalable AI products, internal platforms, and decision-support systems.",
    location: "Bangalore",
    email: "ajithtitans7@gmail.com",
    linkedin: "https://www.linkedin.com/in/ajith-kumar07/",
    github: "https://github.com/ajith-git003/"
};

export const skills = [
    { name: "Python", category: "Backend", icon: Code },
    { name: "SQL", category: "Backend", icon: Database },
    { name: "FastAPI", category: "Backend", icon: Globe },
    { name: "RAG", category: "LLM & Agentic AI", icon: Brain },
    { name: "LangChain", category: "LLM & Agentic AI", icon: Brain },
    { name: "LangGraph", category: "LLM & Agentic AI", icon: Brain },
    { name: "CrewAI", category: "LLM & Agentic AI", icon: Brain },
    { name: "MCP", category: "LLM & Agentic AI", icon: Brain },
    { name: "Prompt Engineering", category: "LLM & Agentic AI", icon: Brain },
    { name: "Hugging Face", category: "LLM & Agentic AI", icon: Brain },
    { name: "Azure OpenAI", category: "Cloud & Infrastructure", icon: Server },
    { name: "Azure AI Services", category: "Cloud & Infrastructure", icon: Server },
    { name: "AWS", category: "Cloud & Infrastructure", icon: Server },
    { name: "Docker", category: "Cloud & Infrastructure", icon: Server },
    { name: "MLflow", category: "Cloud & Infrastructure", icon: BarChart },
    { name: "LangSmith", category: "Cloud & Infrastructure", icon: BarChart },
    { name: "TensorFlow", category: "AI / ML", icon: Brain },
    { name: "Scikit-learn", category: "AI / ML", icon: Brain },
    { name: "Vision AI", category: "AI / ML", icon: Brain },
];

export const experience = [
    {
        role: "Junior AI Engineer",
        company: "Day0 Ai Enterprises",
        period: "Aug 2024 – Present",
        description: "Supported the design and delivery of AI-powered SaaS features using Python, FastAPI, LLM APIs, and agentic workflows. Built and maintained backend services for AI product capabilities including API orchestration, prompt workflows, model integration, and deployment support. Implemented RAG-based pipelines for structured and unstructured data, improving grounded responses and knowledge access. Contributed to agent-based systems using LangChain, LangGraph, and implemented observability, tracing, and evaluation practices to improve reliability and release confidence."
    },
    {
        role: "Associate AI Engineer",
        company: "SS Consulting Agency",
        period: "Jun 2022 – Jul 2024",
        description: "Contributed to AI and automation use cases at the intersection of growth systems, digital operations, and intelligent workflow optimization. Worked on data-driven campaign and audience analysis using analytics tools to monitor performance, conversion behavior, and optimization opportunities. Supported AI-enabled experimentation and performance improvement initiatives by analyzing audience behavior, click patterns, and conversion trends."
    }
];

export const projects = [
    {
        title: "PromptCraft AI",
        link: "https://prompt-craft-z.vercel.app/",
        description: "An AI-powered prompt optimization tool that transforms vague user inputs into structured, high-quality prompts. Implements task decomposition and constraint-based prompting.",
        tech: ["FastAPI", "React", "Google Gemini"],
        image: promptcraftImg
    },
    {
        title: "Finsight AI",
        link: "https://finsight-ai-ipqt.vercel.app/",
        description: "An AI-driven personal finance assistant that analyzes user-uploaded income and expense data to generate insights. Uses structured context generation to reduce hallucinations.",
        tech: ["FastAPI", "React", "Pandas", "OpenAI"],
        image: finsightImg
    },
    {
        title: "CalorieSense AI",
        link: "https://calorie-sense-ai-r47w.vercel.app/",
        description: "A multimodal AI application that estimates calories and macronutrients from food images. Uses zero-shot image reasoning with vision models.",
        tech: ["FastAPI", "React", "OpenAI Vision"],
        image: caloriesenseImg
    }
];
