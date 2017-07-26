const expect = require('chai').expect;
let Article = require('../../models/article-model').Article;

describe('articleModel', function () {
    //imageUrl and content can be null
    let  title = 'title',
         date = '01.01.1000',
         articleUrl = 'articleUrl',
         feedUrl = 'feedUrl',
         imageUrl = 'imageUrl',
         summary = 'summary',
         content = 'content';

    let article = new Article(
            title, date, articleUrl, feedUrl, imageUrl, summary, content); 
    
    function createArticle() {
        let article = new Article(
            title, date, articleUrl, feedUrl, imageUrl, summary, content);  

    };   
    it('Expect Article to exist', function () {
        expect(Article).to.exist;

    });   
    it('Expect Article to be a function', function () {
        expect(Article).to.be.a('function');

    });
    it('Expect Article constructor to set all params', function () { 
       expect(article).to.be.a('object');

    });
    it('Expect Article get title to return valid name', function () {
       expect(article.title).to.equal(title);
       
    }); 
    it('Should create Article when passing valid params',function () {       
        expect(createArticle).to.not.throw();
        
    });
     it('Should throw when all params excepting imageUrl and content are null',function () {
        function setNullParams() {
            article.title = null;
            article.date = null;
            article.feedUrl = null;
            article.summary = null;
            article.articleUrl = null;
        }

        expect(setNullParams).to.throw();

    });
    it('Should throw when title is null',function () {
        function setNullTitle() {
            article.title = null;
        }

        expect(setNullTitle).to.throw();

    });
    it('Should throw when date is null',function () {
        function setNullDate() {
            article.date = null;
        }

        expect(setNullDate).to.throw();

    });
    it('Should throw when articleUrl is null',function () {
        function setNullArticleUrl() {
            article.articleUrl = null;
        }

        expect(setNullArticleUrl).to.throw();

    });
    it('Should throw when feedUrl is null',function () {
        function setNullFeedUrl() {
            article.feedUrl = null;
        }
     
        expect(setNullFeedUrl).to.throw();

    });
    it('Should not throw when imageUrl is null',function () {
        function setNullImageUrl() {
            article.imageUrl = null;
        }

        expect(setNullImageUrl).to.not.throw();

    });
    it('Should throw when summary is null',function () {
        function setNullSummary() {
            article.summary = null;
        }
       
       expect(setNullSummary).to.throw();

    });
    it('Should not throw when content is null',function () {
        function setNullContent() {
            article.content = null;
        }

        expect(setNullContent).to.not.throw();

    });
    it('Should throw when all params excepting imageUrl and content are empty strings',function () {
        function setEmptyParams() {
            article.title = '';
            article.date = '';
            article.articleUrl = '';
            article.feedUrl = '';
            article.summary = '';
        }

        expect(setEmptyParams).to.throw();

    });
    it('Should throw when title is empty string',function () {
        function setEmptyTitle() {
            article.title = '';
        }

        expect(setEmptyTitle).to.throw();

    });
     it('Should throw when date is empty string',function () {
         function setEmptyDate() {
            article.date = '';
        }

        expect(setEmptyDate).to.throw();

    });
      it('Should throw when articleUrl is empty string',function () {
         function setEmptyArticleUrl() {
            article.articleUrl = '';
        }

        expect(setEmptyArticleUrl).to.throw();

    });
      it('Should throw when feedUrl is empty string',function () {
         function setEmptyFeedUrl() {
            article.feedUrl = '';
        }

        expect(setEmptyFeedUrl).to.throw();

    });
      it('Should throw when summery is empty string',function () {
         function setEmptySummery() {
            article.summary = '';
        }

        expect(setEmptySummery).to.throw();

    });
          it('Should not throw when content is empty string',function () {
         function setEmptyContent() {
            article.content = '';
        }

        expect(setEmptyContent).to.not.throw();

    });
          it('Should not throw when imageUrl is empty string',function () {
         function setEmptyImageUrl() {
            article.imageUrl = '';
        }

        expect(setEmptyImageUrl).to.not.throw();

    });
});

