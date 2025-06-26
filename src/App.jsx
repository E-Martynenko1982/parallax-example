import React from 'react'
import ParallaxComponent from './components/Parallax/ParallaxComponent'
import './App.css'

function App() {

  return (
    <div className="App">
      <ParallaxComponent />
      <div className="content-after-parallax">
        <h2>Прокрути ще!</h2>
        <p>
          Як бачиш, ефект паралаксу створює відчуття глибини та динаміки на сторінці.
          Це досягається шляхом різної швидкості руху фону та об'єктів на передньому плані.
          Ти можеш легко змінювати швидкість, коригуючи коефіцієнти в файлі `ParallaxComponent.jsx`.
        </p>
        <p>
          Спробуй змінити значення `0.5` для фону або `0.8` для переднього плану, щоб побачити,
          як зміниться поведінка. Чим менше значення, тим повільніше рухається елемент.
        </p>
      </div>
    </div>
  )
}

export default App
