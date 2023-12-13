import { Box } from 'grommet'
import VideoAzureMediaPlayer from './AzureMediaPlayer/VideoAzureMediaPlayer';
import './App.css'

const App = (): JSX.Element => (
  <Box>
    <VideoAzureMediaPlayer
      videoUrl="https://global-media.pragmaticworkstraining.com/22d3c0e3-24e5-4eed-a694-6215b47df482/44052e68-0d68-437a-981d-ae9f6930.ism/manifest(format=m3u8-aapl)"
      videoGuid="guid"
      videoToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cm46bWljcm9zb2Z0OmF6dXJlOm1lZGlhc2VydmljZXM6Y29udGVudGtleWlkZW50aWZpZXIiOiJjNDJiMGRlNC03MzA0LTRlMmYtODFjYS1hZjkzMTg0NzliZDYiLCJuYmYiOjE3MDA1ODQyNTYsImV4cCI6MTcwMzE3NjMxNiwiaXNzIjoiaHR0cHM6Ly9icmVha2Rvd24ubWUiLCJhdWQiOiJCcmVha2Rvd25Vc2VyIn0.VaFfl-dunfT8tmbUH-pfUg2YKIHrMV5FwryP4Js8xM4"
    />
  </Box>
);

export default App;
