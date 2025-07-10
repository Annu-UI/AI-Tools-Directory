
const aiTools = [
  // Daily Use / Productivity
  {
    name: "ChatGPT",
    category: "productivity",
    pricing: "freemium",
    description: "Ask questions, write emails, create content, solve problems, code help, translations, and general assistance.",
    url: "https://chat.openai.com",
    icon: "🤖"
  },
  {
    name: "Notion AI",
    category: "productivity",
    pricing: "freemium",
    description: "Write notes, brainstorm ideas, summarize content, create action items, and organize information.",
    url: "https://notion.so",
    icon: "📝"
  },
  {
    name: "Grammarly",
    category: "productivity",
    pricing: "freemium",
    description: "Fix grammar, improve writing tone, check spelling, and enhance clarity in emails and documents.",
    url: "https://grammarly.com",
    icon: "✍️"
  },
  {
    name: "Calendly",
    category: "productivity",
    pricing: "freemium",
    description: "Schedule meetings automatically, find available times, send reminders, and manage appointments.",
    url: "https://calendly.com",
    icon: "📅"
  },
  {
    name: "Todoist",
    category: "productivity",
    pricing: "freemium",
    description: "Create tasks with natural language, set smart reminders, organize projects, and track productivity.",
    url: "https://todoist.com",
    icon: "✅"
  },
  {
    name: "Otter.ai",
    category: "productivity",
    pricing: "freemium",
    description: "Record meetings, get live transcripts, generate summaries, and identify speakers automatically.",
    url: "https://otter.ai",
    icon: "🎤"
  },
  {
    name: "Zapier",
    category: "productivity",
    pricing: "freemium",
    description: "Connect apps, automate repetitive tasks, trigger actions, and create workflows without coding.",
    url: "https://zapier.com",
    icon: "⚡"
  },

  // Tech / Development
  {
    name: "GitHub Copilot",
    category: "development",
    pricing: "paid",
    description: "Write code faster, get function suggestions, auto-complete code, and debug with AI assistance.",
    url: "https://github.com/features/copilot",
    icon: "👨‍💻"
  },
  {
    name: "Cursor",
    category: "development",
    pricing: "freemium",
    description: "Edit code with natural language, generate functions, refactor code, and pair-program with AI.",
    url: "https://cursor.sh",
    icon: "🖱️"
  },
  {
    name: "Vercel v0",
    category: "development",
    pricing: "free",
    description: "Generate React components, create UI designs, build interfaces from text descriptions.",
    url: "https://v0.dev",
    icon: "🎨"
  },
  {
    name: "Replit",
    category: "development",
    pricing: "freemium",
    description: "Code online, debug programs, learn programming, collaborate on projects, and deploy apps.",
    url: "https://replit.com",
    icon: "💻"
  },
  {
    name: "Tabnine",
    category: "development",
    pricing: "freemium",
    description: "Auto-complete code, predict next lines, learn from your codebase, and speed up development.",
    url: "https://tabnine.com",
    icon: "🔮"
  },
  {
    name: "Codeium",
    category: "development",
    pricing: "free",
    description: "Get code suggestions, chat about code, search codebases, and accelerate programming.",
    url: "https://codeium.com",
    icon: "🚀"
  },
  {
    name: "DeepCode",
    category: "development",
    pricing: "freemium",
    description: "Find bugs, detect security issues, get improvement suggestions, and review code quality.",
    url: "https://snyk.io/platform/deepcode-ai",
    icon: "🔍"
  },

  // Content Creation
  {
    name: "Runway",
    category: "content",
    pricing: "freemium",
    description: "Create videos from text, edit footage, generate effects, and produce professional video content.",
    url: "https://runwayml.com",
    icon: "🎬"
  },
  {
    name: "DALL-E 2",
    category: "content",
    pricing: "paid",
    description: "Generate images from text, create art, design logos, and produce visual content instantly.",
    url: "https://openai.com/dall-e-2",
    icon: "🎨"
  },
  {
    name: "Midjourney",
    category: "content",
    pricing: "paid",
    description: "Create stunning artwork, generate illustrations, design concepts, and produce artistic images.",
    url: "https://midjourney.com",
    icon: "🖼️"
  },
  {
    name: "ElevenLabs",
    category: "content",
    pricing: "freemium",
    description: "Generate realistic voices, clone speech, create audiobooks, and produce voice content.",
    url: "https://elevenlabs.io",
    icon: "🔊"
  },
  {
    name: "Jasper",
    category: "content",
    pricing: "paid",
    description: "Write marketing copy, create blog posts, generate ad content, and produce written materials.",
    url: "https://jasper.ai",
    icon: "📄"
  },
  {
    name: "Luma AI",
    category: "content",
    pricing: "freemium",
    description: "Create 3D models, generate videos, capture scenes, and produce immersive content.",
    url: "https://lumalabs.ai",
    icon: "🎥"
  },
  {
    name: "Synthesia",
    category: "content",
    pricing: "paid",
    description: "Create AI presenter videos, generate training content, and produce multilingual videos.",
    url: "https://synthesia.io",
    icon: "🎭"
  },

  // Study / Learning
  {
    name: "Quillbot",
    category: "study",
    pricing: "freemium",
    description: "Paraphrase text, improve writing, summarize content, and enhance academic papers.",
    url: "https://quillbot.com",
    icon: "📚"
  },
  {
    name: "Socratic",
    category: "study",
    pricing: "free",
    description: "Get homework help, solve math problems, understand concepts, and learn step-by-step.",
    url: "https://socratic.org",
    icon: "🧠"
  },
  {
    name: "Coursera AI",
    category: "study",
    pricing: "freemium",
    description: "Take online courses, get personalized learning paths, and earn certificates.",
    url: "https://coursera.org",
    icon: "🎓"
  },
  {
    name: "Anki",
    category: "study",
    pricing: "freemium",
    description: "Create flashcards, memorize efficiently, schedule reviews, and track learning progress.",
    url: "https://apps.ankiweb.net",
    icon: "🃏"
  },
  {
    name: "SciSpace",
    category: "study",
    pricing: "freemium",
    description: "Understand research papers, get explanations, summarize studies, and explore literature.",
    url: "https://typeset.io",
    icon: "🔬"
  },
  {
    name: "Turnitin",
    category: "study",
    pricing: "paid",
    description: "Check for plagiarism, get writing feedback, ensure originality, and improve academic work.",
    url: "https://turnitin.com",
    icon: "🔍"
  },

  // Design
  {
    name: "Canva AI",
    category: "design",
    pricing: "freemium",
    description: "AI-powered design platform with magic resize, background removal, and text-to-image generation features.",
    url: "https://canva.com",
    icon: "🎨"
  },
  {
    name: "Figma AI",
    category: "design",
    pricing: "freemium",
    description: "AI features in Figma for design suggestions, auto-layout, and collaborative design enhancement.",
    url: "https://figma.com",
    icon: "🎯"
  },
  {
    name: "Adobe Firefly",
    category: "design",
    pricing: "freemium",
    description: "Adobe's AI creative suite for text-to-image, text effects, and generative fill in Photoshop.",
    url: "https://firefly.adobe.com",
    icon: "🔥"
  },
  {
    name: "Stable Diffusion",
    category: "design",
    pricing: "paid",
    description: "Open-source AI image generator that creates high-quality images from text descriptions.",
    url: "https://stability.ai",
    icon: "🌟"
  },
  {
    name: "Remove.bg",
    category: "design",
    pricing: "freemium",
    description: "AI-powered background removal tool that automatically detects and removes backgrounds from images.",
    url: "https://remove.bg",
    icon: "🖼️"
  },

  // Business
  {
    name: "Salesforce Einstein",
    category: "business",
    pricing: "paid",
    description: "AI-powered CRM features for sales forecasting, lead scoring, and customer insights automation.",
    url: "https://salesforce.com/products/einstein",
    icon: "📊"
  },
  {
    name: "HubSpot AI",
    category: "business",
    pricing: "freemium",
    description: "AI tools for marketing automation, content creation, and customer service within HubSpot's CRM.",
    url: "https://hubspot.com",
    icon: "🎯"
  },
  {
    name: "Intercom",
    category: "business",
    pricing: "paid",
    description: "AI-powered customer service platform with chatbots, automated responses, and conversation routing.",
    url: "https://intercom.com",
    icon: "💬"
  },
  {
    name: "Zoom AI",
    category: "business",
    pricing: "freemium",
    description: "AI meeting assistant with real-time transcription, summary generation, and action item extraction.",
    url: "https://zoom.us",
    icon: "📹"
  },
  {
    name: "Slack AI",
    category: "business",
    pricing: "paid",
    description: "AI features in Slack for message summarization, search enhancement, and workflow automation.",
    url: "https://slack.com",
    icon: "💼"
  },

  {
    name: "Heen",
    category: "productivity",
    pricing: "freemium",
    description: "Create your own personalized AI avatar that mimics your style and expressions for videos or presentations.",
    url: "https://heen.ai",
    icon: "🧑‍🎤"
  },
  {
    name: "ElevenLabs",
    category: "content",
    pricing: "freemium",
    description: "Clone voices or generate realistic speech for your avatar, video or podcast.",
    url: "https://elevenlabs.io",
    icon: "🎙️"
  },
  {
    name: "Suno AI",
    category: "content",
    pricing: "freemium",
    description: "Generates custom background audio and music for videos, games, or personal use.",
    url: "https://suno.ai",
    icon: "🎵"
  },
  {
    name: "NotebookLM",
    category: "study",
    pricing: "free",
    description: "Transforms documents, PPTs, blogs, or videos into podcasts, summaries and notes.",
    url: "https://notebooklm.google",
    icon: "📓"
  },
  {
    name: "Claude.ai",
    category: "development",
    pricing: "freemium",
    description: "Conversational AI known for safe & reliable code explanations and generation.",
    url: "https://claude.ai",
    icon: "🤖"
  },
  {
    name: "Apollo.io",
    category: "business",
    pricing: "freemium",
    description: "Sales intelligence and engagement platform to automate lead generation.",
    url: "https://apollo.io",
    icon: "🚀"
  },
  {
    name: "Instantly.ai",
    category: "business",
    pricing: "paid",
    description: "Cold email and outreach automation to scale B2B campaigns.",
    url: "https://instantly.ai",
    icon: "✉️"
  },
  {
    name: "Flux.ai",
    category: "design",
    pricing: "freemium",
    description: "AI for image generation and visual design, often in product or circuit design.",
    url: "https://flux.ai",
    icon: "🎨"
  },
  {
    name: "Perplexity",
    category: "productivity",
    pricing: "freemium",
    description: "Conversational AI search engine that gives sourced answers to any query.",
    url: "https://perplexity.ai",
    icon: "🔍"
  },
  {
    name: "Winston AI",
    category: "business",
    pricing: "paid",
    description: "Detects AI-generated content and checks originality, used by educators & businesses.",
    url: "https://winston.ai",
    icon: "🕵️‍♂️"
  },
  {
    name: "N8n",
    category: "development",
    pricing: "freemium",
    description: "Workflow automation tool that connects different apps and automates complex tasks.",
    url: "https://n8n.io",
    icon: "🔗"
  },
  {
    name: "Google AI Studio",
    category: "development",
    pricing: "free",
    description: "Experiment with Google's generative models, prompt testing and rapid prototyping.",
    url: "https://makersuite.google.com",
    icon: "🧪"
  },
  {
    name: "Manus",
    category: "design",
    pricing: "paid",
    description: "VR and motion capture gloves for immersive 3D design and animation workflows.",
    url: "https://manus-meta.com",
    icon: "🧤"
  },
  {
    name: "Windsurf",
    category: "business",
    pricing: "freemium",
    description: "AI for automating project documentation, proposals, and contracts.",
    url: "https://windsurf.ai",
    icon: "📄"
  },
  {
    name: "Claude Code",
    category: "development",
    pricing: "freemium",
    description: "Specialized coding assistant mode of Claude for explaining or refactoring code.",
    url: "https://claude.ai",
    icon: "🧑‍💻"
  },
  {
    name: "Google Makersuite",
    category: "productivity",
    pricing: "free",
    description: "Automate text & creative tasks, build and test prompts for GenAI apps.",
    url: "https://makersuite.google.com",
    icon: "⚙️"
  },
  {
    name: "OpenAI Sora",
    category: "content",
    pricing: "coming soon",
    description: "Generates realistic videos from text descriptions, bringing concepts to motion.",
    url: "https://openai.com/sora",
    icon: "🎬"
  },
  {
    name: "Tome",
    category: "content",
    pricing: "freemium",
    description: "Create stunning presentations and pitch decks from simple prompts.",
    url: "https://tome.app",
    icon: "📊"
  },
  {
    name: "Midjourney",
    category: "design",
    pricing: "paid",
    description: "Generates high-quality artistic images from text prompts, great for visual storytelling.",
    url: "https://midjourney.com",
    icon: "🖼️"
  },
  {
    name: "Fireflies.ai",
    category: "business",
    pricing: "freemium",
    description: "AI that records, transcribes, and summarizes meetings automatically.",
    url: "https://fireflies.ai",
    icon: "🎙️"
  },
  {
    name: "Lovable AI",
    category: "business",
    pricing: "freemium",
    description: "AI assistant for automating outreach campaigns, personalizing emails, and following up with prospects effortlessly.",
    url: "https://lovable.dev/?via=global20&gad_source=1",
    icon: "💌"
  },
  // SEO Tools
{
  name: "BlogSEO",
  category: "business",
  pricing: "freemium",
  description: "Optimize your blog posts for search engines with keyword analysis and recommendations.",
  url: "https://blogseo.com",
  icon: "🔎"
},
{
  name: "Seona AI",
  category: "business",
  pricing: "freemium",
  description: "AI assistant to improve your website’s SEO with actionable insights.",
  url: "https://seona.ai",
  icon: "📈"
},
{
  name: "Serpstat",
  category: "business",
  pricing: "freemium",
  description: "All-in-one SEO platform for keyword research, site audit, and rank tracking.",
  url: "https://serpstat.com",
  icon: "🚀"
},
{
  name: "VidIQ",
  category: "business",
  pricing: "freemium",
  description: "YouTube SEO tool to optimize videos, track rankings, and find content opportunities.",
  url: "https://vidiq.com",
  icon: "🎥"
},
{
  name: "Wordlift",
  category: "business",
  pricing: "paid",
  description: "Semantic SEO tool that enriches your content and improves discoverability.",
  url: "https://wordlift.io",
  icon: "🧩"
},
{
  name: "Alli AI",
  category: "business",
  pricing: "paid",
  description: "Automate SEO tasks and improve site ranking with smart AI-driven strategies.",
  url: "https://alli.ai",
  icon: "🤖"
},

// Logo tools
{
  name: "Logaster",
  category: "design",
  pricing: "freemium",
  description: "Create professional logos and brand identities in minutes with AI.",
  url: "https://logaster.com",
  icon: "🎨"
},
{
  name: "Brandmark",
  category: "design",
  pricing: "freemium",
  description: "AI-powered logo maker to design unique logos and brand kits.",
  url: "https://brandmark.io",
  icon: "🏷️"
},
{
  name: "Logo AI",
  category: "design",
  pricing: "freemium",
  description: "Generate modern logos and brand assets instantly using AI.",
  url: "https://logoai.com",
  icon: "🖌️"
},
{
  name: "Looka",
  category: "design",
  pricing: "freemium",
  description: "Design your logo and brand materials effortlessly with Looka’s AI.",
  url: "https://looka.com",
  icon: "✨"
},
{
  name: "Stockimg AI",
  category: "design",
  pricing: "freemium",
  description: "AI image generation tool to create stock photos, art, and illustrations.",
  url: "https://stockimg.ai",
  icon: "🖼️"
},

// Chatbot tools
{
  name: "Chatfuel",
  category: "development",
  pricing: "freemium",
  description: "Build Facebook Messenger and Instagram chatbots without coding.",
  url: "https://chatfuel.com",
  icon: "💬"
},
{
  name: "ChatSimple",
  category: "development",
  pricing: "freemium",
  description: "Create conversational AI chatbots for websites to capture leads and assist customers.",
  url: "https://chatsimple.ai",
  icon: "🤖"
},
{
  name: "Dialogflow",
  category: "development",
  pricing: "freemium",
  description: "Google’s NLP platform to design and deploy conversational agents.",
  url: "https://dialogflow.cloud.google.com",
  icon: "🗣️"
},
{
  name: "Droxy",
  category: "development",
  pricing: "freemium",
  description: "Build smart website chatbots that understand user intent.",
  url: "https://droxy.ai",
  icon: "⚡"
},
{
  name: "Chatbase",
  category: "development",
  pricing: "freemium",
  description: "Train custom chatbots on your data to answer user questions.",
  url: "https://chatbase.co",
  icon: "💡"
},

// Presentation tools
{
  name: "Decktopus",
  category: "content",
  pricing: "freemium",
  description: "AI presentation tool that designs slides from your text prompts.",
  url: "https://decktopus.com",
  icon: "📊"
},
{
  name: "Beautiful AI",
  category: "content",
  pricing: "freemium",
  description: "Create beautiful presentations with AI-driven slide design.",
  url: "https://beautiful.ai",
  icon: "🎨"
},
{
  name: "Designs AI",
  category: "content",
  pricing: "freemium",
  description: "Platform to create videos, logos, banners, and more with AI.",
  url: "https://designs.ai",
  icon: "📹"
},
{
  name: "Gamma AI",
  category: "content",
  pricing: "freemium",
  description: "Transform ideas into visually stunning decks with AI.",
  url: "https://gamma.app",
  icon: "🚀"
},
{
  name: "Lumens",
  category: "content",
  pricing: "freemium",
  description: "AI for creating impactful presentations and visual stories.",
  url: "https://lumens.ai",
  icon: "💡"
},
{
  name: "Slides AI",
  category: "content",
  pricing: "freemium",
  description: "AI that writes slide decks for you from plain text outlines.",
  url: "https://slidesai.io",
  icon: "📝"
},

// Marketing tools
{
  name: "Sendbird",
  category: "business",
  pricing: "freemium",
  description: "Build in-app chat, voice, and video experiences for user engagement.",
  url: "https://sendbird.com",
  icon: "📞"
},
{
  name: "Simplified",
  category: "business",
  pricing: "freemium",
  description: "All-in-one app for marketing content, copywriting, video, and design.",
  url: "https://simplified.com",
  icon: "⚙️"
},
{
  name: "Trypencil",
  category: "business",
  pricing: "freemium",
  description: "Generate and test hundreds of ad creatives with AI.",
  url: "https://trypencil.com",
  icon: "✏️"
},
{
  name: "Adcopy",
  category: "business",
  pricing: "freemium",
  description: "Create high-performing ad copy tailored to your audience.",
  url: "https://adcopy.ai",
  icon: "📝"
},
{
  name: "AdCreative",
  category: "business",
  pricing: "freemium",
  description: "AI platform to generate conversion-focused ad creatives.",
  url: "https://adcreative.ai",
  icon: "🎯"
},
{
  name: "Mailchimp",
  category: "business",
  pricing: "freemium",
  description: "Email marketing platform with smart automation and analytics.",
  url: "https://mailchimp.com",
  icon: "📧"
},

// Audio tools
{
  name: "Auphonic",
  category: "content",
  pricing: "freemium",
  description: "Automatic audio post-production for podcasts, interviews, and videos.",
  url: "https://auphonic.com",
  icon: "🎧"
},
{
  name: "Lyrebird",
  category: "content",
  pricing: "freemium",
  description: "Clone voices and generate speech that sounds human-like.",
  url: "https://descript.com/lyrebird",
  icon: "🎙️"
},
{
  name: "Sonic",
  category: "content",
  pricing: "freemium",
  description: "AI tool to clean up, enhance, and mix audio for content creators.",
  url: "https://sonic.app",
  icon: "🎵"
},

// Additional image tools
{
  name: "Segmind",
  category: "design",
  pricing: "freemium",
  description: "AI-powered image generation and editing platform.",
  url: "https://segmind.com",
  icon: "🖌️"
},
{
  name: "Leap",
  category: "design",
  pricing: "freemium",
  description: "Create avatars, images, and art from text with Leap AI.",
  url: "https://tryleap.ai",
  icon: "🌈"
},
{
  name: "Clarif AI",
  category: "design",
  pricing: "freemium",
  description: "Image recognition and visual AI platform to tag and analyze photos.",
  url: "https://clarifai.com",
  icon: "🔍"
},
{
  name: "Gencraft",
  category: "design",
  pricing: "freemium",
  description: "Text-to-image tool to generate creative visuals from your ideas.",
  url: "https://gencraft.com",
  icon: "🖼️"
}
];

