import { React, useState, useEffect } from 'react'
import ResponsiveGrid from '../components/ResponsiveGrid/ResponsiveGrid'
import ToogleColorMode from '../components/ToogleColorMode/ToogleColorMode'
import SimpleContainer from '../components/SimpleContainer/SimpleContainer';
import Loader from '../components/Loader/Loader'
import axios from 'axios';

const Home = () => {

    //Hacer fetch al endpoint de las ultimas noticias

    const [noticias, setNoticias] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchNoticias = async () => {
            setLoading(true)

            try {
                const noticiasFromAPI = await axios.get('https://api.canillitapp.com/latest/2021-09-30');
                console.log(noticiasFromAPI)
                setNoticias(noticiasFromAPI.data.slice(0, 28))
                setLoading(false)
            } catch (error) {
                console.log('ERROR DEL CATCH:', error)
                setLoading(false)
            }

        }

        fetchNoticias();

    }, [])

    return (
        <>
            <ToogleColorMode />
            {loading && <Loader />}
            <SimpleContainer>
                {!loading && <ResponsiveGrid noticias={noticias} />}
            </SimpleContainer>
        </>
    )
}

export default Home
