import { create } from "zustand"
import { persist } from "zustand/middleware"

// Define types for our job data
export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  category: string
  level: string
  salary: string
  description: string
  requirements: string[]
  skills: string[]
  benefits: string[]
  aboutCompany: string
  companyIndustry: string
  companySize: string
  posted: string
  postedDate: string
  similarJobs?: string[]
}

// Define types for testimonial data
export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
}

// Define types for client data
export interface Client {
  id: string
  name: string
  logo: string
}

// Define the store state
interface JobStoreState {
  jobs: Job[]
  testimonials: Testimonial[]
  clients: Client[]
  addJob: (job: Job) => void
  updateJob: (id: string, job: Job) => void
  deleteJob: (id: string) => void
  addTestimonial: (testimonial: Testimonial) => void
  updateTestimonial: (id: string, testimonial: Testimonial) => void
  deleteTestimonial: (id: string) => void
  addClient: (client: Client) => void
  updateClient: (id: string, client: Client) => void
  deleteClient: (id: string) => void
}

// Initial data for jobs
const initialJobs: Job[] = [
  {
    id: "senior-software-engineer",
    title: "Senior Software Engineer",
    company: "TechGlobal Inc.",
    location: "New York, NY (Remote)",
    type: "Full-time",
    category: "Technology",
    level: "Senior",
    salary: "$120,000 - $150,000",
    posted: "2 days ago",
    postedDate: "2023-05-01",
    description:
      "We are seeking an experienced Senior Software Engineer to join our innovative development team. The ideal candidate will have strong expertise in React, Node.js, and cloud technologies.",
    requirements: [
      "5+ years of experience in software development",
      "Strong proficiency in JavaScript/TypeScript and React",
      "Experience with Node.js and RESTful APIs",
      "Knowledge of cloud services (AWS, Azure, or GCP)",
      "Bachelor's degree in Computer Science or related field",
      "Experience with CI/CD pipelines and DevOps practices",
      "Familiarity with agile development methodologies",
      "Strong problem-solving skills and attention to detail",
    ],
    skills: ["React", "Node.js", "AWS", "TypeScript", "MongoDB"],
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health, dental, and vision insurance",
      "401(k) retirement plan with company match",
      "Flexible work arrangements and generous PTO",
      "Professional development opportunities",
      "Collaborative and innovative work environment",
      "Home office stipend",
      "Annual wellness benefit",
    ],
    aboutCompany:
      "TechGlobal Inc. is a leading technology company focused on innovation and creating solutions that transform how businesses operate. With a global presence and a commitment to excellence, we're constantly pushing the boundaries of what's possible.",
    companyIndustry: "Technology Industry",
    companySize: "1000-5000 employees",
    similarJobs: ["frontend-developer", "backend-engineer", "fullstack-developer"],
  },
  {
    id: "marketing-director",
    title: "Marketing Director",
    company: "Brand Elevate",
    location: "Chicago, IL (Hybrid)",
    type: "Full-time",
    category: "Marketing",
    level: "Director",
    salary: "$140,000 - $180,000",
    posted: "1 week ago",
    postedDate: "2023-04-25",
    description:
      "Brand Elevate is looking for a strategic Marketing Director to lead our marketing department and drive brand growth across multiple channels. The ideal candidate will have a proven track record of developing and executing successful marketing strategies.",
    requirements: [
      "8+ years of experience in marketing with at least 3 years in a leadership role",
      "Proven experience developing and implementing comprehensive marketing strategies",
      "Strong understanding of digital marketing channels and analytics",
      "Experience managing and mentoring a team of marketing professionals",
      "Excellent project management and budgeting skills",
      "Bachelor's degree in Marketing, Business, or related field (MBA preferred)",
      "Experience with marketing automation tools and CRM systems",
      "Strong analytical skills with the ability to translate data into actionable insights",
    ],
    skills: ["Digital Marketing", "Brand Strategy", "Team Leadership", "Marketing Analytics", "Content Strategy"],
    benefits: [
      "Competitive salary and annual bonus structure",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with generous company match",
      "Hybrid work model with flexible scheduling",
      "Professional development budget",
      "Generous PTO and paid holidays",
      "Parental leave program",
      "Company-sponsored team events",
    ],
    aboutCompany:
      "Brand Elevate is a leading marketing agency specializing in brand development, digital marketing, and creative campaigns. We work with clients across various industries to elevate their brand presence and drive measurable results.",
    companyIndustry: "Marketing & Advertising",
    companySize: "50-200 employees",
    similarJobs: ["marketing-manager", "digital-marketing-specialist", "brand-strategist"],
  },
  {
    id: "financial-analyst",
    title: "Senior Financial Analyst",
    company: "Global Finance Partners",
    location: "Boston, MA (On-site)",
    type: "Full-time",
    category: "Finance",
    level: "Senior",
    salary: "$95,000 - $120,000",
    posted: "3 days ago",
    postedDate: "2023-04-30",
    description:
      "Global Finance Partners is seeking a Senior Financial Analyst to join our corporate finance team. The ideal candidate will be responsible for financial modeling, forecasting, and providing strategic insights to support business decisions.",
    requirements: [
      "5+ years of experience in financial analysis or related role",
      "Strong proficiency in financial modeling and forecasting",
      "Experience with budgeting and variance analysis",
      "Advanced Excel skills and experience with financial software",
      "Knowledge of accounting principles and financial reporting",
      "Bachelor's degree in Finance, Accounting, or related field (CFA/MBA preferred)",
      "Strong analytical and problem-solving skills",
      "Excellent communication skills with the ability to present complex financial information clearly",
    ],
    skills: ["Financial Modeling", "Forecasting", "Excel", "Data Analysis", "Budgeting"],
    benefits: [
      "Competitive salary and annual bonus potential",
      "Comprehensive benefits package including health, dental, and vision",
      "401(k) with company match",
      "Professional development and certification support",
      "Tuition reimbursement program",
      "Generous PTO and paid holidays",
      "Employee wellness program",
      "Company-sponsored social events",
    ],
    aboutCompany:
      "Global Finance Partners is a leading financial services firm providing advisory, investment management, and corporate finance services to clients worldwide. With a reputation for excellence and integrity, we help organizations navigate complex financial challenges and opportunities.",
    companyIndustry: "Financial Services",
    companySize: "500-1000 employees",
    similarJobs: ["financial-manager", "investment-analyst", "corporate-finance-associate"],
  },
  {
    id: "hr-director",
    title: "HR Director",
    company: "Innovate Corp",
    location: "San Francisco, CA",
    type: "Full-time",
    category: "Human Resources",
    level: "Director",
    salary: "$130,000 - $160,000",
    posted: "1 week ago",
    postedDate: "2023-04-25",
    description:
      "Innovate Corp is seeking an experienced HR Director to lead our human resources department. The ideal candidate will develop and implement HR strategies that support our company's growth and culture.",
    requirements: [
      "8+ years of HR experience with at least 3 years in a leadership role",
      "Strong knowledge of HR best practices and employment laws",
      "Experience with HRIS and HR technologies",
      "Proven track record in talent acquisition and retention strategies",
      "Experience developing and implementing HR policies and programs",
      "Strong leadership and team management skills",
      "Excellent communication and interpersonal abilities",
      "Bachelor's degree in HR, Business, or related field (Master's preferred)",
      "PHR/SPHR certification preferred",
    ],
    skills: ["HR Strategy", "Talent Management", "Employee Relations", "Organizational Development", "Compliance"],
    benefits: [
      "Competitive salary and bonus potential",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with generous company match",
      "Flexible work arrangements",
      "Professional development budget",
      "Generous vacation and paid time off",
      "Parental leave program",
      "Employee wellness initiatives",
    ],
    aboutCompany:
      "Innovate Corp is a fast-growing technology company focused on developing innovative solutions for businesses. We believe in creating a positive and inclusive workplace where employees can thrive and contribute to our mission of transforming industries through technology.",
    companyIndustry: "Technology",
    companySize: "200-500 employees",
    similarJobs: ["hr-manager", "talent-acquisition-director", "employee-experience-manager"],
  },
  {
    id: "data-scientist",
    title: "Senior Data Scientist",
    company: "Data Insights Inc",
    location: "Seattle, WA (Hybrid)",
    type: "Full-time",
    category: "Data Science",
    level: "Senior",
    salary: "$130,000 - $160,000",
    posted: "4 days ago",
    postedDate: "2023-04-29",
    description:
      "Data Insights Inc is looking for a Senior Data Scientist to join our analytics team. The ideal candidate will develop and implement advanced machine learning models and algorithms to extract valuable insights from complex datasets.",
    requirements: [
      "5+ years of experience in data science or related field",
      "Strong proficiency in Python, R, or similar programming languages",
      "Experience with machine learning frameworks (TensorFlow, PyTorch, scikit-learn)",
      "Knowledge of statistical analysis and modeling techniques",
      "Experience with big data technologies (Hadoop, Spark)",
      "Familiarity with SQL and NoSQL databases",
      "Strong problem-solving and analytical skills",
      "Excellent communication skills with ability to explain complex concepts",
      "Master's or PhD in Computer Science, Statistics, or related field",
    ],
    skills: ["Python", "Machine Learning", "Statistical Analysis", "SQL", "Data Visualization"],
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health, dental, and vision coverage",
      "401(k) retirement plan with employer match",
      "Flexible hybrid work schedule",
      "Professional development opportunities",
      "Generous PTO policy",
      "Home office stipend",
      "Regular team events and activities",
    ],
    aboutCompany:
      "Data Insights Inc is a leading data analytics company that helps organizations transform their data into actionable insights. We work with clients across various industries to solve complex business problems through advanced analytics, machine learning, and AI solutions.",
    companyIndustry: "Data Analytics & AI",
    companySize: "100-500 employees",
    similarJobs: ["machine-learning-engineer", "data-analyst", "ai-researcher"],
  },
  {
    id: "product-manager",
    title: "Product Manager",
    company: "Apex Industries",
    location: "Austin, TX",
    type: "Full-time",
    category: "Product",
    level: "Manager",
    salary: "$110,000 - $140,000",
    posted: "1 week ago",
    postedDate: "2023-04-25",
    description:
      "Apex Industries is seeking a Product Manager to lead the development and launch of innovative products. The ideal candidate will work cross-functionally with engineering, design, and marketing teams to deliver exceptional user experiences.",
    requirements: [
      "4+ years of experience in product management",
      "Proven track record of successfully launching products",
      "Experience with agile development methodologies",
      "Strong understanding of user-centered design principles",
      "Excellent analytical and problem-solving skills",
      "Experience with product management tools (Jira, Asana, etc.)",
      "Strong communication and presentation skills",
      "Ability to translate business requirements into product features",
      "Bachelor's degree in Business, Computer Science, or related field",
    ],
    skills: ["Product Strategy", "User Experience", "Agile", "Market Research", "Roadmapping"],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible work arrangements",
      "Professional development budget",
      "Generous PTO policy",
      "Parental leave program",
      "Regular team building events",
    ],
    aboutCompany:
      "Apex Industries is a technology company focused on creating innovative products that solve real-world problems. We combine cutting-edge technology with thoughtful design to deliver exceptional user experiences across our product portfolio.",
    companyIndustry: "Technology",
    companySize: "100-500 employees",
    similarJobs: ["product-owner", "ux-designer", "technical-product-manager"],
  },
]

