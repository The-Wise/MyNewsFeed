const expect = require('chai').expect;
const Feed = require('../../../models/feed-model').Feed;

describe('feedModel', function () {

    let  title = 'title',
         feedUrl = 'feedUrl',
         imageUrl = 'imageUrl',
         description = 'description';

    let feed = new Feed(title,feedUrl, imageUrl, description); 

    it('Expect Feed to exist', function () {
        expect(Feed).to.exist;

    });   
    it('Expect Feed to be a function', function () {
        expect(Feed).to.be.a('function');

    });
    it('Expect Feed constructor to set all params', function () { 
       expect(feed).to.be.a('object');

    });
    it('Expect Feed get title to return valid title', function () {
       expect(feed.title).to.equal(title);
       
    }); 
    it('Expect Feed get feedUrl to return valid feedUrl', function () {
       expect(feed.feedUrl).to.equal(feedUrl);
       
    });
    it('Expect Feed get imageUrl to return valid imageUrl', function () {
       expect(feed.imageUrl).to.equal(imageUrl);
       
    });
    it('Expect Feed get description to return valid content', function () {
       expect(feed.description).to.equal(description);
       
    });
    it('Should create Feed when passing valid params', function () {  
         function createFeed() {
             let feed = new Feed(
                 title, feedUrl, imageUrl, description);  
        };

        expect(createFeed).to.not.throw();
        
    });
    it('Should throw when all params are null', function () {
        function setNullParams() {
            feed.title = null;
            feed.feedUrl = null;
            feed.imageUrl = null;
            feed.description = null;
        }

        expect(setNullParams).to.throw();

    });
    it('Should throw when title is null', function () {
        function setNullTitle() {
            feed.title = null;
        }

        expect(setNullTitle).to.throw();

    });
    it('Should throw when feedUrl is null', function () {
        function setNullFeedUrl() {
            feed.feedUrl = null;
        }
     
        expect(setNullFeedUrl).to.throw();

    });
    it('Should not throw when imageUrl is null', function () {
        function setNullImageUrl() {
            feed.imageUrl = null;
        }

        expect(setNullImageUrl).to.not.throw();

    });
    it('Should throw when description is null', function () {
        function setNullDescription() {
            feed.description = null;
        }

        expect(setNullDescription).to.throw();

    });
    it('Should throw when all params empty strings', function () {
        function setEmptyParams() {
            feed.title = '';
            feed.imageUrl = '';
            feed.feedUrl = '';
            feed.description = '';
        }

        expect(setEmptyParams).to.throw();

    });
    it('Should throw when title is empty string', function () {
        function setEmptyTitle() {
            feed.title = '';
        }

        expect(setEmptyTitle).to.throw();

    });
    it('Should throw when feedUrl is empty string', function () {
        function setEmptyFeedUrl() {
            feed.feedUrl = '';
        }

        expect(setEmptyFeedUrl).to.throw();

    });
    it('Should throw when description is empty string', function () {
        function setEmptyDescription() {
            feed.description = '';
        }

        expect(setEmptyDescription).to.throw();

    });
    it('Should not throw when imageUrl is empty string', function () {
        function setEmptyImageUrl() {
            feed.imageUrl = '';
        }

        expect(setEmptyImageUrl).to.not.throw();

    });
    it('Expect id to exist when creating new feed', function () {
        expect(feed.id).to.not.be.undefined;

    });
    it('Expect feed.id to return instance id', function () {
        expect(feed.id).to.exist;

    });
    it('Expect id of each Feed to be unique', function () {
        
        let  titleSecond = 'title',
         feedUrlSecond = 'feedUrl',
         imageUrlSecond = 'imageUrl',
         descriptionSecond = 'description';

        let feedSecond = new Feed( titleSecond, feedUrlSecond, imageUrlSecond, descriptionSecond);

        let generatedId = feed.id;
        let secondGeneratedId = feedSecond.id;


        console.log ('generatedId: {0}', generatedId);
        console.log('secondGeneratedId: {0}', secondGeneratedId);
     
        expect(generatedId).to.be.not.equal(secondGeneratedId);

    });
    it('Expect feed.toObject to return object', function () {
        feed.toObject();

        expect(feed).to.be.an('object');

    });  
    it('Expect feed.toObject to return all keys', function () {
        feed.toObject();

        expect(feed).to.contain.keys(['id', '_title', '_feedUrl', '_imageUrl','_description']);

    });
     
});

