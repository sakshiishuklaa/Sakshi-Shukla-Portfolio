const profile = {
  name: 'Sakshi Shukla',
  firstName: 'Sakshi',
  lastName: 'Shukla',
  title: 'Data Engineer',
  roles: ['Data Engineer', 'Pipeline Builder', 'Analytics Engineer'],
  photo: '/sakshi-photo.jpg',
  location: 'India',
  company: 'Tata Consultancy Services',
  heroDescription:
    'Data engineer designing a scalable, fault-tolerant unified ingestion framework for real-time streaming and scheduled bulk loads. At Tata Consultancy Services since June 2024, working across AWS, PySpark, and SQL.',
  footerBlurb:
    'Data Engineer based in India. At Tata Consultancy Services since June 2024. Designing unified ingestion frameworks, Medallion pipelines, and star-schema models for near real-time analytics.',
  about: {
    paragraphs: [
      "I'm Sakshi Shukla, a Data Engineer at Tata Consultancy Services. I design scalable, fault-tolerant ingestion frameworks that handle both real-time streaming and scheduled bulk loads from disparate enterprise sources, then shape that data into models teams can trust for reporting.",
      'Since June 2024 I have built distributed PySpark pipelines on AWS S3 through the Medallion Architecture, designed star-schema dimensional models, and helped compress reporting latency from 3-4 days to near real-time. Day to day I work in Python, SQL, PySpark, and AWS.'
    ],
    education: [
      {
        degree: 'Bachelor of Technology',
        school: 'Pranveer Singh Institute of Technology',
        dates: '2019 – 2023',
        specialization: 'Computer Science',
        detail: '7.9/10'
      }
    ]
  },
  experience: [
    {
      id: 'tcs',
      role: 'Data Engineer',
      company: 'Tata Consultancy Services',
      start: 'June 2024',
      end: 'Present',
      location: 'India',
      category: 'Work',
      summary:
        'Working as a data engineer to design a scalable, fault-tolerant unified data ingestion framework capable of handling both real-time streaming and scheduled bulk loads from 5+ disparate enterprise sources.',
      achievements: [
        'Assisted in compressing reporting latency from 3-4 days to near real-time, empowering executive and operational teams with up-to-the-minute dashboards and cutting data staleness by over 95%.',
        'Designed distributed data pipelines leveraging PySpark and AWS S3 to ingest, cleanse, and standardize data through the Medallion Architecture, significantly improving data reliability and query performance for downstream analytics.',
        'Designed dimensional data models using a star schema to enable efficient downstream reporting and business analytics.'
      ]
    }
  ],
  achievements: [
    {
      icon: 'cloud',
      text: 'AWS Certified Solutions Architect – Associate, issued by Amazon Web Services'
    },
    {
      icon: 'award',
      text: 'Microsoft Certified: DevOps Engineer Expert, issued by Microsoft'
    },
    {
      icon: 'badge',
      text: 'Microsoft Certified: Azure Administrator Associate, issued by Microsoft'
    },
    {
      icon: 'spark',
      text: 'Claude Certified Developer - Foundations, issued by Anthropic'
    },
    {
      icon: 'book',
      text: 'Python Programming – A Practical Approach, issued by Indian Institute of Technology Kanpur'
    }
  ],
  achievementTags: ['AWS Certified', 'Azure', 'DevOps', 'Python'],
  aboutStats: [
    { value: 'AWS', label: 'Solutions Architect – Associate' },
    { value: 'Azure', label: 'Administrator Associate' },
    { value: 'DevOps', label: 'Engineer Expert, Microsoft' },
    { value: '7.9', label: 'CGPA in B.Tech Computer Science' }
  ],
  skills: {
    Languages: ['Python', 'SQL'],
    'Frameworks/Libraries': ['PySpark', 'Pandas', 'NumPy'],
    'ML/Data': ['Apache Spark', 'dbt', 'Google BigQuery', 'Data Modeling', 'Data Quality'],
    'Cloud/DevOps': [
      'Amazon Web Services',
      'Microsoft Azure',
      'Databricks',
      'Snowflake',
      'Apache Airflow',
      'Docker',
      'Git',
      'GitHub'
    ],
    Concepts: [
      'ETL/ELT',
      'Medallion Architecture',
      'Data Structures',
      'Algorithms',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'OOP'
    ]
  },
  contact: {
    intro: "Have a project in mind or want to collaborate? I'd love to hear from you!",
    formNote: "Fill out the form below and I'll get back to you as soon as possible.",
    connectNote: 'You can also reach out to me directly through these channels',
    availability: 'Open to Data Engineer roles'
  },
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/sakshiiishuklaa/',
    linkedinLabel: 'linkedin.com/in/sakshiiishuklaa',
    github: 'https://github.com/sakshiishuklaa',
    githubLabel: 'github.com/sakshiishuklaa',
    email: 'sakshishukla.tech@gmail.com'
  },
  resume: {
    file: '/Sakshi-Shukla-DE-Resume.pdf',
    downloadName: 'Sakshi-Shukla-DE-Resume.pdf',
    preview: '/resume-preview.png'
  }
};

export default profile;
