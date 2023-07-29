import AccountLayout from './layouts/account'
import Login from './pages/login'
import ProductList from './pages/productList'
import Register from './pages/register/Register'
import { useRoutes } from 'react-router-dom'

export default function useRouterElements() {
  // hook routes
  const routerElements = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/login',
      element: (
        <AccountLayout>
          <Login />
        </AccountLayout>
      )
    },
    {
      path: '/register',
      element: (
        <AccountLayout>
          <Register />
        </AccountLayout>
      )
    }
  ])
  return routerElements
}
