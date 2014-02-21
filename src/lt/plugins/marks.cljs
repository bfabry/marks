(ns lt.plugins.marks
  (:require [lt.object :as object]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))

(defn current-posn [editor]
  {:cursor
   (editor/->cursor editor)
   :scroll (js->clj (.getScrollInfo (editor/->cm-ed editor)))})

(behavior ::remember-edits
          :triggers #{:change}
          :reaction (fn [editor]
                      (object/update! editor [::marks :last-edit-mark] #(current-posn editor))))

(behavior ::remember-large-movements
          :triggers #{:move}
          :reaction (fn [editor]
                      (object/update! editor [::marks]
                                      (fn [marks]
                                        (let [previous-posn (:current-posn marks)
                                              previous-cursor (:cursor previous-posn)
                                              new-posn (current-posn editor)
                                              new-cursor (:cursor new-posn)
                                              distance (js/Math.abs (- (:line previous-cursor) (:line new-cursor)))]
                                          (if (> distance 5)
                                            (merge marks {:current-posn new-posn, :last-large-movement-mark previous-posn})
                                            (merge marks {:current-posn new-posn})))))))

(behavior ::jump-to-mark
           :triggers #{::jump}
           :reaction (fn [editor mark]
                       (if-let [mark-posn (-> @editor ::marks mark)]
                         (do
                           (editor/move-cursor editor (:cursor mark-posn))
                           (editor/scroll-to editor (get-in mark-posn [:scroll "left"]) (get-in mark-posn [:scroll "top"]))))))

(cmd/command {:command ::jump-to-large-move-mark
              :desc "Marks: Jump to mark from last movement"
              :exec (fn []
                      (object/raise (pool/last-active) ::jump :last-large-movement-mark))})

(cmd/command {:command ::jump-to-last-edit-mark
              :desc "Marks: Jump to last edit mark in file"
              :exec (fn []
                      (object/raise (pool/last-active) ::jump :last-edit-mark))})
