import supertest from "supertest";
import Server from "../../src/server";
import mongoose from "mongoose";
import mocks from "../mocks/user_mock.json";

const server = new Server();
const request = supertest(server.app);

const host = process.env.MONGO_HOST || "localhost";
const uri = `mongodb://${host}/mayapp`;

beforeAll(async () => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
});

describe("Testing Routes", () => {
  it("/getusers route", async (done) => {
    const res = await request.get("/getusers");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
    done();
  });

  it("/createuser route", async (done) => {
    const res = await request
      .post("/createuser")
      .send({ userForm: mocks.userForm });
    expect(res.status).toBe(200);
    expect(res.body[0]).toHaveProperty("__v");
    expect(res.body[0]).toHaveProperty("_id");
    expect(res.body[0]).toHaveProperty("name");
    done();
  });

  it("/createuser route error handling", async (done) => {
    // If userForm empty -> error handling
    const res = await request.post("/createuser").send({ userForm: {} });
    expect(res.status).toBe(404);
    done();
  });
});
