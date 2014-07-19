var half = app.activeDocument.width.value/2;
activeDocument.guides.add (Direction.VERTICAL, new UnitValue(half,app.activeDocument.width.unit));