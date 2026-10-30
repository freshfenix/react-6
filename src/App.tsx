import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
  type RouteObject,
} from 'react-router'
import type { ReactNode } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import './App.css'

type PageConfig = {
  path: string
  label: string
  element: ReactNode
}

const pages: PageConfig[] = [
  { path: '/', label: 'Головна', element: <Home /> },
  { path: '/about', label: 'Про нас', element: <About /> },
  { path: '/contact', label: 'Контакти', element: <Contact /> },
]

function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" end aria-label="РеактПростір — головна">
          <span className="brand-mark" aria-hidden="true">R</span>
          <span className="brand-name">Реакт<span>Простір</span></span>
        </NavLink>
        <nav className="main-nav" aria-label="Головна навігація">
          {pages.map((page, index) => (
            <NavLink
              key={page.path}
              to={page.path}
              end={page.path === '/'}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              <span className="nav-index">0{index + 1}</span>
              {page.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="main-content">
        <div className="section-label"><span className="status-dot" /> ІНТЕРАКТИВНИЙ ПРОСТІР</div>
        <Outlet />
      </main>

      <footer className="site-footer">
        <span>Навчальний проєкт</span>
        <span className="footer-divider" aria-hidden="true">✳</span>
        <span>React · TypeScript · React Router</span>
      </footer>
    </div>
  )
}

function NotFoundPage() {
  return (
    <section className="page-card not-found-card" aria-labelledby="not-found-title">
      <span className="eyebrow">ПОМИЛКА 404</span>
      <h1 id="not-found-title">Цей маршрут ще не відкрито.</h1>
      <p>
        Схоже, такої сторінки немає.{' '}
        <NavLink to="/">Повернутися на головну</NavLink>
      </p>
    </section>
  )
}

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      ...pages.map(({ path, element }): RouteObject => ({ path, element })),
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
