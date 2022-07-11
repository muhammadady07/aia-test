const flickrPhoto = require('../../services/flickrPhoto');

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
