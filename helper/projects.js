import request from "../config/common.js";
import qa from "../config/qa.js";
const token = `${{secrets.API_KEY}}`

export const getAllProjects = async () =>{
    
        const res = await request
                .get('/projects')
                .set('Authorization', `Bearer ${token}`)

                return res
}

export const getProject = async () =>{
    
        const res = await request
                .get(`/projects/${qa.project_id}`)
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

export const deleteProject = async () =>{
    
        const res = await request
                .delete(`/projects/${qa.project_id}`)
                .set('Authorization', `Bearer ${token}`)

                return res
}