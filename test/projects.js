import { expect } from "chai";
import { getAllProjects, getProject, createProject, deleteProject } from "../helper/projects.js";
import { createProjectBody } from "../schemas/projects.js";
import qa from "../config/qa.js";

    describe('Positive tests', () => {
        it('getAllProjects /projects', async () => {
           const res = await getAllProjects()
            expect(res.statusCode).to.eql(200)
        });

         it('createProject /projects', async () => {
            const res = await createProject(createProjectBody)
             expect(res.statusCode).to.eql(200)
             qa.project_id = res.body.id
         });

         it('getProject /projects', async () => {
            const res = await getProject()
             expect(res.statusCode).to.eql(200)
             expect(res.body.id).to.eql(qa.project_id)
         });

         it('deleteProject /projects', async () => {
            const res = await deleteProject()
             expect(res.statusCode).to.eql(204)
         });

});

    