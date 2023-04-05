import { createContext, useContext, useState } from "react";

import MoiveData from '../file'


const MoiveDataContext = createContext(null)

const MovieDataProvider = ({ children }) => {
    const [currentMovieData, setCurrentMovieData] = useState([])
    const data = MoiveData()


    const GetMovieData = (recieveddata) => {
        console.log(recieveddata)
        setCurrentMovieData(recieveddata)
    }


    return <MoiveDataContext.Provider value={{ data, GetMovieData, currentMovieData }}>
        {children}
    </MoiveDataContext.Provider>
}

const useGlobalContext = () => { return useContext(MoiveDataContext) }

export { MovieDataProvider, useGlobalContext }