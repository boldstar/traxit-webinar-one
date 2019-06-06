// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    href: "//cdn-images.mailchimp.com/embedcode/slim-10_7.css", 
    rel: "stylesheet", 
    type: "text/css"
  })
}
