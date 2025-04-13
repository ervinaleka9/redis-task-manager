import request from 'supertest';
import app from '../app/index.js';
import { describe, it, expect, beforeAll} from 'vitest';

describe('Task Manager CRUD', () => {
  let id;

  beforeAll(() => {
    process.env.NODE_ENV = 'test';
  });

  it('should create a task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Test Task', deadline: '2025-04-15' });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    id = res.body.id;
  });

  it('should retrieve the created task', async () => {
    const res = await request(app).get(`/tasks/${id}`);
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      id,
      title: 'Test Task',
      deadline: '2025-04-15',
      status: 'pending'
    });
  });

  it('should update the task status', async () => {
    const res = await request(app)
      .put(`/tasks/${id}`)
      .send({ status: 'done' });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Task updated' });
  });

  it('should delete the task', async () => {
    const res = await request(app).delete(`/tasks/${id}`);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Task deleted' });
  });

  it('should return 404 for deleted task', async () => {
    const res = await request(app).get(`/tasks/${id}`);
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'Not found' });
  });
});