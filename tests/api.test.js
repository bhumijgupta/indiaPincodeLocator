const axios = require('axios');

test('API return error when pinecode not exists', async () => {
    const apiUrl = 'http://localhost:3000/api/non-existing-code';
    axios.get(apiUrl)
        .then(function (res) {
            expect("Error").toBe("Response");
        })
        .catch(function (error) {
            expect(error.response.data.error).toBe("Incorrect pincode");
        })
});



test('API return data when pincode exists', async () => {
    const apiUrl = 'http://localhost:3000/api/744210';
    axios.get(apiUrl)
        .then(function (response) {
            expect(response.data.postal_code).toBe("744210");
            expect(response.data.place_name).toBe("Oralkatcha");
            expect(response.data.state_name).toBe("Andaman & Nicobar Islands");
            expect(response.data.latitude).toBe("16.7362");
            expect(response.data.longitude).toBe("87.2991");
            expect(response.data.accuracy).toBe("1");
        })
        .catch(function (error) {
            expect("Error").toBe("Response");
        })
});