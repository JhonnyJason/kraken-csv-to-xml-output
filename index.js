// Generated by CoffeeScript 2.7.0
var run;

import Modules from "./allmodules.js";

global.allModules = Modules;

//###########################################################
run = async function() {
  var m, n, promises;
  promises = (function() {
    var results;
    results = [];
    for (n in Modules) {
      m = Modules[n];
      if (m.initialize != null) {
        results.push(m.initialize());
      }
    }
    return results;
  })();
  await Promise.all(promises);
  return Modules.startupmodule.cliStartup();
};

//###########################################################
run();
