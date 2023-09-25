import jwt from 'jsonwebtoken';

export default {
  generateAccessToken(username) {
    return jwt.sign(username, appConfig.jwt.secret, { expiresIn: '2d' });
  },

  verifyJwtToken(token) {
    // return jwt.verify(token:string, appConfig.jwt.secret)
    jwt.verify(token, appConfig.jwt.secret, (err, data) => {
      // console.log(new Date());
      if (!err) {
        return data.username.toString();
      }
      // } else {
      //     return { status: "success", username: data.username }
      // }
    });
  },

  md5: (data) => {
    return md5(data);
  },
};
