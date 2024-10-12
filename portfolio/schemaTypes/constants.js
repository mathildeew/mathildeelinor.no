const constants = {
  name: 'constants',
  title: 'Constants',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Bilde',
      type: 'image',
      validation: (rule) => rule.required(),

      options: {hotspot: true},
      fields: [
        {
          name: 'focusAlt',
          title: 'Alternativ tekst',
          type: 'string',
          validation: (rule) => rule.required(),
        },
      ],
    },
    {
      name: 'cv',
      title: 'CV',
      type: 'file',
    },
  ],
}

export default constants
