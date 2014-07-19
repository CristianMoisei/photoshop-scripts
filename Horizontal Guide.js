var half = app.activeDocument.height.value/2;
activeDocument.guides.add (Direction.HORIZONTAL, new UnitValue(half,app.activeDocument.height.unit));