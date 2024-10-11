const project = {
  name: 'project',
  title: 'Prosjekter',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'resp',
      title: 'Ansvar',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    },
    {
      name: 'focusImage',
      title: 'Forsidebilde',
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
      name: 'github',
      title: 'GitHub',
      type: 'url',
      validation: (rule) => rule.required(),
    },
    {
      name: 'url',
      title: 'Nettside',
      type: 'url',
      validation: (rule) => rule.required(),
    },
    {
      name: 'content',
      title: 'Innhold',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [
        {
          type: 'block',
          styles: [
            {
              title: 'Normal',
              value: 'normal',
            },
            {
              title: 'Heading 1',
              value: 'h1',
            },
            {
              title: 'Heading 2',
              value: 'h2',
            },
            {
              title: 'Heading 3',
              value: 'h3',
            },
            {
              title: 'Highlighted',
              value: 'highlighted',
            },
          ],
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alternativ tekst',
              type: 'text',
              description:
                'Kort beskrivelse av bildet, helst kun et par ord. Brukes om bildet ikke kan vises eller for svaksynte.',
              validation: (rule) => rule.required(),
              rows: 1,
            },
            {
              name: 'desc',
              title: 'Beskrivelse av bilde',
              type: 'text',
              rows: 2,
              description: 'Enkel beskrivelse av bildet. Dette vises under bildet på nettsiden.',
            },
          ],
        },
      ],
    },
  ],
}

export default project
