import React from 'react';
import { useAuth } from '../Store/Auth';

function Home() {
  const { user, isLoggedIn } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {user?.username}!</h1>
          <p>Your email: {user?.email}</p>
        </div>
      ) : (
        <h1>Please log in to view your details.</h1>
      )}
    </div>
  );
}

export default Home;
