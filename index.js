
const tools = [
  {
    name: "ChatGPT",
    icon: "🤖",
    categories: ["daily", "content", "study", "business"],
    pricing: "freemium",
    description: "Advanced conversational AI for writing, coding, analysis, and creative tasks. Perfect for daily productivity and learning.",
    url: "https://chat.openai.com",
    resourceUrl: "https://www.youtube.com/watch?v=JTxsNm9IdYU"
  },
  {
    name: "Notion AI",
    icon: "📝",
    categories: ["daily", "productivity", "study"],
    pricing: "freemium",
    description: "Write notes, brainstorm ideas, summarize content, and organize information with AI features.",
    url: "https://notion.so",
    resourceUrl: "https://www.youtube.com/watch?v=-xGyGHCd2pA"
  },
  {
    name: "Grammarly",
    icon: "✍️",
    categories: ["daily", "productivity", "study"],
    pricing: "freemium",
    description: "Fix grammar, enhance writing tone, check spelling, and boost clarity in documents and emails.",
    url: "https://grammarly.com",
    resourceUrl: "https://www.grammarly.com/blog/"
  },
  {
    name: "Calendly",
    icon: "📅",
    categories: ["daily", "business"],
    pricing: "freemium",
    description: "Schedule meetings, automate reminders, and coordinate appointments seamlessly.",
    url: "https://calendly.com",
    resourceUrl: "https://www.youtube.com/watch?v=6h9YHLj3tFs"
  },
  {
    name: "Todoist",
    icon: "✅",
    categories: ["daily", "productivity"],
    pricing: "freemium",
    description: "Organize tasks, set smart reminders, manage projects, and boost daily productivity.",
    url: "https://todoist.com",
    resourceUrl: "https://todoist.com/blog"
  },
  {
    name: "Otter.ai",
    icon: "🎤",
    categories: ["daily", "business", "study"],
    pricing: "freemium",
    description: "Record meetings, transcribe in real time, generate summaries, and identify speakers.",
    url: "https://otter.ai",
    resourceUrl: "https://www.youtube.com/watch?v=KnN-xq4jvug"
  },
  {
    name: "Zapier",
    icon: "⚡",
    categories: ["daily", "business", "development"],
    pricing: "freemium",
    description: "Connect apps, automate repetitive tasks, and create no-code workflows.",
    url: "https://zapier.com",
    resourceUrl: "https://zapier.com/learn/automation/"
  },
  {
    name: "GitHub Copilot",
    icon: "👨‍💻",
    categories: ["development"],
    pricing: "paid",
    description: "Accelerate coding with smart AI suggestions, auto-completion, and debug assistance.",
    url: "https://github.com/features/copilot",
    resourceUrl: "https://www.youtube.com/watch?v=sgzbYpQ1h8k"
  },
  {
    name: "Cursor",
    icon: "🖱️",
    categories: ["development"],
    pricing: "freemium",
    description: "Edit code with natural language, generate functions, refactor code, and pair-program with AI.",
    url: "https://cursor.sh",
    resourceUrl: "https://www.youtube.com/watch?v=SW8AVIh7k78"
  },
  {
    name: "Vercel v0",
    icon: "🎨",
    categories: ["development", "design"],
    pricing: "free",
    description: "Generate React components and UIs from text prompts for rapid prototyping.",
    url: "https://v0.dev",
    resourceUrl: "https://vercel.com/blog/introducing-v0"
  },
  {
    name: "Replit",
    icon: "💻",
    categories: ["development", "study"],
    pricing: "freemium",
    description: "Code online, debug programs, learn programming, collaborate on projects, and deploy apps.",
    url: "https://replit.com",
    resourceUrl: "https://www.youtube.com/watch?v=E7HY3vJnlZw"
  },
  {
    name: "Tabnine",
    icon: "🔮",
    categories: ["development"],
    pricing: "freemium",
    description: "Auto-complete code, predict next lines, learn from your codebase, and speed up development.",
    url: "https://tabnine.com",
    resourceUrl: "https://www.youtube.com/watch?v=S1x_vIEvfUY"
  },
  {
    name: "Codeium",
    icon: "🚀",
    categories: ["development"],
    pricing: "free",
    description: "Get code suggestions, chat about code, search codebases, and accelerate programming.",
    url: "https://codeium.com",
    resourceUrl: "https://www.youtube.com/watch?v=7Z5k6Wgk9VY"
  },
  {
    name: "DeepCode",
    icon: "🔍",
    categories: ["development"],
    pricing: "freemium",
    description: "Find bugs, detect security issues, get suggestions to improve code quality.",
    url: "https://snyk.io/platform/deepcode-ai",
    resourceUrl: "https://snyk.io/blog/introducing-deepcode"
  },
  {
    name: "Runway",
    icon: "🎬",
    categories: ["content", "design"],
    pricing: "freemium",
    description: "Create and edit videos with AI, from text-to-video to advanced effects.",
    url: "https://runwayml.com",
    resourceUrl: "https://www.youtube.com/watch?v=5Q26D9M2sRg"
  },
  {
    name: "DALL-E 2",
    icon: "🎨",
    categories: ["content", "design"],
    pricing: "paid",
    description: "Generate images from text, create art, design logos, and produce visual content instantly.",
    url: "https://openai.com/dall-e-2",
    resourceUrl: "https://www.youtube.com/watch?v=36qgUzlgBLw"
  },
  {
    name: "Midjourney",
    icon: "🖼️",
    categories: ["content", "design"],
    pricing: "paid",
    description: "Generate stunning artwork, illustrations, and creative visuals from text prompts.",
    url: "https://midjourney.com",
    resourceUrl: "https://www.youtube.com/watch?v=5r_LfG3hxEg"
  },
  {
    name: "ElevenLabs",
    icon: "🔊",
    categories: ["content"],
    pricing: "freemium",
    description: "Generate realistic voices, clone speech, create audiobooks, and produce voice content.",
    url: "https://elevenlabs.io",
    resourceUrl: "https://www.youtube.com/watch?v=Q9WJOc6vDtc"
  },
  {
    name: "Jasper",
    icon: "📄",
    categories: ["content"],
    pricing: "paid",
    description: "Write marketing copy, create blog posts, generate ad content, and produce written materials.",
    url: "https://jasper.ai",
    resourceUrl: "https://www.youtube.com/watch?v=EAwrD28rY2s"
  },
  {
    name: "Luma AI",
    icon: "🎥",
    categories: ["content", "design"],
    pricing: "freemium",
    description: "Create 3D models, generate videos, capture scenes, and produce immersive content.",
    url: "https://lumalabs.ai",
    resourceUrl: "https://www.lumalabs.ai/blog"
  },
  {
    name: "Synthesia",
    icon: "🎭",
    categories: ["content"],
    pricing: "paid",
    description: "Create AI presenter videos, generate training content, and produce multilingual videos.",
    url: "https://synthesia.io",
    resourceUrl: "https://www.youtube.com/watch?v=vvRKi1-8Ox8"
  },
  {
    name: "Quillbot",
    icon: "📚",
    categories: ["study", "content"],
    pricing: "freemium",
    description: "Paraphrase text, improve writing, summarize content, and enhance academic papers.",
    url: "https://quillbot.com",
    resourceUrl: "https://www.youtube.com/watch?v=tWhiGp8uu_8"
  },
  {
    name: "Socratic",
    icon: "🧠",
    categories: ["study"],
    pricing: "free",
    description: "Get homework help, solve math problems, and understand concepts step-by-step.",
    url: "https://socratic.org",
    resourceUrl: "https://www.youtube.com/watch?v=7A5HSCnZ75M"
  },
  {
    name: "Coursera AI",
    icon: "🎓",
    categories: ["study"],
    pricing: "freemium",
    description: "Take online courses, get personalized learning paths, and earn certificates.",
    url: "https://coursera.org",
    resourceUrl: "https://blog.coursera.org"
  },
  {
    name: "Anki",
    icon: "🃏",
    categories: ["study"],
    pricing: "freemium",
    description: "Use smart flashcards to memorize efficiently, with spaced repetition.",
    url: "https://apps.ankiweb.net",
    resourceUrl: "https://www.youtube.com/watch?v=Z-zNHHpXoMM"
  },
  {
    name: "SciSpace",
    icon: "🔬",
    categories: ["study"],
    pricing: "freemium",
    description: "Understand research papers, get explanations, and summarize studies.",
    url: "https://typeset.io",
    resourceUrl: "https://www.youtube.com/watch?v=cEWAKgWJqAY"
  },
  {
    name: "Turnitin",
    icon: "🔍",
    categories: ["study", "business"],
    pricing: "paid",
    description: "Check plagiarism, ensure originality, and get writing feedback.",
    url: "https://turnitin.com",
    resourceUrl: "https://www.turnitin.com/blog"
  },
  {
    name: "Canva AI",
    icon: "🎨",
    categories: ["design", "content"],
    pricing: "freemium",
    description: "Design graphics, resize content, remove backgrounds, and generate images from text.",
    url: "https://canva.com",
    resourceUrl: "https://www.youtube.com/watch?v=8fr0Z0RzKZg"
  },
  {
    name: "Figma AI",
    icon: "🎯",
    categories: ["design"],
    pricing: "freemium",
    description: "Collaborative design platform with smart AI suggestions and auto-layout.",
    url: "https://figma.com",
    resourceUrl: "https://www.youtube.com/watch?v=cdLJcZR-Ngk"
  },
  {
    name: "Adobe Firefly",
    icon: "🔥",
    categories: ["design", "content"],
    pricing: "freemium",
    description: "Adobe's suite for generating images, text effects, and creative assets from prompts.",
    url: "https://firefly.adobe.com",
    resourceUrl: "https://helpx.adobe.com/firefly"
  },
  {
    name: "Stable Diffusion",
    icon: "🌟",
    categories: ["design", "content"],
    pricing: "paid",
    description: "Open-source model to generate high-quality images from text.",
    url: "https://stability.ai",
    resourceUrl: "https://stability.ai/blog"
  },
  {
    name: "Remove.bg",
    icon: "🖼️",
    categories: ["design"],
    pricing: "freemium",
    description: "Automatically remove image backgrounds for clean cutouts.",
    url: "https://remove.bg",
    resourceUrl: "https://www.youtube.com/watch?v=5EKCzVqSHxg"
  },
  {
    name: "Salesforce Einstein",
    icon: "📊",
    categories: ["business"],
    pricing: "paid",
    description: "AI inside Salesforce for sales forecasting, lead scoring, and insights.",
    url: "https://salesforce.com/products/einstein",
    resourceUrl: "https://www.youtube.com/watch?v=sH2mCS5UGDs"
  },
  {
    name: "HubSpot AI",
    icon: "🎯",
    categories: ["business"],
    pricing: "freemium",
    description: "Automate marketing, generate content, and enhance CRM with AI tools.",
    url: "https://hubspot.com",
    resourceUrl: "https://blog.hubspot.com"
  },
  {
    name: "Intercom",
    icon: "💬",
    categories: ["business"],
    pricing: "paid",
    description: "AI chatbots, auto responses, and support workflows for customer engagement.",
    url: "https://intercom.com",
    resourceUrl: "https://www.youtube.com/watch?v=0V4km-WU-DY"
  },
  {
    name: "Zoom AI",
    icon: "📹",
    categories: ["business"],
    pricing: "freemium",
    description: "Get meeting summaries, transcripts, and action points with Zoom's AI.",
    url: "https://zoom.us",
    resourceUrl: "https://blog.zoom.us"
  },
  {
    name: "Slack AI",
    icon: "💼",
    categories: ["business"],
    pricing: "paid",
    description: "Summarize conversations, improve search, and automate workflows in Slack.",
    url: "https://slack.com",
    resourceUrl: "https://slack.com/blog"
  },
  {
    name: "Heen",
    icon: "🧑‍🎤",
    categories: ["productivity", "content"],
    pricing: "freemium",
    description: "Make personalized AI avatars that mimic your expressions for video.",
    url: "https://heen.ai",
    resourceUrl: "https://www.heen.ai"
  },
  {
    name: "Suno AI",
    icon: "🎵",
    categories: ["content"],
    pricing: "freemium",
    description: "Create background music or custom audio for videos, games, or personal use.",
    url: "https://suno.ai",
    resourceUrl: "https://suno.ai/blog"
  },
  {
    name: "NotebookLM",
    icon: "📓",
    categories: ["study", "productivity"],
    pricing: "free",
    description: "Transform documents into summaries, podcasts, or note highlights.",
    url: "https://notebooklm.google",
    resourceUrl: "https://notebooklm.google.com"
  },
  {
    name: "Claude.ai",
    icon: "🤖",
    categories: ["development", "productivity"],
    pricing: "freemium",
    description: "AI assistant for safe, reliable conversations and code explanations.",
    url: "https://claude.ai",
    resourceUrl: "https://www.anthropic.com"
  },
  {
    name: "Apollo.io",
    icon: "🚀",
    categories: ["business"],
    pricing: "freemium",
    description: "Sales engagement platform to automate lead generation.",
    url: "https://apollo.io",
    resourceUrl: "https://www.youtube.com/watch?v=Q6H_KhMhC_k"
  },
  {
    name: "Instantly.ai",
    icon: "✉️",
    categories: ["business"],
    pricing: "paid",
    description: "Automate cold emails and scale your outreach campaigns.",
    url: "https://instantly.ai",
    resourceUrl: "https://instantly.ai/blog"
  },
  {
    name: "Flux.ai",
    icon: "🎨",
    categories: ["design"],
    pricing: "freemium",
    description: "Use AI for circuit or visual product design tasks.",
    url: "https://flux.ai",
    resourceUrl: "https://flux.ai/blog"
  },
  {
    name: "Perplexity",
    icon: "🔍",
    categories: ["productivity", "study"],
    pricing: "freemium",
    description: "Conversational AI search engine that cites its answers.",
    url: "https://perplexity.ai",
    resourceUrl: "https://www.youtube.com/watch?v=dyGJmgIbydM"
  },
  {
    name: "Winston AI",
    icon: "🕵️‍♂️",
    categories: ["business"],
    pricing: "paid",
    description: "Detect AI-generated text and check originality in documents.",
    url: "https://winston.ai",
    resourceUrl: "https://winston.ai/blog"
  },
  {
    name: "N8n",
    icon: "🔗",
    categories: ["development", "business"],
    pricing: "freemium",
    description: "Automate tasks and connect apps in advanced workflows.",
    url: "https://n8n.io",
    resourceUrl: "https://n8n.io/blog"
  },
  {
    name: "Google AI Studio",
    icon: "🧪",
    categories: ["development"],
    pricing: "free",
    description: "Experiment with Google's generative models, prompt testing and prototyping.",
    url: "https://makersuite.google.com",
    resourceUrl: "https://developers.google.com/machine-learning"
  },
  {
    name: "Manus",
    icon: "🧤",
    categories: ["design"],
    pricing: "paid",
    description: "VR gloves for immersive 3D design and motion capture in animation workflows.",
    url: "https://manus-meta.com",
    resourceUrl: "https://www.youtube.com/@ManusMeta"
  },
  {
    name: "Windsurf",
    icon: "📄",
    categories: ["business"],
    pricing: "freemium",
    description: "AI for auto-generating project documentation, contracts, and proposals.",
    url: "https://windsurf.ai",
    resourceUrl: "https://windsurf.ai/blog"
  },
  {
    name: "Claude Code",
    icon: "🧑‍💻",
    categories: ["development"],
    pricing: "freemium",
    description: "Special coding assistant mode of Claude for explaining or refactoring code.",
    url: "https://claude.ai",
    resourceUrl: "https://www.anthropic.com"
  },
  {
    name: "Google Makersuite",
    icon: "⚙️",
    categories: ["productivity", "development"],
    pricing: "free",
    description: "Build & test GenAI apps, automate creative tasks, explore prompt engineering.",
    url: "https://makersuite.google.com",
    resourceUrl: "https://www.youtube.com/watch?v=ydHnXyZtF2Y"
  },
  {
    name: "OpenAI Sora",
    icon: "🎬",
    categories: ["content"],
    pricing: "coming soon",
    description: "Generates realistic videos from text descriptions for next-gen storytelling.",
    url: "https://openai.com/sora",
    resourceUrl: "https://openai.com/sora"
  },
  {
    name: "Tome",
    icon: "📊",
    categories: ["content"],
    pricing: "freemium",
    description: "Turn text prompts into beautiful presentations and pitch decks instantly.",
    url: "https://tome.app",
    resourceUrl: "https://tome.app/blog"
  },
  {
    name: "Fireflies.ai",
    icon: "🎙️",
    categories: ["business", "productivity"],
    pricing: "freemium",
    description: "AI tool to record, transcribe, and summarize your meetings.",
    url: "https://fireflies.ai",
    resourceUrl: "https://fireflies.ai/blog"
  },
  {
    name: "Lovable AI",
    icon: "💌",
    categories: ["business"],
    pricing: "freemium",
    description: "Automate outreach campaigns with personalized follow-ups.",
    url: "https://lovable.dev/?via=global20&gad_source=1",
    resourceUrl: "https://lovable.dev"
  },
  {
    name: "BlogSEO",
    icon: "🔎",
    categories: ["business"],
    pricing: "freemium",
    description: "Optimize blog posts with keyword analysis and SEO recommendations.",
    url: "https://blogseo.com",
    resourceUrl: "https://blogseo.com"
  },
  {
    name: "Seona AI",
    icon: "📈",
    categories: ["business"],
    pricing: "freemium",
    description: "Boost your website’s SEO using actionable AI insights.",
    url: "https://seona.ai",
    resourceUrl: "https://seona.ai/blog"
  },
  {
    name: "Serpstat",
    icon: "🚀",
    categories: ["business"],
    pricing: "freemium",
    description: "All-in-one platform for keyword research, site audits, and rank tracking.",
    url: "https://serpstat.com",
    resourceUrl: "https://serpstat.com/blog"
  },
  {
    name: "VidIQ",
    icon: "🎥",
    categories: ["business", "content"],
    pricing: "freemium",
    description: "SEO for YouTube videos: optimize content, track rankings, and find trends.",
    url: "https://vidiq.com",
    resourceUrl: "https://www.youtube.com/@vidIQ"
  },
  {
    name: "Wordlift",
    icon: "🧩",
    categories: ["business"],
    pricing: "paid",
    description: "Semantic SEO tool that enriches your content to improve discoverability.",
    url: "https://wordlift.io",
    resourceUrl: "https://wordlift.io/blog"
  },
  {
    name: "Alli AI",
    icon: "🤖",
    categories: ["business"],
    pricing: "paid",
    description: "Automate SEO improvements and boost site ranking with AI-driven strategies.",
    url: "https://alli.ai",
    resourceUrl: "https://alli.ai/blog"
  },
  {
    name: "Logaster",
    icon: "🎨",
    categories: ["design"],
    pricing: "freemium",
    description: "Create professional logos and brand identities quickly using AI.",
    url: "https://logaster.com",
    resourceUrl: "https://www.youtube.com/watch?v=0Pj9MKz9NAA"
  },
  {
    name: "Brandmark",
    icon: "🏷️",
    categories: ["design"],
    pricing: "freemium",
    description: "Design unique logos and brand kits with AI-powered generator.",
    url: "https://brandmark.io",
    resourceUrl: "https://www.youtube.com/watch?v=Fw0JzY7S7yY"
  },
  {
    name: "Logo AI",
    icon: "🖌️",
    categories: ["design"],
    pricing: "freemium",
    description: "Generate modern logos and brand visuals instantly.",
    url: "https://logoai.com",
    resourceUrl: "https://logoai.com/blog"
  },
  {
    name: "Looka",
    icon: "✨",
    categories: ["design"],
    pricing: "freemium",
    description: "Effortlessly design logos and brand materials with Looka's AI tools.",
    url: "https://looka.com",
    resourceUrl: "https://looka.com/blog"
  },
  {
    name: "Stockimg AI",
    icon: "🖼️",
    categories: ["design"],
    pricing: "freemium",
    description: "Create stock photos, illustrations, and art with AI image generation.",
    url: "https://stockimg.ai",
    resourceUrl: "https://stockimg.ai/blog"
  },
  {
    name: "Chatfuel",
    icon: "💬",
    categories: ["development", "business"],
    pricing: "freemium",
    description: "Build chatbots for Facebook and Instagram without coding.",
    url: "https://chatfuel.com",
    resourceUrl: "https://www.youtube.com/watch?v=ykpS2FdGk2k"
  },
  {
    name: "ChatSimple",
    icon: "🤖",
    categories: ["development", "business"],
    pricing: "freemium",
    description: "Create website chatbots to capture leads and support customers.",
    url: "https://chatsimple.ai",
    resourceUrl: "https://chatsimple.ai/blog"
  },
  {
    name: "Dialogflow",
    icon: "🗣️",
    categories: ["development"],
    pricing: "freemium",
    description: "Google's NLP platform to build and deploy conversational agents.",
    url: "https://dialogflow.cloud.google.com",
    resourceUrl: "https://cloud.google.com/dialogflow/docs"
  },
  {
    name: "Droxy",
    icon: "⚡",
    categories: ["development"],
    pricing: "freemium",
    description: "Build smart chatbots that understand user intent for websites.",
    url: "https://droxy.ai",
    resourceUrl: "https://droxy.ai"
  },
  {
    name: "Chatbase",
    icon: "💡",
    categories: ["development"],
    pricing: "freemium",
    description: "Train custom chatbots on your data to answer user queries.",
    url: "https://chatbase.co",
    resourceUrl: "https://chatbase.co/blog"
  },
  {
    name: "Decktopus",
    icon: "📊",
    categories: ["content"],
    pricing: "freemium",
    description: "AI presentation tool that builds professional slides from your text prompts.",
    url: "https://decktopus.com",
    resourceUrl: "https://decktopus.com/blog"
  },
  {
    name: "Beautiful AI",
    icon: "🎨",
    categories: ["content", "design"],
    pricing: "freemium",
    description: "Create visually appealing presentations with AI slide design.",
    url: "https://beautiful.ai",
    resourceUrl: "https://www.youtube.com/@BeautifulAI"
  },
  {
    name: "Designs AI",
    icon: "📹",
    categories: ["content", "design"],
    pricing: "freemium",
    description: "Generate videos, logos, banners, and more with AI design tools.",
    url: "https://designs.ai",
    resourceUrl: "https://designs.ai/blog"
  },
  {
    name: "Gamma AI",
    icon: "🚀",
    categories: ["content"],
    pricing: "freemium",
    description: "Turn ideas into stunning decks and visual presentations with AI.",
    url: "https://gamma.app",
    resourceUrl: "https://gamma.app/blog"
  },
  {
    name: "Lumens",
    icon: "💡",
    categories: ["content"],
    pricing: "freemium",
    description: "Create impactful presentations and visual stories using AI.",
    url: "https://lumens.ai",
    resourceUrl: "https://lumens.ai/blog"
  },
  {
    name: "Slides AI",
    icon: "📝",
    categories: ["content"],
    pricing: "freemium",
    description: "Generate full slide decks from plain text outlines automatically.",
    url: "https://slidesai.io",
    resourceUrl: "https://slidesai.io/blog"
  },
  {
    name: "Sendbird",
    icon: "📞",
    categories: ["business"],
    pricing: "freemium",
    description: "Add in-app chat, voice, and video to engage your users.",
    url: "https://sendbird.com",
    resourceUrl: "https://sendbird.com/blog"
  },
  {
    name: "Simplified",
    icon: "⚙️",
    categories: ["business", "content"],
    pricing: "freemium",
    description: "All-in-one platform for marketing copy, videos, and graphics.",
    url: "https://simplified.com",
    resourceUrl: "https://simplified.com/blog"
  },
  {
    name: "Trypencil",
    icon: "✏️",
    categories: ["business"],
    pricing: "freemium",
    description: "Generate and test hundreds of ad creatives using AI.",
    url: "https://trypencil.com",
    resourceUrl: "https://trypencil.com/blog"
  },
  {
    name: "Adcopy",
    icon: "📝",
    categories: ["business"],
    pricing: "freemium",
    description: "Create tailored ad copy for your audience with AI assistance.",
    url: "https://adcopy.ai",
    resourceUrl: "https://adcopy.ai/blog"
  },
  {
    name: "AdCreative",
    icon: "🎯",
    categories: ["business"],
    pricing: "freemium",
    description: "Generate conversion-focused ad creatives automatically.",
    url: "https://adcreative.ai",
    resourceUrl: "https://adcreative.ai/blog"
  },
  {
    name: "Mailchimp",
    icon: "📧",
    categories: ["business"],
    pricing: "freemium",
    description: "Email marketing platform with automation and performance tracking.",
    url: "https://mailchimp.com",
    resourceUrl: "https://mailchimp.com/resources"
  },
  {
    name: "Auphonic",
    icon: "🎧",
    categories: ["content"],
    pricing: "freemium",
    description: "Automated audio processing for podcasts, interviews, and video.",
    url: "https://auphonic.com",
    resourceUrl: "https://auphonic.com/blog"
  },
  {
    name: "Lyrebird",
    icon: "🎙️",
    categories: ["content"],
    pricing: "freemium",
    description: "Clone voices and generate lifelike speech for your projects.",
    url: "https://descript.com/lyrebird",
    resourceUrl: "https://www.youtube.com/watch?v=PPYtAv6Gnm8"
  },
  {
    name: "Sonic",
    icon: "🎵",
    categories: ["content"],
    pricing: "freemium",
    description: "Clean, enhance, and mix audio automatically for creators.",
    url: "https://sonic.app",
    resourceUrl: "https://sonic.app"
  },
  {
    name: "Segmind",
    icon: "🖌️",
    categories: ["design"],
    pricing: "freemium",
    description: "AI image generation and editing platform with customization.",
    url: "https://segmind.com",
    resourceUrl: "https://segmind.com/blog"
  },
  {
    name: "Leap",
    icon: "🌈",
    categories: ["design"],
    pricing: "freemium",
    description: "Generate avatars, images, and artwork from text with AI.",
    url: "https://tryleap.ai",
    resourceUrl: "https://tryleap.ai/blog"
  },
  {
    name: "Clarif AI",
    icon: "🔍",
    categories: ["design"],
    pricing: "freemium",
    description: "AI platform for image tagging, recognition, and visual analysis.",
    url: "https://clarifai.com",
    resourceUrl: "https://clarifai.com/blog"
  },
  {
    name: "Gencraft",
    icon: "🖼️",
    categories: ["design"],
    pricing: "freemium",
    description: "Turn text prompts into stunning visuals and illustrations.",
    url: "https://gencraft.com",
    resourceUrl: "https://gencraft.com"
  }
];

