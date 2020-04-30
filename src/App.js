import React from 'react';

import Header from './Header'

export const ThemeContext = React.createContext({ primaryColor: 'deepskyblue' })

const App = () => (
  <Header text='Hello World' />
)

export default App;
