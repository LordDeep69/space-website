import React, { useEffect, useState } from 'react'
import './technology.scss'
import Header from '../../components/header/Header'
import useScreenSize from '../../hooks/useScreenSize';
import { fondoTechnology } from '../../services/fondosServices';
import { getTechnologies } from '../../services/technology';
import { useNavigate, useParams } from 'react-router-dom';
const Technology = () => {
    
    const fondo = fondoTechnology;
    const responsive = useScreenSize();
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [listImg, setListImg] = useState(responsive.width > 768 ? fondo.desktop : (responsive.width > 375 ? fondo.tablet : fondo.mobile));


    const [info, setInfo] = useState({})
    const [imageTechnology, setImageTechnology] = useState('')
    const {idTechnology} = useParams();
    useEffect(() => {
        const getInfo = async () => {

            const response = await getTechnologies(idTechnology);
            setInfo(response);   
            responsive.width > 768 ? setImageTechnology(response.images.portrait) : setImageTechnology(response.images.landscape);
                     
        }
        getInfo()
    }, [idTechnology, responsive.width])


    const navigate = useNavigate();
    const hanleTechnology = (index, route) => 
    {
      setSelectedNumber(index);
      navigate(route);
    } 
  return (
    <div  className="technology" style={{ backgroundImage: `url(${listImg}`}}>

        <Header/>
        <div>
              <div className="destination__tittle textTechnology">
                        <span className="destination__number">03</span>
                        <span className="destination__text">SPACE LAUNCH 101</span>
              </div>

              
        </div>

        
        <section className='technology__container'>


            <section>
                {
                  responsive.width <= 768 && 
                  (
                    <figure className='technology__figure'>
                      <img className='technology__img' src={imageTechnology} alt="Technology" />
                    </figure>
                  )
                }

                
                
                <div className="number-container">
                    <div
                      className={`circle-number ${selectedNumber === 1 ? 'selected' : ''}`}
                      onClick={() => hanleTechnology(1, `/Technology/2`)}
                    >
                      <span>1</span>
                    </div>
                    <div
                      className={`circle-number ${selectedNumber === 2 ? 'selected' : ''}`}
                      onClick={() => hanleTechnology(2, `/Technology/3`)}
                    >
                      <span>2</span>
                    </div>
                    <div
                      className={`circle-number ${selectedNumber === 3 ? 'selected' : ''}`}
                      onClick={() => hanleTechnology(3, `/Technology/4`)}
                    >
                      <span>3</span>
                    </div>
              </div>

              <section className='technology__info'>

                <span className='TERMINOLOGY'>THE TERMINOLOGY...</span>
                <span className='technology__name'>{info.name}</span>
                <p className='description'>{info.description}</p>

              </section>

              
                {
                  
                    responsive.width > 768 && 
                    (
                      <section>
                        <figure className='technology__figure'>
                          <img className='technology__img' src={imageTechnology} alt="Technology" />
                        </figure>
                        </section>
                    )
                  }
              



            </section>

        </section>

    </div>
  )
}

export default Technology