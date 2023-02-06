import { FaRegCircle, FaTimes, FaPen } from "react-icons/fa";

const Icon = ({displayIcon}) => {

    switch(displayIcon) {
        case "circle": return <FaRegCircle />;
        case "cross": return <FaTimes />;
        default: return <FaPen />;
    }
}

export default Icon;