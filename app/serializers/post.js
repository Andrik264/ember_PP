import JSONSerializer from '@ember-data/serializer/json';

export default class PostSerializer extends JSONSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // console.log('serializer payload: ', payload);

    const data = super.normalizeResponse(
      store,
      primaryModelClass,
      payload.data,
      id,
      requestType
    );

    // console.log('serializer result: ', data);

    const test = {
      ...payload,
      ...data,
    };

    console.log('Post || serializer-return: ', test);

    return {
      ...payload,
      ...data,
    };
  }
}
