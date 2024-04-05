import React from  'react';
// import Header from './funcComp/Header';
// import Footer from './funcComp/Footer';
// import Main from './funcComp/Main';
import Header from './classComp/Header';
import Footer from './classComp/Footer';
import Main from './classComp/Main';

export default function App() {
  return(
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
