import JSONSerializer from '@ember-data/serializer/json';

export default class UserSerializer extends JSONSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const data = super.normalizeResponse(
      store,
      primaryModelClass,
      payload.data,
      id,
      requestType
    );

    // console.log('user serializer payload: ', payload);

    return {
      ...payload,
      ...data,
    };
  }
}
