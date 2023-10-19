import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className='flex justify-center bg-gray-300'>{children}</body>
    </html>
  )
}
