import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from './styles/theme';
import { AuthProvider, ProtectedRoute } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import About from './pages/About';
import CreateRecipe from './pages/CreateRecipe';
import RecipeDetails from './pages/RecipeDetails';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import RecipesList from './components/recipe/RecipeList';
import CollectionsPage from './pages/CollectionsPage';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/profile"
                element={
                  <>
                    <Navbar />
                    <Box component="main" sx={{ flexGrow: 1 }}>
                      <Profile />
                    </Box>
                    <Footer />
                  </>
                }
              />
              <Route
                path="/recipes"
                element={
                  <>
                    <Navbar />
                    <Box component="main" sx={{ flexGrow: 1 }}>
                      <RecipesList />
                    </Box>
                    <Footer />
                  </>
                }
              />
              <Route
                path="/edit-profile"
                element={
                  <>
                    <Navbar />
                    <Box component="main" sx={{ flexGrow: 1 }}>
                      <EditProfile />
                    </Box>
                    <Footer />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    <Navbar />
                    <Box component="main" sx={{ flexGrow: 1 }}>
                      <About />
                    </Box>
                  </>
                }
              />
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <Box component="main" sx={{ flexGrow: 1 }}>
                      <Home />
                    </Box>
                    <Footer />
                  </>
                }
              />
              <Route
                path="/create-recipe"
                element={
                  <>
                    <Navbar />
                    <Box component="main" sx={{ flexGrow: 1 }}>
                      <CreateRecipe />
                    </Box>
                    <Footer />
                  </>
                }
              />
              <Route
                path="/recipe/:id"
                element={
                  <>
                    <Navbar />
                    <Box component="main" sx={{ flexGrow: 1 }}>
                      <RecipeDetails />
                    </Box>
                    <Footer />
                  </>
                }
              />
              <Route
                path="/collections"
                element={
                  <>
                    <Navbar />
                    <Box component="main" sx={{ flexGrow: 1 }}>
                      <CollectionsPage />
                    </Box>
                    <Footer />
                  </>
                }
              />
              <Route
                path="/category/:title"
                element={
                  <>
                    <Navbar />
                    <Box component="main" sx={{ flexGrow: 1 }}>
                      <CategoryPage />
                    </Box>
                    <Footer />
                  </>
                }
              />
            </Routes>
            <ToastContainer />
          </Box>
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;