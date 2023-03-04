import "./globals.css"

import { Poppins } from "@next/font/google"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"

import Layout from "../components/Layout"

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "400", "700"] })

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <main className={poppins.className}>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>
    </main>
  )
}
