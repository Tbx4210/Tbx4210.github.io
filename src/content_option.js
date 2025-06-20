const logotext = "ATHUL";
const meta = {
    title: "Athul Mathew - Cybersecurity Specialist & Full-Stack Developer | Greater Sudbury, Ontario",
    description: "Cybersecurity expert and full-stack developer in Greater Sudbury, Ontario. Specializing in ethical hacking, penetration testing, Python Flask development, RESTful APIs, digital forensics, and secure mobile applications. Currently developing educational platforms at Classcompass.",
};

const introdata = {
    title: "I'm Athul Mathew",
    animated: {
        first: "Cybersecurity Specialist",
        second: "Full-Stack Developer",
        third: "Ethical Hacker & Digital Forensics Expert",
    },
    description: "Full-stack developer and cybersecurity specialist based in Greater Sudbury, Ontario, Canada. Expert in Python Flask development, RESTful APIs, penetration testing, and digital forensics. Currently developing scalable educational platforms with advanced security implementations. Specializing in secure web applications, mobile development, and comprehensive security solutions.",
    your_img_url: require("./assets/images/athul-graduation.jpg"),
};

const dataabout = {
    title: "About myself",
    aboutme: "Cybersecurity specialist and mobile application developer based in Greater Sudbury, Ontario, Canada. Dynamic IT professional with robust expertise in cyber forensics, ethical hacking, penetration testing, and network security. Currently pursuing Mobile Application Development at Cambrian College, with certifications in EC-Council Certified Ethical Hacker and Fortinet Network Security Associate. Experienced in digital evidence collection, API security development, and using advanced cybersecurity tools including Metasploit, Burp Suite, and Wireshark. Passionate about creating secure mobile applications and conducting comprehensive security assessments for diverse IT projects across Northern Ontario.",
};

const education = [
    {
        degree: "Postgraduate Certificate in Mobile Application Development",
        institution: "Cambrian College of Arts and Technology",
        year: "2025-",
        status: "In Progress"
    },
    {
        degree: "Postgraduate Certificate in Cyber Security",
        institution: "Cambrian College of Arts and Technology", 
        year: "2024-2025",
        status: "Completed"
    },
    {
        degree: "Bachelor's degree in Cyber Forensics",
        institution: "Mahatma Gandhi University Kottayam, Kerala, India",
        year: "2019-2022",
        status: "Completed"
    }
];

const certifications = [
    {
        name: "EC-Council Certified Ethical Hacker",
        year: "2022"
    },
    {
        name: "Fortinet Network Security Associate - NSE 1",
        year: "2022"
    },
    {
        name: "Fortinet Network Security Associate - NSE 2", 
        year: "2022"
    }
];

const worktimeline = [
    {
        jobtitle: "Full-stack Developer (Co-op)",
        where: "Classcompass",
        date: "Apr 2025 - Present",
        description: "Educational technology platform helping students discover suitable classes based on their interests, goals, and availability. Contributing to full-stack development and system optimization for improved performance and scalability.",
        achievements: [
            "Developed and maintained scalable full-stack web application using Python (Flask) for backend and Bootstrap for frontend",
            "Implemented RESTful APIs for class search, user management, and teacher scheduling systems",
            "Built and optimized SQL database schemas for efficient data storage and retrieval",
            "Developed key features including advanced class search, teacher profile management, student enrollment tracking, and payment integration",
            "Improved application performance through code optimization and caching strategies",
            "Participated in Agile development processes including sprint planning and code reviews",
            "Implemented automated testing using pytest to ensure code quality and system stability",
            "Contributed to system documentation and API specifications using Git/GitHub collaboration"
        ]
    },
    {
        jobtitle: "Jr. Cyber Security Engineer",
        where: "SRV Infotech",
        date: "Nov 2022 - Apr 2023",
        description: "Leading web development company in Kannur, Kerala, India, focusing on website design, development, SEO, Digital Marketing, branding, Creative Services, Mobile app development, and cloud hosting.",
        achievements: [
            "Successfully assisted in implementing security policies and procedures",
            "Participated in vulnerability assessment and penetration testing",
            "Maintained IT department relationships to ensure security best practices",
            "Collaborated with 10-member team in monitoring phishing attacks, achieving 20% increase in email phishing detection"
        ]
    },
    {
        jobtitle: "Junior Digital Forensic Technician Intern",
        where: "Alibi Technologies",
        date: "Jun 2022 - Nov 2022", 
        description: "Start-up Company focused on Cyber Forensics & Defence Solutions based in Trivandrum, Kerala, providing forensic investigation and recovery services across India.",
        achievements: [
            "Participated in digital forensic investigations with law enforcement and forensic experts",
            "Performed collection and preservation of digital evidence adhering to industry and law standards",
            "Utilized standard forensic tools and software to extract data from various devices",
            "Participated in forensic investigations with Government Tax and Revenue Department",
            "Managed digital evidence collection and reports for tax fraud investigations",
            "Successfully identified crucial evidence from multiple devices following lead investigator instructions"
        ]
    }
];

