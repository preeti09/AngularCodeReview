
export function datep() {
  //$(function () { $(".date").datepicker({ format: 'dd/mm/yy' }); });
  $('.date').bind('keyup keydown keypress', function (e) {
    if (e.keyCode == 9) { return true; }
    else { return false; }
  });

  // $('[data-toggle="datepicker"]').datepicker({
  //     autoHide: true,
  //     zIndex: 2048,
  //     format:'dd/mm/yyyy',
  //     weekStart:0,
  //   });
}



