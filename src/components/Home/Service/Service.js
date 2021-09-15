import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
import { useSpring, animated } from 'react-spring';
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Service = (props) => {
  
    const service = props.service;
    const {_id,title,description,price,imageURL} = service;
    const [slide, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))


    return (
        <>

          <div className="col-md-4 mb-5 text-decoration-none d-flex justify-content-center">
            <animated.div
                className="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: slide.xys.interpolate(trans) }}
            >
                <div style={{height: '45ch'}} className="d-flex align-items-center">
                    <div className="p-3 single-service">
                        <img className="img-fluid mb-3" src={imageURL} alt="" />
                        <h3 className="text-dark">{title}</h3>
                        <p className="text-muted">{description}</p>
                        <h3>{price}</h3>
                        <Link className="text-decoration-none" to={`/dashboard/booking/${_id}`}>
          <p href="#" className="bookButton">book now</p>
          </Link>
                    </div>
                </div>

            </animated.div>
        </div>
       
      </>
    );
};

export default Service;