import http from "./http";

const ENDPOINT = "http://localhost:3000/";

export default function api(){};

var get = (uri) => http.get(ENDPOINT + uri);

// Index
api.collections  = () => get("collections");
api.documents    = () => get("documents");
api.formats      = () => get("formats");
api.modes        = () => get("modes");
api.periods      = () => get("periods");
api.demographics = () => get("demographics");
api.places       = () => get("places");
