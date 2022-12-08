import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ICategory, IComment, IForum, ISubcategory, ITopic} from "../../models/models";

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
        createTopic: build.mutation<ITopic, ITopic>({
            query: (topic: ITopic) => ({
                url: 'topics/create',
                body: topic,
                method: 'POST',
            })
        }),
        deleteTopic: build.mutation<void, number>({
            query: (topicId: number) => ({
                url: 'topics/delete/' + topicId,
                method: 'DELETE',
            })
        }),
        updateTopic: build.mutation<ITopic, ITopic>({
            query: (topic: ITopic) => ({
                url: 'topics/update',
                body: topic,
                method: 'PUT',
            })
        }),
        topicById: build.query<ITopic, number>( {
            query: (id: number) => ({
                url: 'topics/getById/' + id,
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
            query: (categoryId: number) => ({
                url: 'categories/delete/' + categoryId,
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
        updateSubcategory: build.mutation<ISubcategory, ISubcategory>({
            query: (subcategory: ISubcategory) => ({
                url: 'subcategories/update',
                body: subcategory,
                method: 'PUT',
            })
        }),
        deleteSubcategory: build.mutation<void, number>({
            query: (subcategoryId: number) => ({
                url: 'subcategories/delete/' + subcategoryId,
                method: 'DELETE',
            })
        }),
        forumsListBySubcategoryId: build.query<IForum[], number>({
            query: (subcategoryId: number) => ({
                url: 'forums/' + subcategoryId,
                method: 'GET'
            })
        }),
        forumById: build.query<IForum, number>({
            query: (forumId: number) => ({
                url: 'forums/getForum/' + forumId,
                method: 'GET'
            })
        }),
        createForum: build.mutation<IForum, IForum>({
            query: (forum: IForum) => ({
                url: 'forums/create',
                body: forum,
                method: 'POST',
            })
        }),
        deleteForum: build.mutation<void, number>({
            query: (forumId: number) => ({
                url: 'forums/delete/' + forumId,
                method: 'DELETE',
            })
        }),
        updateForum: build.mutation<IForum, IForum>({
            query: (forum: IForum) => ({
                url: 'forums/update',
                body: forum,
                method: 'PUT',
            })
        }),
        createComment: build.mutation<IComment, IComment>({
            query: (comment: IComment) => ({
                url: 'comments/create',
                body: comment,
                method: 'POST',
            })
        }),
        deleteComment: build.mutation<void, number>({
            query: (commentId: number) => ({
                url: 'comments/delete/' + commentId,
                method: 'DELETE',
            })
        }),
        updateComment: build.mutation<IComment, IComment>({
            query: (comment: IComment) => ({
                url: 'comments/update',
                body: comment,
                method: 'POST',
            })
        }),
        commentsByTopicId: build.query<IComment[], number>({
            query: (topicId: number) => ({
                url: 'comments/' + topicId,
                method: 'GET'
            })
        }),
    })
})

export const {
    useTopicsAllListQuery,
    useTopicsListByForumIdQuery,
    useTopicByIdQuery,
    useCreateTopicMutation,
    useUpdateTopicMutation,
    useDeleteTopicMutation,
    useCategoriesAllListQuery,
    useSubcategoriesListByCategoryIdQuery,
    useCreateSubcategoryMutation,
    useUpdateSubcategoryMutation,
    useDeleteSubcategoryMutation,
    useCreateCategoryMutation,
    useDeleteCategoryMutation,
    useUpdateCategoryMutation,
    useForumByIdQuery,
    useForumsListBySubcategoryIdQuery,
    useCreateForumMutation,
    useUpdateForumMutation,
    useDeleteForumMutation,
    useCreateCommentMutation,
    useDeleteCommentMutation,
    useUpdateCommentMutation,
    useCommentsByTopicIdQuery,
} = bonchanApi