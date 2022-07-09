const flickrPhoto = require('../../services/flickrPhoto');
const flickrKey = '574d1ed8e8c3c4e77d3810c065e27305'

module.exports.getAll = async function(req, res) {
  try {
    const response = await flickrPhoto.getFlickrPhoto({
      ...req.query,
      format:"json",
      nojsoncallback:1,
    })
    return res.status(200).json({
      message: 'success',
      data: response,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

module.exports.getByTag = async function(req, res) {
  try {
    const response = await flickrPhoto.getFlickrPhotoByTag({
      ...req.query,
      format:"json",
      method:"flickr.photos.search",
      nojsoncallback:1,
      api_key:flickrKey,
    })
    return res.status(200).json({
      message: 'success',
      data: response,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
