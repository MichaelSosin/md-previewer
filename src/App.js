import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import MdViewerContainer from './containers/MdViewerContainer'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title='Markdown Previewer' />
          <MdViewerContainer />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
