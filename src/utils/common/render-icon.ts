import { NIcon } from 'naive-ui'
import { h, shallowRef } from 'vue'

/**
 * Icon渲染参数
 */
// interface RenderIconConfig {
//   iconName: string
//   size?: number
//   color?: string
// }

const baseModuleUrl = import.meta.url

export async function renderIcon(icon: string) {
  try {
    const prefix = icon.split(':')[0]
    const iconName = icon.split(':')[1]

    const iconComponent = await import(
      `${baseModuleUrl}/@vicons/${prefix}/es/${iconName}`
    )
    const IconComponent = iconComponent.default
    return h(NIcon, null, { default: () => h(shallowRef(IconComponent)) })
  } catch (error) {
    console.error('Failed to load icon component:', error)
    return null
  }
}
