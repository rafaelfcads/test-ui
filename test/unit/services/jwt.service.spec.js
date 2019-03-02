'use strict'
describe('/app/services/jwt', () => {

    let JWTService

    beforeEach(angular.mock.module('app.services'))

    beforeEach(inject(JWT => {
        JWTService = JWT
    }))

    it('can be instantiated JWTService', () => {
        expect(JWTService).not.toBeDefined()
    })

 
})
