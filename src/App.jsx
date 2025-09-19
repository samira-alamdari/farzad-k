
import './index.css';
import './assets/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Projects from './Pages/Projects.jsx';
import ProjectSingle from './Pages/ProjectSingle';
import Article from './Pages/Article.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import { Navigation } from './Components/Navigation.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { Footer } from './Components/Footer.jsx';
import { ResumeModal } from './Components/ResumeModal';
import { ResumeModalProvider } from './context/ResumeModalContext';
export default function App() {
  return (
    <Provider store={store}>
    <ResumeModalProvider>
      <BrowserRouter>
        <div className="w-full overflow-hidden relative min-h-screen">
          <ResumeModal />
          <Navigation />
          <div className="div.w-full overflow-hidden mt-[64px] lg:mt-[80px]"></div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/Projects/:Id" element={<ProjectSingle />}></Route>
            <Route path="/Article" element={<Article />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ResumeModalProvider>
  </Provider>
  )
}