function updateDiscordSiteEmbed() {
    const isLargeImage = true
    var siteName = `A large-scale Sonic 3 A.I.R. framework for creating custom characters`
    var siteTitle = `Extra Character Slots`
    var siteDescription = `The ECSU Framework simple tool for choosing an ID for an Extra Character, ignoring those already registered.`
    const image = `https://cdn.discordapp.com/attachments/950854150307061810/1045665840382627840/image.png`
    const color = `#dd54ff`

    var output = `
		<meta property="og:title" content="${siteTitle}" />
		<meta property="og:site_name" content="${siteName}" />
		<meta property="og:image" content="${image}" />
		<meta property="og:description" content="${siteDescription}" />
		<meta name="theme-color" content="${color}">
	`

    if (isLargeImage) {
		output += `
		<meta property="twitter:card" content="summary_large_image" />
		`
	}

    document.head.innerHTML += output
}

updateDiscordSiteEmbed();