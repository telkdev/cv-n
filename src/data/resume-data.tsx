import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nadiia Kovach",
  initials: "NK",
  location: "Ukraine",
  locationLink: "https://www.google.com/maps/place/Ukraine",
  about: "Creative Marketing Manager / Head of Creative with expertise in digital marketing and team leadership.",
  summary: (
    <>
      A results-driven and creative professional with nearly 7 years of experience leading teams and managing projects in the digital marketing space. 
      Specializes in transforming market insights into compelling creative concepts and executing them across digital platforms. 
      Skilled at guiding talented teams to deliver high-quality content that not only looks great but also aligns with business objectives and client expectations.
    </>
  ),
  contact: {
    email: "nadiakovachwork@gmail.com",
    tel: "+380506207993",
    social: [] // Can be populated when social media links are available
  },
  work: [
    {
      company: "Search Feed / RSoC",
      link: "",
      location: "Remote",
      badges: [
        "Team Leadership",
        "Creative Direction",
        "Digital Marketing",
        "Performance Analysis",
        "Market Research"
      ],
      title: "Creative Marketing Manager / Head of Creative Department",
      start: "Sep 2020",
      end: "Present",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li className="mb-2">
              <strong>Team Management:</strong>
              <ul className="list-inside list-disc ml-4">
                <li>Supervise team of 10 editors and designers</li>
                <li>Oversee 400+ creative assets monthly</li>
                <li>Review each creative, provide necessary feedback, and communicate with buyers</li>
                <li>Monitor asset progress and track key performance indicators (CTR, CPA, CPM, ROAS)</li>
                <li>Step in as a designer when needed or collaborate closely with a designer to co-develop creative assets</li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Market Research & Analysis:</strong>
              <ul className="list-inside list-disc ml-4">
                <li>Use spy services (Pipiads, AdHeart, Anstrex) for market research and reference collection</li>
                <li>Conduct comprehensive market category analysis to develop and refine creative strategies</li>
                <li>Research users&apos; pain points and needs</li>
                <li>Conduct competitor analysis and market research</li>
                <li>Prepare and deliver presentations to clients</li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Creative Process Management:</strong>
              <ul className="list-inside list-disc ml-4">
                <li>Generate and present creative ideas for brands, focusing on banners and videos for Facebook and TikTok</li>
                <li>Develop and supervise briefs for UGC actors (Ukrainian and English)</li>
                <li>Control the outcome of shoots and overall creative production</li>
                <li>Conduct thorough reviews and provide final approvals for creative content</li>
                <li>Assess the performance of creative content on social platforms</li>
                <li>Identify critical categories and metrics to evaluate creative effectiveness</li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Management & Leadership:</strong>
              <ul className="list-inside list-disc ml-4">
                <li>Developed work guidelines for actors and creative team</li>
                <li>Prepare quarterly reports to evaluate team performance</li>
                <li>Develop and maintain individual growth plans for team members</li>
                <li>Act as team advocate at leadership level</li>
                <li>Organize and coordinate internal workflows</li>
                <li>Conduct one-on-one meetings for performance feedback</li>
                <li>Collaborate with HR on employee progress tracking</li>
                <li>Implemented internal time-tracking system using ClickUp</li>
              </ul>
            </li>
            <li>
              <strong>Content Creation:</strong>
              <ul className="list-inside list-disc ml-4">
                <li>Craft Ad Copy for Facebook posts</li>
                <li>Generate text for advertising creatives on TikTok and Facebook</li>
                <li>Lead brainstorming sessions for various categories</li>
              </ul>
            </li>
          </ul>
        </>
      )
    },
    {
      company: "Creative Services",
      link: "",
      location: "Volunteer Work",
      badges: [
        "Video Editing",
        "UI/UX Design",
        "Adobe Creative Suite",
        "Figma",
        "Client Communication"
      ],
      title: "Video Editor & UI/UX Designer",
      start: "2023",
      end: "Present",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              <strong>Video Editing:</strong>
              <ul className="list-inside list-disc ml-4">
                <li>Collaborate with clients to edit and deliver high-quality videos</li>
                <li>Partner with clients to understand their vision and translate it into compelling content</li>
                <li>Edit raw footage, incorporating transitions, graphics, and sound effects</li>
                <li>Apply color correction, grading, and LUTs</li>
                <li>Demonstrate flexibility in incorporating client feedback</li>
              </ul>
            </li>
            <li>
              <strong>UI/UX Design:</strong>
              <ul className="list-inside list-disc ml-4">
                <li>Create wireframes, mockups, and prototypes</li>
                <li>Design user interfaces for websites and mobile applications</li>
                <li>Utilize Figma for designing, prototyping, and collaboration</li>
                <li>Focus on usability and aesthetic appeal</li>
                <li>Provide ongoing support and design revisions</li>
              </ul>
            </li>
          </ul>
        </>
      )
    }
  ],
  skills: [
    // Leadership & Management
    "Team Leadership",
    "Project Management",
    "Creative Direction",
    "Market Analysis",
    "Performance Analysis",
    "Client Communication",
    "Brainstorming & Ideation",
    "Digital Marketing",
    
    // Creative & Technical
    "Video Editing",
    "Video Cutting and Trimming",
    "Color Correction and Grading",
    "Transitions and Effects",
    "LUTs Application",
    "UI/UX Design",
    "Wireframing and Prototyping",
    "Banner Design",
    
    // Tools & Software
    "Adobe Premiere Pro",
    "Adobe After Effects",
    "Adobe Illustrator",
    "Figma",
    "ClickUp",
    
    // Marketing & Analysis
    "Facebook & TikTok Analytics",
    "Spy Services (Pipiads, AdHeart, Anstrex)",
    
    // Languages
    "Ukrainian (Native)",
    "English (C1)"
  ],
  projects: [
    {
      title: "Creative Team Workflow Optimization",
      techStack: ["ClickUp", "Process Automation", "Team Management"],
      description: "Developed and implemented an internal time-tracking system for the creative team, including automation using ClickUp to streamline reporting and improve workflow efficiency.",
    },
    {
      title: "Affiliate Summit East 2023",
      techStack: ["Digital Marketing", "Networking", "Performance Marketing"],
      description: "Attended leading industry conference in New York focused on performance marketing, networking, and digital innovation.",
    },
    {
      title: "Telegram GIF Contest 2022",
      techStack: ["Creative Design", "Animation", "Motion Graphics"],
      description: "Winner of the Telegram GIF Contest 2022, awarded with a cash prize.",
    }
  ],
  education: [
    // Education details can be added when available
  ]
} as const;
