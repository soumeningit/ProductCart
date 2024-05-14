import { useEffect, useState } from "react";
import Product from "../Componets/Product";
import Spinner from "../Componets/Spinner";

function Home() {
    const API_URL = "https://fakestoreapi.com/products";

    const [loader, setLoader] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchData() {
        setLoader(true);
        try {
            const output = await fetch(API_URL);
            const data = await output.json();
            console.log(output);
            setPosts(data);
        } catch (error) {
            console.log(error);
            setPosts([]);
        }
        setLoader(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            {/* This is Home Page */}
            {loader === true ? <Spinner /> :
                posts.length > 0 ?
                    <div className="grid grid-cols-4 max-w-6xl space-y-10 space-x-5 min-h-[80vh] mx-auto">
                        {
                            posts.map((post) => {
                                return <Product key={post.id} post={post} />
                            })
                        }
                    </div>
                    :
                    <div>
                        <p>No Data Found</p>
                    </div>
            }
        </div>
    )
}

export default Home;