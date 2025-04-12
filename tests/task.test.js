import request from 'supertest';
import app from '../app/index';

describe('Task Manager CRUD', () => {
  let id;

  it('should create a task', async () => {
    const res = await request(app).post('/tasks').send({
      title: 'Test Task',
      deadline: '2025-04-15'
    });
    expect(res.status).toBe(201);
    id = res.body.id;
  });

  it('should get a task', async () => {
    const res = await request(app).get(`/tasks/${id}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(id);
  });

  it('should update a task', async () => {
    const res = await request(app).put(`/tasks/${id}`).send({ status: 'done' });
    expect(res.status).toBe(200);
  });

  it('should delete a task', async () => {
    const res = await request(app).delete(`/tasks/${id}`);
    expect(res.status).toBe(200);
  });
});