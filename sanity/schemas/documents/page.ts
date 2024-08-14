import { Browser } from 'phosphor-react'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'page',
  title: 'Page',
  icon: Browser,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'sections',
      title: 'Sections',
      of: [
        defineArrayMember({ type: 'MainHero' }),
        defineArrayMember({ type: 'Quote' }),
        defineArrayMember({ type: 'FeaturedItems' }),
        defineArrayMember({ type: 'MediaModule' }),
        defineArrayMember({ type: 'CtaBanner' }),
        defineArrayMember({ type: 'FeaturedText' }),
        defineArrayMember({ type: 'Rows' }), 
        defineArrayMember({ type: "Fastlink" }),
        defineArrayMember({ type: "Mediemodul"}),
        defineArrayMember({ type: "Image" }),
        defineArrayMember({ type: "Text" }),
        defineArrayMember({ type: "List" }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'slug.current',
    },
    prepare({ title }) {
      return {
        subtitle: 'Page',
        title,
      }
    },
  },
})
