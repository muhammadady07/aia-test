const { setHeader } = require('../../services/setHeader');
const flickrPhotoHandler = require('../../api/flickrPhoto/index');

module.exports = (app) => {
  app.get('/api/flickr-photos', setHeader, flickrPhotoHandler.getAll);
};
