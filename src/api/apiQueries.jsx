const apiQueries = (slug) => ({
  constants: `
    *[_type == "constants"][0]{
      cv
    }
    `,
});

export default apiQueries;
