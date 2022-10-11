
export interface ITopic {
    id: number
    name: string
    content: string
}

export interface ICategory {
    id?: number
    name: string
}

export interface ISubcategory {
    id?: number
    name: string
    category: ICategory
}

export interface IForum {
    id?: number
    name: string
    subcategory: ISubcategory
}

export interface ServerResponse<T> {
    total_count: number
    incomplete_results: boolean
    items: T[]
}