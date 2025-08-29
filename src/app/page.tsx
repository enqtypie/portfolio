import Image from "next/image";
import { Header } from "./components/header";
import { ScrollAnimation } from "./components/scroll-animations";
import { ProjectCard } from "./components/project-card";
import { projects, type Project } from "./data/projects";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
        <div className="absolute inset-0 -z-10" />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.15fr,0.85fr] items-center">
            {/* Image - First on mobile, second on larger screens */}
            <div className="flex justify-center sm:justify-end order-1 sm:order-2">
              <Image
                src="/NJ.png"
                alt="Noli Joseph Tolosa - Frontend Developer"
                width={500}
                height={600}
                className="w-72 h-[380px] sm:w-96 sm:h-[460px] lg:w-[440px] lg:h-[540px] object-cover rounded-3xl"
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 440px"
                priority
              />
            </div>
            
            {/* Text Content - Second on mobile, first on larger screens */}
            <div className="text-center lg:text-left space-y-6 order-2 sm:order-1">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight text-foreground">
                  Hi, I'm <span className="text-primary">Noli Joseph Tolosa</span>
                </h1>
                <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl">
                  Frontend developer & UI/UX Designer crafting clean, accessible user experiences.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href="#projects" className="btn btn-primary hover:scale-105 transition-transform">View Projects</a>
                <a href="#contact" className="btn border-ring text-foreground hover:bg-muted hover:scale-105 transition-transform">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
        <ScrollAnimation>
          <div className="card p-6 sm:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
                About <span className="text-primary">Me</span>
              </h2>
              <div className="mt-2 w-16 h-[2px] bg-primary/60 rounded mx-auto" />
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-foreground/70 text-center">
                I am a Computer Science graduate with a passion for crafting engaging and user-friendly web designs. I focus on creating intuitive UI/UX experiences that combine functionality with aesthetic appeal, turning ideas into seamless digital experiences.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="card p-4">
                  <h3 className="text-base font-semibold text-foreground">Frontend Focus</h3>
                  <p className="mt-1 text-sm text-foreground/70">Building responsive, accessible interfaces with modern frameworks.</p>
                </div>
                <div className="card p-4">
                  <h3 className="text-base font-semibold text-foreground">Design Mindset</h3>
                  <p className="mt-1 text-sm text-foreground/70">UI/UX principles guide component and layout decisions.</p>
                </div>
                <div className="card p-4">
                  <h3 className="text-base font-semibold text-foreground">Collaboration</h3>
                  <p className="mt-1 text-sm text-foreground/70">Agile-friendly and team-oriented.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
        <ScrollAnimation>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-center">My Skills</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">🧰 Tech Stack</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Angular', 'Next.JS'].map((s, i) => (
                  <span key={i} className="px-2 py-1 bg-muted text-foreground/70 text-sm rounded-md">{s}</span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">🌐 Web Development</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {['HTML', 'CSS', 'TypeScript', 'Python', 'Flask'].map((s, i) => (
                  <span key={i} className="px-2 py-1 bg-muted text-foreground/70 text-sm rounded-md">{s}</span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">🎨 Design & Prototyping</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Figma'].map((s, i) => (
                  <span key={i} className="px-2 py-1 bg-muted text-foreground/70 text-sm rounded-md">{s}</span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">🔧 Version Control</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Git', 'GitHub'].map((s, i) => (
                  <span key={i} className="px-2 py-1 bg-muted text-foreground/70 text-sm rounded-md">{s}</span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">🖼️ Graphic Design</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Canva', 'Adobe Photoshop', 'Adobe Illustrator'].map((s, i) => (
                  <span key={i} className="px-2 py-1 bg-muted text-foreground/70 text-sm rounded-md">{s}</span>
                ))}
              </div>
            </div>
            <div className="card p-6 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">✨ Other Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Responsive Design', 'UI/UX Fundamentals', 'Agile (Scrum)', 'Team Management'].map((s, i) => (
                  <span key={i} className="px-2 py-1 bg-muted text-foreground/70 text-sm rounded-md">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
        <ScrollAnimation>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-center">Projects</h2>
          <p className="mt-2 text-sm text-foreground/60">
            Disclaimer: Some projects are not available for public viewing. Several are framework-only prototypes and others were developed under NDA contracts.
          </p>
          <div className="mt-8 sm:mt-12 grid gap-6 grid-cols-1 lg:grid-cols-2">
            {(projects as Project[]).map((project, index) => (
              <ScrollAnimation key={index} threshold={0.2}>
                <ProjectCard
                  title={project.title}
                  period={project.period}
                  role={project.role}
                  description={project.description}
                  technologies={project.technologies}
                  link={project.link}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                />
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
      </section>

      {/* Contact */}
<section id="contact" className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
  <ScrollAnimation>
    <div className="card p-6 sm:p-8">
      <div className="grid gap-8 sm:grid-cols-2 items-center">
          
          {/* Image Side - First on mobile, second on larger screens */}
          <div className="justify-self-center sm:justify-self-end order-1 sm:order-2">
            <Image
              src="/njpogi.png"
              alt="Noli Joseph Tolosa"
              width={400}
              height={480}
              className="w-48 h-56 xs:w-52 xs:h-60 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-[400px] xl:w-[380px] xl:h-[460px] object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              sizes="(max-width: 475px) 192px, (max-width: 640px) 208px, (max-width: 768px) 256px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 380px"
              priority={false}
            />
          </div>

          {/* Content Side - Second on mobile, first on larger screens */}
          <div className="space-y-8 order-2 sm:order-1">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Let's work
                <span className="block text-transparent bg-gradient-to-r from-orange-600 via-peach-500 to-pink-600 bg-clip-text">
                  together
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-foreground max-w-lg leading-relaxed">
                Available for freelance projects and full-time opportunities. Let's create something amazing together!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a 
                className="btn btn-primary" 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tolosa.nolijoseph@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email me
              </a>
              
              <a href="https://www.facebook.com/en.tolosa" target="_blank" rel="noopener noreferrer" className="btn border-ring text-foreground hover:bg-muted">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              
              <a href="https://github.com/enqtypie" target="_blank" rel="noopener noreferrer" className="btn border-ring text-foreground hover:bg-muted">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .5a12 12 0 00-3.793 23.4c.6.112.82-.256.82-.572 0-.283-.011-1.034-.017-2.03-3.338.726-4.043-1.61-4.043-1.61-.546-1.389-1.334-1.76-1.334-1.76-1.091-.746.083-.731.083-.731 1.206.085 1.84 1.238 1.84 1.238 1.073 1.84 2.816 1.309 3.503 1 .108-.789.42-1.309.763-1.611-2.665-.305-5.467-1.363-5.467-6.065 0-1.34.465-2.437 1.235-3.297-.124-.304-.536-1.53.117-3.188 0 0 1.008-.322 3.3 1.26a11.47 11.47 0 016.006 0c2.29-1.582 3.297-1.26 3.297-1.26.655 1.658.243 2.884.119 3.188.77.86 1.233 1.957 1.233 3.297 0 4.713-2.807 5.756-5.48 6.055.431.372.815 1.103.815 2.222 0 1.604-.015 2.896-.015 3.292 0 .318.217.689.826.572A12 12 0 0012 .5z"/>
                </svg>
                GitHub
              </a>
            </div>

            {/* Direct email reference */}
            <div className="mt-4 text-sm text-foreground/70">
              <p>
                Email: <a href="mailto:tolosa.nolijoseph@gmail.com" className="underline decoration-dotted hover:text-foreground">tolosa.nolijoseph@gmail.com</a>
              </p>
            </div>
          </div>
      </div>
    </div>
  </ScrollAnimation>
</section>
    </div>
  );
}