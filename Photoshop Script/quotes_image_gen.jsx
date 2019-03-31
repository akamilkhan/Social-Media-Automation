#target photoshop



var myfile = File.openDialog("Select CSV File.", "*.csv", false)
myfile.open('r', undefined, undefined); // read the file
var content = myfile.read(); // get the text in it
myfile.close(); // close it again
var lines = content.split('\n');// split the lines (windows should be '\r')

var image = new File("PATH TO TEMPLATE");
app.open(image);

for (var i = 0; i < lines.length; i++) {
    var cells = lines[i].split('^');// get the cells
    Del("quote_copy");
    unhide("quote");
    changetext("quote", cells[2], cells[1]);
    duplicatelayer("quote", "quote_copy");
    hide("quote")
    ConvertLayertoSmartObject("quote_copy")
    VerticalAlign("quote_copy", "Layer 1")
    HorizontalAlign("quote_copy", "Layer 1")
    SaveAsJPG("PATH TO OUTPUTFOLDER", (String(i)))
}
//DEL OLD SMART OBJECT
function Del(Layer) {
    // =======================================================
    var idslct = charIDToTypeID("slct");
    var desc221 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref34 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref34.putName(idLyr, Layer);
    desc221.putReference(idnull, ref34);
    var idMkVs = charIDToTypeID("MkVs");
    desc221.putBoolean(idMkVs, false);
    executeAction(idslct, desc221, DialogModes.NO);

    // =======================================================
    var idDlt = charIDToTypeID("Dlt ");
    var desc222 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref35 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref35.putEnumerated(idLyr, idOrdn, idTrgt);
    desc222.putReference(idnull, ref35);
    executeAction(idDlt, desc222, DialogModes.NO);
}
//UNHIDE
function unhide(Layer) {
    // =======================================================
    var idShw = charIDToTypeID("Shw ");
    var desc270 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var list50 = new ActionList();
    var ref49 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref49.putName(idLyr, Layer);
    list50.putReference(ref49);
    desc270.putList(idnull, list50);
    executeAction(idShw, desc270, DialogModes.NO);
}
//CHANGE TextComposer
function changetext(Layer, quote, name) {
    // =======================================================
    var quote_size = quote.length;
    var name_size = name.length;
    var quote_text = "“" + quote + "”\r" + name + "\r"

    var idsetd = charIDToTypeID("setd");
    var desc225 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref38 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref38.putName(idLyr, Layer);
    desc225.putReference(idnull, ref38);
    var idT = charIDToTypeID("T   ");
    var desc226 = new ActionDescriptor();
    var idTxt = charIDToTypeID("Txt ");
    desc226.putString(idTxt, quote_text);
    var idwarp = stringIDToTypeID("warp");
    var desc227 = new ActionDescriptor();
    var idwarpStyle = stringIDToTypeID("warpStyle");
    var idwarpStyle = stringIDToTypeID("warpStyle");
    var idwarpNone = stringIDToTypeID("warpNone");
    desc227.putEnumerated(idwarpStyle, idwarpStyle, idwarpNone);
    var idwarpValue = stringIDToTypeID("warpValue");
    desc227.putDouble(idwarpValue, 0.000000);
    var idwarpPerspective = stringIDToTypeID("warpPerspective");
    desc227.putDouble(idwarpPerspective, 0.000000);
    var idwarpPerspectiveOther = stringIDToTypeID("warpPerspectiveOther");
    desc227.putDouble(idwarpPerspectiveOther, 0.000000);
    var idwarpRotate = stringIDToTypeID("warpRotate");
    var idOrnt = charIDToTypeID("Ornt");
    var idHrzn = charIDToTypeID("Hrzn");
    desc227.putEnumerated(idwarpRotate, idOrnt, idHrzn);
    var idwarp = stringIDToTypeID("warp");
    desc226.putObject(idwarp, idwarp, desc227);
    var idtextGridding = stringIDToTypeID("textGridding");
    var idtextGridding = stringIDToTypeID("textGridding");
    var idNone = charIDToTypeID("None");
    desc226.putEnumerated(idtextGridding, idtextGridding, idNone);
    var idOrnt = charIDToTypeID("Ornt");
    var idOrnt = charIDToTypeID("Ornt");
    var idHrzn = charIDToTypeID("Hrzn");
    desc226.putEnumerated(idOrnt, idOrnt, idHrzn);
    var idAntA = charIDToTypeID("AntA");
    var idAnnt = charIDToTypeID("Annt");
    var idantiAliasSharp = stringIDToTypeID("antiAliasSharp");
    desc226.putEnumerated(idAntA, idAnnt, idantiAliasSharp);
    var idtextShape = stringIDToTypeID("textShape");
    var list39 = new ActionList();
    var desc228 = new ActionDescriptor();
    var idTEXT = charIDToTypeID("TEXT");
    var idTEXT = charIDToTypeID("TEXT");
    var idbox = stringIDToTypeID("box");
    desc228.putEnumerated(idTEXT, idTEXT, idbox);
    var idOrnt = charIDToTypeID("Ornt");
    var idOrnt = charIDToTypeID("Ornt");
    var idHrzn = charIDToTypeID("Hrzn");
    desc228.putEnumerated(idOrnt, idOrnt, idHrzn);
    var idTrnf = charIDToTypeID("Trnf");
    var desc229 = new ActionDescriptor();
    var idxx = stringIDToTypeID("xx");
    desc229.putDouble(idxx, 1.000000);
    var idxy = stringIDToTypeID("xy");
    desc229.putDouble(idxy, 0.000000);
    var idyx = stringIDToTypeID("yx");
    desc229.putDouble(idyx, 0.000000);
    var idyy = stringIDToTypeID("yy");
    desc229.putDouble(idyy, 1.000000);
    var idtx = stringIDToTypeID("tx");
    desc229.putDouble(idtx, 0.000000);
    var idty = stringIDToTypeID("ty");
    desc229.putDouble(idty, 0.000000);
    var idTrnf = charIDToTypeID("Trnf");
    desc228.putObject(idTrnf, idTrnf, desc229);
    var idrowCount = stringIDToTypeID("rowCount");
    desc228.putInteger(idrowCount, 1);
    var idcolumnCount = stringIDToTypeID("columnCount");
    desc228.putInteger(idcolumnCount, 1);
    var idrowMajorOrder = stringIDToTypeID("rowMajorOrder");
    desc228.putBoolean(idrowMajorOrder, true);
    var idrowGutter = stringIDToTypeID("rowGutter");
    var idPnt = charIDToTypeID("#Pnt");
    desc228.putUnitDouble(idrowGutter, idPnt, 0.000000);
    var idcolumnGutter = stringIDToTypeID("columnGutter");
    var idPnt = charIDToTypeID("#Pnt");
    desc228.putUnitDouble(idcolumnGutter, idPnt, 0.000000);
    var idSpcn = charIDToTypeID("Spcn");
    var idPnt = charIDToTypeID("#Pnt");
    desc228.putUnitDouble(idSpcn, idPnt, 0.000000);
    var idframeBaselineAlignment = stringIDToTypeID("frameBaselineAlignment");
    var idframeBaselineAlignment = stringIDToTypeID("frameBaselineAlignment");
    var idalignByAscent = stringIDToTypeID("alignByAscent");
    desc228.putEnumerated(idframeBaselineAlignment, idframeBaselineAlignment, idalignByAscent);
    var idfirstBaselineMinimum = stringIDToTypeID("firstBaselineMinimum");
    var idPnt = charIDToTypeID("#Pnt");
    desc228.putUnitDouble(idfirstBaselineMinimum, idPnt, 0.000000);
    var idbounds = stringIDToTypeID("bounds");
    var desc230 = new ActionDescriptor();
    var idTop = charIDToTypeID("Top ");
    desc230.putDouble(idTop, 0.000000);
    var idLeft = charIDToTypeID("Left");
    desc230.putDouble(idLeft, 0.000000);
    var idBtom = charIDToTypeID("Btom");
    desc230.putDouble(idBtom, 1000.000000);
    var idRght = charIDToTypeID("Rght");
    desc230.putDouble(idRght, 901.498962);
    var idRctn = charIDToTypeID("Rctn");
    desc228.putObject(idbounds, idRctn, desc230);
    var idtextShape = stringIDToTypeID("textShape");
    list39.putObject(idtextShape, desc228);
    desc226.putList(idtextShape, list39);
    var idTxtt = charIDToTypeID("Txtt");
    var list40 = new ActionList();
    var desc231 = new ActionDescriptor();
    var idFrom = charIDToTypeID("From");
    desc231.putInteger(idFrom, 0);
    var idT = charIDToTypeID("T   ");
    desc231.putInteger(idT, quote_size + 3);
    var idTxtS = charIDToTypeID("TxtS");
    var desc232 = new ActionDescriptor();
    var idstyleSheetHasParent = stringIDToTypeID("styleSheetHasParent");
    desc232.putBoolean(idstyleSheetHasParent, true);
    var idfontPostScriptName = stringIDToTypeID("fontPostScriptName");
    desc232.putString(idfontPostScriptName, """MyriadArabic-BoldIt""");
    var idFntN = charIDToTypeID("FntN");
    desc232.putString(idFntN, """Myriad Arabic""");
    var idFntS = charIDToTypeID("FntS");
    desc232.putString(idFntS, """Bold Italic""");
    var idScrp = charIDToTypeID("Scrp");
    desc232.putInteger(idScrp, 4);
    var idFntT = charIDToTypeID("FntT");
    desc232.putInteger(idFntT, 0);
    var idSz = charIDToTypeID("Sz  ");
    var idPnt = charIDToTypeID("#Pnt");
    desc232.putUnitDouble(idSz, idPnt, 72.000000);
    var idfontCaps = stringIDToTypeID("fontCaps");
    var idfontCaps = stringIDToTypeID("fontCaps");
    var idallCaps = stringIDToTypeID("allCaps");
    desc232.putEnumerated(idfontCaps, idfontCaps, idallCaps);
    var iddigitSet = stringIDToTypeID("digitSet");
    var iddigitSet = stringIDToTypeID("digitSet");
    var iddefaultDigits = stringIDToTypeID("defaultDigits");
    desc232.putEnumerated(iddigitSet, iddigitSet, iddefaultDigits);
    var idmarkYDistFromBaseline = stringIDToTypeID("markYDistFromBaseline");
    var idPnt = charIDToTypeID("#Pnt");
    desc232.putUnitDouble(idmarkYDistFromBaseline, idPnt, 100.000000);
    var idtextLanguage = stringIDToTypeID("textLanguage");
    var idtextLanguage = stringIDToTypeID("textLanguage");
    var idukenglishLanguage = stringIDToTypeID("ukenglishLanguage");
    desc232.putEnumerated(idtextLanguage, idtextLanguage, idukenglishLanguage);
    var idTxtS = charIDToTypeID("TxtS");
    desc231.putObject(idTxtS, idTxtS, desc232);
    var idTxtt = charIDToTypeID("Txtt");
    list40.putObject(idTxtt, desc231);
    var desc233 = new ActionDescriptor();
    var idFrom = charIDToTypeID("From");
    desc233.putInteger(idFrom, quote_size + 3);
    var idT = charIDToTypeID("T   ");
    desc233.putInteger(idT, quote_text.length);
    var idTxtS = charIDToTypeID("TxtS");
    var desc234 = new ActionDescriptor();
    var idstyleSheetHasParent = stringIDToTypeID("styleSheetHasParent");
    desc234.putBoolean(idstyleSheetHasParent, true);
    var idfontPostScriptName = stringIDToTypeID("fontPostScriptName");
    desc234.putString(idfontPostScriptName, """MyriadArabic-BoldIt""");
    var idFntN = charIDToTypeID("FntN");
    desc234.putString(idFntN, """Myriad Arabic""");
    var idFntS = charIDToTypeID("FntS");
    desc234.putString(idFntS, """Bold Italic""");
    var idScrp = charIDToTypeID("Scrp");
    desc234.putInteger(idScrp, 4);
    var idFntT = charIDToTypeID("FntT");
    desc234.putInteger(idFntT, 0);
    var idSz = charIDToTypeID("Sz  ");
    var idPnt = charIDToTypeID("#Pnt");
    desc234.putUnitDouble(idSz, idPnt, 48.000000);
    var idfontCaps = stringIDToTypeID("fontCaps");
    var idfontCaps = stringIDToTypeID("fontCaps");
    var idallCaps = stringIDToTypeID("allCaps");
    desc234.putEnumerated(idfontCaps, idfontCaps, idallCaps);
    var iddigitSet = stringIDToTypeID("digitSet");
    var iddigitSet = stringIDToTypeID("digitSet");
    var iddefaultDigits = stringIDToTypeID("defaultDigits");
    desc234.putEnumerated(iddigitSet, iddigitSet, iddefaultDigits);
    var idmarkYDistFromBaseline = stringIDToTypeID("markYDistFromBaseline");
    var idPnt = charIDToTypeID("#Pnt");
    desc234.putUnitDouble(idmarkYDistFromBaseline, idPnt, 100.000000);
    var idtextLanguage = stringIDToTypeID("textLanguage");
    var idtextLanguage = stringIDToTypeID("textLanguage");
    var idukenglishLanguage = stringIDToTypeID("ukenglishLanguage");
    desc234.putEnumerated(idtextLanguage, idtextLanguage, idukenglishLanguage);
    var idTxtS = charIDToTypeID("TxtS");
    desc233.putObject(idTxtS, idTxtS, desc234);
    var idTxtt = charIDToTypeID("Txtt");
    list40.putObject(idTxtt, desc233);
    var desc235 = new ActionDescriptor();
    var idFrom = charIDToTypeID("From");
    desc235.putInteger(idFrom, quote_size + 3);
    var idT = charIDToTypeID("T   ");
    desc235.putInteger(idT, quote_text.length);
    var idTxtS = charIDToTypeID("TxtS");
    var desc236 = new ActionDescriptor();
    var idstyleSheetHasParent = stringIDToTypeID("styleSheetHasParent");
    desc236.putBoolean(idstyleSheetHasParent, true);
    var idfontPostScriptName = stringIDToTypeID("fontPostScriptName");
    desc236.putString(idfontPostScriptName, """MyriadArabic-BoldIt""");
    var idFntN = charIDToTypeID("FntN");
    desc236.putString(idFntN, """Myriad Arabic""");
    var idFntS = charIDToTypeID("FntS");
    desc236.putString(idFntS, """Bold Italic""");
    var idScrp = charIDToTypeID("Scrp");
    desc236.putInteger(idScrp, 4);
    var idFntT = charIDToTypeID("FntT");
    desc236.putInteger(idFntT, 0);
    var idSz = charIDToTypeID("Sz  ");
    var idPnt = charIDToTypeID("#Pnt");
    desc236.putUnitDouble(idSz, idPnt, 48.000000);
    var idfontCaps = stringIDToTypeID("fontCaps");
    var idfontCaps = stringIDToTypeID("fontCaps");
    var idallCaps = stringIDToTypeID("allCaps");
    desc236.putEnumerated(idfontCaps, idfontCaps, idallCaps);
    var iddigitSet = stringIDToTypeID("digitSet");
    var iddigitSet = stringIDToTypeID("digitSet");
    var iddefaultDigits = stringIDToTypeID("defaultDigits");
    desc236.putEnumerated(iddigitSet, iddigitSet, iddefaultDigits);
    var idmarkYDistFromBaseline = stringIDToTypeID("markYDistFromBaseline");
    var idPnt = charIDToTypeID("#Pnt");
    desc236.putUnitDouble(idmarkYDistFromBaseline, idPnt, 100.000000);
    var idtextLanguage = stringIDToTypeID("textLanguage");
    var idtextLanguage = stringIDToTypeID("textLanguage");
    var idukenglishLanguage = stringIDToTypeID("ukenglishLanguage");
    desc236.putEnumerated(idtextLanguage, idtextLanguage, idukenglishLanguage);
    var idTxtS = charIDToTypeID("TxtS");
    desc235.putObject(idTxtS, idTxtS, desc236);
    var idTxtt = charIDToTypeID("Txtt");
    list40.putObject(idTxtt, desc235);
    desc226.putList(idTxtt, list40);
    var idparagraphStyleRange = stringIDToTypeID("paragraphStyleRange");
    var list41 = new ActionList();
    var desc237 = new ActionDescriptor();
    var idFrom = charIDToTypeID("From");
    desc237.putInteger(idFrom, 0);
    var idT = charIDToTypeID("T   ");
    desc237.putInteger(idT, quote_size + 3);
    var idparagraphStyle = stringIDToTypeID("paragraphStyle");
    var desc238 = new ActionDescriptor();
    var idstyleSheetHasParent = stringIDToTypeID("styleSheetHasParent");
    desc238.putBoolean(idstyleSheetHasParent, true);
    var idAlgn = charIDToTypeID("Algn");
    var idAlg = charIDToTypeID("Alg ");
    var idjustifyLeft = stringIDToTypeID("justifyLeft");
    desc238.putEnumerated(idAlgn, idAlg, idjustifyLeft);
    var idhyphenate = stringIDToTypeID("hyphenate");
    desc238.putBoolean(idhyphenate, false);
    var idparagraphStyle = stringIDToTypeID("paragraphStyle");
    desc237.putObject(idparagraphStyle, idparagraphStyle, desc238);
    var idparagraphStyleRange = stringIDToTypeID("paragraphStyleRange");
    list41.putObject(idparagraphStyleRange, desc237);
    var desc239 = new ActionDescriptor();
    var idFrom = charIDToTypeID("From");
    desc239.putInteger(idFrom, quote_size + 3);
    var idT = charIDToTypeID("T   ");
    desc239.putInteger(idT, quote_text.length - 1);
    var idparagraphStyle = stringIDToTypeID("paragraphStyle");
    var desc240 = new ActionDescriptor();
    var idstyleSheetHasParent = stringIDToTypeID("styleSheetHasParent");
    desc240.putBoolean(idstyleSheetHasParent, true);
    var idAlgn = charIDToTypeID("Algn");
    var idAlg = charIDToTypeID("Alg ");
    var idjustifyRight = stringIDToTypeID("justifyRight");
    desc240.putEnumerated(idAlgn, idAlg, idjustifyRight);
    var idhyphenate = stringIDToTypeID("hyphenate");
    desc240.putBoolean(idhyphenate, false);
    var idparagraphStyle = stringIDToTypeID("paragraphStyle");
    desc239.putObject(idparagraphStyle, idparagraphStyle, desc240);
    var idparagraphStyleRange = stringIDToTypeID("paragraphStyleRange");
    list41.putObject(idparagraphStyleRange, desc239);
    var desc241 = new ActionDescriptor();
    var idFrom = charIDToTypeID("From");
    desc241.putInteger(idFrom, quote_text.length - 1);
    var idT = charIDToTypeID("T   ");
    desc241.putInteger(idT, quote_text.length);
    var idparagraphStyle = stringIDToTypeID("paragraphStyle");
    var desc242 = new ActionDescriptor();
    var idstyleSheetHasParent = stringIDToTypeID("styleSheetHasParent");
    desc242.putBoolean(idstyleSheetHasParent, true);
    var idAlgn = charIDToTypeID("Algn");
    var idAlg = charIDToTypeID("Alg ");
    var idjustifyRight = stringIDToTypeID("justifyRight");
    desc242.putEnumerated(idAlgn, idAlg, idjustifyRight);
    var idhyphenate = stringIDToTypeID("hyphenate");
    desc242.putBoolean(idhyphenate, false);
    var idparagraphStyle = stringIDToTypeID("paragraphStyle");
    desc241.putObject(idparagraphStyle, idparagraphStyle, desc242);
    var idparagraphStyleRange = stringIDToTypeID("paragraphStyleRange");
    list41.putObject(idparagraphStyleRange, desc241);
    desc226.putList(idparagraphStyleRange, list41);
    var idkerningRange = stringIDToTypeID("kerningRange");
    var list42 = new ActionList();
    desc226.putList(idkerningRange, list42);
    var idTxLr = charIDToTypeID("TxLr");
    desc225.putObject(idT, idTxLr, desc226);
    executeAction(idsetd, desc225, DialogModes.NO);
}

