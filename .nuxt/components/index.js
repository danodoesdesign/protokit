export { default as Alert } from '../../components/Alert.vue'
export { default as Badge } from '../../components/Badge.vue'
export { default as Button } from '../../components/Button.vue'
export { default as Checkbox } from '../../components/Checkbox.vue'
export { default as DropdownButton } from '../../components/DropdownButton.vue'
export { default as DropdownItem } from '../../components/DropdownItem.vue'
export { default as FieldGroup } from '../../components/FieldGroup.vue'
export { default as Header } from '../../components/Header.vue'
export { default as HeaderItem } from '../../components/HeaderItem.vue'
export { default as Modal } from '../../components/Modal.vue'
export { default as Radio } from '../../components/Radio.vue'
export { default as Select } from '../../components/Select.vue'
export { default as TextArea } from '../../components/TextArea.vue'
export { default as TextField } from '../../components/TextField.vue'

export const LazyAlert = import('../../components/Alert.vue' /* webpackChunkName: "components/Alert" */).then(c => c.default || c)
export const LazyBadge = import('../../components/Badge.vue' /* webpackChunkName: "components/Badge" */).then(c => c.default || c)
export const LazyButton = import('../../components/Button.vue' /* webpackChunkName: "components/Button" */).then(c => c.default || c)
export const LazyCheckbox = import('../../components/Checkbox.vue' /* webpackChunkName: "components/Checkbox" */).then(c => c.default || c)
export const LazyDropdownButton = import('../../components/DropdownButton.vue' /* webpackChunkName: "components/DropdownButton" */).then(c => c.default || c)
export const LazyDropdownItem = import('../../components/DropdownItem.vue' /* webpackChunkName: "components/DropdownItem" */).then(c => c.default || c)
export const LazyFieldGroup = import('../../components/FieldGroup.vue' /* webpackChunkName: "components/FieldGroup" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyHeaderItem = import('../../components/HeaderItem.vue' /* webpackChunkName: "components/HeaderItem" */).then(c => c.default || c)
export const LazyModal = import('../../components/Modal.vue' /* webpackChunkName: "components/Modal" */).then(c => c.default || c)
export const LazyRadio = import('../../components/Radio.vue' /* webpackChunkName: "components/Radio" */).then(c => c.default || c)
export const LazySelect = import('../../components/Select.vue' /* webpackChunkName: "components/Select" */).then(c => c.default || c)
export const LazyTextArea = import('../../components/TextArea.vue' /* webpackChunkName: "components/TextArea" */).then(c => c.default || c)
export const LazyTextField = import('../../components/TextField.vue' /* webpackChunkName: "components/TextField" */).then(c => c.default || c)
