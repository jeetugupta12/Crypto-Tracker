import React, { useEffect, useState} from 'react'
import Header from './Header'
import axios from "axios"
import { Baseurl } from './Home'
import Loader from './Loader'
import {Link} from "react-router-dom"

import './Exchanges.css'

const Exchanges = () => {
  const [loading, setLoading]=useState(true)
  const[exchanges, setExchanges]=useState([])
  useEffect(()=>{
    const getExchangesData=async()=>{
      const {data} =await axios.get(`${Baseurl}/exchanges`)
      console.log(data)
      setExchanges(data)
      setLoading(false)
    }
    getExchangesData() 
  },[])
  return (
    
   <>
     {
      loading ?<><Header/> <Loader/></> : <> 
       <Header/>
       
   <div>
    <div style={{marginTop:"5rem"}}></div>
    
          <div className='ex-cards-info'>
            <div className="name-info">Name</div>
            <div className="price-info">value</div>
            <div className="rank-info">Rank</div>
        </div>
     {
      exchanges.map((item,i)=>{
        return(
          <>
          <div className='exchange' width={80} >
            <Link to={item.url}>
            <div key={i} className='ex-cards'>
              <div className="image">
                <img height={"80px"} src={item.image} alt="" />
                <span className='name'>{item.name}</span>
              </div>
            
              <div className="price">
                  {item.trade_volume_24h_btc.toFixed(0)}
              </div>
              <div className="rank">
                  {item.trust_score_rank}
              </div>
            </div>
        <div className="horizon-line"></div>
        </Link>
       </div>
       </>
        )
      })
     }
   </div>
      </>
     }
   </>
  )
}

export default Exchanges


