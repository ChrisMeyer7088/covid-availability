const artist = require('./artist')
const album = require('./album')
const track = require('./track')
const market = require('./market')
const user = require('./user')
const browse = require('./browse')
const show = require('./show')
const search = require('./search')
const episode = require('./episode')
const personalization = require('./personalization')
const playlist = require('./playlist')
const follow = require('./follow')
const player = require('./player')

const root = {}

Object.assign(root, artist)
Object.assign(root, album)
Object.assign(root, track)
Object.assign(root, market)
Object.assign(root, user)
Object.assign(root, browse)
Object.assign(root, show)
Object.assign(root, search)
Object.assign(root, episode)
Object.assign(root, personalization)
Object.assign(root, playlist)
Object.assign(root, follow)
Object.assign(root, player)

module.exports = root
