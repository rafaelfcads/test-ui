import { get } from 'lodash'

class FlightListCtrl {
  constructor(Flights, $scope) {
    'ngInject'

    this._Flights = Flights

    this.setListTo(this.listConfig)
    
    $scope.$on('setListTo', (ev, query) => {
      this.setListTo(query)
    })

  }

  setListTo(query) {
    this.list = []
    this.listConfig = query
    this.runQuery()
  }

 runQuery() {
    this.loading = true;
    this._Flights
      .query({ filters: get(this.listConfig, 'filters', null) })
      .then(
        (res) => {
          this.loading = false
          this.list = res.flights
        }
      )
  }

}

export default {
  bindings: {
    limit: '=',
    listConfig: '='
  },
  controller: FlightListCtrl,
  templateUrl: 'components/flight/flight-list.html'
}
