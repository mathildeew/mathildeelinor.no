import { urlFor } from "../api/sanity-utils";

export const portableTextComponent = {
  types: {
    image: ({ value }) => {
      return <img src={urlFor(value).url()} alt={value.alt} className="mb-4" />;
    },
  },

  block: {
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    highlighted: ({ children }) => <span className="text-lg">{children}</span>,
  },

  marks: {
    link: ({ children, value }) => (
      <a href={value.href} className="font-medium underline hover:font-semibold">
        {children}
      </a>
    ),
  },
};
