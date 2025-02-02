export const technologies = [
    { name: 'React', icon: 'SiReact', color: '#61DAFB' },
    { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
    { name: 'Next.js', icon: 'SiNextdotjs', color: '#000000' },
    { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
    { name: 'Python', icon: 'SiPython', color: '#3776AB' },
    { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
    { name: 'TailwindCSS', icon: 'SiTailwindcss', color: '#06B6D4' },
    { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
    { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#4169E1' },
    { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
    { name: 'Git', icon: 'SiGit', color: '#F05032' },
    { name: 'AWS', icon: 'SiAmazonwebservices', color: '#232F3E' }
  ];
  
  export const projects = [
      {
          title: "Project Nexus",
          description: "AI-powered data visualization platform",
          tech: ["React", "Python", "TensorFlow"],
          image: "https://picsum.photos/400/300",
          link: "#"
        },
        {
          title: "Cloud Analytics",
          description: "Real-time cloud infrastructure monitoring",
          tech: ["AWS", "Node.js", "GraphQL"],
          image: "https://picsum.photos/400/300",
          link: "#"
        },
        {
          title: "DevOps Pipeline",
          description: "Automated CI/CD workflow system",
          tech: ["Docker", "Jenkins", "Kubernetes"],
          image: "https://picsum.photos/400/300",
          link: "#"
        },
        {
          title: "Smart Portfolio",
          description: "Dynamic investment tracking system",
          tech: ["React", "TypeScript", "Firebase"],
          image: "https://picsum.photos/400/300",
          link: "#"
        },
        {
          title: "Data Forge",
          description: "Big data processing engine",
          tech: ["Python", "Spark", "MongoDB"],
          image: "https://picsum.photos/400/300",
          link: "#"
        },
        {
          title: "Neural Net Lab",
          description: "Machine learning experiment platform",
          tech: ["PyTorch", "FastAPI", "Redis"],
          image: "https://picsum.photos/400/300",
          link: "#"
        },
    // ... rest of portfolio portfolio projects
  ] as const; 