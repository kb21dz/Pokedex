import PropTypes from 'prop-types'


function PokemonCard({ pokemon }) {
    return (
        (
            <figure style={{backgroundColor: colors[pokemon.type]}}>
                {
                    pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name}/> 
                    :
                    <p>???</p>
                }
                <figcaption>{pokemon.name} </figcaption>
            </figure>
        ) 
    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
    })
}

export default PokemonCard


