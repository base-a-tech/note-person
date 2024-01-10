import * as React from 'react';
import Home from 'screens/home';
import SignIn from 'screens/signIn';
import SignUp from 'screens/signUp';

export type ScreenNavigationOptions = {
  name: string;
  component: React.JSX.Element;
  options?: any;
};

const screens: Array<ScreenNavigationOptions> = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'SignIn',
    component: SignIn,
  },
  {
    name: 'SignUp',
    component: SignUp,
  },
];

export default screens;
