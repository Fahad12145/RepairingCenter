const siteUrl = 'https://www.coolappliancesrepairingcenter.com/'
module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  policies: [{ userAgent: "*" }, { userAgent: "*", allow: "/" }],
}