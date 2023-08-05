import React, { useEffect, useState } from 'react'
import './destination.scss'
import Header from '../../components/header/Header'
import useScreenSize from '../../hooks/useScreenSize';
import { fondoDestinations } from '../../services/fondosServices';
import {useNavigate, useParams } from 'react-router-dom';
import { getDestination } from '../../services/destinationsService';
const Destination = () => {

    const fondo = fondoDestinations;
    const responsive = useScreenSize();
    const [listImg, setListImg] = useState(responsive.width > 768 ? fondo.desktop : (responsive.width > 375 ? fondo.tablet : fondo.mobile));
    const [previousWidth, setPreviousWidth] = useState(0);

    const [info, setInfo] = useState({})
    const [imageDestination, setimageDestination] = useState('')
    const {idDestination} = useParams();
    useEffect(() => {
        const getInfo = async () => {
            const response = await getDestination(idDestination);
            setInfo(response);
            setimageDestination(response.images.png);
        }
        getInfo()
    }, [idDestination])

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

    const names = ['MOON', 'MARS', 'EUROPA', 'TITAN'];
    const [selectedName, setSelectedName] = useState(names[0]);
    const navigate = useNavigate();
    const handleNameClick = (name, route) => {
    setSelectedName(name);
    navigate(route);
    

   

    };



  return (
    <div className="destination" style={{ backgroundImage: `url(${listImg}`}}>

        <Header/>

        {/* Contenedor1 */}
    

    <section className='sectionContainer'>

      <section className='sectionLeft'>

            <div className="destination__tittle">
                <span className="destination__number">01</span>
                <span className="destination__text">PICK YOUR DESTINATION</span>
            </div>

            <figure className='destination__figure'>
                <img className = "destination__img" src={`${imageDestination}`} alt="destination" />
            </figure>

      </section>

      <section className='sectionRight'>

            <nav className='destination__nav'>

                <div className="destination__destinations">
                {names.map((name, index) => (
                    <div
                    key={name}
                    className="name"
                    onClick={() => handleNameClick(name, `/Destination/${index+2}`)}
                    >
                    {name}
                    { index == (idDestination-2) && <div className="selected-line"></div>}
                    </div>
                ))}
                </div>

            </nav>

                      
            
            <div className='divName'>
                <h1 className='destination__name'>{info.name}</h1>
            </div>
            
            <div className='divNe'>
                <p>{info.description}</p>
            </div>
            
            <div className='divNe'>
                <span className='destination__line'></span>

            </div>


            <section className='footer'>
                <div className='divNe' >
                    <div className='destination__data'>
                        <span className='distance'>AVG. DISTANCE</span>
                        <span className='distanceDate'>{info.distance}</span>
                    </div>
                </div>

                <div className='divNe'>
                    <div className='destination__time'>
                        <span className='time'>EST. TRAVEL TIME</span>
                        <span className='distanceTime'>{info.travel}</span>
                    </div>
                </div>
            </section>
      </section>
    </section>








    </div>
  )
}

export default Destination