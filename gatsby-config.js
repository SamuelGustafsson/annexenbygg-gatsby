'use strict'

module.exports = {
  siteMetadata: {
    title: 'Annexen bygg & snickeri',
    description: 'A starter kit for TypeScript-based Gatsby projects with sensible defaults.',
    siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
    author: {
      name: 'Samuel Gustafsson',
      url: 'https://www.linkedin.com/in/samuel-gustafsson/'
    },
    homepage: {
      projects: [
        {
          title: 'kök',
          image: 'https://res.cloudinary.com/annexenbygg/image/upload/v1542141755/annexen-bygg/kitchens/kitchen-finished.jpg',
          text:
            'Här har vi fått i uppdrag att bygga ett kök. Nulla proident minim adipisicing elit exercitation incididunt labore do dolor aliquip tempor culpa duis consectetur. Velit tempor laboris ipsum tempor nulla minim labore commodo ullamco culpa aute nulla quis pariatur.'
        },
        {
          title: 'badrum',
          image: 'https://res.cloudinary.com/annexenbygg/image/upload/v1542455613/annexen-bygg/badrum.jpg',
          text:
            'Här har vi fått i uppdrag att bygga ett badrum. Nulla proident minim adipisicing elit exercitation incididunt labore do dolor aliquip tempor culpa duis consectetur. Velit tempor laboris ipsum tempor nulla minim labore commodo ullamco culpa aute nulla quis pariatur.'
        },
        {
          title: 'hus',
          image: 'https://res.cloudinary.com/annexenbygg/image/upload/v1542478343/annexen-bygg/house.jpg',
          text:
            'Här har vi fått i uppdrag att bygga ett hus. Nulla proident minim adipisicing elit exercitation incididunt labore do dolor aliquip tempor culpa duis consectetur. Velit tempor laboris ipsum tempor nulla minim labore commodo ullamco culpa aute nulla quis pariatur.'
        },
        {
          title: 'kök',
          image: 'https://res.cloudinary.com/annexenbygg/image/upload/v1542141755/annexen-bygg/kitchens/kitchen-finished.jpg',
          text:
            'Här har vi fått i uppdrag att bygga ett kök. Nulla proident minim adipisicing elit exercitation incididunt labore do dolor aliquip tempor culpa duis consectetur. Velit tempor laboris ipsum tempor nulla minim labore commodo ullamco culpa aute nulla quis pariatur.'
        },
        {
          title: 'badrum',
          image: 'https://res.cloudinary.com/annexenbygg/image/upload/v1542455613/annexen-bygg/badrum.jpg',
          text:
            'Här har vi fått i uppdrag att bygga ett badrum. Nulla proident minim adipisicing elit exercitation incididunt labore do dolor aliquip tempor culpa duis consectetur. Velit tempor laboris ipsum tempor nulla minim labore commodo ullamco culpa aute nulla quis pariatur.'
        },
        {
          title: 'hus',
          image: 'https://res.cloudinary.com/annexenbygg/image/upload/v1542478343/annexen-bygg/house.jpg',
          text:
            'Här har vi fått i uppdrag att bygga ett hus. Nulla proident minim adipisicing elit exercitation incididunt labore do dolor aliquip tempor culpa duis consectetur. Velit tempor laboris ipsum tempor nulla minim labore commodo ullamco culpa aute nulla quis pariatur.'
        }
      ]
    }
  },

  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
