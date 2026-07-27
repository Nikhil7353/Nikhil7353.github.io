export const skills = [
  // Frontend
  { name: 'React', category: 'frontend', level: 95, icon: '⚛️', description: 'Hooks, Context, Suspense, Server Components, Performance optimization' },
  { name: 'Next.js', category: 'frontend', level: 90, icon: '▲', description: 'App Router, Server Actions, Middleware, ISR, Edge Runtime' },
  { name: 'TypeScript', category: 'frontend', level: 92, icon: 'TS', description: 'Advanced types, Generics, Utility types, Strict mode' },
  { name: 'Tailwind CSS', category: 'frontend', level: 95, icon: '🎨', description: 'Design systems, Custom configs, JIT, Responsive design' },
  { name: 'Framer Motion', category: 'frontend', level: 88, icon: '🎭', description: 'Complex animations, Layout animations, Gestures, Scroll-triggered' },
  { name: 'Three.js / R3F', category: 'frontend', level: 75, icon: '🌐', description: 'WebGL, Shaders, Post-processing, 3D interactions' },
  { name: 'Zustand / Redux', category: 'frontend', level: 85, icon: '🗃️', description: 'State management, Middleware, DevTools, Persistence' },
  { name: 'React Query', category: 'frontend', level: 90, icon: '🔄', description: 'Server state, Caching, Mutations, Optimistic updates' },
  
  // Backend
  { name: 'Java / Spring Boot', category: 'backend', level: 92, icon: '☕', description: 'Spring Security, JPA, WebFlux, Microservices, Testing' },
  { name: 'Python / Django', category: 'backend', level: 88, icon: '🐍', description: 'DRF, ORM, Celery, Channels, Async views' },
  { name: 'FastAPI', category: 'backend', level: 85, icon: '⚡', description: 'Async, Pydantic, Dependency injection, OpenAPI' },
  { name: 'Node.js', category: 'backend', level: 80, icon: '🟢', description: 'Express, NestJS, TypeScript, Worker threads' },
  { name: 'GraphQL', category: 'backend', level: 82, icon: '📊', description: 'Apollo, Schema design, Resolvers, Federation' },
  { name: 'REST APIs', category: 'backend', level: 95, icon: '🔌', description: 'OpenAPI/Swagger, Versioning, Rate limiting, Documentation' },
  { name: 'WebSockets', category: 'backend', level: 78, icon: '🔌', description: 'Socket.io, Real-time features, Presence, Scaling' },
  { name: 'Microservices', category: 'backend', level: 80, icon: '🏗️', description: 'Service mesh, API Gateway, Event-driven, Distributed tracing' },
  
  // Database
  { name: 'PostgreSQL', category: 'database', level: 90, icon: '🐘', description: 'Advanced queries, Indexing, Partitioning, Replication' },
  { name: 'Redis', category: 'database', level: 85, icon: '🔴', description: 'Caching, Pub/Sub, Streams, Lua scripting, Cluster' },
  { name: 'MongoDB', category: 'database', level: 75, icon: '🍃', description: 'Aggregation, Indexing, Replica sets, Sharding' },
  { name: 'Prisma / TypeORM', category: 'database', level: 88, icon: '📝', description: 'Type-safe ORM, Migrations, Relations, Query optimization' },
  { name: 'SQL Optimization', category: 'database', level: 82, icon: '⚡', description: 'Query plans, Indexing strategies, Connection pooling' },
  
  // AI/ML
  { name: 'PyTorch', category: 'ai-ml', level: 80, icon: '🔥', description: 'Neural networks, Transfer learning, Model deployment' },
  { name: 'TensorFlow/Keras', category: 'ai-ml', level: 75, icon: '🧠', description: 'Model building, TensorFlow.js, TFLite, TFX' },
  { name: 'OpenCV', category: 'ai-ml', level: 78, icon: '👁️', description: 'Computer vision, Image processing, Real-time detection' },
  { name: 'Scikit-learn', category: 'ai-ml', level: 82, icon: '📈', description: 'Classical ML, Pipelines, Model selection, Preprocessing' },
  { name: 'Hugging Face', category: 'ai-ml', level: 72, icon: '🤗', description: 'Transformers, Fine-tuning, Inference API, Spaces' },
  { name: 'LangChain', category: 'ai-ml', level: 70, icon: '🦜', description: 'LLM apps, Chains, Agents, RAG, Vector stores' },
  
  // DevOps
  { name: 'Docker', category: 'devops', level: 90, icon: '🐳', description: 'Multi-stage builds, Compose, Swarm, Optimization' },
  { name: 'Kubernetes', category: 'devops', level: 70, icon: '☸️', description: 'Deployments, Services, Ingress, Helm, Operators' },
  { name: 'AWS', category: 'devops', level: 78, icon: '☁️', description: 'EC2, RDS, Lambda, S3, CloudFront, CDK' },
  { name: 'GitHub Actions', category: 'devops', level: 92, icon: '⚙️', description: 'CI/CD, Matrix builds, Custom actions, Security scanning' },
  { name: 'Terraform', category: 'devops', level: 65, icon: '🏗️', description: 'IaC, Modules, State management, Providers' },
  { name: 'Linux / Bash', category: 'devops', level: 82, icon: '🐧', description: 'Shell scripting, System administration, Vim, SSH' },
  
  // Tools
  { name: 'Git', category: 'tools', level: 95, icon: '📦', description: 'Advanced workflows, Rebasing, Hooks, Bisect' },
  { name: 'VS Code', category: 'tools', level: 90, icon: '💻', description: 'Extensions, Debugging, Tasks, Remote development' },
  { name: 'Postman', category: 'tools', level: 85, icon: '📮', description: 'API testing, Collections, Environments, Automation' },
  { name: 'Figma', category: 'tools', level: 75, icon: '🎨', description: 'Design systems, Prototyping, Handoff, Plugins' },
  { name: 'Jira / Linear', category: 'tools', level: 88, icon: '📋', description: 'Agile, Sprint planning, Issue tracking, Roadmaps' },
];

export const skillCategories = [
  { id: 'frontend', label: 'Frontend', icon: '🎨', color: 'brand' },
  { id: 'backend', label: 'Backend', icon: '⚙️', color: 'coral' },
  { id: 'database', label: 'Database', icon: '🗄️', color: 'emerald' },
  { id: 'ai-ml', label: 'AI/ML', icon: '🧠', color: 'amber' },
  { id: 'devops', label: 'DevOps', icon: '☁️', color: 'sky' },
  { id: 'tools', label: 'Tools', icon: '🛠️', color: 'purple' },
];