import request from "../config/common.js";
import qa from "../config/qa.js";
const token = `${{secrets.API_KEY}}`

export const createTask = async (data) =>{
    
    const res = await request
            .post(`/tasks`)
            .set('Authorization', `Bearer ${token}`)
            .send(data)

            return res
}

export const updateTask = async (data) =>{
    
    const res = await request
            .post(`/tasks/${qa.task_id}`)
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

export const getTask = async () =>{
    
    const res = await request
            .get(`/tasks/${qa.task_id}`)
            .set('Authorization', `Bearer ${token}`)

            return res
}

export const closeTask = async () =>{
    
    const res = await request
            .post(`/tasks/${qa.task_id}/close`)
            .set('Authorization', `Bearer ${token}`)

            return res
}

export const deleteTask = async () =>{
    
    const res = await request
            .delete(`/tasks/${qa.task_id}`)
            .set('Authorization', `Bearer ${token}`)

            return res
}