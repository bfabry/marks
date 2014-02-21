if(!lt.util.load.provided_QMARK_('lt.plugins.marks')) {
goog.provide('lt.plugins.marks');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.marks.current_posn = (function current_posn(editor){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",3959752392),lt.objs.editor.__GT_cursor.call(null,editor),new cljs.core.Keyword(null,"scroll","scroll",4401191487),cljs.core.js__GT_clj.call(null,lt.objs.editor.__GT_cm_ed.call(null,editor).getScrollInfo())], null);
});
lt.plugins.marks.__BEH__remember_edits = (function __BEH__remember_edits(editor){return lt.object.update_BANG_.call(null,editor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.marks","marks","lt.plugins.marks/marks",4084338730),new cljs.core.Keyword(null,"last-edit-mark","last-edit-mark",1358927275)], null),(function (){return lt.plugins.marks.current_posn.call(null,editor);
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.marks","remember-edits","lt.plugins.marks/remember-edits",2733731405),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.marks.__BEH__remember_edits,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",3947235106),null], null), null));
lt.plugins.marks.__BEH__remember_large_movements = (function __BEH__remember_large_movements(editor){return lt.object.update_BANG_.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.marks","marks","lt.plugins.marks/marks",4084338730)], null),(function (marks){var previous_posn = new cljs.core.Keyword(null,"current-posn","current-posn",2436527072).cljs$core$IFn$_invoke$arity$1(marks);var previous_cursor = new cljs.core.Keyword(null,"cursor","cursor",3959752392).cljs$core$IFn$_invoke$arity$1(previous_posn);var new_posn = lt.plugins.marks.current_posn.call(null,editor);var new_cursor = new cljs.core.Keyword(null,"cursor","cursor",3959752392).cljs$core$IFn$_invoke$arity$1(new_posn);var distance = Math.abs((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(previous_cursor) - new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new_cursor)));if((distance > 5))
{return cljs.core.merge.call(null,marks,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-posn","current-posn",2436527072),new_posn,new cljs.core.Keyword(null,"last-large-movement-mark","last-large-movement-mark",528266196),previous_posn], null));
} else
{return cljs.core.merge.call(null,marks,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-posn","current-posn",2436527072),new_posn], null));
}
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.marks","remember-large-movements","lt.plugins.marks/remember-large-movements",4322660662),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.marks.__BEH__remember_large_movements,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",1017261891),null], null), null));
lt.plugins.marks.__BEH__jump_to_mark = (function __BEH__jump_to_mark(editor,mark){var temp__4090__auto__ = mark.call(null,new cljs.core.Keyword("lt.plugins.marks","marks","lt.plugins.marks/marks",4084338730).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));if(cljs.core.truth_(temp__4090__auto__))
{var mark_posn = temp__4090__auto__;lt.objs.editor.move_cursor.call(null,editor,new cljs.core.Keyword(null,"cursor","cursor",3959752392).cljs$core$IFn$_invoke$arity$1(mark_posn));
return lt.objs.editor.scroll_to.call(null,editor,cljs.core.get_in.call(null,mark_posn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scroll","scroll",4401191487),"left"], null)),cljs.core.get_in.call(null,mark_posn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scroll","scroll",4401191487),"top"], null)));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.marks","jump-to-mark","lt.plugins.marks/jump-to-mark",3850970888),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.marks.__BEH__jump_to_mark,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.marks","jump","lt.plugins.marks/jump",4520796946),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.marks","jump-to-large-move-mark","lt.plugins.marks/jump-to-large-move-mark",2259627724),new cljs.core.Keyword(null,"desc","desc",1016984067),"Marks: Jump to mark from last movement",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.Keyword("lt.plugins.marks","jump","lt.plugins.marks/jump",4520796946),new cljs.core.Keyword(null,"last-large-movement-mark","last-large-movement-mark",528266196));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.marks","jump-to-last-edit-mark","lt.plugins.marks/jump-to-last-edit-mark",634945236),new cljs.core.Keyword(null,"desc","desc",1016984067),"Marks: Jump to last edit mark in file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.Keyword("lt.plugins.marks","jump","lt.plugins.marks/jump",4520796946),new cljs.core.Keyword(null,"last-edit-mark","last-edit-mark",1358927275));
})], null));
}

//# sourceMappingURL=marks_compiled.js.map