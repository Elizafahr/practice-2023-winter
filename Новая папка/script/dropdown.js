/*Dropdown Menu*/
dropdown.onclick = function (e) {
  document.querySelector('.dropdown__menu').classList.remove('visually-hidden')

  if (e.target.classList.contains('active')) {
    return
  }
  getDefValue() // getSumYears();

  getOfferReset()
}

$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus()
  $(this).toggleClass('active')
  $(this).find('.dropdown__menu').slideToggle(300)
})
$('.dropdown').focusout(function () {
  $(this).removeClass('active')
  $(this).find('.dropdown__menu').slideUp(300)
})
$('.dropdown .dropdown__menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text())
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'))
})
/*End Dropdown Menu*/

$('.dropdown__menu li').click(function () {
  var input =
      '<strong>' +
      $(this).parents('.dropdown').find('input').val() +
      '</strong>',
    msg = '<span class="msg">Hidden input value: '
  $('.msg').html(msg + input + '</span>')
})
/* valueAsNumber */

;(function () {
  /* Internet Explorer 11 may have trouble retrieving the number type
    of an input value. This short script performs a quick test, and repairs
    the functionality if necessary. Load before attempting to use the
    `valueAsNumber` property on input elements. */
  'use strict'

  var a = document.createElement('input')
  a.setAttribute('type', 'number')
  a.setAttribute('value', 2319)

  if ('valueAsNumber' in a && a.value != a.valueAsNumber) {
    if ('defineProperty' in Object && 'getPrototypeOf' in Object) {
      Object.defineProperty(Object.getPrototypeOf(a), 'valueAsNumber', {
        get: function get () {
          return parseInt(this.value, 10)
        }
      })
    }
  }
})();

