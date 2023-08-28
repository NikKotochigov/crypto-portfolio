import { QueryProvider } from "@/app/providers/"
import { ReactNode } from "react"

// import '../styles/globals.css'

interface IProps {
  children: ReactNode
}

const RootLayout: React.FC<IProps> = ({ children }) => {

  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}

export default RootLayout;