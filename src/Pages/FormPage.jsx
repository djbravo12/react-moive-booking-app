import { useGlobalContext } from "../Context/Context"
// import { useState, useEffect } from 'react'
import BookingForm from "../Components/Bookingform"

const FormPage = () => {
    const { currentMovieData } = useGlobalContext()
    const { movieName, runTime, lan, imgSrc } = currentMovieData

    return (
        <section className="bg-[#101013] lg:h-screen lg:grid lg:justify-items-center py-8 px-4 md:py-10 md:px-[6rem] lg:p-20  font-Archivo">
            <div className="bg-[#040405] border-[0.5px] border-[#BFBFBF] rounded-md grid lg:grid-cols-2">
                <div className="lg:pt-[4.2em] lg:px-8 grid text-center gap-2 lg:text-start lg:grid-cols-2">
                    <div className="flex flex-col">
                        <h1 className="lg:text-[2.2em] md:text-[1.4em] text-[1em] text-[#FA3A5E] lg:m-0 lg:p-0">{movieName}</h1>
                        <p className="text-white">Language - {lan}</p>
                        <p className="text-white">Runtime - {runTime} mintues</p>
                    </div>
                    <img src={imgSrc} alt="Movie Poster" className="text-white h-[20rem] block w-full ojbect-cover col-start-1 border-t rounded col-end-2 row-start-1 row-end-3" />
                </div>
                <BookingForm />
            </div>
        </section>
    )
}

export default FormPage