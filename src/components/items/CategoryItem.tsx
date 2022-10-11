import {ICategory, ISubcategory} from "../../models/models";
import {SubcategoriesList} from "../lists/SubcategoriesList";
import React, {useState} from "react";
import {Modal} from "../modals/Modal";
import {useDeleteCategoryMutation} from "../../store/bonchan/bonchan.api";
import {AiOutlineDelete, AiOutlineEdit, AiOutlinePlusSquare} from "react-icons/ai";
import {UpdateCategory} from "../forms/UpdateCategory";
import {CreateSubcategory} from "../forms/CreateSubcategory";

interface Props {
    category: ICategory
}

export function CategoryItem({category}: Props) {
    const [showDelete, setShowDelete] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)
    const [showCreate, setShowCreate] = useState(false)
    const [deleteCategory] = useDeleteCategoryMutation()
    const deleteHandler = () => {
        setShowDelete(false)
        if(category.id !== undefined) {
            deleteCategory(category.id)
        }
        window.location.reload()
    }

    const updateHandler = (category: ICategory) => {
        setShowUpdate(false)
        window.location.reload()
    }

    const createHandler = (subcategory: ISubcategory) => {
        setShowCreate(false)
        window.location.reload()
    }

    return(
        <div>
            <ul className="flex flex-col py-4 space-y-1">
                <li className="px-5">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex items-center h-8">
                            <div className="text-xl text-emerald-500 font-bold tracking-wide text-gray-500">{category.name}</div>
                        </div>
                    </div>
                    <div className="flex flex-wrap py-1 gap-x-1">
                        <button onClick={() => setShowCreate(true)}><AiOutlinePlusSquare className="bg-orange-600 h-6 w-6 rounded"/></button>
                        <button onClick={() => setShowDelete(true)}><AiOutlineDelete className="bg-orange-600 h-6 w-6 rounded"/></button>
                        <button onClick={() => setShowUpdate(true)}><AiOutlineEdit className="bg-orange-600 h-6 w-6 rounded"/></button>
                    </div>
                    {showDelete && <Modal setShow={setShowDelete} title={"Вы точно хотите удалить категорию: " + category.name}>
                        <button onClick={deleteHandler} className="text-white bg-blue-800 hover:bg-blue-400
                     font-medium rounded-lg ml-2 py-2 lg:px-5 mt-2 lg:py-2.5">Да</button>
                        <button onClick={() => setShowDelete(false)} className="text-white bg-red-800 hover:bg-red-400
                     font-medium rounded-lg ml-2 py-2 lg:px-5 mt-2 lg:py-2.5">Нет</button>
                    </Modal>}
                    {showUpdate && <Modal setShow={setShowUpdate} title={"Изменение категории: " + category.name}>
                        <UpdateCategory category={category} onUpdate={updateHandler}/>
                    </Modal>
                    }
                    {showCreate && <Modal setShow={setShowCreate} title="Создание подкатегории">
                        <CreateSubcategory category={category} onCreate={createHandler}/>
                    </Modal>
                    }
                </li>
            </ul>
            {category.id && <SubcategoriesList key={category.id} categoryId={category.id}/>}
        </div>
    )
}