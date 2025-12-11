import { glob } from 'glob'
import { parse } from 'vue-docgen-api'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// --- 設定區 ---
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = path.resolve(__dirname, '..')
const COMPONENTS_DIR = path.resolve(ROOT_DIR, 'src/runtime/components')
const OUTPUT_FILE = path.resolve(ROOT_DIR, 'dist/manifest.mjs') // 輸出為 .mjs 模組

async function generate() {
  console.log('🔍 開始掃描元件並生成 ExternalComponentEntry...')

  // 1. 掃描所有 .vue 檔案
  const files = await glob(`${COMPONENTS_DIR}/**/*.vue`)
  const entries = []

  for (const file of files) {
    try {
      const doc = await parse(file)

      // A. 處理 componentName (必填)
      const fileNameNoExt = path.basename(file, '.vue')
      const componentName = doc.displayName || fileNameNoExt

      // B. 處理 importPath (必填)
      // 計算相對路徑（轉為 POSIX 分隔）並移除 .vue 副檔名
      const relativePath = path.relative(COMPONENTS_DIR, file).replace(/\\/g, '/')
      const relativePathNoExt = relativePath.replace(/\.vue$/i, '')

      // 組合完整 import 字串，固定以 @app/runtime/components 為開頭
      const importPrefix = '@app/runtime/components'
      const importPath = `${importPrefix}/${relativePathNoExt}`

      // C. 處理 figmaName (選填)
      // 優先讀取 @figmaName，沒有則讀 @displayName，都沒有則為 undefined
      const tags = doc.tags || {}
      let figmaName = null

      if (tags.figmaName) {
        figmaName = tags.figmaName[0].description
      }
      else if (tags.displayName) {
        figmaName = tags.displayName[0].description
      }

      // 邏輯判斷：如果 figmaName 跟 componentName (忽略大小寫) 一樣，就省略不填
      if (figmaName && figmaName.toLowerCase().trim() === componentName.toLowerCase().trim()) {
        figmaName = null
      }

      // D. 建立 Entry 物件
      const entry = {
        componentName,
        importPath,
        ...(figmaName && { figmaName }), // 只有當 figmaName 存在時才加入此欄位
      }

      entries.push(entry)
      console.log(`✅ ${componentName} -> 處理完成`)
    }
    catch (err) {
      console.error(`❌ 解析失敗: ${file}`, err)
    }
  }

  // 3. 生成符合 TypeScript 介面的 JS 模組內容
  // 需求要求：export const components = [...]
  const fileContent = `/**
 * 自動生成的 Figma 轉換器清單
 * Generated at: ${new Date().toISOString()}
 */
export const components = ${JSON.stringify(entries, null, 2)};

export default components;
`

  // 4. 寫入檔案
  const distDir = path.dirname(OUTPUT_FILE)
  try {
    await fs.access(distDir)
  }
  catch {
    await fs.mkdir(distDir, { recursive: true })
  }

  await fs.writeFile(OUTPUT_FILE, fileContent, 'utf-8')
  console.log(`\n🎉 Manifest 模組已生成於: ${OUTPUT_FILE}`)
}

generate()
