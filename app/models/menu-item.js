import Model, { attr } from '@ember-data/model';

export default class MenuItemModel extends Model {
  @attr('string') route;
  @attr('string') icon;
  @attr('string') label;
}
