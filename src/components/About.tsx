import { useState } from 'react'

const principles = [
  {
    label: 'Досліджуємо',
    title: 'Спочатку слухаємо.',
    description: 'Знайомимося з потребами людей і контекстом, перш ніж обирати рішення.',
  },
  {
    label: 'Проєктуємо',
    title: 'Менше шуму — більше сенсу.',
    description: 'Будуємо зрозумілий досвід, у якому кожен елемент має свою роль.',
  },
  {
    label: 'Створюємо',
    title: 'Перетворюємо ідеї на дію.',
    description: 'Розробляємо, перевіряємо й покращуємо продукт крок за кроком.',
  },
]

function About() {
  const [activePrinciple, setActivePrinciple] = useState(0)
  const principle = principles[activePrinciple]

  return (
    <section className="page-card" aria-labelledby="about-title">
      <span className="eyebrow">Наша історія</span>
      <h1 id="about-title">Це сторінка про нас</h1>
      <p>Ми створюємо прості та зрозумілі цифрові рішення, зосереджені на людях.</p>

      <div className="interactive-box principles-box">
        <div className="principle-tabs" role="group" aria-label="Наші принципи">
          {principles.map((item, index) => (
            <button
              key={item.label}
              className={activePrinciple === index ? 'principle-tab selected' : 'principle-tab'}
              type="button"
              aria-pressed={activePrinciple === index}
              onClick={() => setActivePrinciple(index)}
            >
              <span className="principle-number">0{index + 1}</span>
              {item.label}
            </button>
          ))}
        </div>
        <div className="principle-detail" aria-live="polite">
          <h2>{principle.title}</h2>
          <p>{principle.description}</p>
        </div>
      </div>
    </section>
  )
}

export default About