const skills = [
    {
        name: "Cybersecurity & Ethical Hacking",
        value: 95,
    },
    {
        name: "Python & Flask Development",
        value: 92,
    },
    {
        name: "C# & .NET MAUI",
        value: 90,
    },
    {
        name: "Full-Stack Web Development",
        value: 88,
    },
    {
        name: "RESTful APIs & Backend Development",
        value: 90,
    },
    {
        name: "SQL Database Design & Optimization",
        value: 85,
    },
    {
        name: "Kotlin & Java",
        value: 85,
    },
    {
        name: "Swift & iOS Development",
        value: 80,
    },
    {
        name: "JavaScript & Frontend Technologies",
        value: 85,
    },
    {
        name: "Bootstrap & Responsive Design",
        value: 82,
    },
    {
        name: "Penetration Testing",
        value: 90,
    },
    {
        name: "Digital Forensics",
        value: 85,
    },
    {
        name: "Network Security",
        value: 88,
    },
    {
        name: "Automated Testing & pytest",
        value: 78,
    },
    {
        name: "Agile Development & Scrum",
        value: 80,
    },
    {
        name: "Git/GitHub & Version Control",
        value: 85,
    },
    {
        name: "Rust & Systems Programming",
        value: 70,
    },
    {
        name: "Bash Scripting",
        value: 80,
    },
    {
        name: "Firebase & Cloud Computing",
        value: 75,
    },
    {
        name: "CI/CD & DevOps",
        value: 78,
    }
];

const securityTools = [
    {
        category: "Penetration Testing Tools",
        tools: ["Metasploit", "Burp Suite", "Nmap", "Hydra", "Netcat", "OWASP ZAP", "Nikto"]
    },
    {
        category: "Network Security Tools", 
        tools: ["Wireshark", "Palo Alto Networks", "Snort", "Nessus", "OpenVAS"]
    },
    {
        category: "Digital Forensics Tools",
        tools: ["Autopsy", "Volatility", "FTK Imager", "Cellebrite", "EnCase"]
    },
    {
        category: "Development & Security Tools",
        tools: ["Visual Studio", "Android Studio", "Xcode", "Git/GitHub", "Azure DevOps", "Docker", "VS Code", "Flask", "pytest", "Gunicorn"]
    },
    {
        category: "Full-Stack Development Tools",
        tools: ["Python", "Flask", "Bootstrap", "SQL", "PostgreSQL", "SQLite", "Git", "GitHub", "pytest", "Gunicorn", "Docker"]
    }
];

