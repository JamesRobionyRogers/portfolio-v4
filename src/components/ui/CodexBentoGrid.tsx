// import React from "react";
// import { motion } from "framer-motion";

// // Desktop layout (13x8 grid)
// const projects = [
//   {
//     title: "Featured Project",
//     description: "Your best project showcased here",
//     media: "/media/tailorwrite.mp4",
//     type: "video",
//     style: { gridColumn: "4 / span 7", gridRow: "3 / span 4" },
//   },

//   { title: "Poker Trainer", description: "C++ NLHE training", media: "/media/poker.gif", type: "image", style: { gridColumn: "1 / span 3", gridRow: "1 / span 2" } },
//   { title: "Job Tracker", description: "React + Flask", media: "/media/jobtracker.png", type: "image", style: { gridColumn: "4 / span 3", gridRow: "1 / span 2" } },
//   { title: "Drone AI", description: "Autonomous FPV", media: "/media/drone.mp4", type: "video", style: { gridColumn: "7 / span 3", gridRow: "1 / span 2" } },
//   { title: "Docs Platform", description: "Markdown docs", media: "/media/docs.png", type: "image", style: { gridColumn: "10 / span 4", gridRow: "1 / span 2" } },

//   { title: "Time Tracker", description: "iOS app", media: "/media/time.mp4", type: "video", style: { gridColumn: "1 / span 3", gridRow: "3 / span 2" } },
//   { title: "API Service", description: "Flask backend", media: "/media/api.png", type: "image", style: { gridColumn: "1 / span 3", gridRow: "5 / span 2" } },

//   { title: "Analytics", description: "Data dashboards", media: "/media/analytics.png", type: "image", style: { gridColumn: "11 / span 3", gridRow: "3 / span 2" } },
//   { title: "Infra", description: "Terraform + AWS", media: "/media/infra.png", type: "image", style: { gridColumn: "11 / span 3", gridRow: "5 / span 2" } },

//   { title: "Mobile App", description: "SwiftUI", media: "/media/mobile.png", type: "image", style: { gridColumn: "1 / span 4", gridRow: "7 / span 2" } },
//   { title: "Realtime", description: "WebSockets", media: "/media/realtime.png", type: "image", style: { gridColumn: "5 / span 4", gridRow: "7 / span 2" } },
//   { title: "AI Tools", description: "LLM integrations", media: "/media/ai.png", type: "image", style: { gridColumn: "9 / span 5", gridRow: "7 / span 2" } },
// ];

// export const MediaRenderer = ({ project }) => {
//   if (project.type === "video") {
//     return (
//       <video
//         src={project.media}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//     );
//   }

//   return (
//     <img
//       src={project.media}
//       alt={project.title}
//       className="absolute inset-0 w-full h-full object-cover"
//     />
//   );
// };

// export const BentoCard = ({ project, mobile }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className={`relative overflow-hidden rounded-2xl shadow-lg bg-neutral-900 text-white ${
//         mobile ? "aspect-[16/9]" : ""
//       }`}
//       style={!mobile ? project.style : undefined}
//     >
//       <MediaRenderer project={project} />

//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

//       <div className="relative p-4 flex flex-col justify-end h-full">
//         <h2 className="text-lg font-semibold">{project.title}</h2>
//         <p className="text-sm text-neutral-300">{project.description}</p>
//       </div>
//     </motion.div>
//   );
// };

// // Desktop (preserves Apple layout)
// export const BentoGrid = () => {
//   return (
//     <div className="hidden lg:flex justify-center p-4">
//       <div className="w-full max-w-[1400px] aspect-[16/9]">
//         <div
//           className="grid gap-4 w-full h-full"
//           style={{
//             gridTemplateColumns: "repeat(13, minmax(0, 1fr))",
//             gridTemplateRows: "repeat(8, minmax(0, 1fr))",
//           }}
//         >
//           {projects.map((project, idx) => (
//             <BentoCard key={idx} project={project} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Mobile: 1 column, each tile keeps ratio, ~4 visible per screen
// export const MobileGrid = () => {
//   return (
//     <div className="grid grid-cols-1 gap-4 p-4 lg:hidden">
//       {projects.map((project, idx) => (
//         <BentoCard key={idx} project={project} mobile />
//       ))}
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <div className="min-h-screen bg-black">
//       <header className="p-6 text-white text-2xl font-bold">
//         My Projects
//       </header>
//       <BentoGrid />
//       <MobileGrid />
//     </div>
//   );
// }
