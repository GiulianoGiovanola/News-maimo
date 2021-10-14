import React, {useEffect, useState} from 'react'
import ResponsiveGrid from '../components/ResponsiveGrid/ResponsiveGrid'
import SimpleContainer from '../components/SimpleContainer/SimpleContainer';
import Loader from '../components/Loader/Loader'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Category = () => {

    const { slug } = useParams()//Obtengo el parametro

    //Hacer fetch al endpoint de las ultimas noticias

    const [noticias, setNoticias] = useState([])
    const [loading, setLoading] = useState(false)

    const categoriesId = {
        politica: "1",
        internacionales: "2",
        tecnologia: "3",
        espectaculos: "4",
        deportes: "5",
        diseno: "6",
        gaming: "7"
    }

    useEffect(() => {
        const fetchNoticias = async () => {
            setLoading(true)

            try {
                const noticiasFromAPI = await axios.get(`https://api.canillitapp.com/news/category/${categoriesId[slug]}`);
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
            <h2> Categoría {slug} </h2>
            <SimpleContainer>
                <ResponsiveGrid />
            </SimpleContainer>
        </>
    )
}

export default Category