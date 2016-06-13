import http from "./http.js";

const ENDPOINT = "http://localhost:3000/";

function get(uri) { return http.get(ENDPOINT + uri); }

export default class api {
  static collections() { return get("collections"); }
  static documents() { return get("documents"); }
}
