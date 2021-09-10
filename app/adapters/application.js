import RESTAPIAdapter from '@ember-data/adapter/rest';
import config from 'web-page-by-ember/config/environment';
import qs from 'query-string';

export default class ApplicationAdapter extends RESTAPIAdapter {
  headers = {
    Authorization: `Bearer ${config.ACCESS_TOKEN}`,
  };

  createQueryString(searchParametres) {
    // let editedParametres = {};

    // for (let key in searchParametres) {
    //   if (searchParametres[key] !== '') {
    //     editedParametres[key] = searchParametres[key];
    //   }
    // }

    // console.log(qs.stringify(editedParametres));
    return qs.stringify(searchParametres);
  }
}
