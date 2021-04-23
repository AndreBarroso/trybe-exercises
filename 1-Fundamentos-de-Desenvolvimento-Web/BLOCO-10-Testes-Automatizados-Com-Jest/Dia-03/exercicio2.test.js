const service = require('./service');
jest.mock("./service");
let randonNumber = service.randonNumber;

describe('Test randonNumber: Exercicio 2', () => {
    it('teste com jest.mock', () => {
        randonNumber.mockImplementation((a, b) => a / b);
        randonNumber(1, 2);
        expect(randonNumber).toHaveBeenCalled();
        expect(randonNumber).toHaveBeenCalledTimes(1);
        expect(randonNumber).toHaveBeenCalledWith(1, 2);
        expect(randonNumber(16, 2)).toBe(8);
        expect(randonNumber).toHaveBeenCalledTimes(2);
        expect(randonNumber).toHaveBeenCalledWith(16, 2);
        expect(randonNumber).toHaveBeenCalledWith(1, 2);
    });
});