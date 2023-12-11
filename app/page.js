"use client"
import { useSearchParams } from 'next/navigation'
import {useState,useEffect} from 'react'
import Header from "components/Header"
import Side from "components/side"
import Cards from "components/cards"

function page() {
  const searchParams = useSearchParams()
  const [data, setData] = useState([])
  let catFilter = "general"
  if (searchParams.get("category")!= null) {
    catFilter=searchParams.get("category")
  }

      

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category='+catFilter+'&apiKey=ec4810ca37fd45728e97017e6fdba1b1')
      .then((res) => res.json())
      .then((data1) => {
        setData(data1.articles)
      })
  }, [catFilter])

  const cardss=data.map(item => {
    return(
  <Cards
    key={item.id}
    {...item}
  />
    )
}) 
  
  return (
    <div className="SB">
    
    <Side  />
    <div className="HB">
      <Header />
      { cardss}
    </div>
</div>
  )
}

export default page