//CREATE DUPLICATE
function duplicatelayer(copyLayerName, newLayerName) {
    // =======================================================
    var idDplc = charIDToTypeID("Dplc");
    var idnull = charIDToTypeID("null");
    var desc243 = new ActionDescriptor();
    var ref39 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref39.putName(idLyr, copyLayerName);
    desc243.putReference(idnull, ref39);
    var idNm = charIDToTypeID("Nm  ");
    desc243.putString(idNm, newLayerName);
    var idVrsn = charIDToTypeID("Vrsn");
    desc243.putInteger(idVrsn, 5);
    executeAction(idDplc, desc243, DialogModes.NO);
}
//HIDE QOUTE TEXT LAYER
function hide(LayerName) {
    // =======================================================
    var idHd = charIDToTypeID("Hd  ");
    var desc244 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var list43 = new ActionList();
    var ref40 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref40.putName(idLyr, LayerName);
    list43.putReference(ref40);
    desc244.putList(idnull, list43);
    executeAction(idHd, desc244, DialogModes.NO);
}
//CREATE SMARTOBJECT
function ConvertLayertoSmartObject(LayerName) {
    // =======================================================
    var idslct = charIDToTypeID("slct");
    var desc278 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref57 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref57.putName(idLyr, LayerName);
    desc278.putReference(idnull, ref57);
    var idMkVs = charIDToTypeID("MkVs");
    desc278.putBoolean(idMkVs, false);
    executeAction(idslct, desc278, DialogModes.NO);

    // =======================================================
    var idnewPlacedLayer = stringIDToTypeID("newPlacedLayer");
    executeAction(idnewPlacedLayer, undefined, DialogModes.NO);
}

