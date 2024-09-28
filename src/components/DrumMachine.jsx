import { BsSoundwave } from "react-icons/bs";
import { HiAdjustments } from "react-icons/hi";


function DrumMachine() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center" id="drum - machine">
            <BsSoundwave className="text-white absolute top-[10%] left-[44%] hover:text-[#bbff33] transition-all duration-300" size={220} />
            <h1 className="text-6xl mb-8 text-white font-black text-pretty tracking-wide italic hover:text-[#bbff33] transition-all duration-300" > DRUM MACHINE</h1 >
            <div className="relative w-[750px] h-[400px] bg-[#252422] flex items-center justify-between py-2 px-8 rounded-2xl shadow-2xl">
                <BsSoundwave className="text-white absolute top-[40%] left-[48%]" size={30} />
                <div className="w-[300px] h-[300px] bg-[#434343] grid grid-cols-3 gap-2 p-2 rounded-lg">
                    <button className="w-[86px] h-[86px] bg-black/30 rounded-lg border-black/20 border-2 hover:bg-white hover:border-black transition-all duration-200 active:bg-[#bbff33] text-white hover:text-black font-semibold text-3xl">Q</button>
                    <button className="w-[86px] h-[86px] bg-black/30 rounded-lg border-black/20 border-2 hover:bg-white hover:border-black transition-all duration-200 active:bg-[#bbff33] text-white hover:text-black font-semibold text-3xl">W</button>
                    <button className="w-[86px] h-[86px] bg-black/30 rounded-lg border-black/20 border-2 hover:bg-white hover:border-black transition-all duration-200 active:bg-[#bbff33] text-white hover:text-black font-semibold text-3xl">E</button>
                    <button className="w-[86px] h-[86px] bg-black/30 rounded-lg border-black/20 border-2 hover:bg-white hover:border-black transition-all duration-200 active:bg-[#bbff33] text-white hover:text-black font-semibold text-3xl">A</button>
                    <button className="w-[86px] h-[86px] bg-black/30 rounded-lg border-black/20 border-2 hover:bg-white hover:border-black transition-all duration-200 active:bg-[#bbff33] text-white hover:text-black font-semibold text-3xl">S</button>
                    <button className="w-[86px] h-[86px] bg-black/30 rounded-lg border-black/20 border-2 hover:bg-white hover:border-black transition-all duration-200 active:bg-[#bbff33] text-white hover:text-black font-semibold text-3xl">D</button>
                    <button className="w-[86px] h-[86px] bg-black/30 rounded-lg border-black/20 border-2 hover:bg-white hover:border-black transition-all duration-200 active:bg-[#bbff33] text-white hover:text-black font-semibold text-3xl">Z</button>
                    <button className="w-[86px] h-[86px] bg-black/30 rounded-lg border-black/20 border-2 hover:bg-white hover:border-black transition-all duration-200 active:bg-[#bbff33] text-white hover:text-black font-semibold text-3xl">X</button>
                    <button className="w-[86px] h-[86px] bg-black/30 rounded-lg border-black/20 border-2 hover:bg-white hover:border-black transition-all duration-200 active:bg-[#bbff33] text-white hover:text-black font-semibold text-3xl">C</button>
                </div>
                <div className="flex flex-col w-[300px] h-[300px] bg-[#434343] rounded-xl content-center">
                    <div className="flex justify-center">
                        <HiAdjustments className="text-white my-4" size={40} />
                    </div>
                    <div className=" flex flex-col items-center p-4">
                        <span className="font-black text-white">POWER</span>
                        <span className="text-md text-[#bbff33]">SWITCH</span>
                    </div>
                    <div className=" flex flex-col items-center p-4">
                        <span className="font-black text-white">SOUND</span>
                        <span className="text-md text-[#bbff33]">CLAP 1</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DrumMachine