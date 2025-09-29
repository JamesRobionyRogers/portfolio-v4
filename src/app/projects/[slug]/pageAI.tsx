// import React from 'react'
// import { notFound } from 'next/navigation'
// import Image from 'next/image'
// import Link from 'next/link'
// import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects'

// // Generate static params for all project slugs
// export async function generateStaticParams() {
//   const slugs = getAllProjectSlugs()
//   return slugs.map((slug) => ({
//     slug: slug,
//   }))
// }

// // Generate metadata for SEO
// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const project = getProjectBySlug(params.slug)
  
//   if (!project) {
//     return {
//       title: 'Project Not Found',
//     }
//   }

//   return {
//     title: `${project.title} - Project Details`,
//     description: project.description,
//     openGraph: {
//       title: project.title,
//       description: project.description,
//       images: [project.image],
//     },
//   }
// }

// // Technology Badge Component
// const TechnologyBadge = ({ tech }: { tech: string }) => (
//   <span className="px-3 py-1 bg-neutral-800 text-neutral-300 text-sm rounded-full border border-neutral-700">
//     {tech}
//   </span>
// )

// // Back to Project navigation component 
// const BackToProjects = () => {
//     return (
//         <div className="px-4 lg:px-8 py-6">
//             <div className="max-w-7xl mx-auto">
//                 <Link
//                     href="/projects"
//                     className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
//                 >
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                     </svg>
//                     Back to Projects
//                 </Link>
//             </div>
//         </div>
//     )
// }

// // Project Detail Page
// const ProjectDetailPage = ({ params }: { params: { slug: string } }) => {
//   const project = getProjectBySlug(params.slug)

//   if (!project) {
//     notFound()
//   }

//   return (
//     <div className="min-h-screen bg-black">
//         <BackToProjects />

//       {/* Project Header */}
//       <section className="px-4 lg:px-8 py-8 lg:py-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
//             {/* Project Info */}
//             <div>
//               <div className="flex items-center gap-4 mb-6">
//                 <Image
//                   src={project.icon}
//                   alt={`${project.title} icon`}
//                   width={64}
//                   height={64}
//                   className="rounded-xl"
//                 />
//                 <div>
//                   <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">
//                     {project.title}
//                   </h1>
//                   <p className="text-lg text-neutral-400">
//                     {project.type} • {project.year}
//                   </p>
//                 </div>
//               </div>
              
//               <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
//                 {project.summary}
//               </p>

//               {/* Action Buttons */}
//               <div className="flex flex-wrap gap-4 mb-8">
//                 {project.link && (
//                   <Link
//                     href={project.link}
//                     className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
//                   >
//                     View Project
//                   </Link>
//                 )}
//                 {project.github && (
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-6 py-3 border border-neutral-700 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium"
//                   >
//                     View Code
//                   </a>
//                 )}
//               </div>
//             </div>

//             {/* Project Image */}
//             <div className="relative">
//               <div className="relative aspect-video rounded-xl overflow-hidden">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Project Details */}
//       <section className="px-4 lg:px-8 py-8 lg:py-16">
//         <div className="max-w-4xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Description */}
//             <div className="lg:col-span-2">
//               <h2 className="text-2xl font-bold text-white mb-6">About This Project</h2>
//               <div className="prose prose-invert max-w-none">
//                 <p className="text-neutral-300 leading-relaxed mb-6">
//                   {project.description}
//                 </p>
//                 <p className="text-neutral-300 leading-relaxed">
//                   This project demonstrates my expertise in modern web development practices, 
//                   user experience design, and scalable architecture. It showcases the integration 
//                   of various technologies to create a robust and user-friendly application.
//                 </p>
//               </div>
//             </div>

//             {/* Project Meta */}
//             <div className="space-y-8">
//               {/* Technologies */}
//               <div>
//                 <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {project.technologies.map((tech) => (
//                     <TechnologyBadge key={tech} tech={tech} />
//                   ))}
//                 </div>
//               </div>

//               {/* Project Info */}
//               <div>
//                 <h3 className="text-xl font-semibold text-white mb-4">Project Details</h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <span className="text-neutral-400">Type</span>
//                     <span className="text-white">{project.type}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-neutral-400">Year</span>
//                     <span className="text-white">{project.year}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-neutral-400">Technologies</span>
//                     <span className="text-white">{project.technologies.length}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Features */}
//               <div>
//                 <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
//                 <ul className="space-y-2">
//                   <li className="flex items-center gap-2 text-neutral-300">
//                     <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     Modern, responsive design
//                   </li>
//                   <li className="flex items-center gap-2 text-neutral-300">
//                     <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     Optimized performance
//                   </li>
//                   <li className="flex items-center gap-2 text-neutral-300">
//                     <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     Clean, maintainable code
//                   </li>
//                   <li className="flex items-center gap-2 text-neutral-300">
//                     <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     User-friendly interface
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default ProjectDetailPage
