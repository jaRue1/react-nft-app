const admin = require('firebase-admin')
const { connectFirestore } = require('./firestore')
// get nfts from firestore db
exports.getNfts = (req, res) => {
  const db = connectFirestore()
  db.collection('nfts').get()
    .then(collection => {
      const nftList = collection.docs.map(doc => {
        let nft = doc.data()
        nft.id = doc.id
        return nft
      })
      res.send(nftList)
    })
    .catch(err => res.status(500).send('Error getting nfts: ' + err.message))
}

exports.importNfts = (req, res) => {
  if(!req.body || !req.body.text || !req.body.displayName || !req.body.photoUrl) {
    res.status(400).send('Invalid request')
  }
  const db = connectFirestore()
  const {/* some stuff */} = req.body
  const now = admin.firestore.FieldValue.serverTimestamp()
  const newNft = {/* object structure */}
  db.collection('nfts').add(newNft)
    .then(() => {
      this.getNfts(req, res)
    })
    .catch(err => res.status(500).send('Error posting Nfts: ' + err.message))
}