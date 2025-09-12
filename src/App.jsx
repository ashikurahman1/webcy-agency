import { useState } from 'react';
import './assets/logo.png';
import './App.css';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
}

export default App;
