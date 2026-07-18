import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import LayoutShell from "./layout/layoutShell"
import Dashboard from "./pages/dashboard"
import {ReactFlowProvider} from '@xyflow/react';
import DesignerCanvas from "./pages/design"
import Pricing from "./pages/pricing";

function App() {

  return (
    <LayoutShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/design" element={
          <ReactFlowProvider>
            <DesignerCanvas />
          </ReactFlowProvider>
        } />
      </Routes>
    </LayoutShell>
  )
}

export default App
