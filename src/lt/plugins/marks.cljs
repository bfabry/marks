(ns lt.plugins.marks
  (:require [lt.object :as object]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))

(behavior ::remember-edits
          :triggers #{:change}
          :reaction (fn [editor]
                      (object/update! editor [::marks :last-edit-mark] #(identity (editor/->cursor editor)))))

(behavior ::remember-large-movements
          :triggers #{:move}
          :reaction (fn [editor]
                      (object/update! editor [::marks]
                                      (fn [marks]
                                        (let [previous-cursor (:current-cursor marks)
                                              new-cursor (editor/->cursor editor)
                                              distance (js/Math.abs (- (:line previous-cursor) (:line new-cursor)))]
                                          (if (> distance 5)
                                            (merge marks {:current-cursor new-cursor, :last-large-movement-mark previous-cursor})
                                            (merge marks {:current-cursor new-cursor})))))))

(behavior ::jump-to-mark
           :triggers #{::jump}
           :reaction (fn [editor mark]
                       (editor/move-cursor editor (or (-> @editor ::marks mark) (editor/->cursor editor)))))

(cmd/command {:command ::jump-to-large-move-mark
              :desc "Marks: Jump to mark from last movement"
              :exec (fn []
                      (object/raise (pool/last-active) ::jump :last-large-movement-mark))})

(cmd/command {:command ::jump-to-last-edit-mark
              :desc "Marks: Jump to last edit mark in file"
              :exec (fn []
                      (object/raise (pool/last-active) ::jump :last-edit-mark))})
