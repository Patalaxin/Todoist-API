import { expect } from "chai";
import { getAllProjects, getProject, createProject, deleteProject } from "../requests/projects.js";
import { createProjectBody } from "../requests body/projects.js";
import qa from "../config/qa.js";

    describe('Positive Tests Projects API', () => {
        it('Get All Projects /projects', async () => {
            const res = await getAllProjects()
            expect(res.statusCode).to.eql(200)
        });

         it('Create Project /projects', async () => {
            const res = await createProject(createProjectBody)
             expect(res.statusCode).to.eql(200)
             qa.project_id = res.body.id
         });

         it('Get Project /projects', async () => {
            const res = await getProject(qa.project_id)
             expect(res.statusCode).to.eql(200)
             expect(res.body.id).to.eql(qa.project_id)
         });

         it('Delete Project /projects', async () => {
            const res = await deleteProject(qa.project_id)
             expect(res.statusCode).to.eql(204)
         });

});

    describe('Negative Tests Projects API', () => {

         it('Create Project Without Required Fields /projects', async () => {
            let {name, ...newCreateProjectBody} = {...createProjectBody}

            const res = await createProject(newCreateProjectBody)
             expect(res.statusCode).to.eql(400)
             expect(res.error.text).to.eql("Name must be provided for the project creation")
         });

         it('Get Project With Non-Existent ID /projects', async () => {
            const res = await getProject(qa.randomProjectId)
             expect(res.statusCode).to.eql(404)
             expect(res.error.text).to.eql("Project not found")
         });

         it('Delete Project With Non-Existent ID /projects', async () => {
            const res = await deleteProject(qa.randomProjectId)
             expect(res.statusCode).to.eql(204)
         });

});
    