import request from "../config/common.js";
import qa from "../config/qa.js";
const token = process.env.API_KEY

export const getAllProjects = async () =>{
    
        const res = await request
                .get('/projects')
                .set('Authorization', `Bearer ${token}`)

                return res
}

export const getProject = async (data) =>{
    
        const res = await request
                .get(`/projects/${data}`)
                .set('Authorization', `Bearer ${token}`)

                return res
}

export const createProject = async (data) =>{
    
        const res = await request
                .post(`/projects`)
                .set('Authorization', `Bearer ${token}`)
                .send(data)

                return res
}

export const deleteProject = async (data) =>{
    
        const res = await request
                .delete(`/projects/${data}`)
                .set('Authorization', `Bearer ${token}`)

                return res
}