//Selection of layers
function VerticalAlign(layer1, layer2) {
    // =======================================================
    var idslct = charIDToTypeID("slct");
    var desc283 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref62 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref62.putName(idLyr, layer1);
    desc283.putReference(idnull, ref62);
    var idMkVs = charIDToTypeID("MkVs");
    desc283.putBoolean(idMkVs, false);
    executeAction(idslct, desc283, DialogModes.NO);

    // =======================================================
    var idslct = charIDToTypeID("slct");
    var desc284 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref63 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref63.putName(idLyr, layer2);
    desc284.putReference(idnull, ref63);
    var idselectionModifier = stringIDToTypeID("selectionModifier");
    var idselectionModifierType = stringIDToTypeID("selectionModifierType");
    var idaddToSelection = stringIDToTypeID("addToSelection");
    desc284.putEnumerated(idselectionModifier, idselectionModifierType, idaddToSelection);
    var idMkVs = charIDToTypeID("MkVs");
    desc284.putBoolean(idMkVs, false);
    executeAction(idslct, desc284, DialogModes.NO);
    //VER ALIGN
    // =======================================================
    var idAlgn = charIDToTypeID("Algn");
    var desc247 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref43 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref43.putEnumerated(idLyr, idOrdn, idTrgt);
    desc247.putReference(idnull, ref43);
    var idUsng = charIDToTypeID("Usng");
    var idADSt = charIDToTypeID("ADSt");
    var idAdCV = charIDToTypeID("AdCV");
    desc247.putEnumerated(idUsng, idADSt, idAdCV);
    executeAction(idAlgn, desc247, DialogModes.NO);
}
// HORZONTAL ALIGN

