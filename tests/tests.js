test("Empty object", function() {
  var json = {};
  
  equal(jsonToHtml(json), "", "An empty object produces an empty string.");
});

test("Empty array", function() {
  var json = [];
  
  equal(jsonToHtml(json), "", "An empty array produces an empty string.");
});

test("Single text element", function() {
  var json = {
    type: "text",
    content: "test text"
  };

  equal(jsonToHtml(json), "test text", "An object with only a test node returns the same text.");
});

test("Single non-text element", function() {
  var json = {
    type: "div"
  };

  equal(jsonToHtml(json), "<div></div>", "An object with only a non-text node returns the open and close tag for that element.");
});

test("Sibling non-text elements", function() {
  var json = [
    {
      type: "div"
    },
    {
      type: "div"
    }
  ];

  equal(jsonToHtml(json), "<div></div><div></div>", "An object with two siblings node should return one next to the other.");
});

test("Nested elements", function() {
  var json = {
    type: "div",
    content: {
      type: "div"
    }
  };

  equal(jsonToHtml(json), "<div><div></div></div>", "Nested elements in the JSON object are nested in the HTML.");
});

test("Element's attributes", function() {
  var json = {
    type: "div",
    attributes: {
      "class": "test-class",
      "id": "test-id"
    }
  };

  equal(jsonToHtml(json), '<div class="test-class" id="test-id"></div>', "Elements get the attributes specified in the JSON.");
});