
const service = require('./service');
let randonNumber = service.randonNumber;

describe('Test randonNumber', () => {
    it('test', () => {
        randonNumber = jest.fn().mockReturnValue(10);
        randonNumber();
        expect(randonNumber).toHaveBeenCalled();
        expect(randonNumber).toHaveBeenCalledTimes(1);
        expect(randonNumber()).toBe(10);
        expect(randonNumber).toHaveBeenCalledTimes(2);
    });
   
});