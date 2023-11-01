const { db } = require("./db");
const { Band, Musician, Song } = require("./index");

describe("Band, Musician, and Song Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await db.sync({ force: true });
  });

  // DONE - test creating a band
  test("can create a Band", async () => {
    const testBand = await Band.create({ name: "myBandName", genre: "Pop" });
    expect(testBand).toBeInstanceOf(Band);
  });

  test("creates the right Band name", async () => {
    const testBand = await Band.create({ name: "myBandName", genre: "Pop" });
    expect(testBand.name).toBe("myBandName");
  });

  test("creates the right Band genre", async () => {
    const testBand = await Band.create({ name: "myBandName", genre: "Pop" });
    expect(testBand.genre).toBe("Pop");
  });

  // DONE - test creating a musician
  test("can create a Musician", async () => {
    const testMusician = await Musician.create({
      name: "Lois",
      instrument: "Guitar",
    });
    expect(testMusician).toBeInstanceOf(Musician);
  });

  test("creates the right Musician name", async () => {
    const testMusician = await Musician.create({
      name: "Lois",
      instrument: "Guitar",
    });
    expect(testMusician.name).toBe("Lois");
  });

  test("creates the right Musician genre", async () => {
    const testMusician = await Musician.create({
      name: "Lois",
      instrument: "Guitar",
    });
    expect(testMusician.instrument).toBe("Guitar");
  });

  // DONE - test creating a song
  test("can create a Song", async () => {
    const testSong = await Song.create({
      title: "Autumn",
      year: 2015,
      length: 300,
    });
    expect(testSong).toBeInstanceOf(Song);
  });

  test("creates the right Song name", async () => {
    const testSong = await Song.create({
      title: "Autumn",
      year: 2015,
      length: 300,
    });
    expect(testSong.title).toBe("Autumn");
  });

  test("creates the right Song name", async () => {
    const testSong = await Song.create({
      title: "Autumn",
      year: 2015,
      length: 300,
    });
    expect(testSong.year).toBe(2015);
  });

  test("creates the right Song name", async () => {
    const testSong = await Song.create({
      title: "Autumn",
      year: 2015,
      length: 300,
    });
    expect(testSong.length).toBe(300);
  });

  // DONE - test updating a Band
  test("can update a Band", async () => {
    const testBand = await Band.create({ name: "myBandName", genre: "Pop" });
    const updatedBand = await testBand.update({
      name: "helloWorld!",
    });
    expect(updatedBand.name).toBe("helloWorld!");
  });

  // DONE - test updating a Musician
  test("can update a Musician", async () => {
    const testMusician = await Musician.create({
      name: "Lois",
      instrument: "Guitar",
    });
    const updatedMusician = await testMusician.update({
      name: "Ruth",
    });

    expect(updatedMusician.name).toBe("Ruth");
  });

  // DONE - test updating a Song
  test("can update a Song", async () => {
    const testSong = await Song.create({
      title: "Autumn",
      year: 2015,
      length: 300,
    });
    const updatedSong = await testSong.update({
      length: 240,
    });

    expect(updatedSong.length).toBe(240);
  });

  // DONE - test deleting a band
  test("can delete a Band", async () => {
    const testBand = await Band.create({ name: "myBandName", genre: "Pop" });

    const deleted = await testBand.destroy();
    expect(deleted).toBeInstanceOf(Band);
  });

  // DONE - test deleting a musician
  test("can delete a Musician", async () => {
    const testMusician = await Musician.create({
      name: "Lois",
      instrument: "Guitar",
    });

    const deleted = await testMusician.destroy();
    expect(deleted).toBeInstanceOf(Musician);
  });

  // DONE - test deleting a song
  test("can delete a Song", async () => {
    const testSong = await Song.create({
      title: "Autumn",
      year: 2015,
      length: 300,
    });

    const deleted = await testSong.destroy();
    expect(deleted).toBeInstanceOf(Song);
  });
});
