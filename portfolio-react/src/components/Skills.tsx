import { motion } from 'framer-motion';
import { Code2, Server, Database, Brain, Zap, Globe, Terminal, Cpu, Layers, Shield } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

const skillCategories = [
  { id: 'frontend', label: 'Frontend', icon: Code2, color: 'brand' },
  { id: 'backend', label: 'Backend', icon: Server, color: 'coral' },
  { id: 'database', label: 'Database', icon: Database, color: 'emerald' },
  { id: 'ai-ml', label: 'AI/ML', icon: Brain, color: 'amber' },
  { id: 'devops', label: 'DevOps', icon: Zap, color: 'sky' },
  { id: 'tools', label: 'Tools', icon: Terminal, color: 'purple' },
];

const skills = [
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

export function Skills() {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section className="section relative" id="skills">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-header max-w-3xl mx-auto text-center mb-12"
        >
          <div className="eyebrow inline-flex mb-4">Technical Skills</div>
          <h2 className="section-title">Technologies I <span className="gradient-text">work with</span></h2>
          <p className="section-subtitle mt-4">
            A comprehensive overview of my technical toolkit. I believe in using the right tool for the job 
            and continuously expanding my knowledge across the stack.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="filter-group flex flex-wrap justify-center gap-2" role="group" aria-label="Filter skills by category">
            <Button
              variant={activeCategory === 'all' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory('all')}
              className="whitespace-nowrap"
            >
              All Skills <span className="text-sm font-normal text-ink-muted">({skills.length})</span>
            </Button>
            {skillCategories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className="whitespace-nowrap gap-1.5"
              >
                <cat.icon className="w-4 h-4" aria-hidden="true" />
                {cat.label}
                <span className="text-sm font-normal text-ink-muted">
                  ({skills.filter(s => s.category === cat.id).length})
                </span>
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          role="list"
          aria-label={`${activeCategory === 'all' ? 'All' : activeCategory} skills`}
        >
          {filteredSkills.map((skill, index) => (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                delay: index * 0.03, 
                duration: 0.4, 
                ease: [0.175, 0.885, 0.32, 1.275] 
              }}
              className="group"
              role="listitem"
            >
              <Card className="p-5 h-full group-hover:border-brand/30 group-hover:shadow-xl group-hover:shadow-brand/10 transition-all duration-300 cursor-default">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-${skill.category === 'frontend' ? 'brand' : skill.category === 'backend' ? 'coral' : skill.category === 'database' ? 'emerald' : skill.category === 'ai-ml' ? 'amber' : skill.category === 'devops' ? 'sky' : 'purple'}/10 text-${skill.category === 'frontend' ? 'brand' : skill.category === 'backend' ? 'coral' : skill.category === 'database' ? 'emerald' : skill.category === 'ai-ml' ? 'amber' : skill.category === 'devops' ? 'sky' : 'purple'} flex-shrink-0`}>
                    <span className="text-2xl" aria-hidden="true">{skill.icon}</span>
                  </div>
                  <Badge 
                    variant="outline" 
                    className="text-xs self-start"
                    style={{ backgroundColor: `var(--color-${skill.category === 'frontend' ? 'brand' : skill.category === 'backend' ? 'coral' : skill.category === 'database' ? 'emerald' : skill.category === 'ai-ml' ? 'amber' : skill.category === 'devops' ? 'sky' : 'purple'}-muted)` }}
                  >
                    {skillCategories.find(c => c.id === skill.category)?.label}
                  </Badge>
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-bold text-ink text-base">{skill.name}</h3>
                    <span className="text-sm font-semibold text-brand">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ delay: 0.3 + index * 0.03, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ 
                        backgroundColor: `var(--color-${skill.category === 'frontend' ? 'brand' : skill.category === 'backend' ? 'coral' : skill.category === 'database' ? 'emerald' : skill.category === 'ai-ml' ? 'amber' : skill.category === 'devops' ? 'sky' : 'purple'})`,
                        width: '0%'
                      }}
                    />
                  </div>
                </div>
                
                <p className="text-sm text-ink-muted line-clamp-2 group-hover:text-ink transition-colors">
                  {skill.description}
                </p>
              </Card>
            </motion.article>
          ))}
        </motion.div>

        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-ink-muted">No skills found in this category.</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-surface/60 backdrop-blur-xl border border-line">
            <Zap className="w-5 h-5 text-amber" aria-hidden="true" />
            <span className="text-sm font-semibold text-ink">
              Always learning — Currently diving deeper into: 
              <span className="text-brand font-bold ml-2">Rust, WebGPU, Kubernetes Operators</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}