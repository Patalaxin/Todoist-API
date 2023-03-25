import { expect } from "chai";
import qa from "../config/qa.js";
import { closeTask, createTask, deleteTask, getTask, updateTask } from "../requests/tasks.js";
import { createTaskBody, updateTaskBody } from "../requests body/tasks.js";

    describe('Positive Tests Tasks API', () => {
        it('Create Task /tasks', async () => {
           const res = await createTask(createTaskBody)
            expect(res.statusCode).to.eql(200)
            qa.task_id = res.body.id
        });

        it('Update Task /tasks', async () => {
            const res = await updateTask(updateTaskBody, qa.task_id)
             expect(res.statusCode).to.eql(200)
             expect(res.body.content).to.include('Updated')
             expect(res.body.description).to.include('Updated');
         });

         it('Get Task /tasks', async () => {
            const res = await getTask(qa.task_id)
             expect(res.statusCode).to.eql(200)
         });

         it('Close Task /tasks', async () => {
            const res = await closeTask(qa.task_id)
             expect(res.statusCode).to.eql(204)
         });

         it('Delete Task /tasks', async () => {
            const res = await deleteTask(qa.task_id)
             expect(res.statusCode).to.eql(204)
         });

});

    describe('Negative Tests Tasks API', () => {

        it('Create Without Required Fields /tasks', async () => {
           let {content, ...newCreateTaskBody} = {...createTaskBody}
           const res = await createTask(newCreateTaskBody)
            expect(res.statusCode).to.eql(400)
            expect(res.error.text).to.eql('Required argument is missing')
            
        });

        it('Update With Non-Existent ID /tasks', async () => {
            const res = await updateTask(updateTaskBody, qa.randomTaskId)
             expect(res.statusCode).to.eql(404)
             expect(res.error.text).to.eql('Task not found')
         });

         it('Get With Non-Existent ID /tasks', async () => {
            const res = await getTask(qa.randomTaskId)
             expect(res.statusCode).to.eql(404)
             expect(res.error.text).to.eql('Task not found')
         });

         it('Close With Non-Existent ID /tasks', async () => {
            const res = await closeTask(qa.randomTaskId)
             expect(res.statusCode).to.eql(404)
             expect(res.error.text).to.eql('Task not found')
         });

         it('Delete With Non-Existent ID /tasks', async () => {
            const res = await deleteTask(qa.randomTaskId)
            expect(res.statusCode).to.eql(204)
         });

});