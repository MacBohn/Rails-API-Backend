import DS from 'ember-data';
import ENV from '../config/enviroment';

export default DS.ActiveModelAdapter.extend({
  host: ENV.apdapterURL
});
