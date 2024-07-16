(ns test1.core
  (:require [three :as t]))

(defn get-window-dims
 "get the dimensions of js/window"
 []
 {:width (.-innerWidth js/window) :height (.-innerHeight js/window)})

(defn get-aspect-ratio
  "get the aspect ratio of js/window"
  []
  (let [dims (get-window-dims)]
    (/ (:width dims) (:height dims))))

;; globals

(def canvas (.querySelector js/document "#grid"))
(def renderer (t/WebGLRenderer. (js-obj "canvas" canvas) "antialias" true))
(def camera (t/PerspectiveCamera. 45 (get-aspect-ratio) 0.1 1000))
(def scene (t/Scene.))

(.setPixelRatio renderer (.-devicePixelRatio js/window))

(set! (.-z (.-position camera)) 5)

;; handlers

(defn on-resize []
  (let [d (get-window-dims)]
    (.setSize renderer (:width d) (:height d))
    (set! (.-aspect camera) (/ (:width d) (:height d)))
    (.updateProjectionMatrix camera)))

(.addEventListener js/window "resize" on-resize)

(on-resize)

;; do something

(def light (t/PointLight. 0xffffff 100000))
(.set (.-position light) 10 100 10)
(.add scene light)

(def geometry (t/BoxGeometry. 1 1 1))
(def material (t/MeshPhysicalMaterial. (js-obj "color" 0x00ff00)))
(def box (t/Mesh. geometry material))
(.add scene box)

(defn animation
  "animation loop used by renderer, do and draw stuff here"
  []
  (let [y (.-y (.-rotation box))
        z (.-z (.-rotation box))]
    (set! (.-y (.-rotation box)) (+ 0.01 y))
    (set! (.-z (.-rotation box)) (+ 0.01 z))
    (.render renderer scene camera)))

(.setAnimationLoop renderer animation)

;; shadow stuff

(defn start []
  (js/console.log "start"))

(defn stop []
  (js/console.log "stop"))
