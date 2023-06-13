import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCqlNiJCGfeM8yNjhU_wYsOZKadONGqhxc",
  authDomain: "auth-8dbda.firebaseapp.com",
  projectId: "auth-8dbda",
  storageBucket: "auth-8dbda.appspot.com",
  messagingSenderId: "840433956902",
  appId: "1:840433956902:web:16bd19fcc0291b2ce4cee7"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

const Login = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(() => {
      // Navigate to the dashboard after successful login
      navigate('/dashboard');
    });
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: 'url("https://e0.pxfuel.com/wallpapers/145/550/desktop-wallpaper-stock-market-background-page-1-financial-market.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          marginBottom: '20px',
          textAlign: 'center',
          color: 'white',
          fontSize: '36px', // Increase the font size to 36px
          fontWeight: 'bold',
        }}
      >
        Welcome to Stock Market!
      </div>
      {user ? (
        <button
          onClick={signOut}
          style={{
            backgroundColor: '#f44336',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
          }}
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={signInWithGoogle}
          style={{
            backgroundColor: '#4285F4',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
          }}
        >
          Sign In with Google
        </button>
      )}
    </div>
  );
};

export { Login };
