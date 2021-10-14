import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ResponsiveGrid from '../components/ResponsiveGrid/ResponsiveGrid'
import SimpleContainer from '../components/SimpleContainer/SimpleContainer';
import Loader from '../components/Loader/Loader'
import axios from 'axios';

const Search = () => {

    const { slug } = useParams()//Obtengo el parametro

    //Hacer fetch al endpoint de las ultimas noticias

    const [noticias, setNoticias] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchNoticias = async () => {
            setLoading(true)

            try {
                const noticiasFromAPI = await axios.get(`https://api.canillitapp.com/search/${slug}`);
                console.log(noticiasFromAPI)
                setNoticias(noticiasFromAPI.data.slice(0, 28))
                setLoading(false)
            } catch (error) {
                console.log('ERROR DEL CATCH:', error)
                setLoading(false)
            }

        }

        fetchNoticias();

    }, [slug])

    return (
        <>
            {1 === 2 && <Loader />}
            <SimpleContainer >
                {!loading && <ResponsiveGrid noticias={noticias} />}
            </SimpleContainer>
        </>
    )
}

export default Search