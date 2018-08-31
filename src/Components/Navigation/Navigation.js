import React from 'react';
import 'tachyons';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if(isSignedIn){
      return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p onClick={() => onRouteChange('signin')} className="f3 black link dim underline pointer">
          Sign Out
        </p>
      </nav>
    );
    } else {
      return (
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p onClick={() => onRouteChange('signin')} className="f3 black link dim underline pointer">
            Sign In
        </p>
          <p onClick={() => onRouteChange('register')} className="f3 black link dim underline pointer">
            Register
        </p>
        </nav>
      );
    }

};

export default Navigation;
