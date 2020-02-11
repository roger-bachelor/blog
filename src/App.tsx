import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Header, Footer, Navbar, Description } from './components'
import { HomePage, PostPage, /* AuthorPage,*/ AboutUsPage, NotFoundPage } from './pages'

import css from './App.module.scss'

const App: React.FC = () => (
    <div className={css.app}>
        <Router>
            <div className={css.header}>
                <Header />
            </div>

            <div className={css.description}>
                <Description />
            </div>

            <div className={css.footer}>
                <Footer />
            </div>

            <Navbar />

            <main className={css.content}>
                <Switch>
                    <Route exact path="/" component={HomePage} />

                    {/* TODO: <Route path="/posts" component={PostPage} />*/}
                    <Route path="/posts/:slug" component={PostPage} />

                    {/* TODO:
                        <Route path="/categories" component={PostPage} />
                        <Route path="/categories/:slug" component={PostPage} />

                        <Route path="/authors" component={PostPage} />
                        <Route path="/authors/:slug" component={AuthorPage} />
                    */}

                    <Route path="/aboutus" component={AboutUsPage} />

                    <Route path="/" component={NotFoundPage} />
                </Switch>
            </main>
        </Router>
    </div>
)

export default App
