"use server";

import Post from "@/lib/models/post.model";
import { connectToDB } from "../db";
import { revalidatePath } from "next/cache";

export const createPost = async ({ title, description, image }: {
    title: string;
    description: string;
    image?: string;
}) => {
    try {
        await connectToDB();
        if (!title || !description) {
            return { success: false, message: "Title and Description are required" }
        }
        const post = await Post.create({ title, description, image });
        if (!post) {
            return { success: false, message: "Failed to create post" }
        }
        revalidatePath("/");
        return { success: true, data: post, message: "Post created successfully" }
    } catch (error: any) {
        return { success: false, message: error?.message || "Failed to create post" }
    }
}

export const getPosts = async () => {
    try {
        await connectToDB();
        const posts = await Post.find({});
        if (!posts) {
            return { success: false, message: "Failed to fetch posts" }
        }
        if (posts.length === 0) {
            return { success: true, data: [], message: "No posts found" }
        }
        return { success: true, data: posts, message: "Posts fetched successfully" }
    } catch (error: any) {
        return { success: false, message: error?.message || "Failed to create post" }
    }
}

export const getPostById = async (id : string) => {
    try {
        await connectToDB();
        if (!id) {
            return { success: false, message: "Post ID is required" }
        }
        const post = await Post.findById(id);
        if (!post) {
            return { success: false, message: "Failed to fetch post" }
        }
        return { success: true, data: post, message: "Post fetched successfully" }
    } catch (error: any) {
        return { success: false, message: error?.message || "Failed to create post" }
    }
}

export const deletePost = async (id : string) => {
    try {
        await connectToDB();
        if (!id) {
            return { success: false, message: "Post ID is required" }
        }
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
            return { success: false, message: "Failed to delete post" }
        }
        revalidatePath("/");
        return { success: true, data: post, message: "Post deleted successfully" }
    } catch (error: any) {
        return { success: false, message: error?.message || "Failed to create post" }
    }
}