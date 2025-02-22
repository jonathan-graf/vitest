import { rpc } from './rpc'
import type { SnapshotEnvironment } from '#types'

export class BrowserSnapshotEnvironment implements SnapshotEnvironment {
  readSnapshotFile(filepath: string): Promise<string | null> {
    return rpc().readFile(filepath)
  }

  saveSnapshotFile(filepath: string, snapshot: string): Promise<void> {
    return rpc().writeFile(filepath, snapshot)
  }

  resolvePath(filepath: string): Promise<string> {
    return rpc().resolveSnapshotPath(filepath)
  }

  removeSnapshotFile(filepath: string): Promise<void> {
    return rpc().removeFile(filepath)
  }

  async prepareDirectory(filepath: string): Promise<void> {
    await rpc().createDirectory(filepath)
  }
}
