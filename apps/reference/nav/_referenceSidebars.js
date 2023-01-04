const { FALSE } = require("sass")

const sidebars = {
  guides: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: ['about', 'basics', 'charter', 'model'],
    },
    {
      type: 'category',
      label: 'Membership',
      collapsed: false,
      items: [
        'guides/registration',
    ],
    },
    {
      type: 'category',
      label: 'Membership How Tos',
      collapsed: false,
      items: [
        'guides/registration/issue-api-calls',
        'guides/registration/singleton',
        // 'guides/database/extensions/pgtap',
        'guides/registration/nodesetup',
        'guides/registration/memberstaker',
        'guides/registration/manifesto',
        'guides/registration/dips',
        'guides/registration/templatedip',
      ],
    },
    {
      type: 'category',
      label: 'DGC Portal',
      collapsed: false,
      items: [
        'guides/dgcportal/hal',
        'guides/dgcportal/dashboard',
        'guides/dgcportal/plurality',
        'guides/dgcportal/proposalcycle',
        'guides/dgcportal/dgctokens',
        // 'guides/database/json',
        // 'guides/database/arrays',
        // 'guides/database/sql-to-api',
      ],
    },
    {
      type: 'category',
      label: 'DGC Treasury',
      collapsed: false,
      items: [
        'guides/registration/treasury'
      ]
    }
  ],
}

module.exports = sidebars
