import Route from '@ember/routing/route';

export default class PostsRoute extends Route {
  queryParams = {
    page: {
      refreshModel: true,
    },
    title: {
      refreshModel: true,
    },
  };

  async model(params) {
    const { page, title } = params;

    console.log(params);
    const data = await this.store.query('post', {
      queryParams: { page, title },
    });

    return data;
  }
}
