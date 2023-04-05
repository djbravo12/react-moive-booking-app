import { useGlobalContext } from "../Context/Context"
// import { useState } from "react";
import { Link } from "react-router-dom"

const ShowMovies = () => {
    const { data: as } = useGlobalContext()

    return (
        <>
            <main className="bg-black lg:h-screen md:px-4 md:py-4 px-6 py-8 grid gap-4 lg:grid-cols-7 md:grid-cols-3 font-Archivo">
                {
                    as.map((e) => {
                        const { show: { image, name, genres } } = e

                        let mediumImg
                        if (image) {
                            mediumImg = image.medium

                        }
                        return <Link to={`movies/${name}`} key={e.score}> <article className="bg-[#101013]  rounded-lg border border-transparent outline-[none] hover:cursor-pointer hover:border  hover:border-[#BFBFBF]" >

                            <div className="md:h-[80%]"> <img src={mediumImg} alt="Moive Poster" className="w-full h-full object-cover block rounded-t-lg" /></div>
                            <div className="flex flex-col gap-1 py-2 px-1">
                                <h1 className="text-[#FF3A5E] font-semibold">{name}</h1>
                                <p className="text-white text-sm tracking-wider">{genres.join('/')}</p>
                            </div>
                        </article>
                        </Link>
                    })
                }


            </main>
        </>


    )
}


export default ShowMovies