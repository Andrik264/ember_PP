import RESTAPIAdapter from '@ember-data/adapter/rest';
import config from 'web-page-by-ember/config/environment';
import qs from 'query-string';

export default class ApplicationAdapter extends RESTAPIAdapter {
  headers = {
    Authorization: `Bearer ${config.ACCESS_TOKEN}`,
  };

  createQueryString(searchParametres) {
    return qs.stringify(searchParametres);
  }
}
