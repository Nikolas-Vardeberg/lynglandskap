import { TextT } from 'phosphor-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'Text',
  title: 'Text',
  type: 'object',
  icon: TextT,
  fields: [
    defineField({
        type: 'boolean',
        name: 'isDark',
        title: 'Is Dark?',
        initialValue: true,
        validation: (rule) => rule.required(),
      }),
      defineField({
        type: 'normalText',
        name: 'text',
        title: 'Text',
        validation: (rule) => rule.required(),
      }),
  ],
  preview: {
    select: {
      title: 'body',
      media: 'Text',
    },
    prepare({ title, media }) {
      return {
        subtitle: 'Text',
        media,
        title,
      }
    },
  },
})
