export default ($stateProvider) => {
  'ngInject'

  const config = {
    url: '/flight/:id',
    controller: 'FlightCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'flight/flight.html',
    title: 'Flight',
    resolve: { flight: (Flights, $state, $stateParams) => Flights
    .get($stateParams.id)
    .then(
      (flight) => flight,
      (err) => $state.go('app.home')
    )}
  }

  $stateProvider.state('app.flight', config)
}
