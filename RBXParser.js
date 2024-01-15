var {RBXBinaryParser} = require(`./Parser/BinaryParser`)
var {RBXXmlParser} = require(`./Parser/XmlParser`)
var {RBXMeshParser} = require(`./Parser/MeshParser`)
var {ByteReader} = require(`./Parser/ByteReader`)
var {assert} = require(`./Parser/Utils`)
function parseModel(buffer){
	const reader = new ByteReader(buffer)
	assert(reader.String(7) === "<roblox", "Not a valid RBXM file")

	if(reader.Byte() === 0x21) {
		return RBXBinaryParser.parse(buffer)
	}

	return RBXXmlParser.parse(buffer)
}

function parseMesh(buffer, params){
	return RBXMeshParser.parse(buffer, params)
}

exports.parseModel = parseModel
exports.parseMesh = parseMesh