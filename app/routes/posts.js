import Route from '@ember/routing/route';

export default class PostsRoute extends Route {
  queryParams = {
    page: {
      refreshModel: true,
    },
  };

  async model(params) {
    const { page } = params;
    const data = await this.store.query('post', { queryParams: { page } });

    return data;
  }
}
