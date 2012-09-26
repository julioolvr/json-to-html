function jsonToHtml(json) {
  function buildStartTag(element, attributes) {
    var tag = "<" + element;
    var values = [];

    for (var att in attributes)
      values.push(att + "=\"" + attributes[att] + "\"");

    if (values.length)
      tag += " " + values.join(" ");

    tag += ">";
    return tag;
  }

  if (typeof json === "string")
    json = JSON.parse(json);

  var result = "";

  if (json instanceof Array) {
    result = "";

    for (var i = 0; i < json.length; i++)
      result += jsonToHtml(json[i]);

    return result;
  }

  if (!json.content)
    return "";

  if (json.type === "text") {
    result += json.content;
  } else {
    var startTag = buildStartTag(json.type, json.attributes);
    var endTag = "</" + json.type + ">";

    result += startTag + jsonToHtml(json.content) + endTag;
  }

  return result;
}