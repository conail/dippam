import privacyPolicy from "html!markdown!../markdown/policy/privacy.md";
import ethicalUsePolicy from "html!markdown!../markdown/policy/ethical-use.md";
import about from "html!markdown!../markdown/about.md";

export function get(uri) {
  switch(uri) {
    case '/about': return about;
    case '/policy/privacy': return privacyPolicy;
    case '/policy/ethical-use': return ethicalUsePolicy;
  }
}
