import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import jQuery from 'jquery'

function Bootstrap4Init()
{
  jQuery(".form-check label,.form-radio label").append('<i class="input-helper"></i>');
}

export default Route.extend({
  model() {
    var store = this.store;
    var allMenuItems = [];

    allMenuItems.push(store.createRecord("menu-item", { id: 1, route: "forms", icon: "icon-book-open", label: "Формы" }));
    allMenuItems.push(store.createRecord("menu-item", { id: 2, route: "buttons", icon: "icon-grid", label: "Кнопки" }));
    allMenuItems.push(store.createRecord("menu-item", { id: 3, route: "typography", icon: "icon-pencil", label: "Типография" }));

    return RSVP.hash({
      menuItems: allMenuItems,
      userName: "Raul",
      versionNumber: "1.0.0"
    });
  },
  @action didTransition() {
    scheduleOnce('afterRender', this, Bootstrap4Init)
  }
});