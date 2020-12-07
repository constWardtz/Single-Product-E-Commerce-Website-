import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createMuiTheme, ThemeProvider } from "@material-ui/core"

const theme = createMuiTheme({
    shadows: ['none'],
    palette: {
        primary: {
            main: "#C832FD" 
        },
        secondary: {
            main: "#C832FD" 
        },
    }
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ThemeProvider>,
    document.getElementById('root'))

    