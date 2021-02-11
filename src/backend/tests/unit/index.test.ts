import supertest from "supertest";
import Server from "../../src/server";

const server = new Server();
const request = supertest(server.app);

describe("Server Test", () => {
  test("testig routes", async (done) => {
    const res = await request.get("/getdata");

    // Results
    expect(res.status).toBe(200);
    expect(res.body.success).toBe("hello world");
    done();
  });
});
