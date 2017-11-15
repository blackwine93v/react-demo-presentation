## Presentation Demo Project ##

Guide line:

Install dependencies:
```
npm install
```

Run server: 
```
npm run server
```

Run development:
```
npm run start
```

Build production:
```
npm run build
```

This project was built by Create React App
See more: https://facebook.github.io/react/docs/installation.html#creating-a-new-application


## REACT ROUTER GUIDE ##

Install dependencies:
```
yarn add react-router-dom
# or, if you're not using yarn
npm install react-router-dom
```

Usage 

```
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

...


<Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
  
```
