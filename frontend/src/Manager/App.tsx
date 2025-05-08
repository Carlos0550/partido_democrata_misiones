import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppContextProvider } from './Context/AppContext'
import Administration from './Administration/Administration'
import LoginManager from './Authentication/LoginManager'
import { MantineProvider } from '@mantine/core'

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

function App() {
  return (
    <BrowserRouter basename='/'>
        <MantineProvider>
        <AppContextProvider>
            <Routes>
                <Route path='admin-dashboard/*' element={<Administration/>}/>
                <Route path='authentication' element={<LoginManager/>}/>
            </Routes>
        </AppContextProvider>
        </MantineProvider>
    </BrowserRouter>
  )
}

export default App
