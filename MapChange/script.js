{
	"name": "MapChange",
	"script": "MapChange.js",
	"version": "1.0",
	"description": "Provides a way for users to move between maps in a campaign without the GM needing to move them.\n\nFor full information on how to use the script, use the command '!mc help' in game.",
	"authors": "TheWhiteWolves",
	"roll20userid": "1043",
	"patreon": "",
	"useroptions": [{
		"name": "Debug Mode",
		"type": "checkbox",
		"description": "Set to true to use built in debug statements",
		"value": "false"
	}, {
		"name": "GM Notification",
		"type": "checkbox",
		"description": "Set to false to turn off notifing the GM when a player moves.",
		"value": "true"
	}, {
		"name": "Marker",
		"type": "text",
		"default": "[GM]",
		"description": "The marker used to decide what is placed in the private map."
	}, {
		"name": "Inverted Marker",
		"type": "checkbox",
		"description": "When true this places the pages with name containing the marker into the public list.\nUse this if you want maps to be private by default instead of public by default.",
		"value": "false"
	}],
	"dependencies": [],
	"modifies": {
		"Campaign.playerpageid": "read,write",
		"Campaign.playerspecificpages": "read,write",
		"Page.name": "read",
		"Page._id": "read",
		"Player._displayname": "read",
		"Player._id": "read",
		"state.MapChange": "read,write"
	},
	"conflicts": [],
	"previousversions": []
}
