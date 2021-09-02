import JSONSerializer from '@ember-data/serializer/json';

export default class UserSerializer extends JSONSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // console.log('Serializer args: ', payload);

    const data = super.normalizeResponse(
      store,
      primaryModelClass,
      payload.data,
      id,
      requestType
    );
    // console.log('Serializer result: ', data);

    const test = {
      ...payload,
      ...data,
    };

    // console.log('test: ', test);

    return {
      ...payload,
      ...data,
    };
  }
}
