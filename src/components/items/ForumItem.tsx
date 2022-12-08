import {Link} from "react-router-dom";
import {ICategory, IForum} from "../../models/models";
import {AiOutlineDelete, AiOutlineEdit, AiOutlinePlusSquare} from "react-icons/ai";
import React, {useState} from "react";
import {Modal} from "../modals/Modal";
import {UpdateCategory} from "../forms/UpdateCategory";
import {UpdateForum} from "../forms/UpdateForum";
import {useDeleteForumMutation} from "../../store/bonchan/bonchan.api";

interface Props {
    forum: IForum
}

export function ForumItem({forum}: Props) {
    const [showDelete, setShowDelete] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)

    const [deleteForum] = useDeleteForumMutation()

    const deleteHandler = () => {
        setShowDelete(false)
        if(forum.id !== undefined) {
            deleteForum(forum.id)
        }
        window.location.reload()
    }

    const updateHandler = (forum: IForum) => {
        setShowUpdate(false)
        window.location.reload()
    }
    return(
        <div>
            <li className="px-6 py-1 ml-2">
                <Link to={"/forum/" + forum.id}>
                    {<div className="text-base hover:text-orange-200 text-white tracking-wide truncate">
                        {forum.name}
                    </div>}
                </Link>
                <div className="flex flex-wrap py-1 gap-x-1">
                    <button onClick={() => setShowDelete(true)}><AiOutlineDelete className="bg-orange-200 h-5 w-5 rounded"/></button>
                    <button onClick={() => setShowUpdate(true)}><AiOutlineEdit className="bg-orange-200 h-5 w-5 rounded"/></button>
                </div>
                {showDelete && <Modal setShow={setShowDelete} title={"Вы точно хотите удалить форум: " + forum.name}>
                    <button onClick={deleteHandler} className="text-white bg-blue-800 hover:bg-blue-400
                     font-medium rounded-lg ml-2 py-2 lg:px-5 mt-2 lg:py-2.5">Да</button>
                    <button onClick={() => setShowDelete(false)} className="text-white bg-red-800 hover:bg-red-400
                     font-medium rounded-lg ml-2 py-2 lg:px-5 mt-2 lg:py-2.5">Нет</button>
                </Modal>}
                {showUpdate && <Modal setShow={setShowUpdate} title={"Изменение форума: " + forum.name}>
                    <UpdateForum forum={forum} onUpdate={updateHandler}/>
                </Modal>
                }
            </li>
        </div>
    )
}