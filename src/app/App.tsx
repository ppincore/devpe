import { Suspense } from 'react';
import { PageLoader } from '@widgets/PageLoader';
import { AppRouter } from '@app/providers/Router';
import { Content, Layout } from '@shared/ui/Layout';
import { Header } from '@widgets/Header';

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Layout>
        <Header />
        <Content className="page">
          <AppRouter />
        </Content>
      </Layout>
    </Suspense>
  );
}

export default App;
