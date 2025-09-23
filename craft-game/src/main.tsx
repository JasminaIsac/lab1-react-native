import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import InventoryProvider from '@contexts/inventory/InventoryProvider';
import { CraftProvider } from '@contexts/craft/CraftProvider';
import { DiscoveredRecipesProvider } from '@contexts/discovered/DiscoveredRecipesProvider';
import { ThemeProvider } from '@contexts/theme/ThemeProvider';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
        <InventoryProvider>
          <DiscoveredRecipesProvider>
            <CraftProvider>
              <App />
            </CraftProvider>
          </DiscoveredRecipesProvider>
        </InventoryProvider>
    </ThemeProvider>
  </StrictMode>,
)
