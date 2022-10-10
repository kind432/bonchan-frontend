import {CategoriesList} from "../lists/CategoriesList";
import {AiOutlinePlusSquare} from "react-icons/ai";
import {Modal} from "../modals/Modal";
import {CreateCategory} from "../forms/CreateCategory";
import React, {useState} from "react";
import {ICategory} from "../../models/models";

export function Sidebar() {
    const [show, setShow] = useState(false)
    const createHandler = (category: ICategory) => {
        setShow(false)
        window.location.reload()
    }
    return (
        <div className="hidden w-64 lg:flex flex-col my-4 mx-auto top-0 left-0 rounded-lg bg-gray-900 h-full border-r border-gray-500">
            <div className="flex items-center justify-center h-14 border-b border-gray-500">
                <div className="text-white">Категории</div>
                <div className="flex px-2 items-center justify-end">
                    <button
                        onClick={() => setShow(true)}>
                        <AiOutlinePlusSquare className="bg-orange-600 h-6 w-6 rounded"/>
                    </button>
                    {show && <Modal setShow={setShow} title="Создание категории">
                        <CreateCategory onCreate={createHandler}/>
                    </Modal>
                    }
                </div>
            </div>
            <CategoriesList/>
        </div>
    )
}