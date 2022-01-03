import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
    AppBar,
    Toolbar,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    CircularProgress,
    IconButton,
    InputBase
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from 'react-router-dom';
import { pokeData } from './pokeMockData';
import { toFirstChartUppercase } from './constants';
import axios from 'axios';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const PokeList = () => {
    const [pokemonData, setPokemonData] = useState(pokeData);
    const [filter, setFilter] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(function (response) {
                const { data } = response;
                const { results } = data;
                console.log(results);
                const newPokemonData = {};
                results.forEach((pokemon, index) => {
                    newPokemonData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(index + 1)}.png`
                    }
                });
                setPokemonData(newPokemonData);
            });

    }, []);

    const handleSearchChange = (e) => {
        setFilter(e.target.value);
        console.log(filter);
    }

    const getPokemonCard = (pokemonId) => {
        const { id, name } = pokemonData[`${pokemonId}`];
        const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return (
            <Grid item xs={12} sm={4} key={pokemonId}>
                <Card onClick={() => navigate(`/pokemons/${id}`)}>
                    <CardMedia
                        image={sprite}
                        style={{ width: '130px', height: '130px', margin: 'auto' }}
                    />
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography>
                            {`${id}.${toFirstChartUppercase(name)}`}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }

    return (
        <>
            {pokemonData ?
                (<Grid container spacing={4}>
                    <Grid item xs={12}>
                        <AppBar position='static'>
                            <Toolbar>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                >
                                    Pokemons
                                </Typography>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                        onChange={(e) => handleSearchChange(e)}
                                    />
                                </Search>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <Grid item container xs={12} spacing={2}>
                        {Object.keys(pokemonData).map((pokemonId) =>
                            pokemonData[pokemonId].name.includes(filter) && getPokemonCard(pokemonId))}
                    </Grid>
                </Grid>) : (<CircularProgress />)}
        </>
    );
}

export default PokeList;