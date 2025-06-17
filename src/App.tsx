import { useState } from 'react'
import './App.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
    setSubmitted(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page-container">
      <header className="header">
        <div className="logo">AppleMake</div>
        <nav className="nav" id="nav">
          <a href="#service">Сервисный центр</a>
          <a href="#guarantee">Гарантия</a>
          <a href="#delivery">Доставка и оплата</a>
          <a href="#bonus">Бонусная программа</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <button className="burger" onClick={() => document.getElementById('nav')?.classList.toggle('open')}>☰</button>
        <div className="messengers">
          <span aria-label="Telegram" role="img">\uD83D\uDCAC</span>
          <span aria-label="WhatsApp" role="img">\uD83D\uDCF1</span>
        </div>
      </header>

      <section className="hero">
        <h1>Сервисный центр техники Apple</h1>
        <h2>Собственная лаборатория. Первоклассные инженеры. Оригинальные запчасти.</h2>
        <button onClick={toggleModal}>Оставить заявку</button>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Бесплатная диагностика</h3>
          <p>Проверим устройство и назовем стоимость ремонта.</p>
        </div>
        <div className="feature">
          <h3>Честная гарантия</h3>
          <p>Гарантийные сроки фиксируются в документе.</p>
        </div>
        <div className="feature">
          <h3>Инженеры</h3>
          <p>Сложные поломки решают сертифицированные специалисты.</p>
        </div>
        <div className="feature">
          <h3>Комфорт</h3>
          <p>Уютный сервис и парковка для клиентов.</p>
        </div>
      </section>

      <section className="faq">
        <h2>FAQ</h2>
        <details>
          <summary>Какие устройства мы обслуживаем?</summary>
          <p>iPhone, iPad, Mac, Watch и другую технику Apple.</p>
        </details>
        <details>
          <summary>Как будет происходить обслуживание устройства?</summary>
          <p>После диагностики мы согласуем стоимость и сроки ремонта.</p>
        </details>
        <details>
          <summary>Как долго моё устройство будет на обслуживании?</summary>
          <p>Срок зависит от сложности поломки и наличия запчастей.</p>
        </details>
      </section>

      <section className="contact" id="contacts">
        <h2>Свяжитесь с нами</h2>
        <p>Телефон: <a href="tel:+79267776277">+7 (926) 777‑62‑77</a></p>
        <p>График работы: ежедневно 10:00–21:00</p>
        <p>Адрес: Москва, ул. Барклая 7 корп. 4</p>
        <p>Email: <a href="mailto:info@appletrade.ru">info@appletrade.ru</a></p>
        <button onClick={toggleModal}>Оставить заявку</button>
      </section>

      <footer className="footer">
        <nav>
          <a href="#service">Сервисный центр</a>
          <a href="#guarantee">Гарантия</a>
          <a href="#delivery">Доставка и оплата</a>
          <a href="#bonus">Бонусная программа</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className="messengers">
          <span aria-label="Telegram" role="img">\uD83D\uDCAC</span>
          <span aria-label="WhatsApp" role="img">\uD83D\uDCF1</span>
        </div>
        <p className="legal">AppleMake не является авторизованным сервисным центром Apple. Все товарные знаки принадлежат их правообладателям.</p>
      </footer>

      {modalOpen && (
        <div className="modal" role="dialog">
          <div className="modal-content">
            <button className="close" onClick={toggleModal}>×</button>
            {submitted ? (
              <p className="success">Спасибо! Ваша заявка принята.</p>
            ) : (
              <form onSubmit={handleSubmit} className="form">
                <h3>Заявка на обслуживание</h3>
                <label>
                  ФИО
                  <input type="text" required />
                </label>
                <label>
                  Телефон
                  <input type="tel" required />
                </label>
                <label>
                  Способ связи
                  <select>
                    <option value="wa">WhatsApp</option>
                    <option value="tg">Telegram</option>
                    <option value="call">Перезвонить</option>
                  </select>
                </label>
                <label>
                  Тип устройства
                  <input type="text" />
                </label>
                <label>
                  Описание неисправности
                  <textarea rows={3}></textarea>
                </label>
                <label className="policy">
                  <input type="checkbox" required /> Я согласен с обработкой персональных данных
                </label>
                <button type="submit">Отправить</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
