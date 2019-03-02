import angular from 'angular'
import FlightConfig from './flight.config'
import FlightCtrl from './flight.controller'

export default angular
    .module('app.flight', [])
    .config(FlightConfig)
    .controller('FlightCtrl', FlightCtrl)