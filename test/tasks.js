import { expect } from "chai";
import qa from "../config/qa.js";
import { closeTask, createTask, deleteTask, updateTask } from "../requests/tasks.js";
import { createTaskBody, updateTaskBody } from "../requests body/tasks.js";

    describe('Positive tests', () => {
        it('create /tasks', async () => {
           const res = await createTask(createTaskBody)
            expect(res.statusCode).to.eql(200)
            qa.task_id = res.body.id
        });

        it('update /tasks', async () => {
            const res = await updateTask(updateTaskBody)
             expect(res.statusCode).to.eql(200)
             expect(res.body.content).to.include('Updated')
             expect(res.body.description).to.include('Updated');
         });

         it('get /tasks', async () => {
            const res = await updateTask(updateTaskBody)
             expect(res.statusCode).to.eql(200)
         });

         it('close /tasks', async () => {
            const res = await closeTask()
             expect(res.statusCode).to.eql(204)
         });

         it('delete /tasks', async () => {
            const res = await deleteTask()
             expect(res.statusCode).to.eql(204)
         });

});