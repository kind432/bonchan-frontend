import {useParams} from "react-router-dom";
import {TopicsList} from "../components/lists/TopicsList";
import {useForumByIdQuery, useTopicsListByForumIdQuery} from "../store/bonchan/bonchan.api";
import React, {useState} from "react";
import {Modal} from "../components/modals/Modal";
import {CreateTopic} from "../components/forms/CreateTopic";
import {IForum, ITopic} from "../models/models";



export function TopicsPage() {
    const [showCreate, setShowCreate] = useState(false)
    const params = useParams()
    let forumId: number = 0
    if (params.id !== undefined) {
        forumId = parseInt(params.id)
    }
    const {isError, isLoading, data} = useTopicsListByForumIdQuery(forumId)
    const createHandler = (topic: ITopic) => {
        setShowCreate(false)
        window.location.reload()
    }

    return (
        <div className="flex-col mx-auto self-start my-4 w-3/4">
            <div className="rounded-lg mb-1 bg-gray-900 border-gray-500">
                <button onClick={() => setShowCreate(true)} className="bg-orange-200 my-1 mx-2 py-1 px-1 rounded">Создать тему</button>
            </div>
            <div className="rounded-lg bg-gray-900 border-gray-500">
                {isLoading && <p className="text-center text-white">Загрузка...</p>}
                {isError && <p className="text-center text-red-600">Ошибка!</p>}
                {!isError && data && <TopicsList topics={data}/>}
            </div>
            {showCreate && <Modal setShow={setShowCreate} title="Создание темы">
                <CreateTopic forumId={forumId} onCreate={createHandler}/>
            </Modal>}
        </div>
    )
}