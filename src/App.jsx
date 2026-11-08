import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

// Importando componentes reutilizáveis
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import { inscricoesAbertas } from './data/edicoes';
import Home from './pages/Home';
import Categorias from './pages/Categorias';
import Vencedores from './pages/Vencedores';
import Regulamento from './pages/Regulamento';
import RegulamentoIntegra from './pages/RegulamentoIntegra';
import Contato from './pages/Contato';
import Finalistas from './pages/Finalistas';
import NaMidia from './pages/NaMidia';
import Pratica from './pages/Pratica';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
//import Galeria from './pages/Galeria';



function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          {/* APENAS A ROTA HOME ESTÁ ATIVA */}
          <Route path="/" element={<Home />} />
          
          
          <Route path="/categorias" element={<Categorias />}/>
          <Route path="/vencedores" element={<Vencedores />} />
          <Route path="/vencedores/:ano/:slug" element={<Pratica />} />
          {/* <Route path="/galeria" element={<Galeria />} /> */}
          <Route path="/regulamento" element={<Regulamento />} />
          <Route path="/regulamento-integra" element={<RegulamentoIntegra />} />
          <Route path="/programacao" element={<Finalistas />} />
          <Route path="/finalistas" element={<Finalistas />} />
          <Route path="/participantes" element={<Navigate to="/vencedores" replace />} />
          <Route path="/na-midia" element={<NaMidia />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
      {inscricoesAbertas && <FloatingCTA />}
    </Box>
  );
}

export default App;