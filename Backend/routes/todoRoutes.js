import { Router } from "express";
import { getAllTodos,createTodos,updateTodos,deleteTodos } from "../controllers/todoController.js";

const router = Router();

router.get("/",getAllTodos);
router.post("/",createTodos);
router.put("/:id",updateTodos);
router.delete("/:id",deleteTodos);

export default router;