const keySkills = [
    {
        category: "Full-Stack Web Development & Python",
        description: "Professional full-stack developer with hands-on experience building scalable web applications using Python Flask backend and modern frontend technologies. Expert in RESTful API development, database design, and system optimization. Currently developing educational platforms with advanced search, user management, and payment integration systems."
    },
    {
        category: "Cybersecurity & Ethical Hacking",
        description: "Expert in penetration testing, vulnerability assessment, network security analysis, and ethical hacking methodologies. Proficient with Metasploit, Burp Suite, Wireshark, Nmap, and other industry-standard security tools. Experienced in identifying and mitigating security threats across various platforms and networks."
    },
    {
        category: "Mobile Application Development", 
        description: "Full-stack mobile developer specializing in secure iOS and Android applications. Expert in Kotlin, Java, Swift, and cross-platform development with .NET MAUI. Experienced in Firebase integration, RESTful API development, and implementing mobile security best practices."
    },
    {
        category: "API Development & Database Design",
        description: "Specialized in developing and securing RESTful APIs with advanced authentication, authorization, and data protection mechanisms. Expert in SQL database design, optimization, and Flask framework implementation. Experienced in building scalable backend systems for educational and enterprise applications."
    },
    {
        category: "Agile Development & Quality Assurance",
        description: "Experienced in Agile development methodologies including sprint planning, code reviews, and collaborative development workflows. Proficient in automated testing with pytest, Git/GitHub version control, and maintaining code quality standards. Skilled in performance optimization and system documentation."
    },
    {
        category: "Digital Forensics & Investigation",
        description: "Professional digital forensics investigator with hands-on experience in evidence collection, preservation, and analysis. Skilled in memory forensics, network forensics, incident response, and legal compliance. Collaborated with law enforcement and government agencies on high-profile investigations."
    },
    {
        category: "Cloud & DevOps Security",
        description: "Expertise in Azure DevOps, CI/CD pipeline security, cloud computing security, and containerization with Docker. Knowledgeable in implementing security controls in cloud environments and automating security testing in development workflows."
    },
    {
        category: "Network Security & Infrastructure",
        description: "Advanced network security specialist with experience in Palo Alto Networks, network monitoring, intrusion detection, and security policy implementation. Skilled in network forensics, traffic analysis, and maintaining secure network architectures."
    }
];

const services = [
    {
        title: "Full-Stack Web Development & Python Solutions",
        description: "Professional full-stack web application development using Python Flask, Bootstrap, and modern frontend technologies. Specialized in educational platforms, e-commerce solutions, and scalable web applications with advanced search, user management, and payment integration systems.",
    },
    {
        title: "Cybersecurity Consulting & Penetration Testing",
        description: "Comprehensive security assessments using industry-standard tools like Metasploit, Burp Suite, and Nmap. Specialized in vulnerability testing, network security analysis, and implementing robust security policies for businesses across Greater Sudbury and Northern Ontario.",
    },
    {
        title: "RESTful API Development & Database Design",
        description: "Professional RESTful API development and database optimization using Python Flask, SQL, and modern backend technologies. Expert in creating secure, scalable APIs with advanced authentication, performance optimization, and automated testing implementation.",
    },
    {
        title: "Mobile Application Development",
        description: "Secure mobile app development for iOS and Android using Kotlin, Swift, and .NET MAUI. Expert in API integration, Firebase implementation, and mobile security best practices. Specializing in cross-platform development with advanced security features.",
    },
    {
        title: "Digital Forensics & Investigation",
        description: "Professional digital evidence collection, preservation, and analysis for legal proceedings and incident response. Experienced in forensic tool usage, chain of custody procedures, and collaboration with law enforcement agencies.",
    },
];

