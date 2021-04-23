const service = require('./service');
jest.mock("./service");
let randonNumber = service.randonNumber;

describe('Test randonNumber: Exercicio 3', () => {
    it('teste com jest.mock', () => {
        randonNumber.mockImplementation((a, b, c) => a * b * c);
        randonNumber(1, 1, 1);
        expect(randonNumber).toHaveBeenCalled();
        expect(randonNumber).toHaveBeenCalledTimes(1);
        expect(randonNumber).toHaveBeenCalledWith(1, 1, 1);
        expect(randonNumber(2, 2, 2)).toBe(8);
        expect(randonNumber).toHaveBeenCalledTimes(2);
        expect(randonNumber).toHaveBeenCalledWith(2, 2, 2);

        randonNumber.mockReset();
        randonNumber.mockImplementation((a) => a * 2);
        randonNumber(3);
        expect(randonNumber).toHaveBeenCalled();
        expect(randonNumber).toHaveBeenCalledTimes(1);
        expect(randonNumber).toHaveBeenCalledWith(3);
        expect(randonNumber(3)).toBe(6);
        expect(randonNumber).toHaveBeenCalledTimes(2);
    });
});