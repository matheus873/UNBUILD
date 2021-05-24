import fsp from 'fs/promises'
import { promisify } from 'util'
import { dirname } from 'upath'
import mkdirp from 'mkdirp'
import _rimraf from 'rimraf'

export async function ensuredir (path: string) {
  await mkdirp(dirname(path))
}

export async function symlink (from: string, to: string, force: boolean = true) {
  await ensuredir(to)
  if (force) {
    await fsp.unlink(to).catch(() => { })
  }
  await fsp.symlink(from, to)
}

export function dumpObject (obj: Record<string, any>) {
  return '{ ' + Object.keys(obj).map(key => `${key}: ${JSON.stringify(obj[key])}`).join(', ') + ' }'
}

export function getpkg (id: string = '') {
  const s = id.split('/')
  return s[0][0] === '@' ? `${s[0]}/${s[1]}` : s[0]
}

const rimraf = promisify(_rimraf)

export async function rmdir (dir: string) {
  await fsp.unlink(dir).catch(() => { })
  await rimraf(dir)
}