
export interface ITopic {
    id?: number
    name: string
    content: string
    forum: IForum
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

export interface IComment {
    id?: number
    message: string
    created_at: string
    updated_at: string
    topic: ITopic
}

export interface ServerResponse<T> {
    total_count: number
    incomplete_results: boolean
    items: T[]
}