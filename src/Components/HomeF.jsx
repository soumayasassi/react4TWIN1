import { useParams } from "react-router-dom";

function HomeF() {
    const {username} = useParams() ;
    return (<> Hello {username} </>  );
}

export default HomeF;