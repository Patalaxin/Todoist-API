import request from "../config/common.js";
import qa from "../config/qa.js";
const token = process.env.API_KEY

export const createTask = async (data) =>{
    
    const res = await request
            .post(`/tasks`)
            .set('Authorization', `Bearer ${token}`)
            .send(data)

            return res
}

export const updateTask = async (data, task_id) =>{
    
    const res = await request
            .post(`/tasks/${task_id}`)
            .set('Authorization', `Bearer ${token}`)
            .send(data)

            return res
}

export const getTasks = async () =>{
    
    const res = await request
            .get('/tasks')
            .set('Authorization', `Bearer ${token}`)

            return res
}

export const getTask = async (data) =>{
    
    const res = await request
            .get(`/tasks/${data}`)
            .set('Authorization', `Bearer ${token}`)

            return res
}

export const closeTask = async (data) =>{
    
    const res = await request
            .post(`/tasks/${data}/close`)
            .set('Authorization', `Bearer ${token}`)

            return res
}

export const deleteTask = async (data) =>{
    
    const res = await request
            .delete(`/tasks/${data}`)
            .set('Authorization', `Bearer ${token}`)

            return res
}