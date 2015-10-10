"use strict"
/* global WebVRManager */

var World = require('three-world'),
    THREE = require('three'),
    VREffect = require('./vreffect'),
    VRControls = require('./vrcontrols')

var vrControls, vrManager

World.init({camDistance: 0, renderCallback: function() {
  vrControls.update()
  vrManager.render(World.getScene(), World.getCamera())
  return false // do not render again using the regular renderer
}})

var box = new THREE.Mesh(
  new THREE.SphereGeometry(500, 24, 24),
  new THREE.MeshBasicMaterial({side: THREE.BackSide, map: THREE.ImageUtils.loadTexture('zurich.jpg')})
)

World.add(box)

var vrEffect = new VREffect(World.getRenderer())
var vrControls = new VRControls(World.getCamera())
var vrManager = new WebVRManager(World.getRenderer(), vrEffect)

vrEffect.setSize(window.innerWidth, window.innerHeight);

World.start()
