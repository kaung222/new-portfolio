export const projects = [
  {
    id: 1,
    title: "Health Care Service",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.",
    stacks: ["Nodejs", "Nextjs", "MongoDB"],
    githubLink: "",
    demoLink: "",
    details: {
      title:
        "This healthcare application is a comprehensive platform designed to streamline communication and data management between patients, healthcare providers, and administrators. The app is built using a microservice architecture with NestJS to ensure scalability, high performance, and modularity.",
      technologies: [
        {
          name: "Backend Framework",
          description: "Nestjs",
        },
        {
          name: "Database Management",
          description:
            "MySQL with TypeORM for relational data and MongoDB with Mongoose for managing conversations and real-time communication",
        },
        {
          name: "Microservice Architecture",
          description:
            "The app is designed using a microservice pattern, enabling scalable, distributed, and independent services that optimize performance and reliability.",
        },
        {
          name: "Queue and Caching",
          description:
            " Redis is integrated for managing background tasks, caching, and improving response times.",
        },
        {
          name: "Object Storage",
          description:
            "Amazon S3 is utilized for securely storing and serving files, such as medical documents, images, and reports.",
        },
        {
          name: "Deployment",
          description:
            "The application is hosted on an Amazon EC2 instance, ensuring high availability and robust performance.",
        },
      ],
      features: [
        {
          name: "Patient and Doctor Management",
          description:
            "Efficient handling of user data, appointments, and medical records.",
        },
        {
          name: "Real-time Conversations",
          description:
            "A messaging system that supports instant communication between users, built on MongoDB and enhanced with Redis for speed and reliability.",
        },
        {
          name: "Task Queuing",
          description:
            "Redis-powered queues handle background jobs such as notification delivery, data processing, and appointment scheduling.",
        },
        {
          name: "Scalable Storage",
          description:
            "S3 is used for storing medical reports, profile images, and other essential documents.",
        },
        {
          name: "Microservice Pattern",
          description:
            "The use of microservices ensures each module functions independently, enhancing scalability, maintainability, and deployment flexibility.",
        },
      ],
      conclusion:
        "This app offers a robust, scalable solution for healthcare providers and patients, delivering an intuitive and reliable experience optimized for modern healthcare needs.",
    },
  },
];

export const skills = ["node.js", "react.js", "nextjs"];
