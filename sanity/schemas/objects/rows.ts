import { Rows } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'Rows',
  title: 'Rows',
  type: 'object',
  icon: Rows,
  fields: [
    defineField({
      type: 'string',
      name: 'heading',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'text',
      name: 'body',
      title: 'Body',
    }),
  ],
  preview: {
    select: {
      title: 'body',
    },
    prepare({ title }) {
      return {
        subtitle: 'Rows',
        title,
      }
    },
  },
})
