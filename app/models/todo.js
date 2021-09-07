import Model, { attr } from '@ember-data/model';

export default class TodoModel extends Model {
  @attr('number') user_id;
  @attr('string') title;
  @attr('date') due_on;
  @attr('string') status;
}
