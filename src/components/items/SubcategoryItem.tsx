import {ISubcategory} from "../../models/models";
import {useState} from "react";
import {ForumsList} from "../lists/ForumsList";

interface Props {
    subcategory: ISubcategory
}

export function SubcategoryItem({subcategory}: Props) {
    const [isShowDropDown, setIsShowDropDown] = useState(true)
    return (
        <div>
            <button onClick={() => {
                setIsShowDropDown(prevState => !prevState)
            }}
                    className={"relative flex flex-row items-center h-11 border-transparent"}>
                <span className="px-4 ml-2 text-1xl hover:text-orange-500 text-white tracking-wide truncate">{subcategory.name}</span>
            </button>
            {subcategory.id && <ForumsList key={subcategory.id} subcategoryId={subcategory.id} isShowDropDown={isShowDropDown}/>}
        </div>
    )
}