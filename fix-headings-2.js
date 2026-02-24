import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const files = [
  { file: 'src/sections/SkillsVisualization.tsx', search: 'Technical', replace: 'Mastery' },
  { file: 'src/sections/ProjectShowcase.tsx', search: 'Built to', replace: 'Impact' },
  { file: 'src/sections/AmazonExperience.tsx', search: 'Voice-Powered', replace: 'Intelligence' },
  { file: 'src/sections/AchievementsWall.tsx', search: 'Proven', replace: 'Excellence' },
  { file: 'src/sections/MicrosoftExperience.tsx', search: 'Engineering', replace: 'Excellence' },
];

files.forEach(({ file, search, replace }) => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix the heading pattern to add <br /> and remove the space
  const pattern = new RegExp(
    `(<span className="text-white">${search}</span>)\\s*<span className="text-lavender"> ${replace}</span>`,
    'g'
  );
  
  const replacement = `$1\n            <br />\n            <span className="text-lavender">${replace}</span>`;
  
  content = content.replace(pattern, replacement);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Fixed ${file}`);
});

console.log('All headings updated!');
