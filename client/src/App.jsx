import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import LayoutShell from "./layout/layoutShell"

function App() {

  return (
    <LayoutShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </LayoutShell>
  )
}

export default App
