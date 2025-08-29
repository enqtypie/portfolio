"use client";

import { useState } from "react";
import Image from "next/image";

// The data lives in a server-safe module to avoid RSC/client boundary issues.

interface ProjectCardProps {
  title: string;
  period: string;
  role: string;
  description: string;
  technologies?: string[];
  link?: string;
  github?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function ProjectCard({ 
  title, 
  period, 
  role, 
  description, 
  technologies = [], 
  link, 
  github, 
  imageSrc,
  imageAlt
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className="card p-6 hover:scale-105 transition-all duration-300 cursor-pointer group h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-4 flex-1 flex flex-col">
        {imageSrc && (
          <div className="relative w-full h-40 sm:h-48 rounded-md overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              priority={false}
            />
          </div>
        )}
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
              {period}
            </span>
            <span className="px-2 py-1 bg-muted text-foreground/70 rounded-full">
              {role}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground/70 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-muted text-foreground/60 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-auto pt-2">
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary text-sm hover:scale-105 transition-transform"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
