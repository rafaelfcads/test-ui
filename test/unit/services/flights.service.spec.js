'use strict'
describe('/app/services/flights', () => {

    let FlightService

    beforeEach(angular.mock.module('app.services'))

    beforeEach(inject(Flights => {
        FlightService = Flights
    }))

    it('can be instantiated FlightService', () => {
        expect(FlightService).not.toBeDefined()
    })

 
})
