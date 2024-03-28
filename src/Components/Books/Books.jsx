
import { useEffect, useState } from "react";
import BookDetails from "../BookDetails/BookDetails";


const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {

        fetch('../../../public/JsonFile.json')
        .then(res => res.json())
        .then(data => setBooks(data))
        //console.log(books)
    },[]);

    return (
        <div>
            <div className="text-center mt-20">
            <h2 className=" text-5xl ">Books</h2>
            </div>
            <div>
                {
                   
                }
            </div>
        </div>
    );
};

export default Books;