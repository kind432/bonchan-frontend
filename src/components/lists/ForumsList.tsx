import {ForumItem} from "../items/ForumItem";
import {useForumsListBySubcategoryIdQuery} from "../../store/bonchan/bonchan.api";
import React from "react";

interface Props {
    isShowDropDown: boolean
    subcategoryId: number
}

export function ForumsList({isShowDropDown, subcategoryId}: Props) {
    const {isError, isLoading, data} = useForumsListBySubcategoryIdQuery(subcategoryId)
    return (
        <ol className={isShowDropDown ? "hidden": ""}>
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
                {isLoading && <p className="text-center text-white">Загрузка...</p>}
                {isError && <p className="text-center text-red-600">Ошибка!</p>}
                {!isError && data && data.map(forum =>
                    <ForumItem key={forum.id} forum={forum}/>
                )}
            </div>
        </ol>
    )
}