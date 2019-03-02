import angular from 'angular'
import FlightMeta from './flight/flight-meta.component'
import FlightItem from './flight/flight-item.component'
import FlightList from './flight/flight-list.component'

export default angular
    .module('app.components', [])
    .component('flightMeta', FlightMeta)
    .component('flightItem', FlightItem)
    .component('flightList', FlightList)
