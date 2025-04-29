import pool from "../config/database.js";

export const getAllTodos = async(req,res) => {
    try{
        const result = await pool.query('SELECT * FROM todos ORDER BY id');
        res.json(result.rows);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

export const createTodos = async(req,res) => {
    try{
        const {title,description,completed} = req.body;
        const result = await pool.query('INSERT INTO todos(title,description,completed) VALUES($1,$2,$3) RETURNING *',[title,description,completed]);
        res.status(201).json(result.rows[0]);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

export const updateTodos = async(req,res) => {
    try{
        const { id } = req.params;
        const { title, description, completed } = req.body;
        const result = await pool.query('UPDATE todos SET title=$1, description=$2, completed=$3 WHERE id=$4 RETURNING *',
            [title, description, completed, id]
    );
    res.json(result.rows[0]);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

export const deleteTodos = async(req,res) => {
    try{
        const { id } = req.params;
        await pool.query('DELETE FROM todos WHERE id=$1', [id]);
        res.status(204).send();
    }catch(error) {
        res.status(500).json({ message: error.message });
      }
}