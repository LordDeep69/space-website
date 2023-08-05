import React, { useEffect, useState } from 'react'
import './crew.scss'
import Header from '../../components/header/Header'
import useScreenSize from '../../hooks/useScreenSize';
import { fondoCrew } from '../../services/fondosServices';
import { useNavigate, useParams } from 'react-router-dom';
import { getCrew } from '../../services/crewService';
import ovalWhite  from '../../assets/crew/OvalWithe.png' 
import oval  from '../../assets/crew/oval.png' 

const Crew = () => {

  const [selectedImage, setSelectedImage] = useState(null);

    const fondo = fondoCrew;
    const responsive = useScreenSize();
    const [listImg, setListImg] = useState(responsive.width > 768 ? fondo.desktop : (responsive.width > 375 ? fondo.tablet : fondo.mobile));

    const [info, setInfo] = useState({})
    const [imageCrew, setimageDestination] = useState('')
    const {idCrew} = useParams();
    useEffect(() => {
        const getInfo = async () => {
            const response = await getCrew(idCrew);
            setInfo(response);
            setimageDestination(response.images.png);
        }
        getInfo()
    }, [idCrew])


    

    const navigate = useNavigate();

    const  handleNameClick = (id, route) => 
    {
      setSelectedImage(`oval${id + 1}`)
      navigate(route);
    }

  return (
    <div  className="crew" style={{ backgroundImage: `url(${listImg}`}}>
        
        <Header/>

        <section className='crew__container'>

            <section className='crew__left'>

                <div className="destination__tittle textCrew">
                    <span className="destination__number">02</span>
                    <span className="destination__text">MEET YOUR CREW</span>
                </div>

                {responsive.width <= 375 && 
                  (
                    <figure className='crew__figure'>
                      <img className='crew__img' src={`${imageCrew}`} alt="Crew" />
                    </figure>
                  )
                }

                {((responsive.width > 375 && responsive.width <=768) || responsive.width >768 ) && 
                  (
                    <section className='infoDate'>

                    <span className='role'>{info.role} </span>
                    <span className='namePerson'>{info.name}</span>
                    <p className='bio'>{info.bio}</p>
                    </section>
                  )
                }
                            {
              responsive.width > 768 && (            <div className='crew__nav'>
              {Array.from({ length: 4 }).map((_, index) => (
              <figure
                key={index}
                className="circle"
                onClick={() => handleNameClick(index, `/Crew/${index+2}`) }
              >
                <img
                  className={selectedImage === `oval${index + 1}` ? 'circle__img active' : 'circle__img'}
                  src={selectedImage === `oval${index + 1}` ? ovalWhite : oval}
                  alt={`circle-${index + 1}`}
                />
              </figure>
            ))}


          </div>)
            }

            </section>

            {
              responsive.width < 768 && (            <div className='crew__nav'>
              {Array.from({ length: 4 }).map((_, index) => (
              <figure
                key={index}
                className="circle"
                onClick={() => handleNameClick(index, `/Crew/${index+2}`) }
              >
                <img
                  className={selectedImage === `oval${index + 1}` ? 'circle__img active' : 'circle__img'}
                  src={selectedImage === `oval${index + 1}` ? ovalWhite : oval}
                  alt={`circle-${index + 1}`}
                />
              </figure>
            ))}


          </div>)
            }


            {responsive.width <= 375 && 
              (
                <section className='crew__right'>

                    <span className='role'>{info.role} </span>
                    <span className='namePerson'>{info.name}</span>
                    <p className='bio'>{info.bio}</p>
                    
                </section>
              )
            }
              {responsive.width > 768 && 
              (
                <section className='crew__right'>

                    <figure className='crew__figure'>
                    <img className='crew__img' src={`${imageCrew}`} alt="Crew" />
                    </figure>
                    
                </section>
              )
            }

                {(responsive.width > 375 && responsive.width <=768  ) && 
                  (
                    <figure className='crew__figure'>
                    <img className='crew__img' src={`${imageCrew}`} alt="Crew" />
                    </figure>
                  )
                }       

        </section>
    
    </div>
  )
}

export default Crew