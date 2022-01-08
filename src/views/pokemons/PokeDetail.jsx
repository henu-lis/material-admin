import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Typography,
    Link,
    CircularProgress
} from '@mui/material';
//import { pokeData } from './pokeMockData';
import { toFirstChartUppercase } from './constants';
import axios from 'axios';

function PokeDetail() {
    let params = useParams();
    let { pokeId } = params;
    //const [pokemon, setPokemon] = useState(pokeData[`${pokeId}`]);
    const [pokemon, setPokemon] = useState(undefined);


    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
            .then(function (response) {
                const { data } = response;
                setPokemon(data);
            })
            .catch(function (error) {
                setPokemon(false);
            })
    }, [pokeId])

    const generatePokemonJsx = () => {

        const { name, id, species, height, weight, types, sprites } = pokemon;
        //const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const { front_default } = sprites;

        return (
            <>
                <Typography variant='h1'>
                    {`${id}.`}{`${toFirstChartUppercase(name)}`}
                    <img src={front_default} alt={name} />
                </Typography>
                <img style={{ width: '300px', height: '300px' }} src={front_default} alt={name} />
                <Typography variant='h3'>Pokemon Info</Typography>
                <Typography>
                    {"Species: "}
                    <Link href={species.url}>{species.name}</Link>
                </Typography>
                <Typography>Height:{height}</Typography>
                <Typography>Weight:{weight}</Typography>
                <Typography variant='h6'>Types:</Typography>
                {types.map((typeinfo) => {
                    const { type } = typeinfo;
                    const { name } = type;
                    return <Typography key={name}>{`${name}`}</Typography>
                })}
            </>

        )
    }
    return (
        <>

            {pokemon ? generatePokemonJsx() : <CircularProgress />}
        </>
    );
}

export default PokeDetail;