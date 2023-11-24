import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RespondentPage } from './pages/RespondenPage';
import { RespondentFormPage } from './pages/RespondentFormPage';
import { Navigation } from "./components/navigation";
import { Toaster } from "react-hot-toast";
import Instructive from './pages/instructive';
import Layout from './components/layout';  // Agrega la importación de Layout
import Header from './pages/Header';
import Censo from './pages/Censo';
import Census from './pages/CensusForm';
import Contact from './pages/Contact';
import LoginForm from './pages/LoginForm'
import Form from './pages/Formulario'
import FormPersona from  './pages/CensusFormPersonas'



function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/respondent" element={<Layout><RespondentPage /></Layout>} />
        <Route path="/respondent-create" element={<Layout><RespondentFormPage /></Layout>} />
        <Route path="/respondent/:id" element={<Layout><RespondentFormPage /></Layout>} />
        <Route path="/" element={<Navigate to='/respondent' />} />
        <Route path="/instructivo" element={<Instructive />} />
        <Route path="/header" element={<Header />} />
        <Route path="/censo" element={<Censo />} />
        <Route path="/form" element={<Census />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/form" element={<Census />} />
        <Route path="/formi" element={<Form />} />
        <Route path="/formp" element={<FormPersona />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
