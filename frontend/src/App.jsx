import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import { ErrorBoundary } from "react-error-boundary";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'
import React from 'react'

const ColorModeContext = React.createContext({toggleColorMode : ()=>{}}) 

//if mode value changes , them value in palett changes
function App() {
  const [mode,setMode] = React.useState('light')
  const theme = React.useMemo(
    ()=>
      createTheme({
        palette:{
          mode,
        },
      }),
      [mode]
  );
  const colorMode = React.useMemo(
    ()=>({
        toggleColorMode:()=>{
            setMode((prevMode)=>(prevMode === 'light' ? 'dark':'light'))
        }
    }),
    [],
  );

  
  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ErrorBoundary fallback={<div>Something went wrong in navbar</div>}>
        <Navbar />
      </ErrorBoundary>      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
     </ThemeProvider>
     </ColorModeContext.Provider>
    </>
  
  )
}

export { ColorModeContext };
export default App