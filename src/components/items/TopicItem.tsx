import {ITopic} from "../../models/models";
import React from "react";

interface Props {
    topic: ITopic
}

export function TopicItem({topic}: Props) {
    return(
        <div>
            <ol>
                <div className="py-3">
                    <a href="#"
                       className="flex flex-row items-start">
                        <span className="px-4 ml-2 text-1xl hover:text-orange-500 text-white tracking-wide truncate">{topic.name}</span>
                    </a>
                </div>
            </ol>
        </div>
    )
}