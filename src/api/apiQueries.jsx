const apiQueries = (slug) => ({
  constants: `
    *[_type == "constants"][1]{
      "image": image.asset -> url,
      "cv": cv.asset -> url
    }
    `,

  projects: `
    *[_type == "project" && title != "Lillestrøm Optikk - tidligere"] | order(_createdAt desc){
      title,
      "slug": slug.current,
      resp,
      "focusImage": focusImage.asset -> url,
      github,
      url,
      content
    }
    `,
  project: `
    *[_type == "project" && slug.current == "${slug}"][0]{
      title,
      "slug": slug.current,
      role,
      resp,
      "focusImage": focusImage.asset -> url,
      github,
      url,
      content
    }
    `,

  schoolProjects: `
    *[_type == "school"] | order(_createdAt desc){
      title,
      "slug": slug.current,
      assignment,
      "focusImage": focusImage.asset -> url,
      "focusAlt": focusImage.asset -> alt,
      preview,
      github,
      demo,
      info,
      builtWith
    }
    `,

  schoolProject: `
    *[_type == "school" && slug.current == "${slug}"][0]{
      title,
      "slug": slug.current,
      assignment,
      builtWith,
      "focusImage": focusImage.asset -> url,
      "preview": preview.asset -> url,
      github,
      demo,
      info
    }
    `,
});

export default apiQueries;
