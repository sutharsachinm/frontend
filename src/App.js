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
// /Start an Auth0 Session
const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
	if (/access_token|id_token|error/.test(nextState.location.hash)) {
	  auth.handleAuthentication(nextState);
	}
  };

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
      <Router history={history}>
        <div className='React-Wrap'>
          
         
          
          <Helmet
            defaultTitle={siteTitle}
            titleTemplate={`${siteTitle} | %s`}
          />
       
          <Header props={this.props} fields={this.getDocument('pages', 'header')}  auth={auth} />

          <Switch>
            <RouteWithMeta
              path='/'
              auth={auth}
              exact
              props={this.props}
              component={Home}
              description={siteDescription}
              fields={this.getDocument('pages', 'home')}
            />
            <RouteWithMeta
              path='/pricing/'
              exact
              props={this.props}
              auth={auth}
              component={Pricing}
              fields={this.getDocument('pages', 'pricing')}
              siteTitle={siteTitle}
            />
            <RouteWithMeta
              path='/features/'
              exact
              auth={auth}
              props={this.props}
              component={Features}
              fields={this.getDocument('pages', 'features')}
              siteTitle={siteTitle}
            />
            <RouteWithMeta
              path='/terms-of-service/'
              exact
              props={this.props}
              auth={auth}
              component={Terms}
              fields={this.getDocument('pages', 'terms')}
              siteTitle={siteTitle}
            />
            <RouteWithMeta
              path='/support/'
              exact
              props={this.props}
              auth={auth}
              component={Support}
              fields={this.getDocument('pages', 'Support')}
              siteTitle={siteTitle}
            />
            <RouteWithMeta
              path='/testimonials/'
              exact
              props={this.props}
              auth={auth}
              component={Testimonials}
              fields={this.getDocument('pages', 'testimonials')}
              siteTitle={siteTitle}
            />
            
            <RouteWithMeta
              path="/product-tours/:title/:plan"
              props={this.props}
              auth={auth}
              component={FreeTrail}
              fields={this.getDocument('pages', 'FreeTrail')}
              siteTitle={siteTitle}
            />
            <RouteWithMeta
              path='/faq/'
              exact
              props={this.props}
              auth={auth}
              component={Faq}
              fields={this.getDocument('pages', 'Faq')}
              siteTitle={siteTitle}
            />
            <RouteWithMeta
              path='/privacy/'
              exact
              props={this.props}
              auth={auth}
              component={Privacy}
              fields={this.getDocument('pages', 'privacy')}
              siteTitle={siteTitle}
            />
            <RouteWithMeta
              path='/refund/'
              exact
              props={this.props}
              auth={auth}
              component={Refund}
              fields={this.getDocument('pages', 'refund')}
              siteTitle={siteTitle}
            />


            
              {/*Callback url*/}
              <Route path="/callback" render={(props) => {
                          handleAuthentication(props);
                          return <Callback {...props} />;
						}}/>
            <Route render={() => <NoMatch auth={auth} siteUrl={siteUrl} />} />
          </Switch>
          <Footer props={this.props} fields={this.getDocument('pages', 'header')} />
        </div>
      </Router>
      </Provider>
    )
  }
}

export default App
