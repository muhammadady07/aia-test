const axios = require("axios");
const flickrMainUrl = "https://api.flickr.com/services"

const FlickrPhoto = {
  getFlickrPhoto(params) {
    return new Promise(async (resolve, reject) => {
      axios.get(`${flickrMainUrl}/feeds/photos_public.gne`, { params })
      .then(data => {
        if(data?.data){
          return resolve(data.data);
        }
      })
      .catch(err => {
        return reject(err);
      });
    });
  },
  getFlickrPhotoByTag(params) {
    return new Promise(async (resolve, reject) => {
      axios.get(`${flickrMainUrl}/rest/`, { params })
      .then(data => {
        if(data?.data){
          return resolve(data.data);
        }
      })
      .catch(err => {
          return reject(err);
      });
    });
  },
};

module.exports = FlickrPhoto;
