'use strict'
describe('/app/services/user', () => {

    let UserService

    beforeEach(angular.mock.module('app.services'))

    beforeEach(inject(User => {
        UserService = User
    }))

    it('can be instantiated JWTService', () => {
        expect(UserService).not.toBeDefined()
    })

 
})
