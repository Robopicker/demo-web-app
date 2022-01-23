import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Start from './Start';
import { createTheme, ThemeProvider} from '@material-ui/core'
import Layout from './Layout';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(0,4,3)'
    },
    secondary: {
      main: 'rgba(145,45,140)'
    },
  },
  typography: {
    fontFamily: 'quicksand',
    fontWeightRegular: '400',
    fontWeightLight: '400',
    fontWeightMedium: '500',
    fontWeightBold: '600'
  }
})

function App() {
  return (
  <ThemeProvider theme={theme}> 
    <Router>
    <Layout>
      <Switch>
        <Route path="/create">
          <Create />
          </Route>
        <Route path="/">
          <Start/>
        </Route>  
      </Switch>
      </Layout>    
    </Router>
    </ThemeProvider>   
  )
}

export default App;
