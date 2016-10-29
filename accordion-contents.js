/**
 * Created by Alex on 29.10.2016.
 */
var titles = document.querySelectorAll('.title');
titles.forEach(function (item) {
  item.addEventListener('click', function () {
    this.classList.toggle('open');
    if (!item.classList.contains('open')) {
      var innerTitles = item.nextElementSibling.querySelectorAll('.title');
      innerTitles.forEach(function (item) {
        item.classList.remove('open');
      })
    }
  });
});
