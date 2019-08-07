const fs = require('fs-extra')
const path = require('path')

/**
 * Generate a Next JS export path map.
 *
 * See: https://github.com/zeit/next.js/#static-html-export
 *
 * This map tells Next which static HTML pages it should
 * generate for the dynamically routed pages which I have
 * defined.
 *
 * e.g. One of the dynamic routes that I have defined
 * in the pages directory is `pages/blog/code/[pid].js`
 * But that alone doesn't tell next (at build time) which
 * values are valid for `[pid]`.  So this function generates
 * a map with all possible values of PID.  That takes the form:
 *
 * ```
 * {
 *   '/blog/code/my-article': {
 *     page: '/glob/code/[pid]',
 *     query: {pid: 'my-article'}
 *   }
 * }
 * ```
 *
 * This tells Next:
 *   - The path in the browser of this page
 *   - The JS component file in the `/pages` directory that should
 *     be used to generate it
 *   - The query object that should be passed to the component
 *     to allow it to generate the correct page
 */
module.exports = function generateBlogExportPathMap() {
  return {}
}

/**
 * Given an array of blog post ids, generate a single object that
 * acts as a Next path map for each of the ids.
 * @param {string[]} postIds The blog ids to create path maps for
 * @param {string} browserPath The URL in the browser of the parent of
 * this page
 * @param {string} pagePath The path within pages/ to the component
 * that will render this page
 */
function generatePathMaps({postIds, browserPath, pagePath}) {
  return postIds
    .map(id => ({
      [`${browserPath}/${id}`]: {
        page: pagePath,
        query: {pid: id},
      },
    }))
    .reduce((accum, mapEntry) => {
      return {...accum, ...mapEntry}
    }, {})
}

/**
 * Get the filenames (without extension) of every markdown file
 * in a particular directory
 * @param {string} relativePath The path from this file to
 * the directory to be read
 * @returns {string[]} An array of filenames (w/o extension)
 */
function getMdFilenamesWithExt(relativePath) {
  const pathToDir = path.join(__dirname, relativePath)
  return fs
    .readdirSync(pathToDir)
    .filter(filename => filename.endsWith('.md'))
    .map(filename => filename.split('.')[0])
}