let currentCategory = 'all';
let searchQuery = '';

function renderTools() {
  const toolsGrid = document.getElementById('toolsGrid');
  const noResults = document.getElementById('noResults');

  let filteredTools = aiTools;

  if (currentCategory !== 'all') {
    filteredTools = filteredTools.filter(tool => tool.category === currentCategory);
  }

  if (searchQuery) {
    filteredTools = filteredTools.filter(tool =>
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  filteredTools.sort((a, b) => a.name.localeCompare(b.name));

  if (filteredTools.length === 0) {
    toolsGrid.style.display = 'none';
    noResults.style.display = 'block';
    return;
  }

  toolsGrid.style.display = 'grid';
  noResults.style.display = 'none';

  toolsGrid.innerHTML = filteredTools.map(tool => `
  <div class="tool-card" data-tool="${tool.name}">
    <div class="tool-header">
      <div class="tool-icon">${tool.icon}</div>
      <div class="tool-info">
        <h3>${tool.name}</h3>
        <span class="pricing-badge ${tool.pricing}">${tool.pricing}</span>
      </div>
    </div>
    <div class="tool-description">${tool.description}</div>
    <a class="use-now-btn" href="${tool.url}" target="_blank">
      Use Now →
    </a>
  </div>
`).join('');
  }

// toggle light/dark mode
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme',
    document.body.classList.contains('dark') ? 'dark' : 'light'
  );
});

