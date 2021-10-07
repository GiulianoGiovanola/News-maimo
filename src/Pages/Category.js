import React from 'react'
import ResponsiveGrid from '../components/ResponsiveGrid/ResponsiveGrid'
import ToogleColorMode from '../components/ToogleColorMode/ToogleColorMode'
import SimpleContainer from '../components/SimpleContainer/SimpleContainer';
import Loader from '../components/Loader/Loader'
import { useParams } from 'react-router-dom'

const Category = () => {

    const { slug } = useParams()//Obtengo el parametro

    //Hago el fetch de la data segun el parametro



    return (
        <>
            <ToogleColorMode />
            {1 === 2 && <Loader />}
            <h2> Categoría {slug} </h2>
            <SimpleContainer>
                <ResponsiveGrid />
            </SimpleContainer>
        </>
    )
}

export default Category