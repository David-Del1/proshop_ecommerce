import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function App() {
  return (
    <>
    <Header />
    <main className="py-3">
      <Container>
        <h1>Proshop baby</h1>
      </Container>
    </main>
    <Footer />
    </>
  );
}

export default App;