let currentCategory = 'all';
let currentTool = null;

function createToolCard(tool) {
  const card = document.createElement('div');
  card.className = 'tool-card';
  card.innerHTML = `
                <div class="pricing-badge ${tool.pricing}">${tool.pricing}</div>
                <div class="tool-icon">${tool.icon}</div>
                <div class="tool-name">${tool.name}</div>
            `;

  card.addEventListener('click', () => showToolDetail(tool));
  return card;
}

function showToolDetail(tool) {
  currentTool = tool;
  document.getElementById('modalIcon').textContent = tool.icon;
  document.getElementById('modalTitle').textContent = tool.name;
  document.getElementById('modalPricing').textContent = tool.pricing;
  document.getElementById('modalPricing').className = `modal-pricing ${tool.pricing}`;
  document.getElementById('modalDescription').textContent = tool.description;
  document.getElementById('useNowBtn').href = tool.url;
  document.getElementById('learnMoreBtn').href = tool.resourceUrl;
  document.getElementById('detailModal').classList.add('active');
}

function filterTools(category) {
  currentCategory = category;
  const grid = document.getElementById('toolsGrid');
  grid.innerHTML = '';

  const filteredTools = category === 'all'
    ? tools
    : tools.filter(tool => tool.categories.includes(category));

  filteredTools.forEach(tool => {
    grid.appendChild(createToolCard(tool));
  });
}

function init() {
  // Initialize with all tools
  filterTools('all');

  // Add filter event listeners
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterTools(btn.dataset.category);
    });
  });

  // Modal controls
  document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('detailModal').classList.remove('active');
  });

  document.getElementById('detailModal').addEventListener('click', (e) => {
    if (e.target.id === 'detailModal') {
      document.getElementById('detailModal').classList.remove('active');
    }
  });
}

init();
