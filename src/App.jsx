import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from "./routes/router";
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <>
      {/* one global toast configuration which wil pesisit the re-renders accroess the pages */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: { background: '#363636', color: '#fff' },
        }}
      />
      <RouterProvider router={router} />
    </>
  )
}

export default App

