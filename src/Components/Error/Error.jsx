import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="container text-center mt-96">
            <h2 className=" font-extrabold">Error 404 </h2>
            <p className=" font-semibold"> <span className=" text-red-800"> Oops !!! </span>
            <br/>something went wrong.
                <br/> Please try  again later.</p>
                <Link className="btn mt-10 border-solid border-2 bg-red-500 text-white btn-wide">Let go back home</Link>
        </div>
    );
};

export default Error;