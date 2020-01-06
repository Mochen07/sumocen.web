/**
 * @file UA 当前设备解析器 / ES module
 */

export default userAgent => ({
  isEdge: userAgent.includes('Edge'),
  isFF: userAgent.includes('Firefox'),
  isOpera: userAgent.includes('Opera'),
  isBB: userAgent.includes('BlackBerry'),
  isChrome: userAgent.includes('Chrome'),
  isMaxthon: userAgent.includes('Maxthon'),
  isIos: /(iPhone|iPad|iPod|iOS)/i.test(userAgent),
  isIE: ['compatible', 'MSIE'].every(n => userAgent.includes(n)),
  isSafari: userAgent.includes('Safari') && !userAgent.includes('Chrome'),
  isMobile: /(iPhone|iPod|Opera Mini|Android.*Mobile|NetFront|PSP|BlackBerry|Windows Phone)/gi.test(
    userAgent
  )
})
