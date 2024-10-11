const schoolProject = {
  name: 'school',
  title: 'Skolearbeider',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'assignment',
      title: 'Oppgave',
      type: 'string',
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
      name: 'preview',
      title: 'Preview',
      type: 'image',
      validation: (rule) => rule.required(),

      options: {hotspot: true},
      fields: [
        {
          name: 'previewAlt',
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
      name: 'demo',
      title: 'Demo',
      type: 'url',
      validation: (rule) => rule.required(),
    },
    {
      name: 'info',
      title: 'Info',
      type: 'text',
      validation: (rule) => rule.required(),
    },
    {
      name: 'builtWith',
      title: 'Bygget med',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    },
  ],
}

export default schoolProject
