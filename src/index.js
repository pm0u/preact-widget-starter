import habitat from 'preact-habitat'

import { Widget } from './widget'

const HABITAT = habitat(Widget)

HABITAT.render({
  selector: '[data-widget]',
  clean: true,
})
