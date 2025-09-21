import React from 'react'

export async function generateStaticParams() {
    // const slugs = getAllProjectSlugs()
    // return slugs.map((slug) => ({
    //     slug: slug,
    // }))

    return [{
        slug: "first-post",
    }]
}

const page = () => {   

    return (
        <div>Work in Progress</div>
    )
}

export default page