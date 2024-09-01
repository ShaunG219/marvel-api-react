import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from './firebase/firebaseConfig.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

document.addEventListener('DOMContentLoaded', async function() {
  const provider = new GoogleAuthProvider();
  try
  {
    const result = await signInWithPopup(auth, provider)
    console.log("User signed in: ", result.user);
  }
  catch(error)
  {
    console.error("Error during sign-in:", error);
  }

  console.log("this is happenin");
  // Your code here
});
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