// Category filtering
document.getElementById('categories').addEventListener('click', (e) => {
  if (e.target.classList.contains('category-btn')) {
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    currentCategory = e.target.dataset.category;
    renderTools();
  }
});

function updateCategoryCounts() {
  const categories = {
    all: aiTools.length,
    productivity: aiTools.filter(tool => tool.category === "productivity").length,
    development: aiTools.filter(tool => tool.category === "development").length,
    content: aiTools.filter(tool => tool.category === "content").length,
    study: aiTools.filter(tool => tool.category === "study").length,
    design: aiTools.filter(tool => tool.category === "design").length,
    business: aiTools.filter(tool => tool.category === "business").length,
  };

  document.querySelectorAll('.category-btn').forEach(btn => {
    const cat = btn.dataset.category;
    const countSpan = btn.querySelector('.count');
    if (countSpan) {
      countSpan.textContent = `(${categories[cat] || 0})`;
    }
  });
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderTools();
});

// Card click to expand/collapse
document.addEventListener('click', (e) => {
  const card = e.target.closest('.tool-card');
  if (card && !e.target.classList.contains('use-now-btn')) {
    card.classList.toggle('expanded');
  }
});

// Initial render
renderTools();
updateCategoryCounts();
renderTools();

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: "index.html" });
});
