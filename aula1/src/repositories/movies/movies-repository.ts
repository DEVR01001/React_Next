import { MovieModel } from "@/models/movies/movies-model";

export interface PostRepository {
    findAll(): Promise<MovieModel[]>
}