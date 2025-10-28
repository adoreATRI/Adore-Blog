(function () {
  console.log('[DEBUG] force-enable-scroll loaded');

  // 尝试关闭已知的全局滚动保护对象（尝试多种可能的名字）
  try {
    if (window.__scrollProtection) { window.__scrollProtection.enabled = false; console.log('[DEBUG] __scrollProtection disabled'); }
    if (window.scrollProtection) { window.scrollProtection.enabled = false; console.log('[DEBUG] scrollProtection disabled'); }
    if (window._scrollProtection) { window._scrollProtection.enabled = false; console.log('[DEBUG] _scrollProtection disabled'); }
  } catch (e) {
    console.warn('[DEBUG] disabling known protection objects failed', e);
  }

  // 强制显示返回顶部按钮 / 文章滚动条（移除 hide 类并调整样式）
  const showIfHidden = (sel) => {
    const el = document.querySelector(sel);
    if (el) {
      el.classList.remove('hide');
      el.style.opacity = el.style.opacity || 1;
      el.style.pointerEvents = 'auto';
      console.log('[DEBUG] showed', sel, el);
    } else {
      console.log('[DEBUG] not found', sel);
    }
  };
  showIfHidden('.back-to-top-btn');
  showIfHidden('#article-scrollbar');
  showIfHidden('.article-scrollbar');

  // 打印 wheel 事件，确认浏览器是否接收到滚轮
  const wheelHandler = function (e) {
    console.log('[DEBUG] wheel event deltaY:', e.deltaY, 'target:', e.target);
  };
  window.addEventListener('wheel', wheelHandler, { passive: true });

  // 监听 DOMContentLoaded 再次尝试显示（页面动态渲染时）
  document.addEventListener('DOMContentLoaded', function () {
    showIfHidden('.back-to-top-btn');
    showIfHidden('#article-scrollbar');
    showIfHidden('.article-scrollbar');
    console.log('[DEBUG] DOMContentLoaded check done');
  });

  // 快捷方法：在控制台调用 resetDebug() 恢复默认调试行为
  window.resetDebug = function () {
    console.log('[DEBUG] resetDebug called');
    try {
      window.removeEventListener('wheel', wheelHandler);
    } catch (e) {}
  };

  console.log('[DEBUG] force-enable-scroll executed — check console output & elements');
})();