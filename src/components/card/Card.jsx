import styles from '../card/card.module.css'

function Card(props) {


    return (
        <>
            <div className={styles.father}>
                <p>Nombre: {props.name}</p>
                <p>Raza: {props.raza}</p>
            </div>
        </>
    )
}

export default Card