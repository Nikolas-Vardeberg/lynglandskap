import { Rows, Star } from 'phosphor-react'
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
    defineField({
      type: 'array',
      name: 'blocks',
      title: 'Blocks',
      of: [
        {
          type: 'object',
          name: 'featuredItem',
          icon: Star,
          fields: [
            defineField({
              type: 'image',
              options: {
                hotspot: true,
              },
              name: 'rowsImage',
              title: 'Person bilde',
            }),
            defineField({
              type: 'string',
              name: 'rowsImageAlt',
              title: 'Rows Image Alt',
            }),
            defineField({
              type: 'string',
              name: 'name',
              title: 'Name',
              validation: (rule) => rule.required(),
            }),
            defineField({
              type: 'string',
              name: 'role',
              title: 'Role/stilling',
              validation: (rule) => rule.required(),
            }),
            defineField({
              type: "string",
              name: "email",
              title: "e-post",
              validation: (rule) => rule.required(),
            })
          ],
        },
      ],
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
