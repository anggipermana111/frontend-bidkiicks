import { useContext } from "react";
import { useEffect } from "react";
import { Context } from "../App";
import { Link } from "react-router-dom";

function Home() {
    const { products, setPath } = useContext(Context);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <main className="bg-gray-800 px-7 py-8">
            {/* Live Bid */}
            <section className="flex flex-col gap-4">
                <h1 className="text-white text-2xl">Live Bid</h1>
                <div className="grid grid-cols-6 gap-8">
                    {products?.length > 0 ? (
                        products.map(product => (
                            <div key={product._id} className="flex flex-col justify-center items-start gap-2 bg-white hover:bg-slate-200 border rounded-xl overflow-hidden p-2">
                                <div className="flex flex-col justify-center items-center relative">
                                    <img src={`${import.meta.env.VITE_REACT_APP_API_BASE_URL}${product.imageUrl}`} alt={`Gambar ${product.name}`} className="aspect-square rounded-md" />
                                    <div className="flex justify-center items-center gap-1 absolute -top-1 right-0">
                                        <span>LIVE </span>
                                        <div className="rounded-full bg-red-600 w-4 h-4"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col text-xs">
                                    <h3>{product.name}</h3>
                                    <span className="text-[0.6rem]">Last Bid</span>
                                    <span>${product.highestBid>0?product.highestBid:product.startingPrice} USD</span>
                                    <Link to={`/product/${product._id}`} onClick={() => {
                                        setPath("/detail");
                                        localStorage.setItem('path', `/product/${product._id}`)
                                    }}>
                                        <button className="bg-green-800 text-white mt-1 text-[0.6rem] w-16 rounded-md">
                                            Detail
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <span className="text-white">Data Kosong</span>
                    )}
                </div>
            </section>
            <section></section>
            <section></section>
            <section></section>
        </main>
    )
}

export default Home