CKEDITOR.plugins.add( 'clear', {
  //  icons: 'clear.png',
    init: function( editor ) {
        editor.addCommand( 'clearContent', {
            exec: function( editor ) {
                CKEDITOR.instances['InputTextArea'].setData('');
            }
        });
        editor.ui.addButton( 'btn_clearContent', {
            label: 'Dọn sạch để anh báo cáo',
            command: 'clearContent',
            toolbar: 'colors,100',
           // icon: 'ckeditor/plugins/clear/icons/clear_icon.png',
            icon: this.path + 'icons/clear_icon.png'


        });
    }
});