/**
 * CTF class definition, representing the structure of a Capture The Flag (CTF) and his write-up object.
 * @module types/ctf
 * @author dherediat97
 * @version 1.0.0
 */
class CTF {
    // CTF class constructor
    constructor(
        title,
        author,
        imgCTFUrl,
        mainCategory,
        tags,
        platform,
        writeupUrl
    ) {
        this.title = title;
        this.author = author;
        this.imgCTFUrl = imgCTFUrl;
        this.mainCategory = mainCategory;
        this.tags = tags;
        this.platform = platform;
        this.writeupUrl = writeupUrl;
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }

    getImgCTFUrl() {
        return this.imgCTFUrl;
    }

    getMainCategory() {
        return this.mainCategory;
    }

    getTags() {
        return this.tags;
    }

    getPlatform() {
        return this.platform;
    }

    getWriteupUrl() {
        return this.writeupUrl;
    }
}
