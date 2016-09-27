'use strict';

/**
 * Filter that converts a noun from singular form to plural.
 * Example: cat -> cats, policy -> policies
 */

angular.module('ngPluralizeFilter', []).filter('pluralize', function() {

  function pluralize(noun) {
    if (typeof noun !== 'string') { return noun; }

    var rules = [
      {regex: /octopus/gi, suffix: 'octopuses'},
      {regex: /person/gi, suffix: 'people'},
      {regex: /ox/gi, suffix: 'oxen'},
      {regex: /bison|buffalo|deer|duck|fish|moose|pike|plankton|salmon|sheep|squid|swine|trout|sheap|equipment|information|rice|money|species|series|news/i, suffix: '$&'}, // bison -> bison
      {regex: /(x|ch|ss|sh)$/gi, suffix: '$1es'}, // dish -> dishes, kiss -> kisses
      {regex: /(hetero|canto|photo|zero|piano|pro|kimono|portico|quarto)$/gi, suffix: '$1s'}, // kimono -> kimonos
      {regex: /(?:([^f])fe|([lr])f)$/, suffix: '$1$2ves'}, // knife -> knives, calf -> calves
      {regex: /o$/gi, suffix: 'oes'}, // hero -> heroes
      {regex: /([^aeiouy]|qu)y$/gi, suffix: '$1ies'}, // cherry -> cherries
      {regex: /s$/gi, suffix: 's'}, // cats -> cats
      {regex: /$/gi, suffix: 's'} // cat -> cats
    ];

    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      if (noun.match(rule.regex)) {
         noun = noun.replace(rule.regex, rule.suffix);
         break;
       }
    }

    return noun;
  }

  return function(input) {
    // if null or undefined pass it through
    return !input ? input : pluralize(input);
  };
});
