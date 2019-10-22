import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'



import history from './history';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth.js';


/* Import Redux Elements */
import store from './Store/store.js';
import {Provider} from 'react-redux';


import Home from './views/Home/Home'
import Features from './views/CommonPage/features'
import Pricing from './views/CommonPage/pricing'
import Terms from './views/CommonPage/terms-of-service'
import Support from './views/CommonPage/support'
import Testimonials from './views/CommonPage/about'
import FreeTrail from './views/CommonPage/freeTrail'
import Faq from './views/CommonPage/faq'
import Privacy from './views/CommonPage/privacy'
import Refund from './views/CommonPage/refund'


import Footer from './components/Footer'
import Header from './components/Header'
import NoMatch from './components/404page'
import './template.css'



import data from './data.json'
import { slugify } from './util/url'
import { documentHasTerm, getCollectionTerms } from './util/collection'

const RouteWithMeta = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={routeProps => (
      <Fragment>
        
        <Component {...routeProps} {...props} />
      </Fragment>
    )}
  />
)

class App extends Component {
  state = {
    data
  }

  getDocument = (collection, name) =>
    this.state.data[collection] &&
    this.state.data[collection].filter(page => page.name === name)[0]

  getDocuments = collection => this.state.data[collection] || []

  render () {
    const globalSettings = this.getDocument('settings', 'global')
    const {
      siteTitle,
      siteUrl,
      siteDescription,
      socialMediaCard,
      headerScripts
    } = globalSettings

    const posts = this.getDocuments('posts').filter(
      post => post.status !== 'Draft'
    )
    const categoriesFromPosts = getCollectionTerms(posts, 'categories')
    const postCategories = this.getDocuments('postCategories').filter(
      category => categoriesFromPosts.indexOf(category.name.toLowerCase()) >= 0
    )

    return (
      <Provider store={store}>
      <Router>
        <div className='React-Wrap'>
          
         
          
          <Helmet
            defaultTitle={siteTitle}
            titleTemplate={`${siteTitle} | %s`}
          />
       
          <Header />

          <Switch>
            <RouteWithMeta
              path='/'
              exact
              component={Home}
              description={siteDescription}
              fields={this.getDocument('pages', 'home')}
            />
            <RouteWithMeta
              path='/pricing/'
              exact
              component={Pricing}
              fields={this.getDocument('pages', 'pricing')}
              siteTitle={siteTitle}
            />
            <RouteWithMeta
              path='/features/'
              exact
              component={Features}
              fields={this.getDocument('pages', 'features')}
              siteTitle={siteTitle}
            />
            <RouteWithMeta
              path='/terms-of-service/'
              exact
              component={Terms}
              fields={this.getDocument('pages', 'terms')}
              siteTitle={siteTitle}
            />
            <RouteWithMeta
              path='/support/'
              exact
              component={Support}
              fields={this.getDocument('pages', 'Support')}
              siteTitle={siteTitle}
            />
            <RouteWithMeta
              path='/testimonials/'
              exact
              component={Testimonials}
              fields={this.getDocument('pages', 'testimonials')}
              siteTitle={siteTitle}
            />
            
            <RouteWithMeta
              path='/freeTrail/'
              exact
              component={FreeTrail}
              fields={this.getDocument('pages', 'FreeTrail')}
              siteTitle={siteTitle}
            />
            <RouteWithMeta
              path='/faq/'
              exact
              component={Faq}
              fields={this.getDocument('pages', 'Faq')}
              siteTitle={siteTitle}
            />
            <RouteWithMeta
              path='/privacy/'
              exact
              component={Privacy}
              fields={this.getDocument('pages', 'privacy')}
              siteTitle={siteTitle}
            />
            <RouteWithMeta
              path='/refund/'
              exact
              component={Refund}
              fields={this.getDocument('pages', 'Refund')}
              siteTitle={siteTitle}
            />


            

            <Route render={() => <NoMatch siteUrl={siteUrl} />} />
          </Switch>
          <Footer />
        </div>
      </Router>
      </Provider>
    )
  }
}

export default App
