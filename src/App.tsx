import './App.css'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Introduction } from './components/Introduction'
import { Projects } from './components/Projects'
import { Publications } from './components/Publications'
import { Skills } from './components/Skills'

function App() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <Introduction />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Publications />
        <Footer />
      </main>
    </>
  )
}

export default App
