import 'bootstrap/dist/css/bootstrap.min.css';
import ExemploContexto from './components/ExemploContexto';
import Barcos from './components/Barcos'
import Praias from './components/Praias';
import Contatos from './components/Contatos';
import APIIntegration from './components/APIIntegration';
import { Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound'
import EditUserOnChange from './components/EditUserOnChange'
import LayoutDefault from './pages/LayoutDefault';
import LayoutDashboard from './pages/LayoutDashboard';
import AuthProvider from './providers/authProvider'
import Login from './components/Login';
import Jets from './components/Jets'
import SoloBoat from './components/SoloBoat';
import SoloPraia from './components/SoloPraia';
import SoloJet from './components/SoloJet';
import Admin from './components/Admin';
import EditBoat from './components/EditBoat';
import DeleteBoat from './components/DeleteBoat';
import AdminBoat from './components/AdminBoat'
import AdminJet from './components/Adminjet';
import AdminPraia from './components/AdminPraia';
import EditJet from './components/EditJet';
import DeleteJet from './components/DeleteJet';
import EditPraia from './components/EditPraia';
import DeletePraia from './components/DeletePraia';
import CadastraBarco from './components/CadastraBarco';
import LayoutDefaultAdmin from './pages/LayoutDefaultAdmin';
import CadastraPraia from './components/CadastraPraia';
import CadastraJet from './components/CadastraJet';




function App() {
  return (
      <div className="App">
       <AuthProvider>
            <Routes>
              <Route path="/" element={<LayoutDefault />}>
                <Route index element={<ExemploContexto/>} />
                <Route path="barcos" element={<Barcos />} />
                <Route path="jets" element={<Jets />} />
                <Route path="praia" element={<Praias />} />
                <Route path="contatos" element={<Contatos />} />
                <Route path="soloboat/:boatId"    element={<SoloBoat />} />
                <Route path="solopraia/:praiaId"  element={<SoloPraia />} />
                <Route path="solojet/:jetId"      element={<SoloJet />} />
              </Route>
            <Route path="/" element={<LayoutDefaultAdmin />}>
                <Route path="admin/"              element={<Admin/>} />
                <Route path="adminboat/"          element={<AdminBoat />} />
                <Route path="adminjet/"           element={<AdminJet />} />
                <Route path="adminpraia/"         element={<AdminPraia />} />
                <Route path="/editboat/:boatId"   element={<EditBoat />} />
                <Route path="/editjet/:jetId"     element={<EditJet />} />
                <Route path="/editpraia/:praiaId" element={<EditPraia />} />
                <Route path="/deleteboat/:boatId" element={<DeleteBoat />} />
                <Route path="/deletejet/:jetId"   element={<DeleteJet />} />
                <Route path="/deletepraia/:praiaId"   element={<DeletePraia />} />
                <Route path="/cadastrabarco/"   element={<CadastraBarco />} />
                <Route path="/cadastrapraia/"   element={<CadastraPraia />} />
                <Route path="/cadastrajet/"   element={<CadastraJet />} />
              </Route >

              {/* { <Route path='admin/login' element={<Login />} />
              <Route path='admin/' element={<LayoutDashboard />}> }
                    <Route index element={<APIIntegration />}/>
                    <Route path="edit/:userId" element={<EditUserOnChange />} /> */}

              <Route path="*" element={<NotFound />} />
            </Routes>
        </AuthProvider>
      </div>
  );
}

export default App;
