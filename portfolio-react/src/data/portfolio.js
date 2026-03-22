/**
 * portfolioData - Centralized data store for the portfolio.
 * To customize this portfolio, simply edit the values below.
 */
export const portfolioData = {
    // Basic personal information
    personal: {
        name: "Ayush Kumar",
        title: "Full Stack Developer",
        description: "Crafting innovative web solutions with MERN Stack, passionate about building scalable applications and solving complex problems.",
        email: "ayush22005kumar@gmail.com",
        phone: "+91-8535987094",
        linkedin: "https://www.linkedin.com/in/ayush-kumar-4482412a1/",
        github: "https://github.com/ayushkumar87"
    },

    // Statistics displayed in the 'About' section
    stats: [
        { number: "7.64", label: "CGPA" },
        { number: "3+", label: "Projects" },
        { number: "4+", label: "Certifications" },
        { number: "2+", label: "Hackathons" }
    ],

    // Skills categorized by type
    skills: {
        languages: ["C", "C++", "Python", "Java"],
        frameworks: ["React.js", "Node.js", "Tailwind CSS", "Bootstrap"],
        databases: ["MongoDB", "MySQL"],
        tools: ["Git", "GitHub", "REST APIs", "DSA"],
        softSkills: ["Problem Solving", "Creativity", "Time Management", "Adaptability", "Teamwork"]
    },

    // Projects showcased in the 'Featured Projects' section
    projects: [
        {
            id: 1,
            icon: "🎯",
            title: "TaskMaster",
            subtitle: "AI-Powered Task Management System",
            description: "Full-stack task management application with JWT authentication, CRUD operations, analytics dashboards, and AI-powered task creation. Features responsive UI with auto-hide navbar and data visualization.",
            tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
            date: "January 2026",
            liveLink: "https://taskmaster-app-rose.vercel.app",
            githubLink: "https://github.com/ayushkumar87/taskmaster-app"
        },
        {
            id: 2,
            icon: "🌤️",
            title: "Intelligent Weather Forecasting",
            subtitle: "Real-time Weather Application",
            description: "Full-stack weather forecasting web application integrated with Open-Meteo API for real-time updates. Features intelligent activity-based recommendations and interactive analytics dashboards.",
            tech: ["MongoDB", "Express.js", "React", "Node.js", "API"],
            date: "November 2025",
            liveLink: "https://weatherapp-frontend-dg8z.onrender.com/",
            githubLink: "https://github.com/ayushkumar87/weather-app"
        },
        {
            id: 3,
            icon: "🏠",
            title: "Property Tax Management",
            subtitle: "Tax Management System",
            description: "Property tax management web application with CRUD operations, search and filtering capabilities. Reduced record retrieval time by 7 seconds through optimized database queries.",
            tech: ["PHP", "MySQL", "JavaScript"],
            date: "April 2025",
            liveLink: "#",
            githubLink: "https://github.com/ayushkumar87/INT219-INT220"
        }
    ],

    // Education entries for the timeline
    education: [
        {
            id: 1,
            title: "B.Tech in Computer Science",
            institution: "Lovely Professional University, Punjab",
            meta: "CGPA: 7.64 | Aug 2023 - Present"
        },
        {
            id: 2,
            title: "Intermediate",
            institution: "Green Point Academy, West Bengal",
            meta: "76%"
        },
        {
            id: 3,
            title: "Matriculation",
            institution: "Narayana School, West Bengal",
            meta: "80%"
        }
    ],

    // Certifications earned
    certifications: [
        {
            id: 1,
            title: "Privacy and Security in Online Social Media - NPTEL",
            date: "Oct 2025",
            link: "https://drive.google.com/file/d/15zOc23vcbZ6i9pVX_RwcpNx_mhGRBz0f/view?usp=sharing" // 
           
        },
        {
            id: 2,
            title: "Data Structures and Algorithms using C++",
            date: "Sep 2025",
            link: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12313610_838_20_08_2025.pdf?_gl=1*1tkd5bx*_gcl_au*OTU5MzMyODU5LjE3NzM4NTQ2MTg." // Paste certificate link here
        },
        {
            id: 3,
            title: "MongoDB Certification",
            date: "Jul 2025",
            link: "https://drive.google.com/drive/folders/1cpl-d7hmXP9o9-xSw8wThnj04Y9bvgmJ" // Paste certificate link here
        },
        {
            id: 4,
            title: "Deloitte Australia Technology Job Simulation",
            date: "Jun 2025",
            link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_68c8623c605e6e6f57aa253a_1757963727873_completion_certificate.pdf" // Paste certificate link here
        },
    ],

    // Hackathon participations
    hackathons: [
        {
            id: 1,
            title: "EY Hackathon 6.0",
            date: "Sep 2025 | EY & Unstop"
        },
        {
            id: 2,
            title: "Build-a-Thon Hackathon",
            date: "Apr 2024 | Boord Infinity"
        }
    ],

    // Long intro used in the About section
    about: `I’m a Full Stack Developer in the making, currently pursuing a B.Tech in Computer Science at Lovely Professional University.

What started as curiosity about how websites work has evolved into a strong passion for building scalable, real-world applications using the MERN stack (MongoDB, Express.js, React, Node.js).

Beyond development, I’m deeply invested in problem-solving. I actively practice Data Structures and Algorithms on LeetCode, continuously sharpening my logical thinking, code optimization skills, and ability to tackle complex challenges.

With a GPA of 7.64, certifications from NPTEL, MongoDB, and LPU, and hands-on experience through hackathons like EY Hackathon 6.0 and Build-a-Thon, I consistently push myself to learn, build, and grow.

I believe great developers don’t just write code — they solve problems that create impact.

Currently, I’m seeking opportunities where I can contribute, learn, and grow while building meaningful and impactful software.`,

    // Coding and blog platform profiles
    profiles: [
        { id: 1, name: "LeetCode", url: "https://leetcode.com/u/Ayush2kumar22/", icon: "🏆" },
        { id: 2, name: "CodeChef", url: "https://www.codechef.com/users/swift_hogs_40", icon: "👨‍💻" },
        { id: 3, name: "InterviewBit", url: "https://www.interviewbit.com/profile/ayush-kumar_563/", icon: "💡" },
        { id: 4, name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/ayush220yf67?tab=activity", icon: "📚" },
        { id: 5, name: "Medium", url: "https://medium.com/@ayush22005kumar", icon: "✍️", label: "Read my blogs" },
        { id: 6, name: "Research Paper 1", url: "https://docs.google.com/document/d/1MYpFHzYTbH-HYKcSas6mZ9-y634tjBM7/edit?usp=sharing&ouid=108892419678909899064&rtpof=true&sd=true", icon: "📄", label: "View Paper" }
    ]
};
