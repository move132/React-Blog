var http = require('http');
var fs = require('fs');
var cheerio = require("cheerio");

function downloadImg(options) {
    this.id = 1;

    this.initialize.call(this, options);
    return this;
}

downloadImg.prototype = {
    constructor: downloadImg,
    initialize: function (options) {
        this.baseUrl = options.baseUrl;
        this.dir = options.dir || '';
        this.reg = options.reg;
        this.total = options.total;
        this.page = options.from || 1;
    },
    start: function () {
        this.getPage();
    },
    getPage: function () {
        var self = this,
            data = null;

        if (this.page <= this.total) {
            http.get(this.baseUrl + this.page, function(res) {
                res.setEncoding("utf8");

                res.on('data', function(chunk) {
                    data += chunk;
                }).on('end', function() {
                    self.parseData(data);
                });
            });
        }
    },
    parseData: function (data) {
        var res = [],
            match;
        var $= cheerio.load(data);
         
        $("a.view_img_link").each(function(i, elem) {
            console.log( $(this).attr("href") ); 
            res.push( $(this).attr("href") );
        });
 
       // console.log(res);
        this.download(res);
    },
    download: function (resource) {
        var self = this,
            currentPage = self.page; 

        resource.forEach(function(src, idx) {
            var filename = src.substring(src.lastIndexOf('/') + 1),
                writestream = fs.createWriteStream(self.dir + filename);

         

            http.get("http:" + src, function(res) {
                res.pipe(writestream);
            });

           /* http.get(src, function(res) {
                res.pipe(writestream);
            });*/

            writestream.on('finish', function() {
                console.log('page: ' + currentPage + ' id: ' + self.id++ + ' download: ' + filename);
            });
        });

        self.page++;
        self.getPage();
    }
};


var downloadImg = new downloadImg({
    baseUrl: 'http://jandan.net/pic/page-',
    dir: './imgs/',
    total: 400,
    from: 40
});


downloadImg.start();