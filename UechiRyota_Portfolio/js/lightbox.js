// .image_margin 内の画像をタップ（クリック）すると拡大表示するライトボックス。
// 各作品ページの </body> 直前に <script src="../js/lightbox.js"></script> を追加するだけで動きます。
(function () {
  function ensureLightbox() {
    var lb = document.querySelector('.lightbox');
    if (!lb) {
      lb = document.createElement('div');
      lb.className = 'lightbox';
      var img = document.createElement('img');
      img.alt = '';
      lb.appendChild(img);
      document.body.appendChild(lb);
    }
    return lb;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var lightbox = ensureLightbox();
    var lightboxImg = lightbox.querySelector('img');

    document.querySelectorAll('.image_margin img').forEach(function (img) {
      img.addEventListener('click', function () {
        lightboxImg.src = img.currentSrc || img.src;
        lightboxImg.alt = img.alt || '';
        lightbox.classList.add('is-open');
      });
    });

    lightbox.addEventListener('click', function () {
      lightbox.classList.remove('is-open');
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        lightbox.classList.remove('is-open');
      }
    });
  });
})();
