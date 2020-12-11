export { default as Button } from '../../components/Button.vue'
export { default as DropdownButton } from '../../components/DropdownButton.vue'
export { default as Modal } from '../../components/Modal.vue'
export { default as Select } from '../../components/Select.vue'
export { default as TextArea } from '../../components/TextArea.vue'
export { default as TextField } from '../../components/TextField.vue'

export const LazyButton = import('../../components/Button.vue' /* webpackChunkName: "components/Button" */).then(c => c.default || c)
export const LazyDropdownButton = import('../../components/DropdownButton.vue' /* webpackChunkName: "components/DropdownButton" */).then(c => c.default || c)
export const LazyModal = import('../../components/Modal.vue' /* webpackChunkName: "components/Modal" */).then(c => c.default || c)
export const LazySelect = import('../../components/Select.vue' /* webpackChunkName: "components/Select" */).then(c => c.default || c)
export const LazyTextArea = import('../../components/TextArea.vue' /* webpackChunkName: "components/TextArea" */).then(c => c.default || c)
export const LazyTextField = import('../../components/TextField.vue' /* webpackChunkName: "components/TextField" */).then(c => c.default || c)
