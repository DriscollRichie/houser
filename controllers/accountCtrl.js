module.exports = {
  registerAccount: async (req, res) => {
    try {
      const db = req.app.get('db');
      const {username, password} = req.body

      let [user] = await db.register_account({username, password})
      req.session.user = user
      res.status(200).send(user)
    } catch(err) {
      console.error('registerAccount function failed in accountCtrl.js:', err)
      res.sendStatus(500)
    }
  }
}