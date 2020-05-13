export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebc49623afc3059aea05936',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5zwz6sds',
                  apiId: '6fbb1a44-6b20-4a0e-b24c-f49659a082ae'
                },
                {
                  buildHookId: '5ebc49625eec7e54324d176f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-shfujy81',
                  apiId: '61dd5855-c4e5-44ed-87b9-fdd88fa9c0bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/r-oland/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-shfujy81.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
