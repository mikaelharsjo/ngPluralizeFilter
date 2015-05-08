'use strict';

describe('pluralize', function() {
  var pluralize;

  beforeEach(module('ngPluralizeFilter'));

  beforeEach(inject(function($filter) {
    pluralize = $filter('pluralize');
  }));

  it('passes through unless string input', function () {
    expect(pluralize(123)).toBe(123);
    expect(pluralize('')).toBe('');
    expect(pluralize()).toBe();
  });

  it('handles word that are already in plural', function () {
    expect(pluralize('monkeys')).toBe('monkeys');
  });

  describe('regular plurals', function () {
    it('handles words that ends in a sibilant sound ', function () {
      expect(pluralize('kiss')).toBe('kisses');
      expect(pluralize('dish')).toBe('dishes');
      expect(pluralize('massage')).toBe('massages');
      expect(pluralize('witch')).toBe('witches');
      expect(pluralize('phase')).toBe('phases');
    });

    it('handles words that ends in voiceless consonant', function () {
      expect(pluralize('cat')).toBe('cats');
      expect(pluralize('death')).toBe('deaths');
    });

    it('handles words ending in vowels or voiced non-sibilants', function () {
      expect(pluralize('boy')).toBe('boys');
      expect(pluralize('chair')).toBe('chairs');
    });
  });

  describe('when pluralizing nouns ending in vowels', function () {
    it('handles words ending in o', function () {
      expect(pluralize('hero')).toBe('heroes');
      expect(pluralize('potato')).toBe('potatoes');
    });

    it('handles foreign origin words ending in o', function () {
      expect(pluralize('hetero')).toBe('heteros');
      expect(pluralize('photo')).toBe('photos');
      expect(pluralize('zero')).toBe('zeros');
      expect(pluralize('piano')).toBe('pianos');
      expect(pluralize('pro')).toBe('pros');
      expect(pluralize('kimono')).toBe('kimonos');
    });

    it('handles words ending in y', function () {
      expect(pluralize('cherry')).toBe('cherries');
      expect(pluralize('policy')).toBe('policies');
      expect(pluralize('monkey')).toBe('monkeys');
      expect(pluralize('soliloquy')).toBe('soliloquies');
    });
  });

  describe('near regular words', function () {
    it('handles old english exceptions', function () {
      expect(pluralize('bath')).toBe('baths');
      expect(pluralize('mouth')).toBe('mouths');
      expect(pluralize('calf')).toBe('calves');
      expect(pluralize('knife')).toBe('knives');
      expect(pluralize('life')).toBe('lives');
      expect(pluralize('house')).toBe('houses');
      expect(pluralize('moth')).toBe('moths');
      expect(pluralize('proof')).toBe('proofs');
    });
  });

  describe('irregular plurals', function () {
    it('handles nouns with identical singular and plural', function () {
      expect(pluralize('bison')).toBe('bison');
      expect(pluralize('buffalo')).toBe('buffalo');
      expect(pluralize('fish')).toBe('fish');
      expect(pluralize('moose')).toBe('moose');
      expect(pluralize('squid')).toBe('squid');
      expect(pluralize('plankton')).toBe('plankton');
      expect(pluralize('pike')).toBe('pike');
      expect(pluralize('salmon')).toBe('salmon');
      expect(pluralize('sheap')).toBe('sheap');
      expect(pluralize('squid')).toBe('squid');
      expect(pluralize('equipment')).toBe('equipment');
      expect(pluralize('information')).toBe('information');
      expect(pluralize('rice')).toBe('rice');
      expect(pluralize('money')).toBe('money');
      expect(pluralize('species')).toBe('species');
      expect(pluralize('series')).toBe('series');
      expect(pluralize('news')).toBe('news');
   });

   it('handles other irregular plurals', function () {
     expect(pluralize('ox')).toBe('oxen');
     expect(pluralize('person')).toBe('people');
     expect(pluralize('octopus')).toBe('octopusses');
   });
 });
});
