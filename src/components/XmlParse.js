import axios from "axios";
function XmlParse() {
  axios
    .get("https://bayramalacam.com/tcmb.xml", {
      "Content-Type": "text/xsl; encoding=UTF-8; href=isokur.xsl ",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

}
export default XmlParse;
