import './App.css'
import useRouterElements from './useRouterElements'

function App() {
  // import hook routes
  const routerElements = useRouterElements()
  return <div>{routerElements}</div>
}

export default App
