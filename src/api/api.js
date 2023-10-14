const getData = async (api, navigate, setData, setIsLoading) => {
    try {
        const response = await fetch(api)

        if (response.status === 404) {
            throw new Error('404')
        }

        const resData = await response.json()

        setData(resData)

        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    } catch (error) {
        error.message === '404' && navigate('/404')
    }
}

export default getData
