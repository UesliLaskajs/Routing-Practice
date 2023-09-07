
import { useParams } from "react-router-dom";

const StyledWordPage = () => {
    const { word, color1, color2 } = useParams();

    const styledComponents = {
        color: color1,
        backgroundColor: color2,
    };

    return (
        <>
            <div style={styledComponents}>
                <h1>{word}</h1>
            </div>
        </>
    );
};

export default StyledWordPage;
