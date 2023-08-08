import './App.css';
import heroPNG from './images/hero.png'
import {images} from './images'
import RadialGradient from './components/RadialGradient';
import AboutPng from './images/about.png'
import {story, work_exp} from './data'
import instPNG from './images/insta.png'
import whatsappPNG from './images/whatsapp.png'

function App() {
  return (
    <div className="App">
      <RadialGradient/>
      <div className='header'>
          <a className='header_link' href='#portfolio'>Портфолио</a>
          <a className='header_link' href='#about'>Обо мне</a>
          <a className='header_link' href='#contact'>Контакты</a>
      </div>
      <div className='hero'>
        <h1 className='hero_name'>MIRAS_TL</h1>
        <img src={heroPNG} alt='' className='hero_img'/>
      </div>
      <div className='container'>
        <h1 className='section_header' id='portfolio'>ПОРТФОЛИО</h1>
        <div className='portfolio_grid'>
          <div className='decor1 decor'></div><div className='decor2 decor'></div><div className='decor3 decor'></div><div className='decor4 decor'></div><div className='decor5 decor'></div><div className='decor6 decor'></div>
          {images.map((img, indx) => 
            <img src={img} alt='' className={`portfolio_img ${indx % 3 === 0 ? null : 'glowing'}`}  style={{flexGrow: indx % 2 === 0 ? '1' : '1', maxWidth: '60%'}}/>  
          )}
        </div>
      </div>
      <div className='container'>
        <h1 className='section_header' id='about'>ОБО МНЕ</h1>
        <div className='about'>
            <img src={AboutPng} alt='' className='about_img'/>
            <div className='about_main_info'>
              <h1 className='about_header'>Имя <h4 className='about_txt'>Мирас Тлеугазиев</h4></h1>
              <h1 className='about_header'>Дата рождения <h4 className='about_txt'>2004.05.18</h4></h1>
              <h1 className='about_header'>Гражданство <h4 className='about_txt'>Казахстан</h4></h1>
              <h1 className='about_header'>Проживает <h4 className='about_txt'>г. Алматы</h4></h1>
            </div>
        </div>
        <div className='about_section'>
          <div className='story'>
            <h1 className='about_section_header'>Опыт работы</h1>
            <p className='about_section_txt'>{work_exp}</p>
          </div>
          <div className='work_exp'>
            <h1 className='about_section_header'>Моя история</h1>
            <p className='about_section_txt'>{story}</p>
          </div>
        </div>
        <h1 className='section_header' id='contact'>КОНТАКТЫ</h1>
        <h5 className='contact'>Телефон:  +7 747 526 43 95</h5>
        <h5 className='contact'>Email:  example.info@gmail.com</h5>
        <div className='links'>
            <img src={instPNG} alt=''/>
            <img src={whatsappPNG} alt=''/>
        </div>
      </div>
      <div className='bar'></div>
    </div>
  );
}

export default App;
