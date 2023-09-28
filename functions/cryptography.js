import jwt from 'jsonwebtoken';

export default {
  generateAccessToken(username) {
    return jwt.sign(username, "12345678", { expiresIn: '2d' });
  },

  verifyJwtToken(token) {
    // return jwt.verify(token:string, "12345678")
    jwt.verify(token, "12345678", (err, data) => {
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
