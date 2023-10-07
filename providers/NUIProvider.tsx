"use client"

import { NextUIProvider } from "@nextui-org/react"

const NUIProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>
}

export default NUIProvider
