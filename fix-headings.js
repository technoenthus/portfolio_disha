import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const files = [
  {
    path: './src/sections/SkillsVisualization.tsx',
    oldText: '<span className="text-white">Technical</span>\n            <span className="text-lavender"> Mastery</span>',
    newText: '<span className="text-white">Technical</span>\n            <br />\n            <span className="text-lavender">Mastery</span>'
  },
  {
    path: './src/sections/ProjectShowcase.tsx',
    oldText: '<span className="text-white">Built to</span>\n            <span className="text-lavender"> Impact</span>',
    newText: '<span className="text-white">Built to</span>\n            <br />\n            <span className="text-lavender">Impact</span>'
  },
  {
    path: './src/sections/AmazonExperience.tsx',
    oldText: '<span className="text-white">Voice-Powered</span>\n            <span className="text-lavender"> Intelligence</span>',
    newText: '<span className="text-white">Voice-Powered</span>\n            <br />\n            <span className="text-lavender">Intelligence</span>'
  },
  {
    path: './src/sections/AchievementsWall.tsx',
    oldText: '<span className="text-white">Proven</span>\n            <span className="text-lavender"> Excellence</span>',
    newText: '<span className="text-white">Proven</span>\n            <br />\n            <span className="text-lavender">Excellence</span>'
  },
  {
    path: './src/sections/MicrosoftExperience.tsx',
    oldText: '<span className="text-white">Engineering</span>\n            <span className="text-lavender"> Excellence</span>',
    newText: '<span className="text-white">Engineering</span>\n            <br />\n            <span className="text-lavender">Excellence</span>'
  }
];

files.forEach(file => {
  try {
    const filePath = path.resolve(file.path);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Debug: Check if we can find "Mastery" or "Impact" etc
    const testPatterns = {
      'SkillsVisualization.tsx': 'Mastery',
      'ProjectShowcase.tsx': 'Impact',
      'AmazonExperience.tsx': 'Intelligence',
      'AchievementsWall.tsx': 'Excellence',
      'MicrosoftExperience.tsx': 'Excellence'
    };
    
    const filename = path.basename(filePath);
    const searchTerm = testPatterns[filename];
    
    if (searchTerm && content.includes(searchTerm)) {
      // Found the term, now try regex replacement
      const regex = /<span className="text-white">[^<]+<\/span>\s+<span className="text-lavender"> [^<]+<\/span>/;
      const match = content.match(regex);
      
      if (match) {
        console.log(`Found pattern in ${file.path}`);
        const newContent = content.replace(
          /<span className="text-white">([^<]+)<\/span>\s+<span className="text-lavender"> ([^<]+)<\/span>/g,
          '<span className="text-white">$1</span>\n            <br />\n            <span className="text-lavender">$2</span>'
        );
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`✓ Updated: ${file.path}`);
      } else {
        console.log(`! Pattern structure not found in: ${file.path}`);
      }
    } else {
      console.log(`! Search term "${searchTerm}" not found in: ${file.path}`);
    }
  } catch (err) {
    console.error(`✗ Error processing ${file.path}:`, err.message);
  }
});

console.log('\nDone!');
