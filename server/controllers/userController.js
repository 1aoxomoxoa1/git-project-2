const User = require("../models/users");

module.exports = {
  // async getUser(req) {
  //   const { username } = req.body;
  //   try {
  //     const user = await User.findOne({ where: { username } });

  //     if (user) {
  //       return user;
  //     } else {
  //       return null;
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     res.status(500).send(e);
  //   }
  // },

  async getUser(req, res) {
    const { email } = req.body;

    try {
      const user = await User.findOne({ where: { email } });
      
      if (user) {
        return user;
      } else {
        return null;
      }
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },

  async updateUser(req, res) {
    const { username, email, phone, password } = req.body;

    try {
      const user = await User.update(
        { username: username },
        { phone: phone},
        { password: password },
        { where: { email: email } }
      )
      res.session.userID = user;
      res.status(200).send("User updated");
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },

  async addUser(req, res) {
    const { username, email, phone, password } = req.body;

    try {
      const isUser = await this.getUser(req, res);

      if (!isUser) {
        const user = await User.create({ username, email, phone, password });
        res.session.userID = user;
        res.status(200).send("User created");
      } else {
        this.updateUser(req, res);
      };
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },

}