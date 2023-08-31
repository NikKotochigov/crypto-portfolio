import "@/styles/globals.css"

import { QueryProvider } from "@/app/providers/"
import { Header } from "@/components/Header"
import Layout from "@/components/ui/Layout/Layout"
import { ReactNode } from "react"

interface IProps {
  children: ReactNode
}

const RootLayout: React.FC<IProps> = ({ children }) => {

  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <Header />
          <div className="pt-4">ggg</div>
          {/* <Layout> */}
            {children}
          {/* </Layout> */}
        </QueryProvider>
      </body>
    </html>
  )
}

export default RootLayout;