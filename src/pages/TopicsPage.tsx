import {useParams} from "react-router-dom";
import {TopicsList} from "../components/lists/TopicsList";
import {useTopicsListByForumIdQuery} from "../store/bonchan/bonchan.api";
import React from "react";

export function TopicsPage() {
    const params = useParams()
    let forumId: number = 0
    if (params.id !== undefined) {
        forumId = parseInt(params.id)
    }
    const {isError, isLoading, data} = useTopicsListByForumIdQuery(forumId)
    return (
        <div className="flex-col self-start my-4 mx-auto w-3/4 rounded-lg bg-gray-900 border-gray-500">
            {isLoading && <p className="text-center text-white">Загрузка...</p>}
            {isError && <p className="text-center text-red-600">Ошибка!</p>}
            {!isError && data && <TopicsList topics={data}/>}
        </div>
    )
}