import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './createTrip/index.jsx' // Import CreateTrip component
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import About from './About/About.jsx'
import Contact from './Contact/contact.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }, {
    path: '/create-trip',
    element: <CreateTrip />,
  }, {
    path: '/about',
    element: <About />,
  }, {
    path: '/contact',
    element: <Contact />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </GoogleOAuthProvider>
  </StrictMode>,
)