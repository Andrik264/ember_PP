import JSONSerializer from '@ember-data/serializer/json';

export default class PostSerializer extends JSONSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const data = super.normalizeResponse(
      store,
      primaryModelClass,
      payload.data,
      id,
      requestType
    );

    return {
      ...payload,
      ...data,
    };
  }
}
