import {IForum, ISubcategory} from "../../models/models";
import React, {useState} from "react";
import {ForumsList} from "../lists/ForumsList";
import {AiOutlineDelete, AiOutlineEdit, AiOutlinePlusSquare} from "react-icons/ai";
import {Modal} from "../modals/Modal";
import {CreateForum} from "../forms/CreateForum";
import {UpdateSubcategory} from "../forms/UpdateSubcategory";
import {useDeleteSubcategoryMutation} from "../../store/bonchan/bonchan.api";

interface Props {
    subcategory: ISubcategory
}

export function SubcategoryItem({subcategory}: Props) {
    const [isShowDropDown, setIsShowDropDown] = useState(true)
    const [showDelete, setShowDelete] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)
    const [showCreate, setShowCreate] = useState(false)

    const [deleteSubcategory] = useDeleteSubcategoryMutation()
    const deleteHandler = () => {
        setShowDelete(false)
        if(subcategory.id !== undefined) {
            deleteSubcategory(subcategory.id)
        }
        window.location.reload()
    }

    const createHandler = (forum: IForum) => {
        setShowCreate(false)
        window.location.reload()
    }

    const updateHandler = (subcategory: ISubcategory) => {
        setShowCreate(false)
        window.location.reload()
    }

    return (
        <div>
            <button onClick={() => {
                setIsShowDropDown(prevState => !prevState)
            }}
                    className={"relative flex flex-row items-center h-11 border-transparent"}>
                <span className="px-4 ml-2 text-1xl hover:text-orange-500 text-white tracking-wide truncate">{subcategory.name}</span>
            </button>
            <div className="flex px-5 flex-wrap gap-x-1">
                <button onClick={() => setShowCreate(true)}><AiOutlinePlusSquare className="bg-orange-500 h-5 w-5 rounded"/></button>
                <button onClick={() => setShowDelete(true)}><AiOutlineDelete className="bg-orange-500 h-5 w-5 rounded"/></button>
                <button onClick={() => setShowUpdate(true)}><AiOutlineEdit className="bg-orange-500 h-5 w-5 rounded"/></button>
            </div>
            {showCreate && <Modal setShow={setShowCreate} title="Создание форума">
                <CreateForum subcategory={subcategory} onCreate={createHandler}/>
            </Modal>}
            {showUpdate && <Modal setShow={setShowUpdate} title={"Изменение подкатегории: " + subcategory.name}>
                <UpdateSubcategory subcategory={subcategory} onUpdate={updateHandler}/>
            </Modal>
            }
            {showDelete && <Modal setShow={setShowDelete} title={"Вы точно хотите удалить подкатегорию: " + subcategory.name}>
                <button onClick={deleteHandler} className="text-white bg-blue-800 hover:bg-blue-400
                     font-medium rounded-lg ml-2 py-2 lg:px-5 mt-2 lg:py-2.5">Да</button>
                <button onClick={() => setShowDelete(false)} className="text-white bg-red-800 hover:bg-red-400
                     font-medium rounded-lg ml-2 py-2 lg:px-5 mt-2 lg:py-2.5">Нет</button>
            </Modal>}
            {subcategory.id && <ForumsList key={subcategory.id} subcategoryId={subcategory.id} isShowDropDown={isShowDropDown}/>}
        </div>
    )
}