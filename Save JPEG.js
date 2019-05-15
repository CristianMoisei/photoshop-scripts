var JPGquality = 12;
var docPath = '/Users/cristianmoisei/Desktop/';
var docName = app.activeDocument.name.replace(/\.[^\.]+$/, '');;

var saveFile = new File(docPath + '/' + docName + '.jpg');

var fileExists = saveFile.exists;
var tries = 1;
while (fileExists) {
  saveFile = new File(docPath + '/' + docName + ('-' + tries) + '.jpg');
  tries++;
  fileExists = saveFile.exists;
}

SaveJPEG(saveFile, JPGquality);

function SaveJPEG(saveFile, jpegQuality) {
  jpgSaveOptions = new JPEGSaveOptions();
  jpgSaveOptions.embedColorProfile = true;
  jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
  jpgSaveOptions.matte = MatteType.NONE;
  jpgSaveOptions.quality = jpegQuality; //1-12
  activeDocument.saveAs(saveFile, jpgSaveOptions, true, Extension.LOWERCASE);
}
