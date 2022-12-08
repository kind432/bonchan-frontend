import React from "react";
import {useParams} from "react-router-dom";
import {
    useTopicByIdQuery,
} from "../store/bonchan/bonchan.api";
import {CommentList} from "../components/lists/CommentList";

export function CommentPage() {
    const params = useParams()
    let topicId: number = 0
    if (params.id !== undefined) {
        topicId = parseInt(params.id)
    }
    const {isError, isLoading, data} = useTopicByIdQuery(topicId)

    return(
        <div className="flex-col mx-auto self-start my-4 w-3/4">
            <div className="rounded-lg bg-gray-900 border-gray-500">
                {isLoading && <p className="text-center text-white">Загрузка...</p>}
                {isError && <p className="text-center text-red-600">Ошибка!</p>}
                {!isError && data &&
                    <div className="text-white">
                        { data.content }
                        <CommentList></CommentList>
                    </div>
                }
            </div>
            <div className="rounded-lg bg-gray-900 border-gray-500">

            </div>
        </div>
    )
}