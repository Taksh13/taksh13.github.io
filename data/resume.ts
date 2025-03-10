export interface Education {
  degree: string
  institution: string
  date: string
}

export interface Project {
  title: string
  description: string[]
}

export interface Experience {
  company: string
  position: string
  date: string
  responsibilities: string[]
  achievements?: string[]
}

export interface Resume {
  name: string
  email: string
  phone: string
  location: string
  education: Education[]
  projects: Project[]
  experience: Experience[]
}

export const resumeData: Resume = {
  name: "Taksh Patel",
  email: "ptaksh13@gmail.com",
  phone: "+1 (908) 552-8118",
  location: "Hillsborough, NJ 08844",
  education: [
    {
      degree: "Bachelor of Science in Computer Science, Minor in Data Science",
      institution: "Rutgers University New Brunswick NJ",
      date: "April 2022",
    },
  ],
  projects: [
    {
      title: "Self Driving Power Toy",
      description: [
        "Utilized Arduino for precise signaling and a local fail-safe crashing system, and Raspberry Pi for camera performance using OpenCV and TensorFlow ML scripts.",
        "Controlled multiple sensors, including ultrasonic sensors, PWM motor controller, and night vision camera, improving system accuracy by 20%.",
        "Built a fully autonomous kids car, allowing users to experience autonomous driving, showcasing advanced robotics and AI capabilities.",
        "Achieved high accuracy in simulated driving conditions and currently training for real-world driving, demonstrating significant advancements in autonomous technology.",
      ],
    },
    {
      title: "Blockchain",
      description: [
        "Designed and developed both backend and frontend of a blockchain platform, enabling secure transactions and efficient currency mining, resulting in a 30% improvement in processing speed.",
        "Employed Test-Driven Development (TDD) methodology, ensuring high-quality and reliable code, reducing bugs by 40%.",
        "Developed an API for the frontend to efficiently retrieve blockchain data, improving data access speed by 25%.",
        "Implemented features such as recent hash address retrieval and live user tracking, enhancing user experience and transaction transparency.",
        "Developed a transaction pool and block display functionality, improving transaction management and user interaction.",
        "Gained in-depth understanding of decentralized applications and cryptocurrency mechanics, laying the foundation for future blockchain-based projects.",
      ],
    },
  ],
  experience: [
    {
      company: "CGI Inc.",
      position: "Full Stack Developer",
      date: "June 2022 – Current",
      responsibilities: [
        "Lead development and enhancement of multiple full-stack applications for SIROMS, a disaster recovery system for New Jersey Department of Community Affairs, serving thousands of applicants seeking grants and awards for disaster recovery.",
        "Increased system efficiency by 30% by designing and optimizing database schemas, complex queries, stored procedures, and functions, accelerating data processing and retrieval times.",
        "Developed secure REST API endpoints using C# and .NET framework, integrating robust authentication and authorization mechanisms, reducing security vulnerabilities by 25%.",
        "Built and maintained dynamic front-end applications using JavaScript, Angular (Type Script), and Bootstrap, enhancing user load times by 40% and ensuring a seamless user experience.",
        "Spearheaded the VR/AR application project, collaborating directly with four directors and a VP to drive innovation within the company, leading to a 20% increase in adoption of immersive technologies.",
        "Led multiple STEM Camps, mentoring students in TinkerCAD, 3D printing mechanics, and full-stack development, inspiring over 100 future technologists and improving student engagement by 35%.",
      ],
      achievements: [
        "Recognized as a Top Performer on the SIROMS project for outstanding contributions.",
        "Awarded STEM Camp Ambassador for leadership in technology education initiatives.",
        'Consistently received "Exceeds Expectations" performance reviews for technical expertise and leadership.',
      ],
    },
    {
      company: "Magna Power Inc.",
      position: "Summer Intern",
      date: "June 2018-19 – Aug 2018-19",
      responsibilities: [
        "Migrated and optimized 1000+ CAD and blueprint files to an upgraded NAS server, enhancing file access speed by 20%.",
        "Collaborated with the CEO to devise and implement an efficient file organization strategy, reducing retrieval time by 15%.",
        "Implemented audit trails and tracing mechanisms, leading to a 30% reduction in troubleshooting time.",
        "Conducted database tuning, resulting in a 25% improvement in performance and maintained regular status updates.",
        "Demonstrated strong teamwork and independent working skills, contributing to project completion 10% ahead of schedule.",
      ],
    },
  ],
}

