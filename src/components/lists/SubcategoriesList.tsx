import {SubcategoryItem} from "../items/SubcategoryItem";
import {useSubcategoriesListByCategoryIdQuery} from "../../store/bonchan/bonchan.api";
import React from "react";

interface Props {
    categoryId: number
}

export function SubcategoriesList({categoryId}: Props) {
    const {isError, isLoading, data} = useSubcategoriesListByCategoryIdQuery(categoryId)
    return (
        <div>
            {isLoading && <p className="text-center text-white">Загрузка...</p>}
            {isError && <p className="text-center text-red-600">Ошибка!</p>}
            {!isError && data && data.map(subcategory => {
                return (
                    <SubcategoryItem key={subcategory.id} subcategory={subcategory} />
                )}
            )}
        </div>
    )
}