Marks
=====
Implementation of something similar to Vim marks. The idea would be that it's easy to extend with new marks that you can jump to.

Currently supports the two marks from Vim that I couldn't live without: Jump back to before move, and Jump to last place edited.

Usage
=====
Just map a key combination to the jump you want to use, in my case I've used the vim plugin to map the same key sequences that I use in vim: `` and ''.

From my user.behaviors:

```clojure
(:lt.plugins.vim/map-keys {
  "``" ":ltexec lt.plugins.marks/jump-to-large-move-mark"
  "''" ":ltexec lt.plugins.marks/jump-to-last-edit-mark"
  })
