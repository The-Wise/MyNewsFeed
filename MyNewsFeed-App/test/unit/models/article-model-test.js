const expect = require('chai').expect;
//const { idGen } = require('../../../utils/id-generator');
const Article = require('../../../models/article-model').Article;

describe('articleModel', function () {

    let  title = 'title',
         date = '01.01.1000',
         articleUrl = 'articleUrl',
         feedUrl = 'feedUrl',
         imageUrl = 'imageUrl',
         summary = 'summary',
         content = 'content';

    let article = new Article(
            title, date, articleUrl, feedUrl, imageUrl, summary, content); 

    it('Expect Article to exist', function () {
        expect(Article).to.exist;

    });   
    it('Expect Article to be a function', function () {
        expect(Article).to.be.a('function');

    });
    it('Expect Article constructor to set all params', function () { 
       expect(article).to.be.a('object');

    });
    it('Expect Article get title to return valid title', function () {
       expect(article.title).to.equal(title);
       
    }); 
    it('Expect Article get articleUrl to return valid articleUrl', function () {
       expect(article.articleUrl).to.equal(articleUrl);
       
    });
    it('Expect Article get feedUrl to return valid feedUrl', function () {
       expect(article.feedUrl).to.equal(feedUrl);
       
    });
    it('Expect Article get imageUrl to return valid imageUrl', function () {
       expect(article.imageUrl).to.equal(imageUrl);
       
    });
    it('Expect Article get date to return valid date', function () {
       expect(article.date).to.equal(date);
       
    });
    it('Expect Article get summary to return valid summary', function () {
       expect(article.summary).to.equal(summary);
       
    });
    it('Expect Article get content to return valid content', function () {
       expect(article.content).to.equal(content);
       
    });
    it('Should create Article when passing valid params', function () {  
         function createArticle() {
             let article = new Article(
                 title, date, articleUrl, feedUrl, imageUrl, summary, content);  
        };

        expect(createArticle).to.not.throw();
        
    });
    it('Should throw when all params excepting imageUrl and content are null', function () {
        function setNullParams() {
            article.title = null;
            article.date = null;
            article.feedUrl = null;
            article.summary = null;
            article.articleUrl = null;
        }

        expect(setNullParams).to.throw();

    });
    it('Should throw when title is null', function () {
        function setNullTitle() {
            article.title = null;
        }

        expect(setNullTitle).to.throw();

    });
    it('Should throw when date is null', function () {
        function setNullDate() {
            article.date = null;
        }

        expect(setNullDate).to.throw();

    });
    it('Should throw when articleUrl is null', function () {
        function setNullArticleUrl() {
            article.articleUrl = null;
        }

        expect(setNullArticleUrl).to.throw();

    });
    it('Should throw when feedUrl is null', function () {
        function setNullFeedUrl() {
            article.feedUrl = null;
        }
     
        expect(setNullFeedUrl).to.throw();

    });
    it('Should not throw when imageUrl is null', function () {
        function setNullImageUrl() {
            article.imageUrl = null;
        }

        expect(setNullImageUrl).to.not.throw();

    });
    it('Should throw when summary is null', function () {
        function setNullSummary() {
            article.summary = null;
        }
       
       expect(setNullSummary).to.throw();

    });
    it('Should not throw when content is null', function () {
        function setNullContent() {
            article.content = null;
        }

        expect(setNullContent).to.not.throw();

    });
    it('Should throw when all params excepting imageUrl and content are empty strings', function () {
        function setEmptyParams() {
            article.title = '';
            article.date = '';
            article.articleUrl = '';
            article.feedUrl = '';
            article.summary = '';
        }

        expect(setEmptyParams).to.throw();

    });
    it('Should throw when title is empty string', function () {
        function setEmptyTitle() {
            article.title = '';
        }

        expect(setEmptyTitle).to.throw();

    });
    it('Should throw when date is empty string', function () {
        function setEmptyDate() {
            article.date = '';
        }

        expect(setEmptyDate).to.throw();

    });
    it('Should throw when articleUrl is empty string', function () {
        function setEmptyArticleUrl() {
            article.articleUrl = '';
        }

        expect(setEmptyArticleUrl).to.throw();

    });
    it('Should throw when feedUrl is empty string', function () {
        function setEmptyFeedUrl() {
            article.feedUrl = '';
        }

        expect(setEmptyFeedUrl).to.throw();

    });
    it('Should throw when summery is empty string', function () {
        function setEmptySummery() {
            article.summary = '';
        }

        expect(setEmptySummery).to.throw();

    });
    it('Should not throw when content is empty string', function () {
        function setEmptyContent() {
            article.content = '';
        }

        expect(setEmptyContent).to.not.throw();

    });
    it('Should not throw when imageUrl is empty string', function () {
        function setEmptyImageUrl() {
            article.imageUrl = '';
        }

        expect(setEmptyImageUrl).to.not.throw();

    });
    it('Expect id to exist when creating new article', function () {
        expect(article.id).to.not.be.undefined;

    });
    it('Expect article.id to return instance id', function () {
        expect(article.id).to.exist;

    });
    /*
    it('Expect id to be not equal to new passed id', function () {
        let generatedId = article.id;
        let setId = idGen();
        article.id = setId;
        let actualId = article.id;

        console.log (generatedId);
        console.log(setId);
        console.log (article.id);

        expect(actualId).to.be.not.equal(setId);
       
    });
   
    
    it('Expect id setter to throw', function () {
        
        function setId() {
            article.id = idGen();
        }
        let generatedId = article.id; 
        setId();      
        let actualId = article.id;

        console.log (generatedId);
        console.log (article.id);

        expect(setId).to.throw();
       
    });
    
    it('Expect id to be not changed when trying to set new one', function () {
        let generatedId = article.id;
        let setId = idGen();
        article.id = setId;
        let actualId = article.id;

        console.log ('generatedId: {0}', generatedId);
        console.log('setId: {0}', setId);
        console.log ('actualId {0}', actualId );
        
        
        expect(actualId).to.be.equal(generatedId);
       
    }); 
    */
   
    it('Expect id of each Article to be unique', function () {
        
        let  titleSecond = 'title',
         dateSecond = '01.01.1000',
         articleUrlSecond = 'articleUrl',
         feedUrlSecond = 'feedUrl',
         imageUrlSecond = 'imageUrl',
         summarySecond = 'summary',
         contentSecond = 'content';

        let articleSecond = new Article(
            titleSecond, dateSecond, articleUrlSecond, feedUrlSecond, imageUrlSecond, summarySecond, contentSecond);

        let generatedId = article.id;
        let secondGeneratedId = articleSecond.id;


        console.log ('generatedId: {0}', generatedId);
        console.log('secondGeneratedId: {0}', secondGeneratedId);
     
        expect(generatedId).to.be.not.equal(secondGeneratedId);

    });
    it('Expect article.toObject to return object', function () {
        article.toObject();

        expect(article).to.be.an('object');

    });   
    it('Expect article.toObject to return all keys', function () {
        article.toObject();

        expect(article).to.contain.keys(['id', '_title', '_date' ,'_articleUrl' ,'_feedUrl', '_imageUrl','_summary', '_content']);

    });
});