function HorizontalAlign(layer1, layer2) {
    // =======================================================
    var idslct = charIDToTypeID("slct");
    var desc283 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref62 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref62.putName(idLyr, layer1);
    desc283.putReference(idnull, ref62);
    var idMkVs = charIDToTypeID("MkVs");
    desc283.putBoolean(idMkVs, false);
    executeAction(idslct, desc283, DialogModes.NO);

    // =======================================================
    var idslct = charIDToTypeID("slct");
    var desc284 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref63 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref63.putName(idLyr, layer2);
    desc284.putReference(idnull, ref63);
    var idselectionModifier = stringIDToTypeID("selectionModifier");
    var idselectionModifierType = stringIDToTypeID("selectionModifierType");
    var idaddToSelection = stringIDToTypeID("addToSelection");
    desc284.putEnumerated(idselectionModifier, idselectionModifierType, idaddToSelection);
    var idMkVs = charIDToTypeID("MkVs");
    desc284.putBoolean(idMkVs, false);
    executeAction(idslct, desc284, DialogModes.NO);
    // =======================================================
    var idAlgn = charIDToTypeID("Algn");
    var desc248 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref44 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref44.putEnumerated(idLyr, idOrdn, idTrgt);
    desc248.putReference(idnull, ref44);
    var idUsng = charIDToTypeID("Usng");
    var idADSt = charIDToTypeID("ADSt");
    var idAdCH = charIDToTypeID("AdCH");
    desc248.putEnumerated(idUsng, idADSt, idAdCH);
    executeAction(idAlgn, desc248, DialogModes.NO);
}
// SAVE FILE
function SaveAsJPG(path, name) {
    //saving as jpeg
    jpgSaveOptions = new JPEGSaveOptions();
    jpgSaveOptions.embedColorProfile = true;
    jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
    jpgSaveOptions.matte = MatteType.NONE;
    jpgSaveOptions.quality = 12;
    saveFile = new File(path + "/" + name);
    app.activeDocument.saveAs(saveFile, jpgSaveOptions, true, Extension.LOWERCASE);
}