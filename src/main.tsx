import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from '@app/providers/ErrorBoundary';
import { StoreProvider } from '@app/providers/StoreProvider/ui/StoreProvider.tsx';
import { BrowserRouter } from 'react-router-dom';
import '@app/styles/index.scss';
import App from '@app/App';
import '@shared/config/i18n/i18n';

const container = document.getElementById('root');
if (!container) {
  throw new Error('root container not found');
}
const rootContainer = createRoot(container);

rootContainer.render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <StoreProvider>
          <App />
        </StoreProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
