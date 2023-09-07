import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
const About = () => {
    const { number } = useParams();
    if (isNaN(+number)) {
        return <Link to={"/greeting/Hello"}>Words</Link>;
    }
    else {
        return (
            <h1>The number is{number}</h1>
        )
    }
}

export default About;