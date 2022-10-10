import React from "react";
import {ITopic} from "../../models/models";
import {TopicItem} from "../items/TopicItem";

interface Props {
    topics: ITopic[]
}

export function TopicsList({topics}: Props) {
    return(
        <div>
            {topics.length === 0 && <p className="text-center text-white">Темы не найдены...</p>}
            {topics && topics.map(topic => {
                return (
                    <TopicItem key={topic.id} topic={topic}/>
                )}
            )}
        </div>
    )
}