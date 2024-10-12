const apiQueries = (slug) => ({
  constants: `
    *[_type == "constants"][0]{
      "cv": cv.asset -> url
    }
    `,
});

export default apiQueries;
