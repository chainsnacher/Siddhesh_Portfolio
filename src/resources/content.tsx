import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Siddhesh",
  lastName: "Dange",
  name: `Siddhesh Dange`,
  role: "Flutter Developer",
  avatar: "/images/siddpic.jpg",
  email: "siddheshdange5@gmail.com",
  location: "Asia/Kolkata", // IANA time zone identifier for Mumbai/India
  languages: ["English", "Hindi","Marathi"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false, // set to false to hide this section
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/chainsnacher",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/siddhesh-dange",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hot Reloading The Vision to Reality</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Flutter</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} by{" "}
      <Text as="span" size="xl" weight="strong">profession</Text>, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a {person.location.split("/")[0]?.replace("", " ")}-based {person.role.toLowerCase()} as a Fresher with  passion for transforming complex challenges
        into simple, elegant design solutions. Their work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Certificates",
    experiences: [
      {
        company: "Google Cloud Skills Boost",
        timeframe: "Issued Jun 2025",
        role: "Google Cloud Career LaunchPad Cloud Engineer Track",
        achievements: [
          <>
            Skills: Cloud Computing and Google Cloud Dataflow
          </>,
          <>
            Credential ID OlqAPtxR
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/certificate.jpg",
            alt: "certificate image",
            width: 16,
            height: 11,
          },
        ],
      },
      {
        company: "Publications",
        timeframe: "Issued April 2026",
        role: "Assessing AI Detectors in Indentifying AI-Generated Code: Implications for Education",
        achievements: [
          <>
            Published In IJRAR ( www.ijrar.org ) UGC Approved (Journal No : 43602) & 7.17 Impact Factor
Volume 13 Issue 2 April 2026, Date of Publication: 21-April-2026

          </>,
          <>
            Credential ID IJRAR26B1768
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/publicationcertificate.jpg",
            alt: "certificate image",
            width: 16,
            height: 11,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Rajiv Gandhi Institute of Technology            ",
        description: <>
          Studied computer science and engineering.
        </>,
      },
      {
        name: "Bhavan's College of science",
        description: <>Studied science /HSC.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Flutter",
        description: (
          <>Able to prototype App and build cross-platform applications.</>
        ),
        tags: [
          {
            name: "Flutter",
            icon: "flutter",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/fittrackpro.jpeg",
            alt: "Project image",
            width: 17,
            height: 10,
          },
          {
            src: "/images/projects/project-01/mynoteapp.jpeg",
            alt: "Project image",
            width: 17,
            height: 10,
          },
        ],
      },
      {
        title: "Full Stack App Development",
        description: (
          <>Building next gen apps with Integration of JavaScript, Next.js, and sqlite.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "SQLite",
            icon: "sqlite",
          },
        
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/Easybuy.jpeg",
            alt: "Project image",
            width: 17,
            height: 10,
          },
        ],
      },
    ],
  },
  resume: {
    display: true,
    title: "Resume",
    description: <>Download my resume to view my experience, projects, and skills.</>,
    filePath: "/Documents/SiddheshDangeResume.pdf",
    label: "Download Resume",
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
