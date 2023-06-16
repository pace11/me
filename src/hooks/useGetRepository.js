import { useCallback, useEffect, useState } from 'react'
import { getRepositories } from 'api'

const useGetRepository = (repositories = []) => {
  const isFetching = true
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  const fetchingData = useCallback(
    async (repo) => {
      try {
        repo.map(
          async (url) =>
            await getRepositories({ name: url })
              .then((res) => {
                setData((data) => [...data, res])
              })
              .finally(() => {
                setLoading(false)
              }),
        )
      } catch (error) {
        setLoading(false)
        console.error(error)
      }
    },
    [setLoading],
  )

  useEffect(() => {
    if (isFetching && repositories && repositories.length > 0) {
      fetchingData(repositories)
    }
  }, [repositories, isFetching, fetchingData])

  return { data, isLoading }
}

export default useGetRepository
