import React from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header';
import Card from './components/Card';
import Chart from './components/Chart';
import Footer from './components/Footer';



function App() {
  return (
    <React.Fragment>
      <Header/>
       <Card />
     {/* <Switch>
        <Route path="/Assignment Progress" component={Chart} />
     </Switch>*/}
     <Chart/>
      <Footer />
    </React.Fragment>
     
    
  );
}

export default App;
