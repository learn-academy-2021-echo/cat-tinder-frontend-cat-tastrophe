'''
\$ yarn create react-app cat-tinder-frontend

Add the remote from your GitHub classroom repository

Create a default branch (main)

Make an initial commit to the repository

\$ yarn start

\*\*\* Created Components Files
Header.js

Footer.js

\*\* Created Page files
Home.js

CatIndex.js

CatShow.js

CatNew.js

CatEdit.js

NotFound.js

\$ yarn add bootstrap

\$ yarn add reactstrap
Added import 'bootstrap/dist/css/bootstrap.min.css' to src/index.js

''' Added mockCats
src/mockCats.js

let cats = [
{
id: 1,
name: "Mittens",
age: 5,
enjoys: "sunshine and warm spots",
image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
},
{
id: 2,
name: "Raisins",
age: 4,
enjoys: "being queen of the dogs",
image: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80"
},
{
id: 3,
name: "Toast",
age: 1,
enjoys: "getting all the attention",
image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
}
]
export default cats

'''
import mockCats from './mockCats.js'

class App extends Component{
constructor(props){
super(props)
this.state = {
cats: mockCats
}
}

\$ yarn add react-router-dom@5.3.0

import {
BrowserRouter as Router,
Route,
Switch
} from 'react-router-dom'

'''

<!-- <Router>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/catindex" component={CatIndex} />
    <Route path="/catshow" component={CatShow} />
    <Route path="/catnew" component={CatNew} />
    <Route path="/catedit" component={CatEdit} />
    <Route component={NotFound}/>
  </Switch>
</Router> -->

------------02-02-22-------------------
Opened Terminal
CD to Desktop
go to GitHub

cloned https://github.com/learn-academy-2021-echo/cat-tinder-frontend-cat-tastrophe.git

yarn add -D enzyme react-test-renderer enzyme-adapter-react-16

yarn test

yarn start

make test files for the HOME,HEADER,FOOTER,NOTFOUND.

Used the Template
// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
it("displays a heading", () => {
const home = shallow(<Home />)
const homeHeading = home.find("h3").text()
expect(homeHeading).toEqual("Welcome to Cat Tinder!")
})
})
