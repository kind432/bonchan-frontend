import {useState} from "react";
import {ISubcategory} from "../../models/models";
import {useUpdateSubcategoryMutation} from "../../store/bonchan/bonchan.api";


interface Props {
    onUpdate: (subcategory: ISubcategory) => void
    subcategory: ISubcategory
}

export function UpdateSubcategory({onUpdate, subcategory}: Props) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const [updateSubcategory, result] = useUpdateSubcategoryMutation()

    const submitHandler = (event: React.FormEvent) => {

        if(value.trim().length === 0) {
            setError("Введите правильное имя категории")
            return
        }

        if(value.trim() === subcategory.name) {
            setError("Название подкатегории совпадает с предыдущим")
        }

        if(value.trim().length > 19) {
            setError("Допустимое максимальное количество символом: 19")
            return
        }

        const subcategor: ISubcategory = {
            id: subcategory.id,
            name: value,
            category: subcategory.category
        }
        updateSubcategory(subcategor)
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
                placeholder="Введите имя подкатегории..."
                value={value}
                onChange={changeHandler}
            />
            <button type="submit" className="text-white bg-blue-800 hover:bg-blue-400
                font-medium rounded-lg text-sm px-4 py-2 lg:px-5 mt-2 lg:py-2.5">Изменить</button>
        </form>
    )
}