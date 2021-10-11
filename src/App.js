import React, { useState } from 'react';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

function App() {
  // State that stores the current page as a string
  const [page, setPage] = useState('Home');

  return (
    <>
      {/*
        I'm passing the setPage function to Header
        because the Header component contains the
        App's navmenu
      */}
      <Header
        setPage={setPage}
        page={page}
      />
      {/*
        The Content component needs to be aware of
        which page the user wants to be on, so that
        it renders the requested content
      */}
      <Content
        page={page}
      />
      <Footer />
    </>
  );
}

export default App;