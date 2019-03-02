export default class Flight {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  query(config) {
    const urlRoot = `${this._AppConstants.api}/v1/flights`
    const url = config.filters
      ? `${urlRoot}/search/by-flight-code?flightCode=${config.filters}&sort=departDate,asc`
      : urlRoot

    return this._$http({ url, method: 'GET' }).then((res) => res.data._embedded)
  }
  
  get(id) {
    const url = `${this._AppConstants.api}/v1/flights/${id}`
    return this._$http({ url, method: 'GET' }).then((res) => res.data)
  }

}
