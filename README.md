json-to-html
============

Simple javascript JSON to HTML conversion. Lots of room for improvement, I just needed something simple.
The only "JSON" thing about it is that it tries to parse the parameter if it's a string into a JS object.

How-to
------

HTML nodes/tags are represented by objects. Siblings can be put together on an array. Each object has the following properties:
* `type`: which tag will it be. The only one that gets special treatment is `text`, that gets it's content returned without more processing.
* `content`: (optional) the tag's content, again tags of type `text` won't get its content processed.
* `attributes`: (optional) an object with key/value pairs that will be the tag's attributes.

Examples:

* A div with some attributes:

        var json = {
          type: "div",
          attributes: {
            "class": "test-class",
            "id": "test-id"
          }
        };
        
        jsonToHtml(json); // <div class="test-class" id="test-id"></div>

* Nested divs

        var json = {
          type: "div",
          content: {
            type: "div"
          }
        };
        
        jsonToHtml(json); // <div><div></div></div>