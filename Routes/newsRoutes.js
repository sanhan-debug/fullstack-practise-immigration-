import { addNews, deleteNews, getAllNews, getNewsById } from '../Controllers/dataController.js';
import { Router } from 'express';

export const newsRoutes = new Router()

newsRoutes.get("/news", getAllNews)

newsRoutes.get("/news/:id", getNewsById)

newsRoutes.post("/news", addNews)

newsRoutes.delete("/news/:id", deleteNews)