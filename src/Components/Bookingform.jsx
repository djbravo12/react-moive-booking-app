const BookingForm = () => {

    return (
        <div className="py-[3.2em] px-10 text-white">
            <form className=" ">
                <fieldset className="flex flex-col my-2 border border-[#FF3A5E] rounded-md px-4 py-2 bg-[#090908]">
                    <legend className="text-2xl text-start text-[#BFBFBF]">Book your tickets here</legend>
                    <div className="flex flex-col my-1">
                        <label htmlFor="name" className="my-1">Name</label>
                        <input type="text" placeholder="Name" id="name" className="bg-[#101013] text-[#FFFFFF] outline-none border rounded focus:outline-none focus:border focus:border-[#FF3A5E] focus:rounded py-1 px-2 placeholder:text-[#BFBFBF]" />
                    </div>
                    <div className="flex flex-col my-1">
                        <label htmlFor="contactNo" className="my-1">Contact No</label>
                        <input type="text" placeholder="Contact No" id="contactNo" className="bg-[#101013] text-[#FFFFFF] outline-none border rounded focus:outline-none focus:border focus:border-[#FF3A5E] focus:rounded py-1 px-2 placeholder:text-[#BFBFBF]" />
                    </div>
                    <div className="flex flex-col my-1">
                        <label htmlFor="email" className="my-1">Email Address</label>
                        <input type="email" placeholder="xyz@gmail" id="email" className="bg-[#101013] text-[#FFFFFF] outline-none border rounded focus:outline-none focus:border focus:border-[#FF3A5E] focus:rounded py-1 px-2 placeholder:text-[#BFBFBF]" />
                    </div>
                    <div className="my-2">
                        <p className="text-center">Total Tickets</p>
                        <div className="flex justify-evenly my-2">
                            <span className="flex flex-col">
                                <input type="radio" value='1' name="totalTicket" id="1" className="bg-[#FFFFFF] appearance-none h-6 w-6 rounded-full checked:bg-[#FF3A5E]"/>
                                <label htmlFor="1" className="relative left-[7px] bottom-[23px] text-[#040405] ">1</label>
                            </span>
                            <span className="flex flex-col">
                                <input type="radio" value='2' name="totalTicket" id="2" className="bg-[#FFFFFF] appearance-none h-6 w-6 rounded-full checked:bg-[#FF3A5E]" />
                                <label htmlFor="2" className="relative left-[7px] bottom-[23px] text-[#040405]">2</label>
                            </span>
                            <span className="flex flex-col">
                                <input type="radio" value='3' name="totalTicket" id="3" className="bg-[#FFFFFF] appearance-none h-6 w-6 rounded-full checked:bg-[#FF3A5E]" />
                                <label htmlFor="3" className="relative left-[7px] bottom-[23px] text-[#040405]">3</label>
                            </span>
                            <span className="flex flex-col">
                                <input type="radio" value='4' name="totalTicket" id="4" className="bg-[#FFFFFF] appearance-none h-6 w-6 rounded-full checked:bg-[#FF3A5E]" />
                                <label htmlFor="4" className="relative left-[7px] bottom-[23px] text-[#040405]">4</label>
                            </span>
                            <span className="flex flex-col">
                                <input type="radio" value='5' name="totalTicket" id="5" className="bg-[#FFFFFF] appearance-none h-6 w-6 rounded-full checked:bg-[#FF3A5E]" />
                                <label htmlFor="5" className="relative left-[7px] bottom-[23px] text-[#040405]">5</label>
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-3">
                        <input type="submit" value="Submit" className="bg-[#FF3A5E] rounded-md py-1 px-4 cursor-pointer" />
                        <input type="reset" value="Reset" className="border border-[#BFBFBF]  rounded-md py-1 px-5 cursor-pointer" />
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default BookingForm;