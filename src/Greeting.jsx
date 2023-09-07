import { useParams } from "react-router-dom"

const Greeting = () => {
    const { greeting } = useParams();

    return (
        <>
            <h1>{greeting}</h1>
        </>
    )
}

export default Greeting;