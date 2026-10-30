import { useState } from 'react'

const ideas = [
  'Маленький крок сьогодні — це великий результат завтра.',
  'Найкращий інтерфейс той, який допомагає, а не відволікає.',
  'Спробуй подивитися на звичну задачу під новим кутом.',
]

function Home() {
  const [ideaIndex, setIdeaIndex] = useState(0)

  return (
    <section className="page-card" aria-labelledby="home-title">
      <span className="eyebrow">Вітаємо</span>
      <h1 id="home-title">Це домашня сторінка</h1>
      <p>Раді бачити вас на нашому сайті. Скористайтеся меню, щоб дізнатися більше.</p>

      <div className="interactive-box idea-box">
        <div className="idea-copy">
          <span className="interaction-kicker">КРАПКА НАТХНЕННЯ</span>
          <p className="idea-text" aria-live="polite">{ideas[ideaIndex]}</p>
        </div>
        <button
          className="action-button"
          type="button"
          onClick={() => setIdeaIndex((current) => (current + 1) % ideas.length)}
        >
          Ще ідею <span aria-hidden="true">↗</span>
        </button>
      </div>
    </section>
  )
}

export default Home
