import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import { ErrorBoundary } from "react-error-boundary";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#182335',
    },
    secondary: {
      main: '#E15546',
    },
  },
});
function App() {
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <ErrorBoundary fallback={<div>Something went wrong in navbar</div>}>
        <Navbar/>
      </ErrorBoundary>      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
     </ThemeProvider>
    </>
  
  )
}

export default App
