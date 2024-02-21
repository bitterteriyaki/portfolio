import type { UserConfig } from '@commitlint/types'

export default <Partial<UserConfig>>{
  extends: ['@commitlint/config-conventional'],
}
