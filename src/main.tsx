import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import './index.css'
import Home from "./components/Home"
import Timeline from "./components/Timeline"
import Sponsors from './components/Sponsors'
import Layout from './components/Layout'

createRoot(document.getElementById('root')!).render(
  <div className="font-nimbus">
    <BrowserRouter basename="/esport-ets/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>,
)