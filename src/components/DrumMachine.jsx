import { BsSoundwave } from "react-icons/bs";
import { HiAdjustments } from "react-icons/hi";
import CevH2 from '../assets/audios/Cev_H2.mp3'
import DscOh from '../assets/audios/Dsc_Oh.mp3'
import Heater1 from '../assets/audios/Heater-1.mp3'
import Heater2 from '../assets/audios/Heater-2.mp3'
import Heater3 from '../assets/audios/Heater-3.mp3'
import Heater4 from '../assets/audios/Heater-4.mp3'
import Heater6 from '../assets/audios/Heater-6.mp3'
import KickHat from '../assets/audios/Kick_n_Hat.mp3'
import Rp4Kick from '../assets/audios/RP4_KICK.mp3'
import { useEffect, useRef, useState } from "react";

function DrumMachine() {

    const [sound, setSound] = useState(null)
    const [power, setPower] = useState(false)

    useEffect(() => {
        console.log(power)

    }, [power])

    const audioRefs = useRef({});

    const DataSound = [
        { name: 'Q', sound: CevH2, value: 'CevH2' },
        { name: 'W', sound: DscOh, value: 'DscOh' },
        { name: 'E', sound: Heater1, value: 'Heater1' },
        { name: 'A', sound: Heater2, value: 'Heater2' },
        { name: 'S', sound: Heater3, value: 'Heater3' },
        { name: 'D', sound: Heater4, value: 'Heater4' },
        { name: 'Z', sound: Heater6, value: 'Heater6' },
        { name: 'X', sound: KickHat, value: 'KickHat' },
        { name: 'C', sound: Rp4Kick, value: 'Rp4Kick' }
    ];

    const handleSwitchChange = (e) => {
        setPower(e.target.checked)
    }

    const handleOnClick = (data) => {
        const audio = audioRefs.current[data.name]
        setSound(data.value)
        if (audio) {
            audio.currentTime = 0
            if (power) {
                audio.play()
            }
        }
    }


    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen" id="drum - machine">
            <BsSoundwave className="text-white absolute top-[10%] left-[44%] hover:text-[#bbff33] transition-all duration-300 w-[150px] h-[150px]" />
            <h1 className="text-6xl mb-8 text-white font-black text-pretty tracking-wide italic hover:text-[#bbff33] transition-all duration-300" > DRUM MACHINE</h1 >
            <div className="relative w-[750px] h-[400px] bg-[#252422] flex items-center justify-between py-2 px-8 rounded-2xl shadow-2xl">
                <BsSoundwave className="text-white absolute top-[40%] left-[48%]" size={30} />
                <div className="w-[300px] h-[300px] bg-[#434343] grid grid-cols-3 gap-2 p-2 rounded-lg">

                    {
                        DataSound.map((data) => (
                            <button key={data.name} className="w-[86px] h-[86px] bg-black/30 rounded-lg border-black/20 border-2 hover:bg-white hover:border-black transition-all duration-200 active:bg-[#bbff33] text-white hover:text-black font-semibold text-3xl" value={data.name} onClick={() => handleOnClick(data)}>{data.name}
                                <audio
                                    ref={el => (audioRefs.current[data.name] = el)}
                                    src={data.sound} preload="auto"></audio>
                            </button>

                        ))
                    }

                </div>
                <div className="flex flex-col w-[300px] h-[300px] bg-[#434343] rounded-xl content-center">
                    <div className="flex justify-center">
                        <HiAdjustments className="my-4 text-white" size={40} />
                    </div>
                    <div className="flex flex-col items-center p-4 ">
                        <span className="font-black text-white">POWER</span>

                        <label className="inline-flex items-center mt-2 cursor-pointer">
                            <input type="checkbox" checked={power} className="sr-only peer" onChange={handleSwitchChange} />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1   rounded-full peer dark:bg-black peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#bbff33]"></div>
                        </label>

                    </div>
                    <div className="flex flex-col items-center p-4 ">
                        <span className="font-black text-white">SOUND</span>
                        <span className="text-md text-[#bbff33] mt-2">{sound}</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DrumMachine