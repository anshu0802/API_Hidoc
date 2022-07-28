import useAxios from 'axios-hooks'
import { useState } from 'react'

function Get() {
  const [isLoading, setIsLoading] = useState(false);
  const [{ data, loading, error }, refetch] = useAxios(
    'http://devapi.hidoc.co:8080/hidoc-us/api/v1/getArticlesByUid'
  )

  if (loading) return <p>Please wait sir...</p>
  if (error) return <p>Error!</p>

  return (
    <div>
      <button onClick={refetch}>refetch</button>
      <p>{JSON.stringify(data, null, 2)}</p>
        
         
      
    </div>
  )
}
export default Get;