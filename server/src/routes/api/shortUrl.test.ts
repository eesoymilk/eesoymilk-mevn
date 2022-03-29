import request from "supertest";
import app, { main, exitdb } from "../../app";

beforeAll((done) => {
  done();
});

test("connecting to db", async () => {
  expect(await main()).toBe("succesfully connected to db.");
});

describe("GET /api/shortUrl", () => {
  test("Get all short urls", async () => {
    const res = await request(app).get("/api/shortUrl").send();
    expect(res.statusCode).toBe(200);
  });

  test("Enter an invalid short url", async () => {
    const res = await request(app).get("/api/shortUrl/farboo").send();
    expect(res.statusCode).toBe(404);
  });
});

describe("POST /api/shortUrl", () => {
  test("Create a new url", async () => {
    const res = await request(app).post("/api/shortUrl").send({
      url: "https://www.test.com",
    });
    expect(res.statusCode).toBe(201);
  });
});

afterAll((done) => {
  exitdb();
  done();
});
