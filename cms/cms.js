import React from 'react'

import '../src/globalStyles.css'
import data from '../src/data.json'
import Home from '../src/views/Home/Home'
import Features from '../src/views/CommonPage/features'
import Pricing from '../src/views/CommonPage/pricing'
import Terms from '../src/views/CommonPage/terms-of-service'
import Support from '../src/views/CommonPage/support'
import Testimonials from '../src/views/CommonPage/about'
import FreeTrail from '../src/views/CommonPage/freeTrail'
import Faq from '../src/views/CommonPage/faq'
import Privacy from '../src/views/CommonPage/privacy'
import Refund from '../src/views/CommonPage/refund'
import Footer from '../src/views/components/Footer'
import Header from '../src/views/components/Header'


import NoMatch from './components/404page'

console.log('React version', React.version)

const CMS = window.CMS
CMS.registerPreviewStyle(
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'
)
CMS.registerPreviewStyle('/admin/cms.bundle.css')

const getDocument = (collection, name) =>
  data[collection] && data[collection].filter(page => page.name === name)[0]
const getDocuments = (collection, name) => data[collection]

const globalSettings = getDocument('settings', 'global')
// const posts = getDocuments('posts')

// Preview Templates
CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <Home fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('features-page', ({ entry }) => (
  <Features fields={entry.toJS().data} />
))

CMS.registerPreviewTemplate('pricing-page', ({ entry }) => (
  <Pricing fields={entry.toJS().data} posts={posts} />
))
CMS.registerPreviewTemplate('terms-page', ({ entry }) => (
  <Terms fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('support-page', ({ entry }) => (
  <Support fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('testimonials-page', ({ entry }) => (
  <Testimonials fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('freeTrail-page', ({ entry }) => (
  <FreeTrail fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('faq-page', ({ entry }) => (
  <Faq fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('privacy-page', ({ entry }) => (
  <Privacy fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('refund-page', ({ entry }) => (
  <Refund fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('footer-page', ({ entry }) => (
  <Footer fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('header-page', ({ entry }) => (
  <Header fields={entry.toJS().data} />
))

// Return to home when user logging out
window.netlifyIdentity.on('logout', function () {
  document.location.href = '/'
})

// Log netlifySiteURL if editing on localhost
if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  console.log(
    `%cnetlifySiteURL: ${window.localStorage.getItem('netlifySiteURL')}`,
    'color: hotpink; font-size: 15px'
  )
}
