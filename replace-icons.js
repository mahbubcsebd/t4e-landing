const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'app', 'components');

const iconMapping = {
  'fa-infinity': 'Infinity',
  'fa-diagram-project': 'Network',
  'fa-rocket': 'Rocket',
  'fa-hotel': 'Building',
  'fa-terminal': 'Terminal',
  'fa-i-cursor': 'TextCursor',
  'fa-cloud': 'Cloud',
  'fa-plug': 'Plug',
  'fa-github': 'Github',
  'fa-jira': 'Kanban',
  'fa-microsoft': 'LayoutGrid',
  'fa-database': 'Database',
  'fa-triangle-exclamation': 'TriangleAlert',
  'fa-comments': 'MessageSquareMore',
  'fa-shuffle': 'Shuffle',
  'fa-hourglass-end': 'Hourglass',
  'fa-map': 'Map',
  'fa-layer-group': 'Layers',
  'fa-code-branch': 'GitBranch',
  'fa-plug-circle-bolt': 'Zap',
  'fa-check': 'Check',
  'fa-robot': 'Bot',
  'fa-users-gear': 'Users',
  'fa-chess-king': 'Crown',
  'fa-code': 'Code',
  'fa-vial-circle-check': 'FlaskConical',
  'fa-list-check': 'ListChecks',
  'fa-shield-halved': 'ShieldHalf',
  'fa-docker': 'Container',
  'fa-eye': 'Eye',
  'fa-chart-line': 'TrendingUp',
  'fa-file-lines': 'FileText',
  'fa-person-chalkboard': 'Presentation',
  'fa-lightbulb': 'Lightbulb',
  'fa-rotate': 'RotateCw',
  'fa-magnifying-glass-chart': 'Search',
  'fa-server': 'Server',
  'fa-handshake': 'Handshake',
  'fa-user-graduate': 'GraduationCap',
  'fa-box-open': 'PackageOpen',
  'fa-right-left': 'ArrowRightLeft',
  'fa-store': 'Store',
  'fa-people-arrows': 'Users',
  'fa-door-open': 'DoorOpen',
  'fa-building-shield': 'Shield',
  'fa-users-rectangle': 'Users',
  'fa-clock-rotate-left': 'History',
  'fa-book-open': 'BookOpen',
  'fa-key': 'Key',
  'fa-eye-slash': 'EyeOff',
  'fa-file-powerpoint': 'Presentation',
  'fa-wand-magic-sparkles': 'Wand2',
  'fa-microphone-lines': 'Mic',
  'fa-image': 'Image',
  'fa-flask': 'FlaskConical',
  'fa-book': 'Book',
  'fa-table-cells-large': 'Table',
  'fa-tag': 'Tag',
  'fa-circle-question': 'CircleHelp'
};

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.js') || f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let iconsToImport = new Set();
  let modified = false;

  // Find all <i> tags
  const regex = /<i\s+className="(.*?)"><\/i>/g;
  content = content.replace(regex, (match, classNames) => {
    // extract fa-* class
    let faClass = classNames.split(' ').find(c => c.startsWith('fa-') && c !== 'fa-solid' && c !== 'fa-brands');
    if (!faClass) return match;

    let lucideIcon = iconMapping[faClass] || 'Box';
    iconsToImport.add(lucideIcon);

    // remove fa-solid, fa-brands, and the faClass
    let otherClasses = classNames.split(' ').filter(c => c !== 'fa-solid' && c !== 'fa-brands' && c !== faClass).join(' ');

    modified = true;
    if (otherClasses.trim().length > 0) {
      return `<${lucideIcon} className="${otherClasses.trim()}" />`;
    } else {
      return `<${lucideIcon} />`;
    }
  });

  if (modified && iconsToImport.size > 0) {
    const importStatement = `import { ${Array.from(iconsToImport).join(', ')} } from 'lucide-react';\n`;
    content = importStatement + content;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file} with imports: ${Array.from(iconsToImport).join(', ')}`);
  }
}

console.log("Done updating icons.");
