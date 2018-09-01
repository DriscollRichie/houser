module.exports = {
  getProperties: async (req, res) => {
    try {
      const db = req.app.get('db')
      const { account_id } = req.session.user

      let properties = await db.get_all_properties({ account_id })
      res.status(200).send(properties)
    } catch (err) {
      res.sendStatus(500)
      console.error('getProperties function failed in propertyCtrl.js:', err)
    }
  }
}