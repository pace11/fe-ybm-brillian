import React from 'react'
import Layout from './layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// pages
import Beranda from './pages/beranda'
import TentangKami from './pages/tentang-kami'
import KontakKami from './pages/kontak-kami'
import KantorWilayah from './pages/kontak-kami/list-kantor-wilayah'
import Blog from './pages/blog'
import BlogDetail from './pages/blog/detail'
import Program from './pages/program'
import ProgramSlug from './pages/program/slug'
import ProgramSlugChild from './pages/program/slug-child'
import Berita from './pages/berita'
import BeritaDetail from './pages/berita/detail'

export default function RouterApp() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <Beranda />
            </Layout>
          </Route>
          <Route path="/tentang-kami" exact>
            <Layout>
              <TentangKami />
            </Layout>
          </Route>
          <Route path="/kontak-kami" exact>
            <Layout>
              <KontakKami />
            </Layout>
          </Route>
          <Route path="/kontak-kami/:slug" exact>
            <Layout>
              <KantorWilayah />
            </Layout>
          </Route>
          <Route path="/blog" exact>
            <Layout>
              <Blog />
            </Layout>
          </Route>
          <Route path="/blog/:slug" exact>
            <Layout>
              <BlogDetail />
            </Layout>
          </Route>
          <Route path="/program" exact>
            <Layout>
              <Program />
            </Layout>
          </Route>
          <Route path="/program/:slug" exact>
            <Layout>
              <ProgramSlug />
            </Layout>
          </Route>
          <Route path="/program/:slug/:slugChild" exact>
            <Layout>
              <ProgramSlugChild />
            </Layout>
          </Route>
          <Route path="/berita" exact>
            <Layout>
              <Berita />
            </Layout>
          </Route>
          <Route path="/berita/:slug" exact>
            <Layout>
              <BeritaDetail />
            </Layout>
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  )
}
