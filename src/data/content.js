import { Code, Server, Database, Brain, Globe, BarChart } from 'lucide-react';
import promptcraftImg from '../assets/promptcraft.png';
import finsightImg from '../assets/finsight-light.png';
import caloriesenseImg from '../assets/caloriesense.png';

export const profile = {
    name: "Ajith Kumar",
    role: "AI Engineer",
    summary: "I am an AI Engineer with a strong foundation in performance marketing and 3 years of experience managing multiple clients and large-scale ad budgets. My growing interest in AI engineering led me to focus on building and deploying intelligent systems that solve real-world problems. I am highly curious by nature and committed to continuous learning.",
    location: "Bangalore",
    email: "ajithtitans7@gmail.com",
    linkedin: "https://www.linkedin.com/in/ajith-kumar07/",
    github: "https://github.com/ajith-git003/"
};

export const skills = [
    { name: "Python", category: "Core", icon: Code },
    { name: "TensorFlow", category: "AI", icon: Brain },
    { name: "PyTorch", category: "AI", icon: Brain },
    { name: "Keras", category: "AI", icon: Brain },
    { name: "Scikit-learn", category: "AI", icon: Brain },
    { name: "OpenCV", category: "AI", icon: Brain },
    { name: "Transformers", category: "AI", icon: Brain },
    { name: "RAG", category: "AI", icon: Brain },
    { name: "Pandas", category: "Data", icon: Database },
    { name: "NumPy", category: "Data", icon: Database },
    { name: "Matplotlib", category: "Data", icon: BarChart },
    { name: "Seaborn", category: "Data", icon: BarChart },
    { name: "AWS", category: "Cloud", icon: Server },
    { name: "Google Cloud", category: "Cloud", icon: Server },
    { name: "API", category: "Backend", icon: Globe },
    { name: "Docker", category: "DevOps", icon: Server },
    { name: "Git", category: "Tools", icon: Code },
    { name: "MLflow", category: "MLOps", icon: BarChart },
    { name: "FastAPI", category: "Backend", icon: Globe },
];

export const experience = [
    {
        role: "Senior Associate",
        company: "Intent Farm",
        period: "Oct 2025 – Present",
        description: "Led performance optimization across multiple client funnels, doubling lead quality and improving ROAS from 2× to 3.5× through landing page and checkout flow redesigns. Mentored interns and collaborated cross-functionally to execute scalable, data-driven growth strategies."
    },
    {
        role: "Performance Marketer",
        company: "Growth Partners",
        period: "Aug 2024 – Sep 2025",
        description: "Built automated reporting pipelines to sync live ad performance into Google Sheets, eliminating manual reporting and enabling faster decision-making. Managed Google & Meta Ads with consistent ROAS growth while optimizing targeting and reducing CAC through data analysis and CRM automation."
    },
    {
        role: "Performance Marketer",
        company: "Brandmonk Consulting",
        period: "Mar 2024 – Jul 2024",
        description: "Improved lead quality and reduced CPL by 25% using data-driven PPC strategies and landing page optimization. Scaled Meta ad campaigns with pixel tracking, increasing course enrollments by 50%."
    },
    {
        role: "Digital Marketing Executive",
        company: "Helios Spectra",
        period: "Jun 2022 – Feb 2024",
        description: "Optimized Google Ads for UK markets, increasing CTR by 40% through keyword and ad-structure improvements. Executed SEO strategies for UK and Dubai clients, leveraging analytics to drive traffic growth and conversion insights."
    }
];

export const projects = [
    {
        title: "PromptCraft AI",
        link: "https://prompt-craft-azure.vercel.app/",
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
