$.ajaxSetup({
    beforeSend: function (xhr)
    {
       xhr.setRequestHeader("x-csrf-token", $('meta[name=csrf-token]').attr('content'));
    }
});