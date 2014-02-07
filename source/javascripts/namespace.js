//= require vendor/underscore

function namespace(string, obj) {
        var current = window,
            names = string.split('.'),
            name;

        while(true) {
//        while(name = names.shift()) {
          name = names.shift();
          if (!name) { break;}

          current[name] = current[name] || {};
          current = current[name];
        }

        _.extend(current, obj);
}
