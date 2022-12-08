import React from "react";
import {useParams} from "react-router-dom";
import {useCommentsByTopicIdQuery, useTopicByIdQuery} from "../../store/bonchan/bonchan.api";

export function CommentList() {
    const params = useParams()
    let topicId: number = 0
    if (params.id !== undefined) {
        topicId = parseInt(params.id)
    }
    const {isError, isLoading, data} = useCommentsByTopicIdQuery(topicId)
    return (
        <div>
            {data !== undefined && data.length === 0 && <p className="text-center text-white">Комментарии не найдены...</p>}
            {isLoading && <p className="text-center text-white">Загрузка...</p>}
            {isError && <p className="text-center text-red-600">Ошибка!</p>}
            {data && data.map(comment => {
                return (
                    <div> {comment.message} </div>
                )}
            )}
        </div>
    )

}
