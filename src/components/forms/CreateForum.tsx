import {useState} from "react";
import {IForum, ISubcategory} from "../../models/models";
import {useCreateForumMutation} from "../../store/bonchan/bonchan.api";

interface Props {
    onCreate: (forum: IForum) => void
    subcategory: ISubcategory
}

export function CreateForum({onCreate, subcategory}: Props) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const [createForum, result] = useCreateForumMutation()

    const submitHandler = (event: React.FormEvent) => {


        if(value.trim().length === 0) {
            setError("Введите правильное название форума")
            return
        }
        if(value.trim().length > 19) {
            setError("Допустимое максимальное количество символом: 19")
            return
        }

        const forum: IForum = {
            name: value,
            subcategory: subcategory
        }
        createForum(forum)
        if (result.data !== undefined) {
            onCreate(result.data)
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
                placeholder="Введите название форума..."
                value={value}
                onChange={changeHandler}
            />
            <button type="submit" className="text-white bg-blue-800 hover:bg-blue-400
                font-medium rounded-lg text-sm px-4 py-2 lg:px-5 mt-2 lg:py-2.5">Создать</button>
        </form>
    )
}