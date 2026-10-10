
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import Galaxy from './components/galaxy/GalaxyBackground'
import './i18n'
import '@fontsource/geist-sans/400.css'
import '@fontsource/geist-sans/600.css'
import '@fontsource/geist-sans/700.css'

function App() {
  return (
    <div className="min-h-screen text-foreground flex flex-col">
      <Galaxy />
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <Hero />
        <Profile />
        <Skills />
        <Experience />
        <Education />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