const dataportfolio = [
    {
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        title: "Classcompass - Educational Platform (Current Project)",
        description: "Comprehensive full-stack educational platform currently under development. Features advanced class search algorithms, teacher profile management, student enrollment tracking, and integrated payment systems. Built with Python Flask backend, Bootstrap frontend, and optimized SQL database architecture. Includes automated testing suite, RESTful API design, and Agile development practices. This complex project demonstrates enterprise-level web development skills with real-world application in the education sector.",
        technologies: ["Python", "Flask", "Bootstrap", "SQL", "RESTful API", "pytest", "Git/GitHub", "Agile Development", "Payment Integration", "Database Optimization"],
        link: "https://github.com/Tbx4210/classcompass",
        category: "Enterprise Full-Stack Development",
        featured: true,
        status: "In Development"
    },
    {
        img: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb",
        title: "Calculator API",
        description: "RESTful API service for mathematical calculations built with modern web technologies. Features comprehensive calculation endpoints with proper error handling and validation.",
        technologies: ["C#", "ASP.NET Core", "RESTful API", "Web API"],
        link: "https://github.com/Tbx4210/calculatorapi",
        category: "API Development"
    },
    {
        img: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb",
        title: "ToDo List Solution",
        description: "A comprehensive ToDo list API solution built with C#. Features full CRUD operations, task management, and RESTful architecture for modern web applications.",
        technologies: ["C#", "ASP.NET Core", "REST API", "CRUD Operations"],
        link: "https://github.com/Tbx4210/ToDoListSolution",
        category: "Full-Stack Development"
    },
    {
        img: "https://images.unsplash.com/photo-1523476843875-43c2cb89aa85?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=c061dab14f3709fadfa364fb1a0c0185",
        title: "Calculator as a Service",
        description: "Microservice architecture implementation of calculator functionality. Demonstrates service-oriented architecture principles with scalable design patterns.",
        technologies: ["C#", "Microservices", "Service Architecture", "API Design"],
        link: "https://github.com/Tbx4210/calservice",
        category: "Microservices"
    },
    {
        img: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb",
        title: "Number Guessing Game",
        description: "Interactive console-based number guessing game demonstrating algorithmic thinking, user input validation, and game logic implementation in C#.",
        technologies: ["C#", "Console Application", "Game Logic", "Algorithms"],
        link: "https://github.com/Tbx4210/NumberGuessingGame",
        category: "Game Development"
    },
    {
        img: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb",
        title: "ToDo List Application",
        description: "Feature-rich task management application with intuitive user interface. Includes task creation, editing, deletion, and status management capabilities.",
        technologies: ["C#", "Application Development", "UI/UX", "Task Management"],
        link: "https://github.com/Tbx4210/ToDoList",
        category: "Desktop Application"
    },
    {
        img: "https://images.unsplash.com/photo-1479862863327-e4d9a0a83c3d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=f31b4ad6341a4e6e3f64a556c2837391",
        title: "Project X1",
        description: "Experimental project showcasing advanced programming concepts and innovative solutions. Demonstrates problem-solving skills and technical creativity.",
        technologies: ["Multiple Technologies", "Experimental", "Innovation", "R&D"],
        link: "https://github.com/Tbx4210/x1",
        category: "Research & Development"
    },
    {
        img: "https://images.unsplash.com/photo-1479862863327-e4d9a0a83c3d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=f31b4ad6341a4e6e3f64a556c2837391",
        title: "Cybersecurity Portfolio Website",
        description: "This portfolio website itself - a React-based responsive web application showcasing cybersecurity expertise and mobile development skills. Features modern UI/UX design.",
        technologies: ["React", "JavaScript", "Bootstrap", "Responsive Design", "SEO"],
        link: "https://github.com/Tbx4210/Tbx4210.github.io",
        category: "Web Development"
    },
    {
        img: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb",
        title: "Security Assessment Tools",
        description: "Collection of cybersecurity tools and scripts for penetration testing, vulnerability assessment, and security analysis. Demonstrates practical security expertise.",
        technologies: ["Python", "Bash", "Security Tools", "Penetration Testing"],
        link: "https://github.com/Tbx4210",
        category: "Cybersecurity"
    }
];

const contactConfig = {
    YOUR_EMAIL: "amjk4210@gmail.com",
    YOUR_FONE: "+1 249-979-4242",
    YOUR_ADDRESS: "552 Summerhill Crescent, Sudbury, Ontario, P3A 4Y6, Canada",
    YOUR_LOCATION: "Greater Sudbury, Ontario, Canada",
    description: "Based in Greater Sudbury, Ontario, Canada. Available for full-stack web development, Python Flask applications, cybersecurity consulting, penetration testing, RESTful API development, mobile app development, and digital forensics services across Northern Ontario. Open to remote work opportunities and collaborations with businesses seeking secure, scalable web solutions.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_907qvqk",
    YOUR_TEMPLATE_ID: "template_pj9aeir",
    YOUR_USER_ID: "ElYfCMFpDdYpGI8eI",
};

const socialprofils = {
    github: "https://github.com/Tbx4210",
    linkedin: "https://www.linkedin.com/in/athul-mathew-756838294",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    keySkills,
    securityTools,
    education,
    certifications,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};