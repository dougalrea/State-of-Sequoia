import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Home() {

  const baseUrl = '/api'
  const [data, setData] = React.useState(false)
  const { id } = useParams()


  React.useEffect(() => {

      const getData = async () => {
        try {
          const { APIresult } = await axios.get(`${baseUrl}/home`)
          setData(APIresult)
      } catch(err) {
        console.log(err)
      }
    } 

    getData()
  }, [id])
  return (
    <>
      <h1>
      This is the data:
      </h1>
        {data ? 
        <p>
          {data}
        </p> 
        :
        <p>no data *sadface*</p>}
    </>
  )
}

export default Home