import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CatIndex from "./pages/CatIndex";
import CatShow from "./pages/CatShow";
import CatNew from "./pages/CatNew";
import CatEdit from "./pages/CatEdit";
import NotFound from "./pages/NotFound";
import mockCats from "./mockCats";
import "./components/Header.css";
import "./components/Footer.css";
import "./pages/NotFound.css";
import "./pages/Home.css";
import "./pages/CatShow.css";
import "./pages/CatNew.css";
import "./pages/CatIndex.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    };
  }

  createCat = (cat) => {
    
  };

  componentDidMount(){
    this.readCat()
  }

  readCat = () => {
    fetch("http://localhost:3000/cats")
    .then(response => response.json())
    .then(catsArray => this.setState({cats: catsArray}))
    .catch(errors => console.log("Cat read errors:", errors))
  }
    

  render() {
    return (
      <div className="body">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/catindex"
              render={(props) => <CatIndex cats={this.state.cats} />}
            />

            <Route
              path="/catshow/:id"
              render={(props) => {
                let id = props.match.params.id;
                let cat = this.state.cats.find((cat) => cat.id === +id);
                return <CatShow cat={cat} />;
              }}
            />

            <Route
              path="/catnew"
              render={(props) => <CatNew createCat={this.createCat} />}
            />

            <Route path="/catedit" component={CatEdit} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
