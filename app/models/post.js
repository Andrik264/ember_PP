import Model, { attr } from '@ember-data/model';

export default class PostModel extends Model {
  @attr user_id;
  @attr title;
  @attr body;
}
