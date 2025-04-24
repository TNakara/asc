function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const { ip, region, ua } = data;

  const sheet = SpreadsheetApp.openById("1KDYtBqc40_utbCCz-1iv7ql4fwj9CrYFu1ty_LUygfk").getSheetByName("ログ");
  sheet.appendRow([new Date(), ip, region, ua]);

  return ContentService.createTextOutput("OK")
    .setMimeType(ContentService.MimeType.JSON);
}
