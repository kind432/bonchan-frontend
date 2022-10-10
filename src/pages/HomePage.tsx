import React from 'react'
import {useTopicsAllListQuery} from '../store/bonchan/bonchan.api'
import {TopicsList} from "../components/lists/TopicsList";

export function HomePage() {
    const {isLoading, isError, data} = useTopicsAllListQuery()
    console.log(data)
    return (
        <div className="flex-col self-start mx-auto my-4 w-3/4 rounded-lg bg-gray-900 border-gray-500">
            <ul>
                {isLoading && <p className="text-center text-white">Загрузка...</p>}
                {isError && <p className="text-center text-red-600">Ошибка!</p>}
                {!isError && data && <TopicsList topics={data}/>}
            </ul>
        </div>
    )
}