const Spiderman = require("./../app/spiderman.js")

describe("Unit test for spiderman class", () => {
    test('Create an spiderman object', () => {
      const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
      
      expect(andrewGarfield.name).toBe("Spiderman Sony");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrewGarfield.movies).toBe(2);
      expect(andrewGarfield.studio).toBe("Sony");
    });
  })

  describe("Use the methog getInfo()", () => {
    test('Info of about Tom Holland as Spiderman', () => {
      const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
      expect(tomHolland.name).toBe("Spiderman Marvel");
      expect(tomHolland.age).toBe(25);
      expect(tomHolland.actor).toBe("Tom Holland");
      expect(tomHolland.movies).toBe(5);
      expect(tomHolland.studio).toBe("Marvel");
      
      expect(tomHolland.getInfo()).toBe("Hey, I´m Tom Holland from Marvel Studio");
    });
  })

