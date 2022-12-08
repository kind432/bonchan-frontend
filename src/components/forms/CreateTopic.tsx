import {useState} from "react";
import {IForum, ITopic} from "../../models/models";
import {
    useCreateTopicMutation
} from "../../store/bonchan/bonchan.api";

interface Props {
    onCreate: (topic: ITopic) => void
    forumId: number
}

export function CreateTopic({onCreate, forumId}: Props) {
    const [valueNameTopic, setValueNameTopic] = useState('')
    const [valueContent, setValueContent] = useState('')

    const [error, setError] = useState('')
    const [createTopic, result] = useCreateTopicMutation()

    const submitHandler = (event: React.FormEvent) => {


        if(valueNameTopic.trim().length === 0) {
            setError("Введите правильное имя темы")
            return
        }
        if(valueNameTopic.trim().length > 40) {
            setError("Допустимое максимальное количество символом: 40")
            return
        }

        const topic: ITopic = {
            name: valueNameTopic,
            content: valueContent,
            forum: {
                id: forumId,
                name: "",
                subcategory:  {
                    id: 2,
                    name: "",
                    category: {
                        id: 2,
                        name: ""
                    }
                }
            }
        }
        createTopic(topic)
        if (result.data !== undefined) {
            onCreate(result.data)
        }
    }

    const changeHandlerNameTopic = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueNameTopic(event.target.value)
    }

    const changeHandlerContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValueContent(event.target.value)
    }

    return(
        <form onSubmit={submitHandler}>
            {error && <p className="text-red-600">{error}</p>}
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Введите название темы..."
                value={valueNameTopic}
                onChange={changeHandlerNameTopic}
            />
            <textarea
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Введите контент..."
                value={valueContent}
                onChange={changeHandlerContent}
            />
            <button type="submit" className="text-white bg-blue-800 hover:bg-blue-400
                font-medium rounded-lg text-sm px-4 py-2 lg:px-5 mt-2 lg:py-2.5">Создать</button>
        </form>
    )
}