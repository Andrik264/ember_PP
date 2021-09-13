import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UserPageTodosController extends Controller {
  @tracked title = null;

  @action
  async createTodo() {
    await this.store
      .createRecord('todo', {
        user_id: this.userId,
        title: this.title,
        due_on: '2021-09-16T00:00:00.000+05:30',
        status: false,
      })
      .save();

    this.title = null;
    this.send('refreshModel');
  }

  @action
  async changeTodoStatus(todo_id) {
    await this.store.findRecord('todo', todo_id).then((todo) => {
      todo.status = !todo.status;
      todo.save();
    });
  }

  get userId() {
    return this.model.query.user_id;
  }
}
