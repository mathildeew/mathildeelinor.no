const apiQueries = (slug) => ({
  constants: `
    *[_type == "constants"][1]{
      "image": image.asset -> url,
      "cv": cv.asset -> url
    }
    `,

  project: `
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

  schoolProject: `
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
});

export default apiQueries;
