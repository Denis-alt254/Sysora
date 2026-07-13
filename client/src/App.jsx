import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import LayoutShell from "./layout/layoutShell"
import Dashboard from "./pages/dashboard"

function App() {

  return (
    <LayoutShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </LayoutShell>
  )
}

export default App
