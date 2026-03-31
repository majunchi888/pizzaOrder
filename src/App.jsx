import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './ui/Home.jsx'
import Error from './ui/Error.jsx'
import Menu, { loader as menuLoader } from './feature/menu/Menu.jsx'
import Cart from './feature/cart/Cart.jsx'
import CreateOrder, {
  action as createOrderAction,
} from './feature/order/CreateOrder'
import Order, { loader as orderLoader } from './feature/order/Order.jsx'
import AppLayout from './ui/AppLayout.jsx'
import { action as UpdateOrderAction } from './feature/order/UpdateOrder'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: UpdateOrderAction,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
