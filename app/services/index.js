import angular from 'angular'
import UserService from './user.service'
import JwtService from './jwt.service'
import FlightService from './flights.service'

export default angular.module('app.services', [])
    .service('User', UserService)
    .service('JWT', JwtService)
    .service('Flights', FlightService)

