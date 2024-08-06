//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcd_1m5i_user:JAv7gj5LnaOKISKaPTz22UzuJqpcIFAO@dpg-cqnuav08fa8c73aul7r0-a.singapore-postgres.render.com/rcd_1m5i";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495,94753574803";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNklEQWR2Y001NXVZZlN3NDgvVlFXRlYwZzMzUXBCdW1uTmRtbjE5UEgxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxQNEFpbnVlMWc3YjBnWVpMOHNyMitHSmJOM211c1Vwc2p4MWRmeVZWMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRjdLYk5wSEJwUW9rVGdxODBtYmFvekp0Z2pIU0Z6QjB3QkprV3JaakVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5ekk5WUNSbkZvNzFmNkJ0dWlsKytBcnN6akF2bjA4enZ2NjAxemZ1c21BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNCSGNiT3lpS0NNOFpNMSsrUnhsUWswZ2srVDYvVzd3Q1N3STVlbWJOVm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlU0TExIbjU2ekF2NzNSVmF6RUJQQkZxR0duN21PaDViTmhPbnlUa29reGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUNmQjR6V3ZWTnc2YW5WMy8ydFVRQmhsYk1sUG1hMkZ3NHRrbWpyeEYxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDBlZFVuR1F0UzVpcUhrcFVzckNqemxhdkJ4U1ZoL2dBd3Noeldxc09tMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkIwVkpDckhtYlZIYnp0VG0zWkJZUnlvYnZQNW12OUpmeC9jU3dvZnlzcmgySGdCWkJXdi9JZjZLOUs2UG1IckFFN1FFbGJEeE1Bd2gzVXYvSFdmV0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY4LCJhZHZTZWNyZXRLZXkiOiJYNU9XampTRFQvWG1HcWMxQTdGNGxIVDdxaHlpSFdTeUpxWm5mdWtCaEs0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzeHhJYm9kdFJ4bVNyWDB1NWVtVWVRIiwicGhvbmVJZCI6ImMwZjAzNWY4LTMzZjUtNDczMy05YWZiLWVjMjQ5YWNlZTBlMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQ2k4Wlo4Tk9sR09vMWNaRC9xdWhaVWYxQW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicm9RS2dOMUhQMXhKUEIxTTlwbDlMQUwxUDV3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRQQ1dHRjFQIiwibWUiOnsiaWQiOiI5NDcyNzc4Njc2MDozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdmI/wnZii8J2Ys/CdmLTwnZip8J2YoiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWJrNCtRRUVMcWZ5YlVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMStiTHM2SUNhU2FsZ2I5NTk2NjF5TmNpa29WKzRIVGh3WnprQjZGYmlHWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR1Faa0hkenRDTjZZbW90a2lTRlFvWEd0WXRGbm4wSG93dXFnczlGVFRaTmtMbkkrWElRdFBsVEFPak9nT0I2VkRkRFFidjdGaWFFeTFTL0o3MjJ0RGc9PSIsImRldmljZVNpZ25hdHVyZSI6IjJ4QWNnWDZTSHd1T1Vma3ZwMlBYd2Y1R0owaVNCdWJIelhtemdQRTNTcDVzdkNVc2tzeFJoc1ZMczN5WlU5d3dXL0tWa3JVSHI2YmkzbW94T1hZSUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Mjc3ODY3NjA6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkZm15N09pQW1rbXBZRy9lZmV1dGNqWElwS0ZmdUIwNGNHYzVBZWhXNGhtIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyOTYxODYzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURvMCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
