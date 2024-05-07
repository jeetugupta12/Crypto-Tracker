import React from 'react'
import { useState, useEffect } from 'react'
import { Baseurl } from './Home'
import Loader from './Loader'
import axios from 'axios'
import Header from './Header'
import { Link } from 'react-router-dom'
import './Coins.css'

export const numberWithCommas=(x)=>{
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
}

const Coins = () => {
  const [loading, setLoading]=useState(true)
  const[coins, setCoins]=useState([])
  const [currency, setCurrency]=useState('usd')
  const [search, setSearch]=useState('')
  
  const currencySymbol = currency ==='inr' ? '₹': "$";
  useEffect(()=>{
    const getCoinsData=async()=>{
       try {
        const {data} =await axios.get(`${Baseurl}/coins/markets?vs_currency=${currency}`)
      console.log(data)
      setCoins(data)
      setLoading(false)
       } catch (error) {
        console.log(error)
        setLoading(false)
       }
    }
    getCoinsData() 
  },[currency])
 
  return (
    <>
      {
        loading?<>  <Header/><Loader/></> :
         <> 
         <Header/> 
           <div className="search-bar" style={{display:"flex", alignItem:"center",justifyContent:"center"}}>
            <input type="text" 
            placeholder='Search Your Coin ' 
            style={{ marginTop:"5rem", height:"2rem",width:"50%", outline:"none",
            border:"1px solid #ccc" , padding:"8px 12px",
            borderRadius:"20px"}}
            onChange={(e)=>setSearch(e.target.value)}
            />
           </div>
            <div className='btns' >
             <button onClick={()=>setCurrency('inr')} >INR</button>
             <button onClick={()=>setCurrency('usd')}>USD</button>
           </div>

           <div className='btc-cards-info'>
            <div className="btc-image-info">
                Coin
            </div>
            <div className="btc-price-info">Price</div>
            <div className="btc-change-info">24h Change</div>
            <div className="market-info">Market Cap</div>
        </div>
     

          { 
          
            coins.filter((data)=>{
               if(data == ''){
                return data
               } else if(data.name.toLowerCase().includes(search.toLowerCase())){
                   return data
               }
            }).map((coindata, i)=>{
              return(
              <CoinCard key={i} coindata={coindata} id={coindata.id}  i={i} currencySymbol={currencySymbol}  />
              )
            })
          }
        </> 
      }
      
    </>
  )
}

const  CoinCard=({coindata, currencySymbol, i, id})=>{
  const profit = coindata.price_change_percentage_24h>0 
  return(
    <>
   <Link to={`/coins/${id}`} style={{color:"white", textDecoration:'none'}} >
    <div className='btc-cards'>
      <div className="btc-image" style={{display:"flex"}}>
        <div >
          <img height={"50px"} src={coindata.image} alt="" />
        </div>
        <div className="btc-coinname" style={{display:"flex", flexDirection:"column"}}>
            <span  style={{textTransform: "upperCase" }}>{coindata.symbol}</span>
            <span  style={{ color:"rgb(215, 187, 187)"}}>{coindata.name}</span>
        </div>  
      </div>
      
      <div className="btc-price" >
          {currencySymbol} {numberWithCommas(coindata.current_price.toFixed(2))}
      </div>
      <div className="btc-change" style={profit? {color:"green"} : {color:"red"}} >
          {profit ? "+" + coindata.price_change_percentage_24h.toFixed(2): coindata.price_change_percentage_24h.toFixed(2)}
      %</div>
        <div className="market-cap">
        {currencySymbol} {numberWithCommas(coindata.market_cap.toString().slice(0, -6))}M
        </div>
      </div>
    <div className="hori-line"></div>
   </Link>
   
   </>

   
  )
}

export default Coins



