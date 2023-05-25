import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,

} from "react-router-dom";
import { Contact, Home, Login, Register } from './pages';
import { Footer, Gallery, Header } from './layouts';


const App = () => {
  // FAKE FUNCTION TO PROTECT THE ROUTE BEFORE THE BACKEND IMPLEMENTATION
  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <Header />
        <Outlet />
        <Gallery />
        <Footer />
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    // if the user does not log in, the page will remain on the logging page ,if yes , go to the home page buy returning children
    // so children is the layout
    return (!currentUser)
      ? <Navigate to='/login' />
      : children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute >
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: 'register',
      element: <Register />
    }

  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;