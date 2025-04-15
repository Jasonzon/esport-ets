import { Outlet } from "react-router"
import Navbar from "./Navbar"

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
