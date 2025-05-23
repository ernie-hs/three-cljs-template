(ns hello-three.core
  (:require [three :as t]
            ["three/addons/controls/ArcballControls.js" :refer [ArcballControls]]
            [hello-three.utils :as u]))

;; Configuration constants
(def camera-fov 45)
(def camera-aspect 1.3)
(def camera-near 0.1)
(def camera-far 1000)
(def light-color 0xffffff)
(def light-intensity 1000)

;; Utility functions
(defn get-window-dims []
  "Get the dimensions of the window."
  (let [width (.-innerWidth js/window)
        height (.-innerHeight js/window)]
    {:width width :height height :aspect (/ width height)}))

(defn setup-renderer [canvas]
  "Initialize the WebGL renderer."
  (let [renderer (t/WebGLRenderer. (js-obj "canvas" canvas "antialias" true))]
    (set! (.-enabled (.-shadowMap renderer)) true)
    renderer))

(defn setup-camera []
  "Initialize the perspective camera."
  (t/PerspectiveCamera. camera-fov camera-aspect camera-near camera-far))

(defn setup-light []
  "Initialize the point light."
  (let [light (t/PointLight. light-color light-intensity)]
    (set! (.-castShadow light) true)
    (.set (.-position light) 10 10 5)
    light))

(defn setup-plane []
  "Create a plane geometry for the scene."
  (let [geometry (t/PlaneGeometry. 10 10)
        material (t/MeshPhysicalMaterial. (js-obj "color" "cornflowerblue"))
        plane (t/Mesh. geometry material)]
    (.rotateX geometry (/ js/Math.PI -2))
    (set! (.-receiveShadow plane) true)
    plane))

(defn setup-box []
  "Create a box geometry for the scene."
  (let [geometry (t/BoxGeometry. 1 1 1)
        material (t/MeshPhysicalMaterial. (js-obj "color" "orange"))
        box (t/Mesh. geometry material)]
    (set! (.-castShadow box) true)
    (set! (.-receiveShadow box) true)
    (.set (.-position box) 2 2 0)
    box))

(defn setup-grid []
  "Create a grid helper."
  (let [grid (t/GridHelper. 10 10)]
    (.set (.-position grid) 0 0.01 0)
    grid))

(defn on-resize-window-builder [renderer camera control]
  "Handle window resize events."
  (fn []
    (let [d (get-window-dims)]
      (.setPixelRatio renderer (.-devicePixelRatio js/window))
      (.setSize renderer (:width d) (:height d))
      (set! (.-aspect camera) (:aspect d))
      (.updateProjectionMatrix camera)
      (.update control))))

;; Scene setup
(def canvas (.querySelector js/document "#grid"))
(def renderer (setup-renderer canvas))
(def camera (setup-camera))
(def scene (t/Scene.))
(def control (ArcballControls. camera canvas scene))

(.set (.-position camera) 0 5 10)
(.lookAt camera 0 0 0)
(.update control)

;; Add objects to the scene
(def light (setup-light))
(.add scene light)

(def plane (setup-plane))
(.add scene plane)

(def grid (setup-grid))
(.add scene grid)

(def box (setup-box))
(def group (t/Group.))
(.add group box)
(.add scene group)

;; Animation loop
(defn animation []
  "Animation loop for rendering the scene."
  (let [y (.-y (.-rotation box))
        z (.-z (.-rotation box))
        y-group (.-y (.-rotation group))]
    (set! (.-y (.-rotation box)) (+ 0.01 y))
    (set! (.-z (.-rotation box)) (+ 0.01 z))
    (set! (.-y (.-rotation group)) (+ 0.01 y-group))
    (.render renderer scene camera)))

;; Initialize and start rendering
(defn init []
  (.setAnimationLoop renderer animation)
  (.dispatchEvent js/window (js/Event. "resize"))
  (js/console.log "init"))

(defn start []
  (js/console.log "start"))

(defn stop []
  (js/console.log "stop"))

;; Event listeners
(.addEventListener js/window "resize" (on-resize-window-builder renderer camera control))