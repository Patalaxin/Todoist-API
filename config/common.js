import qa from "../config/qa.js";
import supertest from "supertest";
import * as dotenv from 'dotenv'
dotenv.config()
const request = supertest(qa.baseUrl)

export default request;