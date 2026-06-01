import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      
      <div className="container">
        <Jumbotron />
        
        <div className="row">
          <div className="col-md-3">
            <Card 
              titulo="Sección Uno" 
              texto="Donec in efficitur ipsum, sit amet sollicitudin purus. Quisque ultrices felis et est." 
            />
          </div>
          <div className="col-md-3">
            <Card 
              titulo="Sección Dos" 
              texto="Aenean eget magna non justo egestas blandit. Mauris sed quam in arcu tempus." 
            />
          </div>
          <div className="col-md-3">
            <Card 
              titulo="Sección Tres" 
              texto="Vivamus consectetur diam et convallis tristique. Fusce tristique finibus mauris." 
            />
          </div>
          <div className="col-md-3">
            <Card 
              titulo="Sección Cuatro" 
              texto="Suspendisse potenti. Phasellus a massa nec urna accumsan varius id et libero." 
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;