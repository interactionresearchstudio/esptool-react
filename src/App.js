import { useState } from 'react'
import './App.css'

function App() {
  const [manifest, setManifest] = useState('')

  const onManifestInputChange = (e) => {
    setManifest(e.target.value)
  }

  return (
    <div className="App">
      <form>
        <label>
          Manifest URL: 
        </label>
        <input type='text' name='manifest' value={manifest} onChange={onManifestInputChange} placeholder='Manifest URL'/>
      </form>
      <esp-web-install-button
        manifest={manifest}
      ></esp-web-install-button>
    </div>
  );
}

export default App;
