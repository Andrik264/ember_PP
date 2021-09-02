import RESTAPIAdapter from '@ember-data/adapter/rest';
import qs from 'query-string';

export default class ApplicationAdapter extends RESTAPIAdapter {
  createQueryString(searchParametres) {
    let queryString = qs('query-string');
    let result = queryString.stringify(searchParametres);

    return result;
  }
}
