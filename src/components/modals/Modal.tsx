import {AiOutlineCloseSquare} from "react-icons/ai";

interface Props {
    children: React.ReactNode
    title: string
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export function Modal({children, title, setShow}: Props) {
    return(
        <div>
            <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0">
                <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
                    <div className="absolute top-1 right-1">
                        <button onClick={() => setShow(false)}><AiOutlineCloseSquare className="bg-red-600 text-white py-1 px-1 h-8 w-8 rounded"/></button>
                    </div>
                    <h1 className="text-2xl text-center m-5">{title}</h1>
                    {children}
                </div>
            </div>
        </div>
    )
}