import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import App from './components/App';

ReactDOM.render((
    <MuiThemeProvider>
        <div>
            <AppBar style ={{backgroundColor:"#FF3A7A", textDecorationColor:"white",textAlign:"center"}} title="Games Search App" showMenuIconButton={false} />
            <App />
        </div>
    </MuiThemeProvider>
), document.getElementById('root'));