// Initial data for testimonials
const initialTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechVision Enterprises",
    content:
      "Working with this recruitment agency has been transformative for our organization. They truly understand our company culture and consistently deliver exceptional talent that aligns with our values and goals.",
  },
  {
    id: "2",
    name: "Michael Chen",
    position: "COO",
    company: "Global Finance Partners",
    content:
      "Their executive search capabilities are unmatched. They found us a CFO who not only had the technical expertise we needed but also fit perfectly with our company culture. The entire process was smooth and professional.",
  },
]

// Initial data for clients
const initialClients: Client[] = [
  {
    id: "1",
    name: "TechVision",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    id: "2",
    name: "Global Finance",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    id: "3",
    name: "Innovate Corp",
    logo: "/placeholder.svg?height=60&width=120",
  },
]

// Create the store with persist middleware to save state to localStorage
export const useJobStore = create<JobStoreState>()(
  persist(
    (set) => ({
      jobs: initialJobs,
      testimonials: initialTestimonials,
      clients: initialClients,

      // Job actions
      addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] })),
      updateJob: (id, updatedJob) =>
        set((state) => ({
          jobs: state.jobs.map((job) => (job.id === id ? updatedJob : job)),
        })),
      deleteJob: (id) =>
        set((state) => ({
          jobs: state.jobs.filter((job) => job.id !== id),
        })),

      // Testimonial actions
      addTestimonial: (testimonial) =>
        set((state) => ({
          testimonials: [...state.testimonials, testimonial],
        })),
      updateTestimonial: (id, updatedTestimonial) =>
        set((state) => ({
          testimonials: state.testimonials.map((testimonial) =>
            testimonial.id === id ? updatedTestimonial : testimonial,
          ),
        })),
      deleteTestimonial: (id) =>
        set((state) => ({
          testimonials: state.testimonials.filter((testimonial) => testimonial.id !== id),
        })),

      // Client actions
      addClient: (client) =>
        set((state) => ({
          clients: [...state.clients, client],
        })),
      updateClient: (id, updatedClient) =>
        set((state) => ({
          clients: state.clients.map((client) => (client.id === id ? updatedClient : client)),
        })),
      deleteClient: (id) =>
        set((state) => ({
          clients: state.clients.filter((client) => client.id !== id),
        })),
    }),
    {
      name: "job-store", // unique name for localStorage
    },
  ),
)
