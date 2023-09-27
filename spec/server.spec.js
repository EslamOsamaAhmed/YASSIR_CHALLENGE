const Request = require("request");

describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../server");
    });

    describe("Check Air Quality", () => {
        let data = {};
        beforeAll((done) => {
            Request.post(process.env.SERVER + `api/v1/check_air_quality?lon=2.352222&lat=48.856613`, (err, res, body) => {
                data.body = JSON.parse(body);
                data.status = res.statusCode;
                done();
            })
        });

        it("Check Quality Response", () => {
            expect(data.status).toBe(200)
        });

        it("Check Quality Response", () => {
            expect(data.body.Result).toEqual(jasmine.objectContaining({"longitude":"2.352222","latitude":"48.856613"}))
        });
    });

    describe("Check Most Polluted Point", () => {
        let data = {};
        beforeAll((done) => {
            Request.get(process.env.SERVER + `api/v1/check_most_polluted_point`, (err, res, body) => {
                data.status = res.statusCode;
                done();
            })
        });

        it("Check Most Polluted Point Response", () => {
            expect(data.status).toBe(200);
        });
    });

    afterAll(() => {
        setTimeout(() => process.exit(0), 1000)
    });
})
