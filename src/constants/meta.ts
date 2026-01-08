// Site URL
export const HTTPS = "https://";

// Site Meta
export const FIRST_NAME = "Jesse";
export const LAST_NAME = "Yang";
export const NAME = `${FIRST_NAME} ${LAST_NAME}`;
export const URL = process.env.GATSBY_SITE_URL;
export const EMAIL = "jesseyang2000@hotmail.com";
export const GITHUB_URL = `${HTTPS}github.com/JesseYeung`; // Assuming based on project links
export const LINKEDIN_URL = `${HTTPS}www.linkedin.com/in/hailin-yang2000`;

// Site Config
export const MODE = "mode";
export const STANDALONE = "standalone";
export const RESUME_FILE = "JesseYangResume.pdf";
export const STANDALONE_URL = `?${MODE}=${STANDALONE}`;
export const ORGANIZATION = process.env.GATSBY_ORGANIZATION;
export const COPYRIGHT = `© ${new Date().getFullYear()} ${NAME}`;
export const COPYRIGHT_LONG = `© ${new Date().getFullYear()} ${NAME} | All rights reserved.`;

// Site Title and Description
export const REGION = "Sydney, Australia";
export const OCCUPATION = "Full-Stack Developer";
export const PAGE_TITLE = ` | ${NAME} | ${OCCUPATION}`;
export const SITE_TITLE = `${NAME} | ${OCCUPATION} | ${REGION}`;
export const SITE_KEYWORDS = `${NAME.toUpperCase()}, Full-Stack Developer, Software Engineer, Sydney, Australia, Python, Java, JavaScript, React, Django, Flask, Node.js, Agile, Scrum, UNSW, University of New South Wales, Guangdong University of Technology, University of Western Australia, ${FIRST_NAME}, Yang, Information Technology, Computer Science, Backend, Frontend, Data Pipelines, Automation`;

// Page Titles
export const INTRO_TITLE = "G'day";
export const PROJECTS_TITLE = "Projects";
export const CONTACT_TITLE = "Contact Me";
export const EDUCATION_TITLE = "Education";
export const NOT_FOUND_TITLE = "404 Not Found";
export const ACKNOWLEDGEMENT_TITLE = "Acknowledgement";
export const EXPERIENCE_TITLE = "Skills & Work Experience";

// Descriptions
export const DESCRIPTION_NOT_FOUND =
  "The page you requested could not be found. Please verify the URL or return to the homepage.";
export const DESCRIPTION_ACKNOWLEDGEMENT =
  "We acknowledge the Traditional Owners of the land where we work and live. We pay our respects to Elders past, present and emerging.";
export const DESCRIPTION_CONTACT = `Connect with ${NAME}, ${OCCUPATION} extraordinaire! Reach out via email at ${EMAIL}. Explore ${URL} for his portfolio.`;
export const DESCRIPTION_INTRO =
  "You can connect with me on LinkedIn, check out my repositories on GitHub, or reach out to me via email. I hope you find my page enjoyable and have a great day!";
export const DESCRIPTION_PROJECTS = `${FIRST_NAME}'s versatile skills showcase a range of technologies and applications, demonstrating proficiency in frontend, backend, database, and mobile development.`;
export const DESCRIPTION_INDEX = `G'day, I'm ${FIRST_NAME}. I'm a ${OCCUPATION} and Creative Designer from ${REGION}. On this corner of the internet, you'll find information about me.`;
export const DESCRIPTION_EXPERIENCE = `${NAME} is a Full-Stack Developer with experience in Python, Java, JavaScript, and more, building scalable systems and leading agile teams.`;
export const DESCRIPTION_EDUCATION =
  "Master of Information Technology graduate from the University of New South Wales. Also holds degrees in Computer Science from University of Western Australia and Guangdong University of Technology.";
