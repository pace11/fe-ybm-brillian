import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RouterApp from './route.web'

export default function App() {
  return (
    // <Router>
    //   <Switch>
    //     {routes.map((route, idx) => (
    //       <Route
    //         key={String(idx)}
    //         path={route.path}
    //         exact={route.exact}
    //         component={(props) => (
    //           <route.layout {...props}>
    //             <route.component {...props} />
    //           </route.layout>
    //         )}
    //       />
    //     ))}
    //   </Switch>
    // </Router>
    <RouterApp />
  )
}
