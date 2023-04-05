import { useParams, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../Context/Context'
import { FaRegClock, } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/Ai";


const Summary = () => {
    const { data, GetMovieData } = useGlobalContext()
    const { id } = useParams()
    const navigate = useNavigate()

    const [filterData] = data.filter((e) => e.show.name === id)

    const { show: { summary, name, status, genres, runtime, rating, language, premiered, image } } = filterData
    let originalImg, mediumImg

    const totalTime = runtime ?? "Data not provide"
    if (image) {
        originalImg = image.original
        mediumImg = image.medium
    }



    const bookMovieFunction = () => {
        navigate('/FormPage')
        const movieObj = { "movieName": name, "runTime": runtime, "lan": language, "imgSrc": mediumImg };

        localStorage.setItem("mykey", JSON.stringify(movieObj))

        GetMovieData(JSON.parse(localStorage.getItem("mykey")))
    }


    return (
        <>
            <section className='box-border bg-[#09090B] lg:h-screen font-Archivo'>

                <article className='flex flex-col justify-around lg:px-[4rem] px-3 py-5 lg:py-[2.5rem]'>
                    <div className='grid  md:grid-cols-2 gap-2 '>
                        <div className='h-[20rem]'><img src={originalImg} alt="#movie-poster" className='w-full h-full block object-cover' /></div>
                        <div className='justify-self-start md:px-4 md:py-4 flex flex-col justify-between'>
                            <h1 className='text-5xl py-1 px-1 text-[#FF3A5E]'>{name}</h1>
                            <div className='py-4'>
                                <p className='text-[#FFFFFF] bg-[#BFBFBF] flex md:justify-between justify-around md:py-3 md:px-2 py-2 px-1 rounded gap-2 mb-5'>
                                    <span>Status- {status}</span>
                                    <span>{genres.join(', ')}</span>
                                    <span className="flex items-center justify-center gap-1"><AiOutlineStar /> {rating.average ?? "0.00"}/10</span>
                                </p>
                                <p className='text-[#09090B] bg-[#FF3A5E] flex md:justify-between justify-around md:py-3 md:px-2 py-2 px-1 rounded gap-2'>
                                    <span>{premiered}</span>
                                    <span>{language}</span>
                                    <span className="flex items-center justify-center gap-1"> <FaRegClock className="inline-block" /> {totalTime}minutes</span>
                                </p>
                            </div>
                            <div>
                                <button className='text-[#101013] bg-[#FFFFFF] py-2 px-10 border rounded hover:bg-[#FF3A5E] hover:text-[#FFFFFF] hover:border-[#FF3A5E]' onClick={bookMovieFunction}>Book</button>
                            </div>
                        </div>
                    </div>

                    <div className='my-10 py-4 bg-[#101013] rounded '>
                        <p className='text-[#FFFFFF] text-3xl mb-1'>About the moive</p>
                        <p className='text-[#FFFFFF] text-1xl text-justify pr-3 leading-7 '>{summary.replaceAll(/(<)(p)(>)|(<)[/](p)(>)|(<)[/](b)(>)|(<)(b)(>)/gm, "")}</p>
                    </div>
                </article>
            </section >
            {/* <Outlet /> */}
        </>
    )
}

export default Summary