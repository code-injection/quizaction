import { ReactNode } from "react"

import Navbar from "./Navbar"

interface Props {
  children: ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <main>
      <Navbar />
      <div>{children}</div>
    </main>
  )
}

export default Layout
