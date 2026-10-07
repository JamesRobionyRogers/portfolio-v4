import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import ProjectLinks from '@/components/projects/ProjectLinks'
import { TagList } from '@/components/ui/Tag'
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects'

// Generate static params for all project slugs
export async function generateStaticParams() {
	const slugs = getAllProjectSlugs()
	return slugs.map((slug) => ({
		slug: slug,
	}))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const project = getProjectBySlug(slug)

	if (!project) {
		return {
			title: 'Project Not Found',
		}
	}

	return {
		title: project.title,
		description: project.description,
		openGraph: {
			title: project.title,
			description: project.description,
			images: project.images,
		},
	}
}

// Project Detail Page
const ProjectDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params
	const project = getProjectBySlug(slug)

	if (!project) {
		notFound()
	}

	return (
		<div className="flex flex-col gap-16 min-h-screen bg-ink rounded-3xl m-4 lg:m-8 p-4 pt-28">
			<div className="relative flex justify-around gap-2">
				<h1 className="text-5xl sm:text-8xl uppercase text-ink-fg font-bold max-w-full">{project.title}</h1>
			</div>

			<section className="relative flex flex-col gap-16 bg-ink-raised rounded-3xl px-4 py-6">
				<div className="flex flex-col gap-8 justify-between lg:grid lg:grid-cols-12">

					<div className="flex flex-col gap-2 col-span-3">
						<h3 className="uppercase text-ink-subtle">Year</h3>
						<h2 className="text-5xl text-ink-fg font-semibold">{project.year}</h2>
					</div>

					<div className="flex flex-col gap-2 col-span-4">
						<h3 className="uppercase text-ink-subtle">Technologies</h3>
						<TagList tags={project.technologies} variant="on-raised" className="uppercase" />
					</div>

					<div className="flex flex-col gap-2 col-span-5">
						<h3 className="uppercase text-ink-subtle">Summary</h3>
						<h2 className="text-lg text-ink-fg">{project.summary}</h2>
					</div>

				</div>

				<div className="flex flex-col gap-4 lg:gap-5">

					<ProjectLinks project={project} />

					{project.images.map((image, index) => {
						if (Array.isArray(image)) return (
							<div key={`${index}`} className="flex justify-between gap-4 max-w-full">
								{image.map((subImage, i) => (
									<div key={`${index} ${i}`} className="relative w-full h-auto aspect-square rounded-lg lg:rounded-xl">

										<Image 
											className="aspect-square object-left object-cover rounded-lg lg:rounded-xl"
											src={subImage}
											alt={`${project.title} project preview`}
											sizes="100vw"
											fill
											/>
									</div>
								))}
							</div>
						)

            			else return (
							<Image
								key={index}
								className="block object-cover rounded-lg lg:rounded-xl"
								src={image}
								alt={`${project.title} project preview`}
								width={1920}
								height={1080}
								sizes="100vw"
							/>
						)
					})}

				</div>

				<ProjectLinks project={project} />


			</section>

		</div>
	)
}

export default ProjectDetailPage
