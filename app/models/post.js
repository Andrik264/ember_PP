import Model, { attr } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('number') user_id;
  @attr('string') title;
  @attr('string') body;
}
