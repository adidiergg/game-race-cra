import React, { useState,useEffect } from 'react'
import Car from './Car'
import "../asset/css/App.css"
import AlfaRomeo from '../asset/1.png';
import AstonMartin from '../asset/2.png';
import McLaren from '../asset/3.png';
import Williams from '../asset/4.png';
import AlphaTauri from '../asset/5.png';
import Ferrari from '../asset/6.png';
import Mercedes from '../asset/7.png';
import Alpine from '../asset/8.png';
import Haas from '../asset/9.png';
import RedBull from '../asset/10.png';

export default function Circuit(props) {


  
  const [isRunning,setIsRunning] = useState(false);
  const [isGoal,setIsGoal] = useState(false);
  const [cars,setCars] = useState([
    {
      id:1,
      name:'Sergio Perez',
      position:0,
      team: RedBull
    },
    {
      id:2,
      name:'Lewis hamilton',
      position:0,
      team:Mercedes
      
    },
    {
      id:3,
      name:'Charles Leclerc',
      position:0,
      team:Ferrari
    }, 
    {
      id:4,
      name:'Sebastian vettel',
      position:0,
      team:AstonMartin
    },{
      id:5,
      name:'Fernando alonso',
      position:0,
      team:Alpine
    },
    {
      id:6,
      name:'Nicholas latifi',
      position:0,
      team:Williams
    },{
      id:7,
      name:'Lando Norris',
      position:0,
      team:McLaren
      
    },{
      id:8,
      name:'Valtteri Bottas',
      position:0,
      team:AlfaRomeo
      
    },{
      id:9,
      name:'Mick Schumacher',
      position:0,
      team:Haas
      
    },{
      id:10,
      name:'Yuki Tsudona',
      position:0,
      team:AlphaTauri
      
    }


  ])


  const move = () => {
    const moveCars = cars.map(car => {  
      return {
        ...car,
        position: car.position+(Math.random()*3),
      };
    });
    setCars(moveCars);
    console.log(cars)
    
  }

  useEffect(() =>{
    let timer;
    if(isRunning){
      timer = setTimeout(() => {
        move();
      }, 100);

    }else{
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);

  });

  //Verificar si uno de los vehiculos llego a la meta.
  useEffect(()=> {
    cars.some(car => {
      if (!isGoal){
        if (car.position>=100){
          setIsGoal(true);
          setIsRunning(false);
          alert("El ganador de la carrera es "+car.name);
          return true;
        }
      }
      return false;
      
    });
    
  },[cars]);


  const start = () => {
    setIsRunning(!isRunning);  
  }

  const reset = () => {
    setIsRunning(false);
    setIsGoal(false);
    const resetCars = cars.map(car => {  
      return {
        ...car,
        position: 0,
      };
    });
    setCars(resetCars);

  }

  const grid = cars.map(({id,name,position,team}) => {
    return (
      <Car key={id} id={id} name={name} position={position} team={team} />
    );
  });

  return (
    <div>
    <h1 className='Header' >{props.name}</h1>

    <div className='Track' >
       
       <div className='Goal'>
        {grid}
       </div>
       
        
    </div>
    <div className='Center' >

      { isGoal ?
        <button  className='Btn' onClick={reset}>Reiniciar</button>
        :


        <button className='Btn' onClick={start}> {isRunning ? 'Pausar':'Iniciar'}</button>
      }
    </div>
   
    </div>
  )
}
