'''
$ yarn create react-app cat-tinder-frontend

Add the remote from your GitHub classroom repository

Create a default branch (main)

Make an initial commit to the repository

$ yarn start


*** Created Components Files
Header.js 

Footer.js 



** Created Page files 
Home.js 

CatIndex.js

CatShow.js 

CatNew.js 

CatEdit.js 

NotFound.js 


$ yarn add bootstrap

$ yarn add reactstrap
Added import 'bootstrap/dist/css/bootstrap.min.css'  to src/index.js

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

  $ yarn add react-router-dom@5.3.0

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