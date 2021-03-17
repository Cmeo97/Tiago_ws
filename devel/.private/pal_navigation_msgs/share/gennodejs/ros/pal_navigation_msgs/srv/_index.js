
"use strict";

let SetPOI = require('./SetPOI.js')
let SafetyZone = require('./SafetyZone.js')
let SetSubMapFloor = require('./SetSubMapFloor.js')
let ListMaps = require('./ListMaps.js')
let SetMapConfiguration = require('./SetMapConfiguration.js')
let DisableEmergency = require('./DisableEmergency.js')
let FinalApproachPose = require('./FinalApproachPose.js')
let GetPOI = require('./GetPOI.js')
let VisualLocRecognize = require('./VisualLocRecognize.js')
let GetSubMap = require('./GetSubMap.js')
let GetMapConfiguration = require('./GetMapConfiguration.js')
let Acknowledgment = require('./Acknowledgment.js')
let GetNodes = require('./GetNodes.js')
let RenameMap = require('./RenameMap.js')
let ChangeBuilding = require('./ChangeBuilding.js')
let SaveMap = require('./SaveMap.js')

module.exports = {
  SetPOI: SetPOI,
  SafetyZone: SafetyZone,
  SetSubMapFloor: SetSubMapFloor,
  ListMaps: ListMaps,
  SetMapConfiguration: SetMapConfiguration,
  DisableEmergency: DisableEmergency,
  FinalApproachPose: FinalApproachPose,
  GetPOI: GetPOI,
  VisualLocRecognize: VisualLocRecognize,
  GetSubMap: GetSubMap,
  GetMapConfiguration: GetMapConfiguration,
  Acknowledgment: Acknowledgment,
  GetNodes: GetNodes,
  RenameMap: RenameMap,
  ChangeBuilding: ChangeBuilding,
  SaveMap: SaveMap,
};
