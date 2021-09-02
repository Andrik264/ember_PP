import Model, { attr } from '@ember-data/model';

export default class TodoModel extends Model {
  @attr user_id;
  @attr title;
  @attr due_on;
  @attr status;
}
