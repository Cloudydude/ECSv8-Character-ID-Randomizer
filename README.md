<img src="src/img/favicon.png" align="right" />

# ECSv8 - Character ID Randomizer

ECSv8 simple tool for choosing an ID for an Extra Character, ignoring those already registered.

## How do I add my ID?

To add your characters' IDs to the registered list, you need to follow few simple steps:

1. Register on github.com if you haven't already. Make a fork of this repository.
2. Go to [https://fadeinside.github.io/ECSv8-Character-ID-Randomizer/](https://randomizer.extra-character-slots.com/) and generate any ID.
3. Open the file `src/json/characters.json`.
4. Depending on your goals:
	- If you want to register your character as a release and have it displayed on the site, then go to the `Released characters` comment and add the following code to the free space:

		```js
		"255":	{ // <- Character ID
			"Name":			"EXAMPLE",		// Character Name
			"Author":		"EXAMPLE",		// Characted Author

			// Optional -v-
			"Description":	"EXAMPLE",		// Character Description
			"ModVersion":	"vEXAMPLE",		// Mod Version
			"URL":			"https://"		// Mod Link
			// Delete "ReservedBy" if it was
		}
		```
	- If you just want to register an ID, in which case your character will not be displayed on the site, then go to the `Reserved characters` comment, and add the following code to the free space:

		```js
		"255":	{ "ReservedBy":	"Your Name" },
		```

	- Note: Where `255` is YOUR ID, replace this number with it.
    - Note: Add your IDs to the end of an existing line with commas where necessary. Do not touch or change the IDs that have already been.
	- Note: Specify a link to a protected resource in the URL. Specify it only if your mod released, is in the stage of a public demo, or to attract interested parties to the wip.
5. Save your changes and send a pull request with indicating the mod's link to your Extra Character so that we can know for sure that this ID is now being used.

Well done! Now the IDs you have added will be marked as used, and will not be found as suggested IDs for other people.

## FAQ

**Q. I noticed a bug, where can I contact?**  
A. Contact me in GitHub issues or via Discord on the Sonic 3 A.I.R Community server. Try to describe the problem in more detail.
