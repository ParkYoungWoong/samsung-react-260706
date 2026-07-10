import { createBrowserRouter, RouterProvider } from 'react-router'
import Default from './layouts/Default'
import Dashboard from './layouts/Dashboard'

import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import Todos from './pages/Todos'
import DashboardIndex from './pages/dashboards/Index'
import Stores from './pages/dashboards/Stores'
import Map from './pages/dashboards/Map'

import { requiresAuth, guestOnly, fetchMovieDetails } from './loaders'
import Loader from '@/components/Loader'
import { dynamic } from './dynamic'

const About = dynamic(() => import('./pages/About'), {
  loading: <Loader />
})
const NotFound = dynamic(() => import('./pages/NotFound'))
const SignIn = dynamic(() => import('./pages/SignIn'))

const router = createBrowserRouter([
  {
    element: <Default />,
    children: [
      {
        path: '/', // http://localhost:5173
        element: <Home />
      },
      {
        path: '/about', // http://localhost:5173/about
        element: <About />
      },
      // {
      //   path: '/movies', // http://localhost:5173/movies
      //   loader: requiresAuth,
      //   element: <Movies />
      // },
      // {
      //   path: '/movies/:movieId', // http://localhost:5173/movies/tt12345678
      //   loader: fetchMovieDetails,
      //   element: <MovieDetails />
      // },
      {
        loader: requiresAuth,
        children: [
          {
            path: '/movies', // http://localhost:5173/movies
            element: <Movies />,
            children: [
              {
                path: '/movies/:movieId', // http://localhost:5173/movies/tt12345678
                loader: fetchMovieDetails,
                element: <MovieDetails />
              }
            ]
          },
          {
            path: '/todos',
            element: <Todos />
          },
          {
            element: <Dashboard />,
            children: [
              {
                path: '/dashboard',
                element: <DashboardIndex />
              },
              {
                path: '/dashboard/stores',
                element: <Stores />
              },
              {
                path: '/dashboard/map',
                element: <Map />
              }
            ]
          }
        ]
      },
      {
        path: '/signin',
        loader: guestOnly,
        element: <SignIn />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
