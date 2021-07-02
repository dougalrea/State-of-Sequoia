import React from 'react'
import { getData } from '../lib/api'
import Nav from './Nav'

function Home () {
  const [response, setResponse] = React.useState(null)

  React.useEffect(() => {
    const getTheResponse = async () => {
      try {
        console.log('trying to make request')
        const { data } = await getData()
        console.log(data)
        setResponse(data)
      } catch (err) {
        console.log(err)
      }
    }
    getTheResponse()
  }, [])

  return (
    <>
      <Nav />
      <p>Yeehaw</p>
      {response
        ? response.map(item => <p key={item._id}>{item.testText}</p>)
        : ''}
    </>
  )
}

export default Home
