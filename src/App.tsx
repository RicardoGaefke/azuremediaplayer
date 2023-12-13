import { useState } from 'react'
import { Box } from 'grommet'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoAzureMediaPlayer from './AzureMediaPlayer/VideoAzureMediaPlayer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box
      direction="column"
      gap="small"
      fill
    >
      <Box>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </Box>
      <Box>
        <VideoAzureMediaPlayer
          videoUrl="https://global-media.pragmaticworkstraining.com/22d3c0e3-24e5-4eed-a694-6215b47df482/44052e68-0d68-437a-981d-ae9f6930.ism/manifest(format=m3u8-aapl)"
          videoGuid="guid"
          videoToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cm46bWljcm9zb2Z0OmF6dXJlOm1lZGlhc2VydmljZXM6Y29udGVudGtleWlkZW50aWZpZXIiOiJjNDJiMGRlNC03MzA0LTRlMmYtODFjYS1hZjkzMTg0NzliZDYiLCJuYmYiOjE3MDA1ODQyNTYsImV4cCI6MTcwMzE3NjMxNiwiaXNzIjoiaHR0cHM6Ly9icmVha2Rvd24ubWUiLCJhdWQiOiJCcmVha2Rvd25Vc2VyIn0.VaFfl-dunfT8tmbUH-pfUg2YKIHrMV5FwryP4Js8xM4"
        />
      </Box>
    </Box>
  )
}

export default App
