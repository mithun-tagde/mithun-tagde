import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Mithun Tagde - Senior Software Engineer',
  description: 'Senior Software Engineer at Bentley Systems specializing in C++, iTwin, OpenGL, WebGL, DirectX, GLSL, HLSL, and CUDA',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Mithun Tagde - Senior Software Engineer</title>
        <meta name="description" content="Senior Software Engineer at Bentley Systems specializing in C++, iTwin, OpenGL, WebGL, DirectX, GLSL, HLSL, and CUDA" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
