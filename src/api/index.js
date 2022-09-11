export const get = async ({ endpoint }) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        apiToken: process.env.REACT_APP_API_TOKEN,
        type: 'web',
      },
    }
    const result = await fetch(
      `${process.env.REACT_APP_API_URL}/${endpoint}`,
      options,
    )
    return await result.json()
  } catch (error) {
    console.log('err =>', error)
  }
}

export const detail = async ({ endpoint, id }) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        apiToken: process.env.REACT_APP_API_TOKEN,
        type: 'web',
      },
    }
    const result = await fetch(
      `${process.env.REACT_APP_API_URL}/${endpoint}/${id}`,
      options,
    )
    return await result.json()
  } catch (error) {
    console.log('err =>', error)
  }
}
