import Axios from 'axios'

export const getRepositories = async ({ name }) => {
  try {
    const response = await Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_GITHUB_API}/repos/${process.env.REACT_APP_GITHUB_USERNAME}/${name}`,
    })
    return response.data
  } catch (error) {
    throw error
  }
}
