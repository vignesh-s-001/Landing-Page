export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "future-of-ai-in-enterprise",
    title: "The Future of AI in Enterprise Software",
    description:
      "Discover how artificial intelligence is reshaping enterprise software development, from intelligent automation to predictive analytics and beyond.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    author: "Sarah Chen",
    date: "June 15, 2025",
    category: "AI & Machine Learning",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "cloud-migration-best-practices",
    title: "Cloud Migration: Best Practices for 2025",
    description:
      "A comprehensive guide to migrating your legacy infrastructure to the cloud while minimizing downtime and maximizing ROI.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    author: "Michael Torres",
    date: "June 8, 2025",
    category: "Cloud Solutions",
    readTime: "7 min read",
  },
  {
    id: 3,
    slug: "ux-design-trends-2025",
    title: "Top UX Design Trends Dominating 2025",
    description:
      "From glassmorphism to AI-generated interfaces, explore the design trends that are setting the standard for exceptional user experiences.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    author: "Priya Patel",
    date: "May 30, 2025",
    category: "UI/UX Design",
    readTime: "4 min read",
  },
  {
    id: 4,
    slug: "react-native-vs-flutter",
    title: "React Native vs Flutter: Which to Choose in 2025?",
    description:
      "An in-depth comparison of the two leading cross-platform mobile frameworks to help you make the right choice for your next project.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
    author: "Alex Kim",
    date: "May 22, 2025",
    category: "Mobile Development",
    readTime: "8 min read",
  },
  {
    id: 5,
    slug: "digital-marketing-roi",
    title: "Maximizing ROI with Data-Driven Digital Marketing",
    description:
      "Learn how to leverage analytics, A/B testing, and marketing automation to dramatically improve your digital marketing performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    author: "Emma Williams",
    date: "May 15, 2025",
    category: "Digital Marketing",
    readTime: "6 min read",
  },
  {
    id: 6,
    slug: "nextjs-performance-optimization",
    title: "Next.js Performance Optimization Secrets",
    description:
      "Advanced techniques for squeezing every bit of performance out of your Next.js applications, from ISR to edge functions.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    author: "David Park",
    date: "May 5, 2025",
    category: "Web Development",
    readTime: "9 min read",
  },
];
