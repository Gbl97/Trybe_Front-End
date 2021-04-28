import PropTypes from 'prop-types';

const Pokemon = (props) => {
    const { name, type, averageWeight, image } = props.pokemon;

    return (
        <section>
            <div>
                <p>{`Nome: ${name}`}</p>
                <p>{`Tipo: ${type}`}</p>
                <p>{`Peso: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
            </div>
            <img src={image} alt={`${name} sprite`}/>
        </section>
    );
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape ({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string
        }),
        image: PropTypes.number
    }).isRequired,
}

export default Pokemon;
