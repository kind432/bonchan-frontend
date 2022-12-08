import {useState} from "react";
import {ICategory} from "../../models/models";
import {useUpdateCategoryMutation} from "../../store/bonchan/bonchan.api";


interface Props {
    onUpdate: (category: ICategory) => void
    category: ICategory
}

export function UpdateCategory({onUpdate, category}: Props) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const [updateCategory, result] = useUpdateCategoryMutation()

    const submitHandler = (event: React.FormEvent) => {

        if(value.trim().length === 0) {
            setError("Введите правильное название категории")
            return
        }

        if(value.trim() === category.name) {
            setError("Название категории совпадает с предыдущим")
        }

        if(value.trim().length > 19) {
            setError("Допустимое максимальное количество символом: 19")
            return
        }

        const categor: ICategory = {
            id: category.id,
            name: value
        }
        updateCategory(categor)
        if (result.data !== undefined) {
            onUpdate(result.data)
        }
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return(
        <form onSubmit={submitHandler}>
            {error && <p className="text-red-600">{error}</p>}
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Введите название категории..."
                value={value}
                onChange={changeHandler}
            />
            <button type="submit" className="text-white bg-blue-800 hover:bg-blue-400
                font-medium rounded-lg text-sm px-4 py-2 lg:px-5 mt-2 lg:py-2.5">Изменить</button>
        </form>
    )
}