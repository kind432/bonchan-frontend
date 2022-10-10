import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ICategory, IForum, ISubcategory, ITopic} from "../../models/models";

export const bonchanApi = createApi({
    reducerPath: 'bonchan/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/'
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        topicsAllList: build.query<ITopic[], void>({
            query: () => ({
                url: 'topics/',
                method: 'GET'
            })
        }),
        topicsListByForumId: build.query<ITopic[], number>({
            query: (forumId :number) => ({
                url: 'topics/' + forumId,
                method: 'GET'
            })
        }),
        categoriesAllList: build.query<ICategory[], void>({
            query: () => ({
                url: 'categories/',
                method: 'GET'
            })
        }),
        createCategory: build.mutation<ICategory, ICategory>({
            query: (category: ICategory) => ({
                url: 'categories/create',
                body: category,
                method: 'POST',
            })
        }),
        deleteCategory: build.mutation<void, number>({
            query: (id: number) => ({
                url: 'categories/delete/' + id,
                method: 'DELETE',
            })
        }),
        updateCategory: build.mutation<ICategory, ICategory>({
            query: (category: ICategory) => ({
                url: 'categories/update',
                body: category,
                method: 'PUT',
            })
        }),
        subcategoriesListByCategoryId: build.query<ISubcategory[], number>({
            query: (categoryId: number) => ({
                url: 'subcategories/' + categoryId,
                method: 'GET'
            })
        }),
        createSubcategory: build.mutation<ISubcategory, ISubcategory>({
            query: (subcategory: ISubcategory) => ({
                url: 'subcategories/create',
                body: subcategory,
                method: 'POST',
            })
        }),
        forumsListBySubcategoryId: build.query<IForum[], number>({
            query: (subcategoryId: number) => ({
                url: 'forums/' + subcategoryId,
                method: 'GET'
            })
        }),
    })
})

export const {
    useTopicsAllListQuery,
    useCategoriesAllListQuery,
    useCreateCategoryMutation,
    useDeleteCategoryMutation,
    useUpdateCategoryMutation,
    useTopicsListByForumIdQuery,
    useSubcategoriesListByCategoryIdQuery,
    useCreateSubcategoryMutation,
    useForumsListBySubcategoryIdQuery,
} = bonchanApi