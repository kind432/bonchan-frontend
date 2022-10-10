import {CategoryItem} from "../items/CategoryItem";
import {useCategoriesAllListQuery} from "../../store/bonchan/bonchan.api";
import React from "react";

export function CategoriesList() {
    const {isError, isLoading, data} = useCategoriesAllListQuery()
    return(
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
            {isLoading && <p className="text-center text-white">Загрузка...</p>}
            {isError && <p className="text-center text-red-600">Ошибка!</p>}
            {!isError && data && data.map(category =>
                <CategoryItem key={category.id} category={category}/>
            )}
        </div>
    )
}