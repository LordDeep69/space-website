import React, { useEffect, useState } from 'react'
import './home.scss'
import { getCrew } from '../../services/crewService'
import { fondo } from '../../services/fondosServices'
import Header from '../../components/header/Header'
import useScreenSize from '../../hooks/useScreenSize'
const Home = () => {

    const responsive = useScreenSize();
    const [listImg, setListImg] = useState(responsive.width > 768 ? fondo.desktop : (responsive.width > 375 ? fondo.tablet : fondo.mobile));
    const [previousWidth, setPreviousWidth] = useState(0);


    useEffect(() => {


      if (previousWidth <= 768 && responsive.width > 768) {
        
        setListImg(fondo.desktop);

      } 
      else if ((previousWidth > 768 || previousWidth<=375) && responsive.width <= 768 &&  responsive.width > 375) {
        
        setListImg(fondo.tablet);


      }
      else if (previousWidth > 375 && responsive.width <= 375)
      {
        setListImg(fondo.mobile);


      }
      setPreviousWidth(responsive.width);
    }, [responsive.width]);


  return (
    <div className="home" style={{ backgroundImage: `url(${listImg}`}}>
    <Header />
    <div className='home__down'>
        <div className="home__content">
          <h2 className="home__title-small">SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className="home__title-big">SPACE</h1>
          <p className="home__text-small">
            Let’s face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it. Well sit back,
            and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className="home__explore">
          <span className="home__explore__text">EXPLORE</span>
        </div>
    </div>

  </div>
  )
}

export default Home;