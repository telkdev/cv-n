import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nadiia Kovach",
  initials: "NK",
  location: "Szczecin, Poland, CET",
  avatarUrl: "cv-n/me.png", // Avatar image from public folder for Github Pages
  locationLink: "https://www.google.com/maps/place/Szczecin",
  personalWebsiteUrl: "https://telkdev.github.io/cv-n/",
  about: "Creative Marketing Manager / Head of Creative Department",
  summary: (
    <>
      A creative and results-driven professional with nearly 7 years of
      experience in digital marketing, leading teams and managing projects from
      concept to execution. Known for turning market insights into compelling
      campaigns across digital platforms. Skilled at guiding teams to deliver
      high-quality content that aligns with business goals and exceeds client
      expectations. <b>English level - C1.</b>
    </>
  ),
  contact: {
    email: "nadiakovachwork@gmail.com",
    social: [], // Can be populated when social media links are available
  },
  work: [
    {
      company: "Ad2Lynx",
      link: "",
      location: "Remote",
      badges: ['Creative Direction', 'Team Leadership', 'Digital Marketing'],
      title: "Creative Marketing Manager / Head of Creative Department",
      start: "Sep 2020",
      end: "Present",
      description: (
        <>
          <span className="font-bold mb-2 underline block">Search Feed / RSoC</span>
          <ul className="space-y-3">
            <li>
              <strong className="font-medium mb-2 block">
                Team Management
              </strong>
              <ul className="ml-4 list-inside list-disc">
                <li>Supervise team of 10 editors and designers</li>
                <li>
                  Oversee 400+ creatives monthly, provide necessary feedback,
                  and communicate with buyers
                </li>
                <li>
                  Monitor asset progress and track key performance indicators
                  (CTR, CPA, CPM, ROAS)
                </li>
                <li>
                  Step in as a designer when needed or collaborate closely with
                  a designer to co-develop creative assets
                </li>
              </ul>
            </li>
            <li>
              <strong className="font-medium mb-2 block">
                Market Research & Analysis
              </strong>
              <ul className="ml-4 list-inside list-disc">
                <li>
                  Use spy services (Pipiads, AdHeart, Anstrex) for market
                  research and reference collection
                </li>
                <li>
                  Conduct market and competitor analysis to develop and refine
                  creative strategies
                </li>
                <li>Research users&apos; pain points and needs</li>
                <li>Prepare and deliver presentations to clients</li>
              </ul>
            </li>
            <li>
              <strong className="font-medium mb-2 block">
                Idea Generation
              </strong>
              <ul className="ml-4 list-inside list-disc">
                <li>
                  Conduct brainstorming sessions with the team to generate new
                  ideas for various categories
                </li>
              </ul>
            </li>
          </ul>

          <span className="font-bold mb-2 underline block mt-4">Brands</span>
          <ul className="space-y-3">
            <li>
              <strong className="font-medium mb-2 block">
                Market Analysis
              </strong>
              <ul className="ml-4 list-inside list-disc">
                <li>Conduct competitor analysis and market research</li>
                <li>Prepare and deliver presentations to clients</li>
              </ul>
            </li>
            <li>
              <strong className="font-medium mb-2 block">
                Creative Process Management
              </strong>
              <ul className="ml-4 list-inside list-disc">
                <li>Generate and present creative ideas for brands, focusing on banners and videos for Facebook and TikTok</li>
                <li>Develop and supervise briefs for UGC actors (Ukrainian and English), communicate with them</li>
                <li>Control the outcome of shoots and overall creative production</li>
                <li>Step in as a designer when needed or collaborate closely with a designer to co-develop creative assets</li>
                <li>Conduct thorough reviews and provide final approvals for creative content prior to client delivery</li>
              </ul>
            </li>
            <li>
              <strong className="font-medium mb-2 block">
                Creative Analysis
              </strong>
              <ul className="ml-4 list-inside list-disc">
                <li>Assess the performance of creative content on Facebook and TikTok platforms</li>
                <li>Identify critical categories and metrics to evaluate creative effectiveness</li>
              </ul>
            </li>
            <li>
              <strong className="font-medium mb-2 block">
                Copywriting
              </strong>
              <ul className="ml-4 list-inside list-disc">
                <li>Craft Ad Copy for Facebook posts</li>
                <li>Generate text for advertising creatives (videos, banners) on TikTok and Facebook</li>
              </ul>
            </li>
          </ul>

          <span className="font-bold mb-2 underline block mt-4">Manager Responsibilities</span>
          <ul className="space-y-3">
            <li>
              <strong className="font-medium mb-2 block">
                Team Development
              </strong>
              <ul className="ml-4 list-inside list-disc">
                <li>Developed work guidelines for actors and creative team</li>
                <li>Developed and maintain individual growth plans for team members</li>
                <li>Act as an advocate for the team, representing their interests at both the team and leadership levels</li>
                <li>Conduct one-on-one meetings with team members to provide performance feedback, address concerns, and support professional development</li>
              </ul>
            </li>
            <li>
              <strong className="font-medium mb-2 block">
                Performance Management
              </strong>
              <ul className="ml-4 list-inside list-disc">
                <li>Prepare quarterly reports to evaluate team performance and effectiveness</li>
                <li>Collaborate with HR on a monthly basis to track employee progress and discuss development goals</li>
                <li>Step in to support the creative team directly during periods of high workload, ensuring project continuity and quality</li>
              </ul>
            </li>
            <li>
              <strong className="font-medium mb-2 block">
                Workflow Optimization
              </strong>
              <ul className="ml-4 list-inside list-disc">
                <li>Organize and coordinate internal workflows, including task and responsibility allocation, while ensuring the quality and timeliness of deliverables</li>
                <li>Developed and implemented an internal time-tracking system for the team, including automation using ClickUp to streamline reporting and improve workflow efficiency</li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },

    {
      company: "ThinkMobiles",
      link: "",
      location: "Uzghorod, Ukraine",
      badges: [
        "Copywriting (English)",
        "Marketing research",
      ],
      title: "Copywriter / Marketing Researcher",
      start: "Jan 2017",
      end: "Aug 2020",
      description: (
        <>
          <ul className="space-y-3">
            <li>
              <strong className="font-medium mb-2 block">
                Content Creation
              </strong>
              <ul className="ml-4 list-inside list-disc">
                <li>Created website copy for ThinkMobiles, tailored to target audiences and aligned with brand voice and messaging</li>
                <li>Built and managed a Quora account focused on history and technology, reaching nearly 500,000 reads through engaging, research-based content</li>
                <li>Wrote promotional and UX-focused copy for an internal project—a discount coupon website for pizzerias</li>
              </ul>
            </li>
            <li>
              <strong className="font-medium mb-2 block">
                Quality Assurance
              </strong>
              <ul className="ml-4 list-inside list-disc">
                <li>Proofread and edited content produced by team members to ensure clarity, consistency, and high editorial standards</li>
              </ul>
            </li>
            <li>
              <strong className="font-medium mb-2 block">
                Market Research
              </strong>
              <ul className="ml-4 list-inside list-disc">
                <li>Conducted competitor research and gathered marketing insights to support strategic planning and content development</li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },
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
    "UI/UX Design",
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
  ],
  projects: [
    {
      title: "Creative Team Workflow Optimization",
      techStack: ["ClickUp", "Process Automation", "Team Management"],
      description:
        "Developed and implemented an internal time-tracking system for the creative team, including automation using ClickUp to streamline reporting and improve workflow efficiency.",
    },
    {
      title: "Affiliate Summit East 2023",
      techStack: ["Digital Marketing", "Networking", "Performance Marketing"],
      description:
        "Attended leading industry conference in New York focused on performance marketing, networking, and digital innovation.",
    },
    {
      title: "Telegram GIF Contest 2022",
      techStack: ["Creative Design", "Animation", "Motion Graphics"],
      description:
        "Winner of the Telegram GIF Contest 2022, awarded with a cash prize.",
    },
  ],
  education: [
    // Education details can be added when available
  ],
} as const;
